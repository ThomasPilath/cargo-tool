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
      <body>
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
