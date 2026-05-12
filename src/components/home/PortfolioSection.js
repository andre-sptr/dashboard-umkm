import Link from 'next/link';
import Button from '@/components/UI/Button';
import Reveal from '@/components/UI/Reveal';
import { demoProjects } from '@/data/homeData';
import styles from '@/app/page.module.css';

export default function PortfolioSection() {
  return (
    <section className={styles.portfolioSection} id="demo">
      <div className="container">
        <Reveal>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Project demo</p>
            <h2>Contoh project demo yang bisa langsung dibayangkan oleh pemilik UMKM.</h2>
            <p>Setiap demo menunjukkan arah copy, struktur halaman, dan fokus konversi yang bisa disesuaikan dengan bisnis asli client.</p>
          </div>
        </Reveal>
        <div className={styles.demoGrid}>
          {demoProjects.map((demo, index) => (
            <Reveal key={demo.title} delay={(index % 3) * 100}>
              <Link className={styles.demoCard} href={demo.href} aria-label={`Lihat demo ${demo.title}`} style={{ display: 'flex', flexDirection: 'column', height: '100%', textDecoration: 'none' }}>
                <div className={`${styles.demoVisual} ${styles[demo.theme]}`}>
                  <div className={styles.demoBadge}>{demo.sector}</div>
                  <div style={{ position: 'absolute', inset: '60px 20px 20px 20px', background: 'var(--almost-black)', borderRadius: 'var(--radius-sm)', padding: '20px', border: '1px solid var(--purple-glow)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span style={{ color: 'var(--electric-blue)', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>{demo.title}</span>
                    <strong style={{ color: 'var(--pure-white)', fontSize: '20px', lineHeight: '1.2' }}>{demo.tagline}</strong>
                    <small style={{ color: 'var(--charcoal)', marginTop: '4px' }}>{demo.highlight}</small>
                  </div>
                </div>
                <div className={styles.demoContent} style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '20px' }}>
                  <div>
                    <h3>{demo.title}</h3>
                    <p>{demo.desc}</p>
                  </div>
                  <ul className={styles.demoSections} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }} aria-label={`Section demo ${demo.title}`}>
                    {demo.sections.map((section) => (
                      <li key={section} style={{ background: 'var(--navy-deep)', border: '1px solid var(--purple-glow)', padding: '8px', borderRadius: 'var(--radius-sm)', fontSize: '12px', color: 'var(--charcoal)', fontWeight: '600' }}>{section}</li>
                    ))}
                  </ul>
                  <div className={styles.demoStats} style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }} aria-label={`Fitur utama ${demo.title}`}>
                    {demo.stats.map((stat) => (
                      <span key={stat} style={{ background: 'var(--lavender-light)', color: 'var(--electric-blue)', padding: '6px 10px', borderRadius: 'var(--radius-sm)', fontSize: '12px', fontWeight: '600' }}>{stat}</span>
                    ))}
                  </div>
                  <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
                    <Button as="span" variant="secondary" fullWidth>
                      Lihat Demo
                    </Button>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
