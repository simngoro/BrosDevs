import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
