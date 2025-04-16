import type { Metadata } from "next";
import { Geist, Geist_Mono, Satisfy, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});
const satisfy = Satisfy({
  variable: "--font-satisfy",
  weight: ["400"],
  subsets: ["latin"]
});
const source_serif_4 = Source_Serif_4({
  variable: "--font-source_serif_4",
  weight: ["400"],
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "DML MOTIONS - My portfolio",
  description: "🔥"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${source_serif_4.variable} ${geistSans.variable} ${geistMono.variable} ${satisfy.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
