import MobileHeader from "@/components/shared/MobileHeader";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>
      <MobileHeader />
      {children}
    </div>
  )
}
