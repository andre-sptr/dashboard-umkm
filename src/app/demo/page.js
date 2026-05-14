import Eyebrow from '@/components/UI/Eyebrow';
import PortfolioCard from '@/components/UI/PortfolioCard';
import { demoProjects } from '@/data/homeData';
import styles from './demo.module.css';

export const metadata = {
  title: 'Demo Website UMKM Pekanbaru | PekanWeb Studio',
  description: 'Kumpulan demo website dari berbagai sektor UMKM di Pekanbaru.',
};

export default function Demo() {
  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <Eyebrow>Demo dashboard</Eyebrow>
          <h1>Pilih arah website dari 15 demo yang sengaja dibuat berbeda.</h1>
          <p>Bandingkan gaya promo menu, lookbook, booking jasa, jadwal kelas, event catalog, roast drop, impact calculator, appointment triage, diagnostic bay, quote studio, cold-chain catalog, studio scheduler, route board, dan harvest calendar.</p>
        </div>
      </section>

      <section className={styles.portfolioSection}>
        <div className="container">
          <div className={styles.grid}>
            {demoProjects.map((project) => (
              <PortfolioCard key={project.title} demo={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
