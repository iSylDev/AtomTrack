"use client";

import { mutateUserDataAction } from "@/actions/settings/mutateUserDataAction";
import { uploadAvatarAction } from "@/actions/settings/uploadAvatarAction";
import { UserType } from "@/types/user";
import assert from "@/utils/assertions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useSettingsSaver() {
  const queryClient = useQueryClient();

  const { mutate: saveSettings, isPending } = useMutation({
    mutationFn: async ({
      userData,
      file,
    }: {
      userData: UserType;
      file?: File | null;
    }) => {
      const toastId = toast.loading("Saving Changes...");
      let finalUserData = { ...userData };

      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const uploadResult = await uploadAvatarAction(formData);

        assert(uploadResult.success && uploadResult.url, "Image upload failed");

        finalUserData.profile_picture = uploadResult.url;
      }

      const result = await mutateUserDataAction(finalUserData);

      assert(result.success, result.message);

      return { finalUserData, toastId };
    },

    onSuccess: ({ finalUserData, toastId }) => {
      queryClient.setQueryData(["user"], finalUserData);
      toast.success("Settings synced to cloud");
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
