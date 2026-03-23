import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import localFont from "next/font/local";

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
          <ThemeToggle />
          <div className="px-6">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
