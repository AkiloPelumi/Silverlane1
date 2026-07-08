import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QuoteMenuProvider } from "@/components/QuoteMenuProvider";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Silverlane Insurance Broker - Comprehensive Insurance Solutions",
  description: "Protecting what matters most with comprehensive coverage tailored for your peace of mind. Get auto, home, life, health, business, and pet insurance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="min-h-screen flex flex-col bg-white">
        <QuoteMenuProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </QuoteMenuProvider>
      </body>
    </html>
  );
}