import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Judo Rieti - Dojo Tradizionale | Corsi per Bambini, Ragazzi e Adulti",
  description: "Scopri il judo a Rieti con la nostra scuola tradizionale. Corsi per tutte le età, maestri qualificati e un ambiente familiare. Prima lezione gratuita!",
  keywords: "judo rieti, arti marziali rieti, corso judo bambini, dojo rieti, karate rieti, sport bambini rieti",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
        <body className={`${inter.className} font-sans antialiased`}>{children}</body>
    </html>
  );
}