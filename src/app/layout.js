import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/UI/WhatsAppButton";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: 'Solusi Website UMKM Pekanbaru | PekanWeb Studio',
  description: 'Jasa pembuatan website profesional untuk UMKM di Pekanbaru. Tingkatkan kepercayaan pelanggan dan kembangkan bisnis Anda bersama PekanWeb Studio.',
  keywords: 'website umkm pekanbaru, jasa pembuatan website pekanbaru, pekanweb studio, digitalisasi umkm, website murah pekanbaru',
  openGraph: {
    title: 'Solusi Website UMKM Pekanbaru | PekanWeb Studio',
    description: 'Partner transformasi digital terpercaya untuk UMKM di Pekanbaru.',
    url: 'https://pekanweb.studio',
    siteName: 'PekanWeb Studio',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${plusJakartaSans.variable} ${inter.variable}`}>
        <Navbar />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
