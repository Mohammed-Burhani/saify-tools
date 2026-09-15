import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Saify Tools Centre — Authorised Distributor of Fasteners & Industrial Tools",
  description: "Precision fasteners, held to a tighter tolerance than the job requires. Authorised distributor of Unbrako fasteners, hand tools, carbide tooling, and custom foundation bolts.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-paper text-ink antialiased font-body">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
