import Eyebrow from '@/components/UI/Eyebrow';
import PortfolioCard from '@/components/UI/PortfolioCard';
import { demoProjects } from '@/data/homeData';
import styles from './demo.module.css';

export const metadata = {
  title: 'Demo Website UMKM Pekanbaru | PekanWeb Studio',
  description: 'Kumpulan demo website dari berbagai sektor UMKM di Pekanbaru.',
};

export default function Demo() {
  const comingSoon = {
    title: 'Demo UMKM berikutnya',
    sector: 'Coming soon',
    choiceLabel: 'Gaya baru',
    tagline: 'Template baru sedang dirapikan.',
    desc: 'Kami sedang menyiapkan contoh tambahan untuk sektor UMKM Pekanbaru lain agar pilihan referensi semakin lengkap.',
    highlight: 'Segera hadir dengan alur demo yang sama rapi.',
    sections: ['Riset sektor', 'Copywriting', 'Desain UI', 'WA CTA'],
    stats: ['Coming soon', 'Light theme', 'UMKM lokal'],
    theme: 'serviceDemo',
    isPlaceholder: true,
  };

  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <Eyebrow>Demo dashboard</Eyebrow>
          <h1>Pilih arah website dari demo yang sengaja dibuat berbeda.</h1>
          <p>Bandingkan gaya promo kuliner, lookbook produk, dan booking jasa. Setiap demo punya struktur halaman berbeda supaya pemilik UMKM bisa memilih rasa yang paling cocok.</p>
        </div>
      </section>

      <section className={styles.portfolioSection}>
        <div className="container">
          <div className={styles.grid}>
            {[...demoProjects, comingSoon].map((project) => (
              <PortfolioCard key={project.title} demo={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
