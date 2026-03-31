import MobileHeader from "@/components/shared/MobileHeader";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <SidebarProvider>
      {/* <div className="min-h-full flex flex-col"> */}
        <AppSidebar />
      <div className="flex-1 relative px-2">
        <MobileHeader />
        {children}
      </div>
      {/* </div> */}
    </SidebarProvider>
  )
}
