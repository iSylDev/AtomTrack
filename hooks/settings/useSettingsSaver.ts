"use client";

import { mutateUserDataAction } from "@/actions/settings/mutateUserDataAction";
import { uploadAvatarAction } from "@/actions/settings/uploadAvatarAction";
import { UserType } from "@/types/user";
import assert from "@/utils/assertions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import getDirtyFields from "./getDirtyFields";

export default function useSettingsSaver() {
  const queryClient = useQueryClient();

  // Save settings function
  const { mutate: saveSettings, isPending } = useMutation({
    mutationFn: async ({
      userData,
      file,
    }: {
      userData: UserType;
      file?: File | null;
    }) => {
      const toastId = toast.loading("Saving Changes...");

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
        toast.dismiss(toastId);
        return { finalData: originalData, toastId, skipped: true };
      }

      // Save all changes to the user table on supabase
      const result = await mutateUserDataAction(payload);

      assert(result.success, result.message);
      return { finalData: originalData, toastId, skipped: false };
    },

    onSuccess: ({ finalData, toastId, skipped }) => {
      // Update the ui if update was successfull
      queryClient.setQueryData(["user"], finalData);
      if (!skipped) {
        toast.success("Settings synced to cloud", { id: toastId });
      }
    },
    onError: (error: any, variables, context) => {
      toast.error(error.message || "Failed to update settings");
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
          queryClient.invalidateQueries({ queryKey: ["user"] });
          toast.dismiss("unsaved-changes-toast");
        },
      },
    });
  };
  return { triggerConfirmToast, isSaving: isPending };
}
