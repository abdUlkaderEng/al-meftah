import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import "@radix-ui/themes/styles.css";

import { Box, ScrollArea, Theme, ThemePanel } from "@radix-ui/themes";
import AuthProvider from "./auth/AuthProvider";

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
        <AuthProvider>
          <Theme accentColor="amber" radius="large" className="backGroundColor">
            <Box>
              <NavBar />
            </Box>

            <main>{children}</main>
          </Theme>
        </AuthProvider>
      </body>
    </html>
  );
}
