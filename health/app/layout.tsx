import type { Metadata } from "next";
import { Nunito } from "next/font/google"
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/shared/header";

const NunitoSans = localFont({
  src: "./fonts/Nunito-Bold.ttf",
  variable: '--font-nunito',
  weight: "400 900",
});
const NunitoMono = localFont({
  src: "./fonts/Nunito-Medium.ttf",
  variable: '--font-nunito',
  weight: "400 900",
});

export const metadata: Metadata = {
  title: "HealthMap",
  description: "Make by Sigurd Freyr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${NunitoSans.variable} ${NunitoMono.variable} antialiased`}
      >
        <main className="min-h-screen">
          <Header></Header>
          {children}
          
          </main>
      </body>
    </html>
  );
}
