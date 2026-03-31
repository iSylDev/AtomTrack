import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";


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
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          
            <main className="flex-1 relative px-5">
              {children}
            </main>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
