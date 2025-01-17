import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import PageTransition from "@/components/ui/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Kişisel portfolyo sitesi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navbar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
