"use client";

import { toggleThemeAction } from "@/actions/settings/toggleThemeAction";
import { setTheme } from "@/store/slices/userSlice";
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
    dispatch(setTheme(newTheme));

    startTransition(async () => {
      const result = await toggleThemeAction(newTheme);

      if (!result.success) {
        dispatch(setTheme(currentTheme || "dark"));
        toast.error("Failed to save theme preference");
      }
    });
  };
  return {
    theme: currentTheme,
    setTheme: handleToggle,
    isPending,
  };
}
