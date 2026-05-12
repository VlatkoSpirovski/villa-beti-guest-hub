import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
