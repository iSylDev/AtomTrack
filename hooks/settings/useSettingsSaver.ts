"use client";

import { mutateUserDataAction } from "@/actions/settings/mutateUserDataAction";
import { uploadAvatarAction } from "@/actions/settings/uploadAvatarAction";
import { UserType } from "@/types/user";
import assert from "@/utils/assertions";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import getDirtyFields from "./getDirtyFields";

export default function useSettingsSaver() {
  const queryClient = useQueryClient();

  // Save settings function
  const { mutate: saveSettings, isPending } = useMutation({
    onMutate: async ({ userData, file }) => {
      toast.dismiss("unsaved-changes-toast");
      const toastId = toast.success("Settings synced to cloud");
      // Cancel any outgoing refetches so the don't overwrite this action
      await queryClient.cancelQueries({ queryKey: ["user"] });

      // Take a snapshot of the user setting before update
      const previousUserData = queryClient.getQueryData<UserType>(["user"]);

      // Optimistically update the ui
      if (previousUserData) {
        const optimisticData = { ...previousUserData, ...userData };

        // If the user uploaded a file, create a tempoary link for that file
        if (file) {
          optimisticData.profile_picture = URL.createObjectURL(file);
        }
        queryClient.setQueryData(["user"], optimisticData); // Optimistic update
      }
      return { previousUserData };
    },
    mutationFn: async ({
      userData,
      file,
    }: {
      userData: UserType;
      file?: File | null;
    }) => {

      // Get the data that exists before change
      const originalData = queryClient.getQueryData<UserType>([
        "user",
      ]) as UserType;

      // Get the fields that were changed
      const payload = getDirtyFields({
        original: originalData || {},
        current: userData,
      });

      // If the user changes their pfp, upload it to supabase and grab the images's public link,
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const uploadResult = await uploadAvatarAction(formData);
        assert(uploadResult.success && uploadResult.url, "Image upload failed");
        payload.profile_picture = uploadResult.url;
      }

      // If no changes were made, dismiss the toast and skip
      if (Object.keys(payload).length === 0) {
        return { finalData: originalData, skipped: true };
      }

      // Save all changes to the user table on supabase
      const result = await mutateUserDataAction(payload);
      assert(result.success, result.message);

      return {
        finalData: { ...originalData, ...payload },
        skipped: false,
      };
    },

    onSuccess: ({ finalData, skipped }) => {
      // Update the cache with the real server data if update was successfull
      queryClient.setQueryData(["user"], finalData);
    },
    onError: (error: any, __, context) => {
      if (context?.previousUserData) {
        queryClient.setQueryData(["user"], context?.previousUserData);
      }
      toast.error(error.message || "Failed to update settings");
    },
    onSettled: (data) => {
      // Revoke the tempary image link we created
      if (data?.finalData?.profile_picture.startsWith("blob:")) {
        URL.revokeObjectURL(data?.finalData?.profile_picture);
      }
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  const triggerConfirmToast = (userData: UserType, file?: File | null) => {
    toast("You have unsaved changes", {
      id: "unsaved-changes-toast",
      duration: Infinity,
      action: {
        label: "Save now",
        onClick: () => saveSettings({ userData, file }),
      },
      cancel: {
        label: "Cancel",
        onClick: () => {
          // Invalidate fake previewUrl optimistic update
          queryClient.invalidateQueries({ queryKey: ["user"] });
          toast.dismiss("unsaved-changes-toast");
        },
      },
    });
  };
  return { triggerConfirmToast, isSaving: isPending };
}
