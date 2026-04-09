'use client'

import {Card, CardContent, CardHeader} from "../ui/card";
import {Bell} from "lucide-react";
import {Field, FieldLabel, FieldGroup} from "../ui/field";
import {Switch} from "../ui/switch";
import {Separator} from "../ui/separator";
import {useIsMobile} from "@/hooks/use-mobile";
import {useHasMounted} from "@/hooks/useHasMounted";
import {useUser} from "@/hooks/useUser";
import useSettingsSaver from "@/hooks/settings/useSettingsSaver";
import {UserType} from "@/types/user";

export default function Notifications() {
    const isMobile = useIsMobile();
    const {hasMounted} = useHasMounted();
    const {saveSettings} = useSettingsSaver();

    const {user} = useUser();

    const handleToggle = (field: keyof UserType, value: boolean) => {
        if (!user) return;
        const finalUserData = {
            ...user,
            [field]: value
        }

        saveSettings(finalUserData, {strategy: 'confirm'})
    }

    if (!hasMounted) {
        return <div className="w-full animate-pulse">
            <div className="h-48 w-full bg-muted/20 rounded-xl"/>
        </div>
    }

    return <div className="w-full lg:col-span-6">
        {isMobile && (
            <div className="flex gap-2 items-center mb-4">
                <Bell className="stroke-chart-2"/>
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
                        <Bell className="stroke-chart-2"/>
                    </div>
                </CardHeader>
            )
            }
            <CardContent className="flex flex-col gap-5 px-2 lg:pb-3">
                <FieldGroup className="w-full px-4 lg:px-5 ">
                    <Field orientation="horizontal" className="lg:p-4 lg:bg-[#232a33] lg:rounded-lg lg:border">
                        <FieldLabel htmlFor="switch-task-deadline">
                            <div className="flex flex-col gap-1">
                                <p>Task Deadlines</p>
                                <p className="text-card-foreground hidden lg:block">Notify 1 hour before due</p>
                            </div>
                        </FieldLabel>
                        <Switch
                            id="switch-task-deadline"
                            size="default"
                            checked={!!user?.task_deadline_notif}
                            onCheckedChange={(checked) => handleToggle('task_deadline_notif', checked)}
                        />
                    </Field>
                </FieldGroup>


                {isMobile && <Separator/>}
                <FieldGroup className="w-full px-4 lg:px-5 ">
                    <Field orientation="horizontal" className="lg:p-4 lg:bg-[#232a33] lg:rounded-lg lg:border">
                        <FieldLabel htmlFor="switch-weekly-reports">
                            <div className="flex flex-col gap-1">
                                <p>Weekly Reports</p>
                                <p className="text-card-foreground hidden lg:block">Summary of task completion</p>
                            </div>
                        </FieldLabel>
                        <Switch
                            id="switch-weekly-reports"
                            size="default"
                            checked={!!user?.weekly_reports_notif}
                            onCheckedChange={(checked) => handleToggle('weekly_reports_notif', checked)}
                        />
                    </Field>
                </FieldGroup>
                {isMobile && <Separator/>}
                <FieldGroup className="w-full px-4 lg:px-5 ">
                    <Field orientation="horizontal" className="lg:p-4 lg:bg-[#232a33] lg:rounded-lg lg:border">
                        <FieldLabel htmlFor="switch-size-updates">
                            <div className="flex flex-col gap-1">
                                <p>Marketing updates</p>
                                <p className="text-card-foreground hidden lg:block">Product news and filters</p>
                            </div>
                        </FieldLabel>
                        <Switch
                            id="switch-size-updates"
                            size="default"
                            checked={!!user?.marketing_updates_notif}
                            onCheckedChange={(checked) => handleToggle('marketing_updates_notif', checked)}
                        />
                    </Field>
                </FieldGroup>
            </CardContent>
        </Card>
    </div>

}