import Eyebrow from '@/components/UI/Eyebrow';
import PortfolioCard from '@/components/UI/PortfolioCard';
import { demoProjects } from '@/data/homeData';
import styles from './portofolio.module.css';

export const metadata = {
  title: 'Portofolio Website UMKM Pekanbaru | PekanWeb Studio',
  description: 'Kumpulan proyek website sukses dari berbagai sektor UMKM di Pekanbaru.',
};

export default function Portofolio() {
  const comingSoon = {
    title: 'Demo UMKM berikutnya',
    sector: 'Coming soon',
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
          <Eyebrow>Portfolio dashboard</Eyebrow>
          <h1>Contoh tampilan website yang membuat UMKM terlihat lebih mapan.</h1>
          <p>Setiap demo dirancang untuk menunjukkan bagaimana bisnis lokal bisa punya halaman yang rapi, dipercaya, dan siap menerima prospek.</p>
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
