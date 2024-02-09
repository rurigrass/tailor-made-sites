import {
  Advent_Pro,
  Capriola,
  Krona_One,
  Syne,
  Roboto,
} from "next/font/google";

export const adventPro = Advent_Pro({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-advent-pro",
});

export const capriola = Capriola({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-capriola",
});

//doesnt work
export const kronaOne = Krona_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-krona-one",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto",
});

//doesnt work
export const syne = Syne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-syne",
});
