import { Card, CardContent, CardHeader } from "../ui/card";
import { Bell } from "lucide-react";
import { Field, FieldLabel, FieldGroup } from "../ui/field";
import { Switch } from "../ui/switch";
import { Separator } from "../ui/separator";



export default function Notifications() {


  return <div className="w-full">
    <div className="flex gap-2 items-center mb-4">
      <Bell className="stroke-chart-2" />
      <h3 className="font-bold">Notifications</h3>
    </div>

    <Card >
      <CardContent className="flex flex-col gap-5 p-0">
        <FieldGroup className="w-full px-4">
          <Field orientation="horizontal">
            <FieldLabel htmlFor="switch-size-default text-foreground ">Task Deadlines</FieldLabel>
            <Switch id="switch-size-default" size="default" />
          </Field>
        </FieldGroup>
        <Separator />
        <FieldGroup className="w-full px-4">
          <Field orientation="horizontal">
            <FieldLabel htmlFor="switch-size-default text-foreground ">Weekly Reports</FieldLabel>
            <Switch id="switch-size-default" size="default" />
          </Field>
        </FieldGroup>
        <Separator />
        <FieldGroup className="w-full px-4">
          <Field orientation="horizontal">
            <FieldLabel htmlFor="switch-size-default text-foreground ">Marketing Updates</FieldLabel>
            <Switch id="switch-size-default" size="default" />
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  </div>
}