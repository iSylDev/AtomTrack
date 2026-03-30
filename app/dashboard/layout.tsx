import MobileHeader from "@/components/shared/MobileHeader";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="min-h-full flex flex-col">
      <SidebarProvider>
        <AppSidebar />
        <MobileHeader />
        <div className="flex-1 relative px-5">
          {children}
        </div>
      </SidebarProvider>
    </div>
  )
}
