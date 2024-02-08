import { Advent_Pro, Capriola, Roboto } from "next/font/google";

export const capriola = Capriola({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-capriola",
});

export const adventPro = Advent_Pro({
  subsets: ["latin"],
  variable: "--font-advent-pro",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: "900",
  variable: "--font-roboto",
});
