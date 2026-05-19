import Eyebrow from '@/components/UI/Eyebrow';
import PortfolioCard from '@/components/UI/PortfolioCard';
import ScrollReveal from '@/components/fx/ScrollReveal';
import SplitHeading from '@/components/fx/SplitHeading';
import { demoProjects } from '@/data/homeData';
import styles from '@/app/page.module.css';

export default function PortfolioSection() {
  return (
    <section className={styles.portfolioSection} id="client">
      <div className="container">
        <div className={styles.sectionHeader}>
          <Eyebrow>Showcase / 15 directions</Eyebrow>
          <SplitHeading as="h2">
            15 gaya demo berbeda untuk arah landing page Anda.
          </SplitHeading>
          <ScrollReveal>
            <p>Setiap demo punya layout, ritme konten, dan fokus konversi yang berbeda: dari roast drop, impact calculator, appointment triage, diagnostic bay, quote studio, sampai harvest calendar.</p>
          </ScrollReveal>
        </div>
        <ScrollReveal stagger={0.08} className={styles.demoGrid}>
          {demoProjects.map((demo) => (
            <PortfolioCard demo={demo} key={demo.title} />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
