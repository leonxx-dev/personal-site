import { Roboto_Condensed, Roboto } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-condensed"
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto"
});

export {
  robotoCondensed,
  roboto
};