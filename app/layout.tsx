import type { Metadata } from "next";
import { Bodoni_Moda, Inter, Bellefair } from "next/font/google";
import "./globals.css";

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
  title: "DevBros - Desarrollo Web & Mobile | Aplicaciones que Venden",
  description: "DevBros: Dos hermanos especializados en desarrollo web y móvil. Creamos aplicaciones que generan resultados reales para tu negocio. Sin complicaciones, solo código de calidad.",
  keywords: "desarrollo web, desarrollo móvil, aplicaciones web, apps móviles, React, Next.js, React Native, desarrollo de software, DevBros",
  openGraph: {
    title: "DevBros - Desarrollo Web & Mobile",
    description: "Desarrollo web y móvil que funciona. Sin complicaciones, resultados que venden.",
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}
