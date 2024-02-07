import type { Metadata } from "next";
import { Inter, Advent_Pro, Capriola } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const capriola = Capriola({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-capriola",
});
const adventPro = Advent_Pro({
  subsets: ["latin"],
  variable: "--font-advent-pro",
});

export const metadata: Metadata = {
  title: "Tailor Made Sites",
  description: "Sites to Suit You",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${capriola.variable} ${adventPro.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
