'use client'

import { Palette, Sun, Moon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { useTheme } from "next-themes";
import { Card, CardContent, CardHeader } from "../ui/card";

export default function MobileAppearance() {
  const { theme, setTheme } = useTheme()

  return (

    <div className="w-full">
      <div className="flex gap-2 items-center mb-4">
        <Palette className="stroke-primary" />
        <h3 className="font-bold">Appearance</h3>
      </div>
      <Card>

        <CardContent>
          <Tabs
            defaultValue={theme}
            onValueChange={(value) => setTheme(value)}
            className="w-full "
          >
            <TabsList className="w-full flex bg-muted/50 py-7 px-3 items-center justify-center">
              <TabsTrigger
                value="light"
                className="flex items-center gap-2 rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm py-5"
              >
                <Sun className="h-4 w-4" />
                <span className="font-medium uppercase tracking-wider text-xs">Light</span>
              </TabsTrigger>

              <TabsTrigger
                value="dark"
                className="flex items-center gap-2 rounded-md data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm py-5"
              >
                <Moon className="h-4 w-4 fill-primary text-primary" />
                <span className="font-medium uppercase tracking-wider text-xs">Dark</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}