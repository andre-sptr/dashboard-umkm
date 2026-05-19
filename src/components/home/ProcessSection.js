import { processSteps } from '@/data/homeData';
import Eyebrow from '@/components/UI/Eyebrow';
import ScrollReveal from '@/components/fx/ScrollReveal';
import SplitHeading from '@/components/fx/SplitHeading';
import styles from '@/app/page.module.css';

export default function ProcessSection() {
  return (
    <section className={styles.processSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Eyebrow>Workflow / 4 phases</Eyebrow>
          <SplitHeading as="h2">
            Proses ringkas, hasilnya tetap terasa serius.
          </SplitHeading>
        </div>
        <ScrollReveal stagger={0.1} className={styles.processGrid}>
          {processSteps.map((step, index) => (
            <article className={styles.processCard} key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
