import Card from '@/components/UI/Card';
import styles from './portofolio.module.css';

export const metadata = {
  title: 'Portofolio Website UMKM Pekanbaru | PekanWeb Studio',
  description: 'Kumpulan proyek website sukses dari berbagai sektor UMKM di Pekanbaru.',
};

export default function Portofolio() {
  const projects = [
    { title: 'Warung Kopi Nuri', category: 'Kuliner', desc: 'Website profil kafe dengan menu digital, foto tempat, dan CTA reservasi.' },
    { title: 'Batik Riau Abadi', category: 'Fashion', desc: 'Katalog online produk batik khas Riau dengan highlight koleksi terbaru.' },
    { title: 'Klinik Cantik Pekanbaru', category: 'Kesehatan', desc: 'Landing page layanan kecantikan dengan trust section dan booking WhatsApp.' },
    { title: 'Jasa Servis AC Lancang', category: 'Jasa', desc: 'Halaman promosi jasa lokal dengan area layanan dan bukti pekerjaan.' },
    { title: 'Pekanbaru Tour Guide', category: 'Travel', desc: 'Portal paket wisata lokal dengan itinerary ringkas dan tombol konsultasi.' },
    { title: 'Agro Riau Mandiri', category: 'Agrikultur', desc: 'Website supplier agrikultur dengan daftar produk dan profil perusahaan.' },
  ];

  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.eyebrow}>Portfolio dashboard</p>
          <h1>Contoh tampilan website yang membuat UMKM terlihat lebih mapan.</h1>
          <p>Setiap demo dirancang untuk menunjukkan bagaimana bisnis lokal bisa punya halaman yang rapi, dipercaya, dan siap menerima prospek.</p>
        </div>
      </section>

      <section className={styles.portfolioSection}>
        <div className="container">
          <div className={styles.grid}>
            {projects.map((project, i) => (
              <Card key={project.title} className={styles.projectCard} padding="none">
                <div className={styles.projectImage}>
                  <div className={styles.mockTop}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className={styles.mockBody}>
                    <strong>{String(i + 1).padStart(2, '0')}</strong>
                    <div>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className={styles.projectContent}>
                  <span className={styles.category}>{project.category}</span>
                  <h2>{project.title}</h2>
                  <p>{project.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
