import MobileHeader from "@/components/shared/MobileHeader";
import {AppSidebar} from "@/components/sidebar/AppSidebar";
import {ThemeSync} from "@/components/theme/ThemeSync";
import {SidebarProvider} from "@/components/ui/sidebar";
import React from "react";
import AuthGate from "@/components/auth/components/AuthGate";

export default function DashboardLayout({
                                            children,
                                        }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <SidebarProvider>
            <AppSidebar/>
            <div className="flex-1 relative px-2">
                <MobileHeader/>
                <ThemeSync/>
                <AuthGate>
                    {children}
                </AuthGate>
            </div>
        </SidebarProvider>
    )
}
