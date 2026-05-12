import { processSteps } from '@/data/homeData';
import Eyebrow from '@/components/UI/Eyebrow';
import Reveal from '@/components/UI/Reveal';
import styles from '@/app/page.module.css';

export default function ProcessSection() {
  return (
    <section className={styles.processSection}>
      <div className="container">
        <Reveal>
          <div className={styles.sectionHeader}>
            <Eyebrow>Flow kerja</Eyebrow>
            <h2>Proses ringkas, hasilnya tetap terasa serius.</h2>
          </div>
        </Reveal>
        <div className={styles.processGrid}>
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={(index % 4) * 100}>
              <article className={styles.processCard}>
                <span>{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
