import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import HNThemeProvider from "@/components/provider/HNThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HiredNow",
  description:
    "HiredNow is a modern freelancer hiring platform that connects businesses with skilled freelancers for remote jobs, projects, and professional services worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <HNThemeProvider>{children}</HNThemeProvider>
      </body>
    </html>
  );
}
