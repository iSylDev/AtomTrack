import type {Metadata} from "next";
import "./globals.css";
import {ThemeProvider} from "@/providers/ThemeProvider";
import localFont from "next/font/local";
import {Toaster} from "@/components/ui/sonner";
import Providers from "@/components/shared/Provider";
import QueryProvider from "@/components/shared/Provider";
import AuthGate from "@/components/auth/components/AuthGate";


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

            <QueryProvider>
                <AuthGate>
                    <main className="flex-1 relative px-5">
                        {children}
                    </main>
                </AuthGate>
                <Toaster/>
            </QueryProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
