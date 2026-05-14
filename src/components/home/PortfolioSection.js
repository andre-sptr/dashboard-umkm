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
            <h2>Tiga gaya demo berbeda supaya calon client bisa pilih arah website.</h2>
            <p>Setiap demo punya layout, ritme konten, dan fokus konversi yang berbeda: promo menu, lookbook produk, atau booking jasa.</p>
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
