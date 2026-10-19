import { Inter, Roboto, Plus_Jakarta_Sans, Lora, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-roboto", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const lora = Lora({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-lora", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-caveat", display: "swap" });

export const metadata = {
  title: "CampusPe – Connect 10X Faster",
  description:
    "One platform connecting students, colleges & employers — faster. Discover colleges, jobs and internships matched to you.",
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable} ${jakarta.variable} ${lora.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
