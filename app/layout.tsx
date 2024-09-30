import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "./components/theme-toggle";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
    <html lang="fr">
      <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      >
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="fixed top-1 left-1">
            <ThemeToggle />
          </div>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
