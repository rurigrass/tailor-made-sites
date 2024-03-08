import type { Metadata } from "next";
import "./globals.css";
import * as fonts from "@/utils/fonts";
// import { Provider } from "@/components/lib/Provider";

export const metadata: Metadata = {
  title: "Tailor Made Sites",
  description: "Sites to Suit You",
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    fonts: string[];
  };
};

export default function RootLayout(props: RootLayoutProps) {
  props.params.fonts = [
    "adventPro",
    "belleza",
    "capriola",
    "caudex",
    "cinzelDecorative",
    "dmSans",
    "federo",
    "kronaOne",
    "roboto",
    "spaceGrotesk",
    "syne",
    "italiana",
  ];
  return (
    <html
      lang="en"
      className={`${fonts.adventPro.variable} ${fonts.belleza.variable} ${fonts.capriola.variable} ${fonts.caudex.variable} ${fonts.cinzelDecorative.variable} ${fonts.dmSans.variable} ${fonts.federo.variable} ${fonts.kronaOne.variable} ${fonts.roboto.variable} ${fonts.spaceGrotesk.variable} ${fonts.syne.variable} ${fonts.italiana.variable}`}
    >
      <body>{props.children}</body>
    </html>
  );
}
