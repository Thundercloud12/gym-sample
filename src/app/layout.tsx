import type { Metadata } from "next";
import { fontDisplay, fontSans, fontMono } from "./fonts";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Urban Fitness Culture · Unisex Fitness Centre | Pleasant District, Mira Road East",
  description:
    "Urban Fitness Culture is a high-standard unisex gym in Pleasant District, Mira Road East. Expert weight training, personal coaching, 30-min express workouts, and steam & recovery.",
  keywords: [
    "gym in mira road east",
    "fitness centre pleasant district",
    "urban fitness culture",
    "personal training mira road",
    "weight training pleasant district",
    "unisex gym mira road",
  ],
  openGraph: {
    title: "Urban Fitness Culture · Unisex Gym in Pleasant District, Mira Road East",
    description: "4.6★ Rated. Real coaching, weight training, express workouts, and steam recovery in Pleasant District, Mira Road East.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable}`}
    >
      <body className="min-h-screen bg-[#fdf8f0] text-[#212121] antialiased selection:bg-[#283f7d] selection:text-[#fffbf3]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
