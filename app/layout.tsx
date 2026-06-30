import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Cub Scout Pack 5 — Wilmette, IL",
  description:
    "Join Cub Scout Pack 5 in Wilmette, IL. Adventure, friendship, and character-building for boys and girls in grades K–5. Learn about joining, costs, and upcoming events.",
  keywords: ["Cub Scouts", "Pack 5", "Wilmette", "Illinois", "BSA", "kids activities", "scouting"],
  openGraph: {
    title: "Cub Scout Pack 5 — Wilmette, IL",
    description: "Adventure, friendship, and character-building for kids in Wilmette.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
