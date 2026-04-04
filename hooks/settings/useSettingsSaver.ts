import { mutateUserDataAction } from "@/actions/settings/mutateUserDataAction";
import { uploadAvatarAction } from "@/actions/settings/uploadAvatarAction";
import { logIn } from "@/store/slices/userSlice";
import { RootState } from "@/store/store";
import { UserType } from "@/types/user";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

export const useSettingsSaver = () => {
  const dispatch = useDispatch();
  const currentUserState = useSelector(
    (state: RootState) => state.userSlice.user,
  );
  // Live ref
  const liveStateRef = useRef(currentUserState);

  // The snapshot refs
  const lastSavedStateRef = useRef<UserType | null>(null);
  const pendingFileRef = useRef<File | null>(null);

  // Keep the live red in sync with redux changes
  useEffect(() => {
    liveStateRef.current = currentUserState;
  }, [currentUserState]);

  // Take a snapshot of the current user settings on page load if a user exists in the store
  useEffect(() => {
    if (currentUserState && !lastSavedStateRef.current) {
      lastSavedStateRef.current = currentUserState;
    }
  }, [currentUserState]);

  const saveToDatabase = async () => {
    // Check if there's a logged in user
    if (!liveStateRef.current) {
      toast.error("No user data found. Please sign in again");
      return;
    }

    const toastId = toast.loading("Saving changes");
    let finalUserData = { ...liveStateRef.current };

    if (pendingFileRef.current) {
      const formData = new FormData();
      formData.append("file", pendingFileRef.current);
      const uploadResult = await uploadAvatarAction(formData);

      if (uploadResult.success && uploadResult.url) {
        finalUserData.profile_picture = uploadResult.url;
      } else {
        toast.error(uploadResult.message || "Image Upload Failed", {
          id: toastId,
        });
        return;
      }
    }

    // Try to update the user's data on Supabase
    const result = await mutateUserDataAction(finalUserData);

    if (result.success) {
      toast.success("Settings synced to cloud", { id: toastId });
      lastSavedStateRef.current = finalUserData;
      pendingFileRef.current = null;
    } else {
      toast.error(`Update failed: ${result.message}`, { id: toastId });
      // Rollback to the last state if the supabase update fails
      handleCancel();
    }
  };

  const handleCancel = () => {
    if (lastSavedStateRef.current) {
      dispatch(logIn(lastSavedStateRef.current));
      pendingFileRef.current = null; // Forget the file
      toast.dismiss();
    }
  };

  // Ask the userr if they wanna save their changes.
  const triggerConfirmToast = (file?: File) => {
    if (file) pendingFileRef.current = file;

    toast("You have unsaved changed", {
      id: "unsaves-settings-toast",
      cancel: { label: "Cancel", onClick: () => handleCancel() },
      action: { label: "Save now", onClick: () => saveToDatabase() },
      duration: Infinity,
    });
  };

  return { triggerConfirmToast, handleCancel };
};
