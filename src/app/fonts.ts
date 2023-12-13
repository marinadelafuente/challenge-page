// app/fonts.ts
import { Rubik, Inter, Roboto_Mono, Open_Sans } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const inter = Inter({ subsets: ["latin"] });

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const open_sans = Open_Sans({ subsets: ["latin"] });
