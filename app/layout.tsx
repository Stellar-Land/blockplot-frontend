import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blockplot — Fractional RWA Investing on Stellar",
  description:
    "Invest in fractionalized real-world assets from $1. Powered by Soroban smart contracts on the Stellar network.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#080B14] text-white">{children}</body>
    </html>
  );
}
