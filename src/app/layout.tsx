import type { Metadata } from "next";
import "./globals.css";
import { Inter, Advent_Pro, Roboto } from "next/font/google";
import { adventPro, capriola, roboto } from "@/utils/fonts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "@/components/lib/Provider";

const inter = Inter({ subsets: ["latin"] });

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
  props.params.fonts = ["capriola", "adventPro"];
  return (
    <html
      lang="en"
      className={`${capriola.variable} ${adventPro.variable} ${roboto.variable}`}
      data-fonts={["capriola", "adventPro"]}
    >
      <body className={inter.className}>
        <Provider>{props.children}</Provider>
      </body>
    </html>
  );
}
