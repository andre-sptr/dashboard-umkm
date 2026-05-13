import Eyebrow from '@/components/UI/Eyebrow';
import PortfolioCard from '@/components/UI/PortfolioCard';
import Reveal from '@/components/UI/Reveal';
import { demoProjects } from '@/data/homeData';
import styles from '@/app/page.module.css';

export default function PortfolioSection() {
  return (
    <section className={styles.portfolioSection} id="client">
      <div className="container">
        <Reveal>
          <div className={styles.sectionHeader}>
            <Eyebrow>Project demo</Eyebrow>
            <h2>Contoh project demo yang bisa langsung dibayangkan oleh pemilik UMKM.</h2>
            <p>Setiap demo menunjukkan arah copy, struktur halaman, dan fokus konversi yang bisa disesuaikan dengan bisnis asli client.</p>
          </div>
        </Reveal>
        <div className={styles.demoGrid}>
          {demoProjects.map((demo, index) => (
            <Reveal key={demo.title} delay={(index % 3) * 100}>
              <PortfolioCard demo={demo} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
