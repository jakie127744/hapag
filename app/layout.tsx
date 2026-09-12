import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/lib/store";
import { TopBar } from "@/components/TopBar";
import { GroceryDrawer } from "@/components/GroceryDrawer";
import { InstallPrompt } from "@/components/InstallPrompt";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Hapag — Filipino Culinary Lab",
  description:
    "A living culinary archive of Filipino cuisine — 44 regional recipes, suspended in glass.",
  applicationName: "Hapag",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Hapag",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0A0A0A] text-white">
        <StoreProvider>
          <TopBar />
          {children}
          <GroceryDrawer />
          <InstallPrompt />
        </StoreProvider>
      </body>
    </html>
  );
}
