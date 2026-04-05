"use client";

import { useUser } from "@/hooks/useUser";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const ThemeSync = () => {
  const { setTheme } = useTheme();
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (isLoading) return;

    // Default to dark theme 
    if (!user?.theme) {
      setTheme("dark");
      return;
    }

    setTheme(user?.theme);
  }, [user?.theme, setTheme, isLoading]);

  return null;
};

export { ThemeSync };
