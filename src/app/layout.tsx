import type { Metadata } from "next";
import "./globals.css";
import TopNavigation from "./components/TopNavigation";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <div className="text-sm flex flex-col overflow-scroll-y">
          <TopNavigation />
          <main className="h-[calc(100vh-44px)]">{children}</main>
        </div>
      </body>
    </html>
  );
}
