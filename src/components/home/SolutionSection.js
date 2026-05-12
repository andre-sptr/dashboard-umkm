import { valueProps } from '@/data/homeData';
import Reveal from '@/components/UI/Reveal';
import styles from '@/app/page.module.css';

export default function SolutionSection() {
  return (
    <section className={styles.solutionSection}>
      <div className="container">
        <Reveal>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Solusi yang langsung terasa</p>
            <h2>Landing page yang bekerja seperti front office digital.</h2>
            <p>Dirancang untuk menjelaskan nilai bisnis Anda dengan cepat, terlihat premium, dan mengarahkan calon pelanggan ke percakapan WhatsApp atau bantuan AI chatbot.</p>
          </div>
        </Reveal>
        <div className={styles.valueGrid}>
          {valueProps.map((item, index) => (
            <Reveal key={item.title} delay={(index % 4) * 100}>
              <article className={styles.valueCard}>
                <span>{item.metric}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
