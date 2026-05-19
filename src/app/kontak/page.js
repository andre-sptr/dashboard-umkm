import Card from '@/components/UI/Card';
import Eyebrow from '@/components/UI/Eyebrow';
import MagneticButton from '@/components/fx/MagneticButton';
import ScrollReveal from '@/components/fx/ScrollReveal';
import SplitHeading from '@/components/fx/SplitHeading';
import styles from './kontak.module.css';

const whatsappNumber = '6282387025429';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo PekanWeb Studio, saya ingin konsultasi website untuk UMKM saya di Pekanbaru.')}`;

export const metadata = {
  title: 'Hubungi PekanWeb Studio | Jasa Website Pekanbaru',
  description: 'Konsultasikan kebutuhan website bisnis Anda dengan tim ahli kami di Pekanbaru.',
};

export default function Kontak() {
  const channels = [
    { code: 'LOC', title: 'Area layanan', desc: 'Pekanbaru, Riau · konsultasi online untuk seluruh Indonesia.' },
    { code: 'WA', title: 'WhatsApp', desc: '+62 823 8702 5429' },
    { code: 'IO', title: 'Response time', desc: 'Rata-rata balasan < 1 jam (jam kerja).' },
  ];

  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <Eyebrow>Contact command</Eyebrow>
          <SplitHeading as="h1">
            Konsultasi cepat untuk landing page UMKM yang lebih meyakinkan.
          </SplitHeading>
          <ScrollReveal>
            <p>Ceritakan jenis usaha, target pelanggan, dan kebutuhan website Anda. Kami bantu susun arah landing page yang paling masuk akal untuk dijual.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={`container ${styles.content}`}>
          <ScrollReveal>
            <div className={styles.contactInfo}>
              <Eyebrow>Kontak utama</Eyebrow>
              <h2>Mulai dari chat singkat, lanjut jadi brief yang jelas.</h2>
              <p>Untuk respons tercepat, gunakan WhatsApp. Email tetap tersedia untuk materi bisnis, logo, foto produk, atau dokumen penawaran.</p>

              <div className={styles.infoList}>
                {channels.map((item) => (
                  <div className={styles.infoItem} key={item.title}>
                    <div className={styles.icon}>{item.code}</div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Card className={styles.contactForm} padding="none">
              <Eyebrow>Free consultation</Eyebrow>
              <h2>Siapkan brief awal</h2>
              <p className={styles.formIntro}>Isi brief singkat di bawah, lalu kami terima percakapannya di WhatsApp.</p>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nama bisnis</label>
                  <input type="text" id="name" placeholder="Contoh: Kedai Kopi Pekanbaru" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="business">Jenis usaha</label>
                  <select id="business" defaultValue="Kuliner / Kafe">
                    <option>Kuliner / Kafe</option>
                    <option>Fashion / Retail</option>
                    <option>Jasa Profesional</option>
                    <option>Klinik / Kecantikan</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Kebutuhan utama</label>
                  <textarea id="message" rows="5" placeholder="Ceritakan layanan, produk, atau goal website Anda"></textarea>
                </div>
                <div className={styles.submitBtn}>
                  <MagneticButton as="a" href={whatsappUrl} target="_blank" rel="noopener noreferrer" size="lg" fullWidth>
                    Kirim brief via WhatsApp →
                  </MagneticButton>
                </div>
              </form>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
