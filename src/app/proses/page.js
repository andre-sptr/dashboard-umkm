import Card from '@/components/UI/Card';
import Eyebrow from '@/components/UI/Eyebrow';
import styles from './proses.module.css';

export const metadata = {
  title: 'Proses Kerja Transformasi Digital | PekanWeb Studio',
  description: 'Lihat bagaimana kami membantu UMKM Pekanbaru bertransformasi digital dalam 4 langkah mudah.',
};

export default function Proses() {
  const steps = [
    { title: 'Konsultasi awal', desc: 'Kami gali jenis usaha, target pelanggan, area layanan, dan penawaran utama yang perlu terlihat kuat.' },
    { title: 'Materi & struktur', desc: 'Logo, foto, daftar layanan, harga, testimoni, dan CTA disusun menjadi alur landing page yang mudah dijual.' },
    { title: 'Desain & development', desc: 'Pembangunan sistem dengan desain eksklusif yang ringan, responsif, dan mencerminkan identitas unik bisnis Anda secara konsisten.' },
    { title: 'Review & launch', desc: 'Setelah revisi final, website dipublikasikan dengan WhatsApp aktif dan opsi AI atau WA chatbot sesuai paket.' },
  ];

  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <Eyebrow>Delivery workflow</Eyebrow>
          <h1>Dari brief singkat sampai landing page siap dipakai jualan.</h1>
          <p>Proses dibuat sederhana untuk UMKM, tapi tetap rapi secara eksekusi: jelas tahapnya, jelas outputnya, dan jelas kapan website bisa digunakan.</p>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.timeline}>
            {steps.map((step, i) => (
              <div key={step.title} className={styles.step}>
                <div className={styles.stepNumber}>{String(i + 1).padStart(2, '0')}</div>
                <Card className={styles.stepCard}>
                  <span>Phase {i + 1}</span>
                  <h2>{step.title}</h2>
                  <p>{step.desc}</p>
                </Card>
              </div>
            ))}
          </div>
          <div className={styles.statusStrip}>
            <span>Brief jelas</span>
            <span>Desain premium</span>
            <span>WhatsApp-ready</span>
          </div>
        </div>
      </section>
    </div>
  );
}
