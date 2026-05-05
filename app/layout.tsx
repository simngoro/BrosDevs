import type { Metadata } from "next";
import { Bodoni_Moda, Inter, Bellefair } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../lib/LanguageContext";

      // Elegant serif for headlines - Bodoni Moda is closest to "Neue" (Didone style, high contrast)
      const bodoniModa = Bodoni_Moda({
        variable: "--font-serif",
        subsets: ["latin"],
        weight: ["400", "600", "700"], // Reduced weights for performance
        style: ["normal", "italic"],
        display: 'swap', // Optimize font loading
        preload: true,
      });

      // Clean sans-serif for body text and UI
      const inter = Inter({
        variable: "--font-sans",
        subsets: ["latin"],
        weight: ["400", "500", "600"], // Reduced weights for performance
        display: 'swap', // Optimize font loading
        preload: true,
      });

      // Elegant decorative serif for "Belle" style - used for decorative elements
      const bellefair = Bellefair({
        variable: "--font-script",
        subsets: ["latin"],
        weight: ["400"],
        display: 'swap', // Optimize font loading
      });

export const metadata: Metadata = {
  title: "DevBros - Web & Mobile Development | Software That Sells",
  description: "DevBros: Two brothers building web & mobile software that sells. Real results, no spaghetti code. Available in English & Spanish.",
  keywords: "web development, mobile development, web applications, mobile apps, React, Next.js, React Native, software development, DevBros, desarrollo web, desarrollo móvil",
  openGraph: {
    title: "DevBros - Web & Mobile Development",
    description: "Web & mobile development that actually works. No bureaucracy, results that sell.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${bodoniModa.variable} ${inter.variable} ${bellefair.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
