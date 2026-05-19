import { valueProps } from '@/data/homeData';
import Eyebrow from '@/components/UI/Eyebrow';
import ScrollReveal from '@/components/fx/ScrollReveal';
import SplitHeading from '@/components/fx/SplitHeading';
import styles from '@/app/page.module.css';

export default function SolutionSection() {
  const [featuredValue, ...supportingValues] = valueProps;

  return (
    <section className={styles.solutionSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Eyebrow>Solusi yang langsung terasa</Eyebrow>
          <SplitHeading as="h2">
            Landing page yang bekerja seperti front office digital.
          </SplitHeading>
          <ScrollReveal>
            <p>
              Dirancang untuk menjelaskan nilai bisnis Anda dengan cepat, terlihat premium, dan mengarahkan calon pelanggan ke percakapan WhatsApp atau bantuan AI chatbot.
            </p>
          </ScrollReveal>
        </div>
        <div className={styles.valueGrid}>
          <ScrollReveal>
            <article className={`${styles.valueCard} ${styles.featuredValue}`}>
              <span>{featuredValue.metric}</span>
              <h3>{featuredValue.title}</h3>
              <p>{featuredValue.desc}</p>
            </article>
          </ScrollReveal>
          <ScrollReveal stagger={0.1} className={styles.supportingValues}>
            {supportingValues.map((item) => (
              <article className={styles.valueCard} key={item.title}>
                <span>{item.metric}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
