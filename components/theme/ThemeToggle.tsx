"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-lg w-8 h-8 p-0 transition-all duration-300"
    >
      <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 shrink-0" size={23} />
      <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 shrink-0" size={23} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}