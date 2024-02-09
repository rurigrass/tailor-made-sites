import type { Metadata } from "next";
import "./globals.css";
import * as fonts from "@/utils/fonts";
import { Provider } from "@/components/lib/Provider";

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

console.log(fonts);

export default function RootLayout(props: RootLayoutProps) {
  props.params.fonts = ["adventPro", "capriola", "kronaOne", "roboto", "syne"];
  return (
    <html
      lang="en"
      className={`${fonts.adventPro.variable} ${fonts.capriola.variable}  ${fonts.kronaOne.variable} ${fonts.roboto.variable} ${fonts.syne.variable}`}
    >
      <body>
        <Provider>{props.children}</Provider>
      </body>
    </html>
  );
}
