import Image from 'next/image';
import Reveal from '@/components/UI/Reveal';
import { testimonials } from '@/data/homeData';
import styles from '@/app/page.module.css';

export default function TestimonialSection() {
  return (
    <section className={styles.testimonialSection} style={{ padding: '96px 0', backgroundColor: 'var(--surface-container-low)' }}>
      <div className="container">
        <Reveal>
          <div className={styles.sectionHeader} style={{ textAlign: 'center', margin: '0 auto 42px' }}>
            <p className={styles.eyebrowDark} style={{ justifyContent: 'center' }}>Social Proof</p>
            <h2 style={{ color: 'var(--foreground)' }}>Dipercaya oleh UMKM Pekanbaru.</h2>
            <p style={{ color: 'var(--outline)' }}>Jangan hanya percaya kata kami. Lihat bagaimana landing page membantu bisnis mereka tumbuh.</p>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {testimonials.map((testi, index) => (
            <Reveal key={testi.id} delay={(index % 3) * 100}>
              <article style={{
                backgroundColor: 'var(--surface)',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: 'var(--shadow-soft)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                height: '100%',
                border: '1px solid var(--outline-variant)'
              }}>
                <div style={{ display: 'flex', gap: '4px', color: '#f0b955' }}>
                  {[...Array(testi.rating)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p style={{ flex: 1, color: 'var(--foreground)', fontSize: '16px', lineHeight: 1.6, fontStyle: 'italic' }}>
                  &quot;{testi.text}&quot;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'auto' }}>
                  <div style={{ width: '48px', height: '48px', position: 'relative', borderRadius: '50%', overflow: 'hidden', backgroundColor: 'var(--surface-container-highest)' }}>
                    <Image
                      src={testi.image}
                      alt={`Foto ${testi.name}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '16px', color: 'var(--foreground)' }}>{testi.name}</h4>
                    <span style={{ fontSize: '14px', color: 'var(--outline)' }}>{testi.business}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}