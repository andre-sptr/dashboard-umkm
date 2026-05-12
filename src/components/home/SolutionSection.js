import { valueProps } from '@/data/homeData';
import Eyebrow from '@/components/UI/Eyebrow';
import Reveal from '@/components/UI/Reveal';
import styles from '@/app/page.module.css';

export default function SolutionSection() {
  const [featuredValue, ...supportingValues] = valueProps;

  return (
    <section className={styles.solutionSection}>
      <div className="container">
        <Reveal>
          <div className={styles.sectionHeader}>
            <Eyebrow>Solusi yang langsung terasa</Eyebrow>
            <h2>Landing page yang bekerja seperti front office digital.</h2>
            <p>Dirancang untuk menjelaskan nilai bisnis Anda dengan cepat, terlihat premium, dan mengarahkan calon pelanggan ke percakapan WhatsApp atau bantuan AI chatbot.</p>
          </div>
        </Reveal>
        <div className={styles.valueGrid}>
          <Reveal>
            <article className={`${styles.valueCard} ${styles.featuredValue}`}>
              <span>{featuredValue.metric}</span>
              <h3>{featuredValue.title}</h3>
              <p>{featuredValue.desc}</p>
            </article>
          </Reveal>
          <div className={styles.supportingValues}>
            {supportingValues.map((item, index) => (
              <Reveal key={item.title} delay={(index + 1) * 100}>
                <article className={styles.valueCard}>
                  <span>{item.metric}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
