'use client'

import { Card, CardContent, CardHeader } from "../ui/card";
import { ChevronRight, Lock, Trash2 } from "lucide-react";
import { Field, FieldLabel, FieldGroup } from "../ui/field";
import { Switch } from "../ui/switch";
import { Separator } from "../ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";




export default function Account() {

  const [hasMounted, setHasMounted] = useState(false)
  const isMobile = useIsMobile();

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return <div className="w-full animate-pulse">
      <div className="h-48 w-full bg-muted/20 rounded-xl" />
    </div>
  }

  return <div className="w-full lg:col-span-6">
    {isMobile && (
      <div className="flex gap-2 items-center mb-4">
        <Lock className="stroke-chart-2" />
        <h3 className="font-bold">Security & Plan</h3>
      </div>
    )}

    <Card className="bg-transparent lg:bg-card ring-0 lg:ring-1 -mt-4 lg:mt-0 px-1 lg:px-6 lg:h-full" >
      {
        !isMobile && (
          <CardHeader className="p-0">
            <div className="flex justify-between items-center mb-4">
              <div className="text-left gap-1 items-start  flex flex-col">
                <h3 className="font-bold text-lg text-foreground">Account and Security</h3>
                <p>Sensitive account actions</p>
              </div>
              <Lock className="stroke-chart-2" />
            </div>
          </CardHeader>
        )
      }
      <CardContent className="flex flex-col gap-2 px-0 pb-3 lg:gap-3">
        <div>
          <Button className="w-full lg:border lg:border-border py-7 flex justify-between items-center px-5" variant={'outline'}>
            <p>Change Password</p>
            <ChevronRight />
          </Button>
        </div>
        <div>
          <Button className="w-full lg:border lg:border-border py-7  flex justify-between items-center px-5" variant={'outline'}>
            <p className="text-destructive">Logout</p>
            <ChevronRight className="stroke-destructive" />
          </Button>
        </div>
        <div>
          <Button className="w-full lg:border lg:border-border py-7 flex justify-between items-center px-5" variant={'destructive'}>
            <p>Delete Account</p>
            <Trash2 />
          </Button>
        </div>
      </CardContent>
    </Card>

  </div>
}


