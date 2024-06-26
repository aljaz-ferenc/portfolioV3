import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MenuButton from "@/components/menu/MenuButton";
import ContextProvider from "@/context/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aljaž Ferenc | Portfolio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </head>
      <ContextProvider>
        <body
          className={`${inter.className} text-white relative min-h-screen bg-black text-white`}
        >
          {children}
          <MenuButton />
        </body>
      </ContextProvider>
    </html>
  );
}
