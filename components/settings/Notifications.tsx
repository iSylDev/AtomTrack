'use client'

import { Card, CardContent, CardHeader } from "../ui/card";
import { Bell } from "lucide-react";
import { Field, FieldLabel, FieldGroup } from "../ui/field";
import { Switch } from "../ui/switch";
import { Separator } from "../ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";

export default function Notifications() {
  const [hasMounted, setHasMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setHasMounted(true) // Only run this component after it has been mounted on the browser
  }, [])

  if (!hasMounted) {
    return <div className="w-full animate-pulse">
      <div className="h-48 w-full bg-muted/20 rounded-xl" />
    </div>
  }

  return <div className="w-full lg:col-span-6">
    {isMobile && (
      <div className="flex gap-2 items-center mb-4">
        <Bell className="stroke-chart-2" />
        <h3 className="font-bold">Notifications</h3>
      </div>
    )}

    <Card className="">
      {!isMobile && (
        <CardHeader>
          <div className="flex justify-between items-center px-3 mb-4">
            <div className="text-left gap-1 items-start flex flex-col">
              <h3 className="font-bold text-lg text-foreground">Notifications</h3>
              <p>Manage your alerts</p>
            </div>
            <Bell className="stroke-chart-2" />
          </div>
        </CardHeader>
      )
      }
      <CardContent className="flex flex-col gap-5 px-2 lg:pb-3">
        <FieldGroup className="w-full px-4 lg:px-5 ">
          <Field orientation="horizontal" className="lg:p-4 lg:bg-[#232a33] lg:rounded-lg lg:border">
            <FieldLabel htmlFor="switch-size-default text-foreground ">
              <div className="flex flex-col gap-1">
                <p>Task Deadlines</p>
                <p className="text-card-foreground hidden lg:block">Notify 1 hour before due</p>
              </div>
            </FieldLabel>
            <Switch
              id="switch-size-default"
              size="default"
            />
          </Field>
        </FieldGroup>
        {isMobile && <Separator />}
        <FieldGroup className="w-full px-4 lg:px-5 ">
          <Field orientation="horizontal" className="lg:p-4 lg:bg-[#232a33] lg:rounded-lg lg:border">
            <FieldLabel htmlFor="switch-size-default text-foreground ">
              <div className="flex flex-col gap-1">
                <p>Weekly Reports</p>
                <p className="text-card-foreground hidden lg:block">Summary of task completion</p>
              </div>
            </FieldLabel>
            <Switch
              id="switch-size-default"
              size="default"
            />
          </Field>
        </FieldGroup>
        {isMobile && <Separator />}
        <FieldGroup className="w-full px-4 lg:px-5 ">
          <Field orientation="horizontal" className="lg:p-4 lg:bg-[#232a33] lg:rounded-lg lg:border">
            <FieldLabel htmlFor="switch-size-default text-foreground ">
              <div className="flex flex-col gap-1">
                <p>Marketing updates</p>
                <p className="text-card-foreground hidden lg:block">Product news and filters</p>
              </div>
            </FieldLabel>
            <Switch
              id="switch-size-default"
              size="default"
            />
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  </div>







}