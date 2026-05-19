import { painPoints } from '@/data/homeData';
import Eyebrow from '@/components/UI/Eyebrow';
import ScrollReveal from '@/components/fx/ScrollReveal';
import SplitHeading from '@/components/fx/SplitHeading';
import styles from '@/app/page.module.css';

export default function ProblemSection() {
  return (
    <section className={styles.problemSection}>
      <div className={`container ${styles.problemGrid}`}>
        <div>
          <Eyebrow>Friction yang nyata</Eyebrow>
          <SplitHeading as="h2">
            Bisnis bagus bisa terlihat biasa kalau halaman digitalnya tidak meyakinkan.
          </SplitHeading>
        </div>
        <ScrollReveal stagger={0.12} className={styles.problemList}>
          {painPoints.map((point, index) => (
            <div className={styles.problemItem} key={point}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{point}</p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
