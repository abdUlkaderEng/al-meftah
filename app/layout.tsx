import type { Metadata } from "next";
import { Inter } from "next/font/google";
import  "./globals.css";
import NavBar from "./NavBar";
import "@radix-ui/themes/styles.css";

import { Box, ScrollArea, Theme, ThemePanel } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ع-المفتاح",
  description: "دور عبيتك وانت بمكانك",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
      <Theme accentColor="amber" radius="large">
             <Box className="bgNav">
             
                  <NavBar  />
             </Box>
             
                <main className="bgBody">
                  {children}
                </main>
              
          </Theme>
                </body>
        
    </html>
  );
}
