'use client'

import { Card, CardContent, CardHeader } from "../ui/card";
import { Bell } from "lucide-react";
import { Field, FieldLabel, FieldGroup } from "../ui/field";
import { Switch } from "../ui/switch";
import { Separator } from "../ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";



export default function Notifications() {
  const [hasMounted, setHasMounted] = useState(false)
  const isMobile = useIsMobile();

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return <div className="w-full md:w-[55%] animate-pulse">
      <div className="h-48 w-full bg-muted/20 rounded-xl" />
    </div>
  }



  return <div className="w-full md:w-[55%]">
    {
      isMobile && (
        <div className="flex gap-2 items-center mb-4">
          <Bell className="stroke-chart-2" />
          <h3 className="font-bold">Notifications</h3>
        </div>
      )
    }

    <Card >
      {
        !isMobile && (
          <CardHeader>
            <div className="flex gap-2 items-center mb-4">
              <Bell className="stroke-chart-2" />
              <h3 className="font-bold">Notifications</h3>
            </div>
          </CardHeader>
        )
      }
      <CardContent className="flex flex-col gap-5 p-0">
        <FieldGroup className="w-full px-4 md:px-5 ">
          <Field orientation="horizontal" className="md:p-4 md:bg-[#232a33] md:rounded-lg md:border">
            <FieldLabel htmlFor="switch-size-default text-foreground ">
              <div className="flex flex-col gap-1">
                <p>Task Deadlines</p>
                <p className="text-card-foreground hidden md:block">Notify 1 hour before due</p>
              </div>
            </FieldLabel>
            <Switch id="switch-size-default" size="default" />
          </Field>
        </FieldGroup>
        {isMobile && <Separator />}
        <FieldGroup className="w-full px-4 md:px-5 ">
          <Field orientation="horizontal" className="md:p-4 md:bg-[#232a33] md:rounded-lg md:border">
            <FieldLabel htmlFor="switch-size-default text-foreground ">
              <div className="flex flex-col gap-1">
                <p>Task Deadlines</p>
                <p className="text-card-foreground hidden md:block">Notify 1 hour before due</p>
              </div>
            </FieldLabel>
            <Switch id="switch-size-default" size="default" />
          </Field>
        </FieldGroup>
        {isMobile && <Separator />}
        <FieldGroup className="w-full px-4 md:px-5 ">
          <Field orientation="horizontal" className="md:p-4 md:bg-[#232a33] md:rounded-lg md:border">
            <FieldLabel htmlFor="switch-size-default text-foreground ">
              <div className="flex flex-col gap-1">
                <p>Task Deadlines</p>
                <p className="text-card-foreground hidden md:block">Notify 1 hour before due</p>
              </div>
            </FieldLabel>
            <Switch id="switch-size-default" size="default" />
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  </div>
}