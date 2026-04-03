"use client";

import { toggleThemeAction } from "@/actions/settings/toggleThemeAction";
import { updateUserSlice } from "@/store/slices/userSlice";
import { RootState } from "@/store/store";
import { useTransition } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

export default function useToggleTheme() {
  const dispatch = useDispatch();
  const [isPending, startTransition] = useTransition();
  const currentTheme = useSelector(
    (state: RootState) => state.userSlice.user?.theme,
  );

  const handleToggle = (newTheme: "light" | "dark") => {
    // Optimistically update the user theme
    dispatch(updateUserSlice({ theme: newTheme }));

    startTransition(async () => {
      // Try updating the user theme settings in supabases
      const result = await toggleThemeAction(newTheme);

      if (!result.success) {
        // Rever changes if user theme update in supabase fails
        dispatch(updateUserSlice({ theme: currentTheme || "dark" }));
        toast.error("Failed to save theme preference");
        return;
      }

      toast.success("Theme updated successfully!");
    });
  };
  return {
    theme: currentTheme,
    setTheme: handleToggle,
    isPending,
  };
}
