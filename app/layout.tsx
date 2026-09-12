import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/lib/store";
import { TopBar } from "@/components/TopBar";
import { GroceryDrawer } from "@/components/GroceryDrawer";
import { InstallPrompt } from "@/components/InstallPrompt";
import { GrocerySheet } from "@/components/GrocerySheet";
import Script from "next/script";
import { ADSENSE_CLIENT } from "@/components/AdSlot";
import { recipes } from "@/data/recipes";
import { SITE_URL, SITE_TITLE, SITE_NAME, SITE_DESCRIPTION, SITE_LOCALE, absoluteUrl } from "@/lib/site";
import { siteSchema, jsonLd } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_TITLE} — ${recipes.length} Filipino Recipes`,
    // Recipe pages supply their own name; this frames it for search results.
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  manifest: "/manifest.webmanifest",
  alternates: { canonical: "/" },
  keywords: [
    "Filipino recipes",
    "Philippine cuisine",
    "Luzon recipes",
    "Visayas recipes",
    "Mindanao recipes",
    "kakanin",
    "Filipino delicacies",
    "adobo",
    "sinigang",
    "Filipino cooking",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "food",
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_TITLE} — ${recipes.length} Filipino Recipes`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: SITE_LOCALE,
    images: [
      {
        url: absoluteUrl("/images/recipes/philippine-sisig.jpg"),
        width: 1600,
        height: 1200,
        alt: "Filipino cooking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_TITLE} — ${recipes.length} Filipino Recipes`,
    description: SITE_DESCRIPTION,
    images: [absoluteUrl("/images/recipes/philippine-sisig.jpg")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large",
                 "max-snippet": -1, "max-video-preview": -1 },
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
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
      <head>
        <meta name="google-adsense-account" content={ADSENSE_CLIENT} />
        <link rel="preload" as="image" href="/images/recipes/philippine-sisig.jpg" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
      </head>
      <body className="bg-[#0A0A0A] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(siteSchema(recipes.length)) }}
        />
        <Script
          async
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
        />
        <StoreProvider>
          <TopBar />
          {children}
          <GroceryDrawer />
          <GrocerySheet />
          <InstallPrompt />
        </StoreProvider>
      </body>
    </html>
  );
}
