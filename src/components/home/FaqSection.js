import { faqs } from '@/data/homeData';
import Eyebrow from '@/components/UI/Eyebrow';
import ScrollReveal from '@/components/fx/ScrollReveal';
import SplitHeading from '@/components/fx/SplitHeading';
import styles from '@/app/page.module.css';

export default function FaqSection() {
  return (
    <section className={styles.faqSection}>
      <div className={`container ${styles.faqGrid}`}>
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <SplitHeading as="h2">
            Pertanyaan sebelum mulai.
          </SplitHeading>
        </div>
        <ScrollReveal stagger={0.08} className={styles.faqList}>
          {faqs.map((faq) => (
            <article className={styles.faqItem} key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
