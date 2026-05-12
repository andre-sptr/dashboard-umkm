import { painPoints } from '@/data/homeData';
import Reveal from '@/components/UI/Reveal';
import styles from '@/app/page.module.css';

export default function ProblemSection() {
  return (
    <section className={styles.problemSection}>
      <div className={`container ${styles.problemGrid}`}>
        <Reveal>
          <div>
            <p className={styles.eyebrowDark}>Masalah yang sering terjadi</p>
            <h2>Bisnis bagus bisa terlihat biasa saja kalau halaman digitalnya tidak meyakinkan.</h2>
          </div>
        </Reveal>
        <div className={styles.problemList}>
          {painPoints.map((point, index) => (
            <Reveal key={point} delay={(index + 1) * 100}>
              <div className={styles.problemItem}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{point}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
