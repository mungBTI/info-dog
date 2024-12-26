import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "인포독",
  description: "반려견 꿀템을 모아보는 인포독, 급여량도 계산해보세요.",
  keywords: [
    "강아지 쇼핑몰",
    "애견용품",
    "펫용품",
    "강아지 용품",
    "강아지 살림",
    "강아지 꿀템",
    "강아지 쇼핑",
    "애견의류",
    "애견용품",
    "애견용품 쇼핑",
    "애견용품 쇼핑 추천",
    "애견용품 쇼핑 추천 사이트",
    "반려견",
    "반려견 용품",
    "반려견 살림",
    "반려견 꿀템",
    "반려견 쇼핑",
  ],
  authors: [{ name: "yeaseul Lee" }],
  creator: "yeaseul Lee",
  publisher: "yeaseul Lee",
  openGraph: {
    title: "인포독",
    description: "반려견 꿀템을 모아보는 인포독, 급여량도 계산해보세요.",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
