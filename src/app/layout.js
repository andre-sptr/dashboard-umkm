import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/UI/WhatsAppButton";
import ChatbotWidget from "@/components/UI/ChatbotWidget";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata = {
  title: 'Solusi Website UMKM Pekanbaru | PekanWeb Studio',
  description: 'Jasa pembuatan website profesional untuk UMKM di Pekanbaru. Tingkatkan kepercayaan pelanggan dan kembangkan bisnis Anda bersama PekanWeb Studio.',
  keywords: 'website umkm pekanbaru, jasa pembuatan website pekanbaru, pekanweb studio, digitalisasi umkm, website murah pekanbaru',
  authors: [{ name: 'PekanWeb Studio' }],
  openGraph: {
    title: 'Solusi Website UMKM Pekanbaru | PekanWeb Studio',
    description: 'Partner transformasi digital terpercaya untuk UMKM di Pekanbaru. Tingkatkan konversi penjualan dengan Landing Page premium & AI Chatbot.',
    url: 'https://pekanweb.studio',
    siteName: 'PekanWeb Studio',
    images: [
      {
        url: 'https://pekanweb.studio/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PekanWeb Studio - Jasa Pembuatan Website UMKM Pekanbaru',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solusi Website UMKM Pekanbaru | PekanWeb Studio',
    description: 'Partner transformasi digital terpercaya untuk UMKM di Pekanbaru.',
    images: ['https://pekanweb.studio/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={plusJakartaSans.variable}>
        <a href="#main" className="skip-link">Lewati ke konten utama</a>
        <Navbar />
        <main id="main" className="site-main">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <ChatbotWidget />
      </body>
    </html>
  );
}
