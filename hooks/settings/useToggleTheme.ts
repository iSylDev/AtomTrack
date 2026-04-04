"use client";

import { mutateUserDataAction } from "@/actions/settings/mutateUserDataAction";
import { toggleThemeAction } from "@/actions/settings/toggleThemeAction";
import { updateUserSlice } from "@/store/slices/userSlice";
import { RootState } from "@/store/store";
import { useTransition } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

export default function useToggleTheme() {
  const dispatch = useDispatch();
  const [isPending, startTransition] = useTransition();
  const user = useSelector((state: RootState) => state.userSlice.user);

  const handleToggle = (newTheme: "light" | "dark") => {
    if (!user) {
      toast.error('Unauthorized')
      return
    };
    // Optimistically update the user theme
    dispatch(updateUserSlice({ theme: newTheme }));

    startTransition(async () => {
      // Try updating the user theme settings in supabases
      const result = await mutateUserDataAction(user);

      if (!result.success) {
        // Rever changes if user theme update in supabase fails
        dispatch(updateUserSlice({ theme: user?.theme || "dark" }));
        toast.error("Failed to save theme preference");
        return;
      }

      toast.success("Theme updated successfully!");
    });
  };
  return {
    theme: user?.theme,
    setTheme: handleToggle,
    isPending,
  };
}
