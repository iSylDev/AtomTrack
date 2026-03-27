import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/AppSidebar";

const jakarta = localFont({
  src: '../public/fonts/PlusJakartaSans-VariableFont_wght.ttf',
  variable: "--font-jakarta",
  display: "swap",
});


export const metadata: Metadata = {
  title: "AtomTrack",
  description: "Track your habits and improve yourself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <SidebarProvider>
            <AppSidebar />
            <main className="flex-1 relative px-5">
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
