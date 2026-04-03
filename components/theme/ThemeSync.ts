"use client";

import { RootState } from "@/store/store";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export function ThemeSync() {
  const { setTheme } = useTheme();
  const userTheme = useSelector(
    (state: RootState) => state.userSlice.user?.theme,
  );

  // If redux has a theme saved, use that theme
  useEffect(() => {
    if (userTheme) {
      setTheme(userTheme);
    }
  }, [userTheme, setTheme]);

  return null;
}
