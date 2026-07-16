import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/lib/providers/SmoothScrollProvider";
import { ThemeProvider, themeInitScript } from "@/lib/providers/ThemeProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://amarante-florals.example.com";
const SITE_TITLE = "Maison Amarante — Atelier Floral";
const SITE_DESCRIPTION =
  "Maison Amarante is an atelier of considered flowers — sculptural arrangements, seasonal editions, and bespoke florals for the moments that ask for more.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — Maison Amarante",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "luxury florist",
    "flower delivery",
    "wedding florist",
    "bespoke flowers",
    "New York florist",
    "editorial floral design",
  ],
  authors: [{ name: "Maison Amarante" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Maison Amarante",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Florist",
  name: "Maison Amarante",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/images/og-image.jpg`,
  priceRange: "$195-$410",
  areaServed: "New York, NY",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${instrument.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider>
          <SmoothScrollProvider>
            <LoadingScreen />
            <ScrollProgressBar />
            <CustomCursor />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
