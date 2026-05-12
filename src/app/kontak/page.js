import Card from '@/components/UI/Card';
import Button from '@/components/UI/Button';
import Eyebrow from '@/components/UI/Eyebrow';
import styles from './kontak.module.css';

const whatsappNumber = '6282387025429';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo PekanWeb Studio, saya ingin konsultasi website untuk UMKM saya di Pekanbaru.')}`;

export const metadata = {
  title: 'Hubungi PekanWeb Studio | Jasa Website Pekanbaru',
  description: 'Konsultasikan kebutuhan website bisnis Anda dengan tim ahli kami di Pekanbaru.',
};

export default function Kontak() {
  const channels = [
    { code: 'LOC', title: 'Area layanan', desc: 'Pekanbaru, Riau dan konsultasi online untuk UMKM sekitar.' },
    { code: 'WA', title: 'WhatsApp', desc: '+62 823 8702 5429' },
  ];

  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <Eyebrow>Contact command center</Eyebrow>
          <h1>Konsultasi cepat untuk landing page UMKM yang lebih meyakinkan.</h1>
          <p>Ceritakan jenis usaha, target pelanggan, dan kebutuhan website Anda. Kami bantu susun arah landing page yang paling masuk akal untuk dijual.</p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={`container ${styles.content}`}>
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

          <Card className={styles.contactForm} padding="lg">
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
                <select id="business">
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
              <Button as="a" href={whatsappUrl} target="_blank" rel="noopener noreferrer" size="lg" className={styles.submitBtn} fullWidth>
                Kirim brief via WhatsApp
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
