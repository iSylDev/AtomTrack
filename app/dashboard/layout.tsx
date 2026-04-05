import AuthGate from "@/components/auth/components/AuthGate";
import MobileHeader from "@/components/shared/MobileHeader";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { ThemeSync } from "@/components/theme/ThemeSync";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    // <AuthGate>
      <SidebarProvider>
        <AppSidebar />
        <div className="flex-1 relative px-2">
          <MobileHeader />
          <ThemeSync />
          {children}
        </div>
      </SidebarProvider>
    // </AuthGate>

  )
}
