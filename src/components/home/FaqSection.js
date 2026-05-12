import { faqs } from '@/data/homeData';
import Eyebrow from '@/components/UI/Eyebrow';
import Reveal from '@/components/UI/Reveal';
import styles from '@/app/page.module.css';

export default function FaqSection() {
  return (
    <section className={styles.faqSection}>
      <div className={`container ${styles.faqGrid}`}>
        <Reveal>
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2>Pertanyaan sebelum mulai.</h2>
          </div>
        </Reveal>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={(index % 4) * 100}>
              <article className={styles.faqItem}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
