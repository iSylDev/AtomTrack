"use client";

import { useUser } from "@/hooks/useUser";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const ThemeSync = () => {
  const { setTheme } = useTheme();
  const { user } = useUser();

  useEffect(() => {
    // Default to dark theme 
    if (!user?.theme) {
      setTheme("dark");
      return;
    }

    setTheme(user?.theme);
  }, [user?.theme, setTheme]);

  return null;
};

export { ThemeSync };
