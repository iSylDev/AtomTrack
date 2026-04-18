import MobileHeader from "@/components/shared/MobileHeader";
import {AppSidebar} from "@/components/sidebar/AppSidebar";
import {ThemeSync} from "@/components/theme/ThemeSync";
import {SidebarProvider} from "@/components/ui/sidebar";
import React from "react";

export default function DashboardLayout({
                                            children,
                                        }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <SidebarProvider>
            <AppSidebar/>
            <div className="w-full min-h-screen px-2 flex flex-col">
                <MobileHeader/>
                <ThemeSync/>
                <div className={'mt-15 pb-30 flex-between'}>
                    {children}
                </div>
            </div>
        </SidebarProvider>
    )
}
