import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Space Cargo Tools",
  description: "Tools for cargo hauling in Star Citizen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto font-body">
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        >
          {Header()}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
