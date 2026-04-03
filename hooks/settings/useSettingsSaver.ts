import { mutateUserDataAction } from "@/actions/settings/mutateUserDataAction";
import { logIn } from "@/store/slices/userSlice";
import { RootState } from "@/store/store";
import { UserType } from "@/types/user";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

export const useSettingsSaver = () => {
  const dispatch = useDispatch();
  const currentUserState = useSelector(
    (state: RootState) => state.userSlice.user,
  );
  // Save the last state before changes to the user settings were made
  const lastSavedStateRef = useRef<UserType | null>(currentUserState);

  const saveToDatabase = async () => {
    // Check if there's a logged in user
    if (!currentUserState) {
      toast.error("No user data found. Please sign in again");
      return;
    }

    // Try to update the user's data on Supabase
    const toastId = toast.loading("Saving changes");
    const result = await mutateUserDataAction(currentUserState);

    if (result.success) {
      toast.success("Settings synced to cloud", { id: toastId });
      lastSavedStateRef.current = currentUserState;
    } else {
      toast.error(`Update failed: ${result.message}`, { id: toastId });
      // Rollback to the last state if the supabase update fails
      handleCancel();
    }
  };

  const handleCancel = () => {
    if (lastSavedStateRef.current) {
      dispatch(logIn(lastSavedStateRef.current));
      toast.dismiss();
    }
  };

  // Ask the userr if they wanna save their changes.
  const triggerConfirmToast = () => {
    toast("You have unsaved changed", {
      cancel: {
        label: "Cancel",
        onClick: () => handleCancel(),
      },
      action: {
        label: "Save now",
        onClick: () => saveToDatabase(),
      },
      duration: Infinity,
    });
  };

  return { triggerConfirmToast, handleCancel };
};
