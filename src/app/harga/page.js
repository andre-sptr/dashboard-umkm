import Card from '@/components/UI/Card';
import Eyebrow from '@/components/UI/Eyebrow';
import MagneticButton from '@/components/fx/MagneticButton';
import ScrollReveal from '@/components/fx/ScrollReveal';
import SplitHeading from '@/components/fx/SplitHeading';
import styles from './harga.module.css';

const whatsappNumber = '6282387025429';

export const metadata = {
  title: 'Paket Harga Website UMKM | PekanWeb Studio',
  description: 'Pilihan paket harga pembuatan website UMKM Pekanbaru dengan opsi AI chatbot dan WA chatbot untuk membantu calon pelanggan.',
};

export default function Harga() {
  const plans = [
    {
      name: 'Starter',
      price: '1.000.000',
      label: 'Validasi cepat',
      summary: 'Untuk UMKM yang butuh landing page rapi, cepat online, dan siap menjawab pertanyaan dasar.',
      highlight: 'AI chatbot basic',
      outcome: 'Online cepat',
      features: ['Landing page 1 halaman', 'Gratis hosting 1 tahun', 'Integrasi WhatsApp', 'AI chatbot', 'Desain responsif', 'Custom domain'],
      isPopular: false,
    },
    {
      name: 'Growth',
      price: '1.300.000',
      label: 'Paling ideal',
      summary: 'Untuk bisnis yang perlu profil lebih lengkap, trust section kuat, dan alur konsultasi lebih matang.',
      highlight: 'AI chatbot + SEO dasar',
      outcome: 'Lebih dipercaya',
      features: ['Semua pada paket Starter', 'Website profil 5 halaman', 'Integrasi media sosial', 'Integrasi Google Maps', 'SEO dasar'],
      isPopular: true,
    },
    {
      name: 'Pro',
      price: '2.000.000',
      label: 'Skala serius',
      summary: 'Untuk UMKM yang punya katalog produk dan ingin respons WhatsApp lebih cepat berdasarkan produk.',
      highlight: 'WA chatbot produk',
      outcome: 'Respons otomatis',
      features: ['Semua pada paket Growth', 'Payment gateway', 'Katalog produk', 'Panel admin', 'WA chatbot', 'Laporan bulanan', 'Dukungan prioritas'],
      isPopular: false,
    },
  ];

  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <Eyebrow>Pricing / 3 tiers</Eyebrow>
          <SplitHeading as="h1">
            Paket website yang jelas, premium, dan siap dipakai jualan.
          </SplitHeading>
          <ScrollReveal>
            <p>Mulai dari landing page ringkas dengan AI chatbot sampai paket Pro dengan WA chatbot yang terhubung ke produk UMKM Anda.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.pricingSection}>
        <div className="container">
          <ScrollReveal stagger={0.12} className={styles.grid}>
            {plans.map((plan) => (
              <div key={plan.name} className={`${styles.planCard} ${plan.isPopular ? styles.popular : ''}`}>
                {plan.isPopular && <div className={styles.badge}>Most popular</div>}
                <div className={styles.cardTop}>
                  <span className={styles.planLabel}>{plan.label}</span>
                  <h2>{plan.name}</h2>
                  <p>{plan.summary}</p>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.price}>
                    <span className={styles.currency}>Rp</span>
                    <span className={styles.amount}>{plan.price}</span>
                  </div>
                  <div className={styles.planSignals} aria-label={`Keunggulan paket ${plan.name}`}>
                    <span>{plan.highlight}</span>
                    <span>{plan.outcome}</span>
                  </div>
                  <ul className={styles.features}>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <span className={styles.check}>+</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.cta}>
                    <MagneticButton
                      as="a"
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Halo PekanWeb Studio, saya ingin konsultasi paket ${plan.name} untuk UMKM saya.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant={plan.isPopular ? 'primary' : 'secondary'}
                      fullWidth
                    >
                      Pilih Paket {plan.name} →
                    </MagneticButton>
                  </div>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
