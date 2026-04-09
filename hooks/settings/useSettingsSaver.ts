"use client";

import {mutateUserDataAction} from "@/actions/settings/mutateUserDataAction";
import {uploadAvatarAction} from "@/actions/settings/uploadAvatarAction";
import {UserType} from "@/types/user";
import assert from "@/utils/assertions";
import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";
import {toast} from "sonner";
import getDirtyFields from "./getDirtyFields";

type MutationVariables = { userData: UserType; snapShotDataBeforeToggle: UserType; file?: File | null }
type MutationResponse = { finalData: UserType; skipped: boolean }


export default function useSettingsSaver() {
    const queryClient = useQueryClient();

    // Internal helper to cache optimistically
    const updateOptimisticCache = (userData: UserType, file?: File | null): void => {
        // Check the current value of 'user' right now
        queryClient.setQueryData(["user"], (prevUser: UserType | undefined) => {
            if (!prevUser) return prevUser;
            // create a new object that contains the edited fields
            const updated = {...prevUser, ...userData};
            // Create a temporary link for the image
            if (file) {
                updated.profile_picture = URL.createObjectURL(file);
            }
            // Optimistically update the ui
            return updated;
        });
    };

    // Save settings function
    const {mutate: performSave, isPending} = useMutation<MutationResponse, Error, MutationVariables, {
        previousUserData?: UserType
    }>({
        onMutate: async ({userData, file}) => {
            // Cancel any outgoing refetches so they don't overwrite this action
            await queryClient.cancelQueries({queryKey: ["user"]});

            // Take a snapshot of the user setting before update
            const previousUserData = queryClient.getQueryData<UserType>(["user"]);

            //  Update the ui optimistically
            updateOptimisticCache(userData, file);

            return {previousUserData};
        },
        mutationFn: async ({userData, snapShotDataBeforeToggle, file,}) => {
            const payload = getDirtyFields({
                original: snapShotDataBeforeToggle || {},
                current: userData,
            });

            // If the user changes their pfp, upload it to supabase and grab the images public link,
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                const uploadResult = await uploadAvatarAction(formData);
                assert(uploadResult.success && uploadResult.url, "Image upload failed");
                payload.profile_picture = uploadResult.url;
            }

            // If no changes were made, dismiss the toast and skip
            if (Object.keys(payload).length === 0)
                return {finalData: userData, skipped: true};

            // Save all changes to the user table on supabase
            const result = await mutateUserDataAction(payload);
            assert(result.success, result.message);

            return {
                finalData: {...snapShotDataBeforeToggle, ...payload},
                skipped: false,
            };
        },

        onSuccess: ({finalData, skipped}) => {
            // Update the cache with the real server data if update was successfully
            if (finalData) queryClient.setQueryData(["user"], finalData);
            if (!skipped) {
                toast.success("Settings Synced to cloud", {
                    id: 'success'
                });
            } else {
                toast.dismiss("unsaved-changes-toast");
            }
        },
        onError: (error: Error, _mutationVariables, context) => {
            if (context?.previousUserData) {
                queryClient.setQueryData(["user"], context?.previousUserData);
            }
            toast.error(error.message || "Failed to update settings");
        },
        onSettled: (data) => {
            // Revoke the temporary image link we created and revert to the previous user image
            if (data?.finalData?.profile_picture.startsWith("blob:")) {
                URL.revokeObjectURL(data?.finalData?.profile_picture);
            }
            return queryClient.invalidateQueries({queryKey: ["user"]});
        },
    });

    const saveSettings = (
        userData: UserType,
        options: {
            file?: File | null;
            strategy: "instant" | "confirm";
        },
    ) => {
        const {file = null, strategy} = options;
        toast.dismiss('success')

        const snapShotBeforeToggle = queryClient.getQueryData<UserType>(['user'])

        if (strategy === "instant") {
            performSave({userData, snapShotDataBeforeToggle: snapShotBeforeToggle!, file});
        } else {
            updateOptimisticCache(userData, file);


            toast("You have unsaved changes", {
                id: "unsaved-changes-toast",
                duration: Infinity,
                action: {
                    label: "Save now",
                    onClick: () => {

                        const latestUserData = queryClient.getQueryData<UserType>(["user"]);

                        if (latestUserData) {
                            performSave({userData: latestUserData, file});
                        }
                    },
                },
                cancel: {
                    label: "Cancel",
                    onClick: () => {
                        // Invalidate fake previewUrl optimistic updates
                        toast.dismiss("unsaved-changes-toast");
                        return queryClient.invalidateQueries({queryKey: ["user"]});
                    },
                },
            });
        }
    };
    return {isSaving: isPending, saveSettings};
}
