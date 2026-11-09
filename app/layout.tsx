import type { Metadata } from "next";
import { JetBrains_Mono, Noto_Sans_JP, Space_Grotesk } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const jp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | [YOUR NAME]",
  description: "[YOUR NAME] のポートフォリオサイト",
  // 検索エンジンに載せない（URLを知っている人だけが見られるようにする）
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${grotesk.variable} ${mono.variable} ${jp.variable}`}>
      <body>{children}</body>
    </html>
  );
}
