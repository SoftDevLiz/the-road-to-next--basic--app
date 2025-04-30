import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header } from '@/components/header'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liz's Ticket System",
  description: "My first Next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          <main className='
            min-h-screen 
            flex-1 
            overflow-y-auto 
            overflow-x-hidden 
            py-24 
            px-8 
            bg-secondary/20 
            flex 
            flex-col
          '>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
