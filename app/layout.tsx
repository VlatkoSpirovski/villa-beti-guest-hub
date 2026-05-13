import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const villaSans = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-villa-sans",
});

const villaSerif = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-villa-serif",
});

export const metadata: Metadata = {
  title: "Villa Beti Guest Hub",
  description: "Mobile guest guide for Villa Beti in Mavrovo.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Villa Beti",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${villaSans.variable} ${villaSerif.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body>{children}</body>
    </html>
  );
}
