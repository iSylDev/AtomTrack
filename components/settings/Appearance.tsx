'use client'

import { Palette, Sun, Moon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { useTheme } from "next-themes";
import { Card, CardContent } from "../ui/card";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";


export default function Appearance({ position }: { position?: string }) {
  const { theme, setTheme } = useTheme()

  const [hasMounted, setHasMounted] = useState(false)
  const isMobile = useIsMobile();

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return <div className="w-full animate-pulse">
      <div className="h-full w-full bg-muted/20 rounded-xl" />
    </div>
  }


  if (isMobile) return (
    <div className={cn('flex gap-2 items-center mb-4', position)}>
      <Palette className="stroke-primary" />
      <h3 className="font-bold">Appearance</h3>
    </div>
  )

  return (
    <Card className="md:col-span-4">
      {
        !isMobile && <div className="flex gap-2 items-center justify-between mb-4 p-1 px-6">
          <div className="flex  flex-col gap-1">
            <h3 className="font-bold text-foreground text-lg">Appearance</h3>
            <p>Virtual system theme</p>
          </div>
          <Palette className="stroke-primary" />
        </div>
      }

      <CardContent className="md:px-6">
        <Tabs
          defaultValue={theme}
          onValueChange={(value) => setTheme(value)}
          className="w-full "
        >
          <TabsList className="w-full flex bg-muted/50 py-7 md:py-5 px-3 md:px-1 items-center justify-center">
            <TabsTrigger
              value="light"
              className="flex items-center gap-2 rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm py-5 md:py-4"
            >
              <Sun className="h-4 w-4" />
              <span className="font-medium uppercase tracking-wider text-xs">Light</span>
            </TabsTrigger>

            <TabsTrigger
              value="dark"
              className="flex items-center gap-2 rounded-md data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm py-5 md:py-4"
            >
              <Moon className="h-4 w-4 fill-primary text-primary" />
              <span className="font-medium uppercase tracking-wider text-xs">Dark</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </CardContent>
    </Card>
  )



}