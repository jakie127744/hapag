import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/lib/store";
import { TopBar } from "@/components/TopBar";
import { GroceryDrawer } from "@/components/GroceryDrawer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Hapag — Filipino Culinary Lab",
  description:
    "A crystalline lens on the soul of Filipino cooking — 44 regional recipes, suspended in glass.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0A0A0A] text-white">
        <StoreProvider>
          <TopBar />
          {children}
          <GroceryDrawer />
        </StoreProvider>
      </body>
    </html>
  );
}
