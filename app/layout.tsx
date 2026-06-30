import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fedakar Digital | Modern Yazılım ve Tasarım Çözümleri",
  description: "Yasin Fedakar tarafından geliştirilen, Next.js ve modern teknolojilerle üretilmiş profesyonel dijital çözümler, mobil uygulamalar ve web projeleri.",
  keywords: ["Fedakar Digital", "Yasin Fedakar", "Web Geliştirme", "Mobil Uygulama", "Next.js", "Grafik Tasarım"],
  authors: [{ name: "Yasin Fedakar" }],
  openGraph: {
    title: "Fedakar Digital",
    description: "Geleceği birlikte yazalım. Modern dijital çözümler.",
    siteName: "Fedakar Digital",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}