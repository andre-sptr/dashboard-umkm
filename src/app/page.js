import Link from 'next/link';
import Button from '@/components/UI/Button';
import styles from './page.module.css';

const whatsappNumber = '6282387025429';
const whatsappMessage = 'Halo PekanWeb Studio, saya ingin konsultasi pembuatan landing page untuk UMKM saya di Pekanbaru.';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const painPoints = [
  'Calon pelanggan ragu karena bisnis belum punya halaman resmi.',
  'Promosi masih terpencar di chat, marketplace, dan media sosial.',
  'Informasi harga, layanan, alamat, dan testimoni sulit ditemukan cepat.',
];

const valueProps = [
  {
    metric: '24/7',
    title: 'Sales page + AI assistant',
    desc: 'Mulai paket Starter, website bisa dibantu AI chatbot untuk menjawab pertanyaan awal calon pelanggan.',
  },
  {
    metric: '1 link',
    title: 'Semua informasi terkumpul',
    desc: 'Profil usaha, katalog, lokasi, testimoni, dan tombol WhatsApp berada dalam satu alur.',
  },
  {
    metric: '7 hari',
    title: 'Siap tampil cepat',
    desc: 'Landing page dirancang ringkas, premium, dan fokus pada konversi tanpa proses bertele-tele.',
  },
  {
    metric: 'WA',
    title: 'Chatbot produk',
    desc: 'Paket Pro dapat memakai WA chatbot yang terhubung dengan informasi produk agar respons lebih cepat dan relevan.',
  },
];

const demoProjects = [
  {
    title: 'Dapur Rendang Riau',
    sector: 'Kuliner rumahan',
    tagline: 'Nasi box kantor siap pesan.',
    desc: 'Menonjolkan menu best seller, paket kantor, testimoni pelanggan, dan tombol pesan cepat ke WhatsApp.',
    highlight: 'Pesanan kantor lebih mudah masuk lewat satu link.',
    sections: ['Hero promo', 'Paket menu', 'Testimoni', 'Order WA'],
    stats: ['3 paket', 'WA CTA', 'Galeri menu'],
    theme: 'foodDemo',
    href: '/demo/dapur-rendang-riau',
  },
  {
    title: 'Loka Batik Pekanbaru',
    sector: 'Fashion & retail',
    tagline: 'Katalog batik rapi dan premium.',
    desc: 'Dibuat untuk memudahkan calon pembeli melihat koleksi, rentang harga, ukuran, dan cara order.',
    highlight: 'Koleksi terlihat premium tanpa perlu toko online penuh.',
    sections: ['Lookbook', 'Size guide', 'Harga mulai', 'Chat admin'],
    stats: ['12 produk', 'Size guide', 'Order cepat'],
    theme: 'retailDemo',
    href: '/demo/loka-batik-pekanbaru',
  },
  {
    title: 'BersihKilap Home Care',
    sector: 'Jasa profesional',
    tagline: 'Booking cleaning lebih jelas.',
    desc: 'Mengatur layanan, area kerja, bukti hasil, estimasi harga, dan jadwal konsultasi dalam alur yang rapi.',
    highlight: 'Calon pelanggan cepat paham layanan dan area kerja.',
    sections: ['Layanan', 'Before after', 'Area kerja', 'Booking WA'],
    stats: ['4 layanan', 'Area map', 'Estimasi'],
    theme: 'serviceDemo',
    href: '/demo/bersihkilap-home-care',
  },
];

const processSteps = [
  { title: 'Konsultasi awal', desc: 'Kami gali jenis usaha, target pelanggan, area layanan, dan penawaran utama yang perlu terlihat kuat.' },
  { title: 'Materi & struktur', desc: 'Logo, foto, daftar layanan, harga, testimoni, dan CTA disusun menjadi alur landing page yang mudah dijual.' },
  { title: 'Desain & development', desc: 'Tampilan premium dibuat responsif, cepat, dan konsisten dengan karakter bisnis Anda.' },
  { title: 'Review & launch', desc: 'Setelah revisi final, website dipublikasikan dengan WhatsApp aktif dan opsi AI atau WA chatbot sesuai paket.' },
];

const faqs = [
  {
    question: 'Apakah cocok untuk UMKM yang belum punya foto profesional?',
    answer: 'Cocok. Struktur awal bisa memakai copy yang kuat, mockup rapi, ikon, dan aset sederhana sambil menunggu foto bisnis yang lebih matang.',
  },
  {
    question: 'Apakah landing page ini bisa langsung dipakai untuk iklan?',
    answer: 'Bisa. Alurnya dibuat untuk menjelaskan penawaran, membangun kepercayaan, lalu mengarahkan pengunjung ke WhatsApp.',
  },
  {
    question: 'Apakah saya bisa update isi website setelah selesai?',
    answer: 'Bisa dibahas saat konsultasi. Untuk landing page sederhana, perubahan kecil seperti teks, harga, dan foto bisa direncanakan sejak awal.',
  },
  {
    question: 'Apakah website bisa memakai AI chatbot?',
    answer: 'Bisa. Mulai paket Starter, website UMKM dapat diintegrasikan dengan AI chatbot basic. Untuk paket Pro, tersedia WA chatbot yang dapat disambungkan dengan data produk client.',
  },
];

export const metadata = {
  title: 'Jasa Landing Page UMKM Pekanbaru | PekanWeb Studio',
  description: 'Jasa pembuatan landing page premium untuk UMKM Pekanbaru dengan opsi AI chatbot dan WA chatbot produk untuk membantu calon pelanggan.',
};

export default function Home() {
  return (
    <div className={styles.main}>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PortfolioSection />
      <PricingSection />
      <ProcessSection />
      <FaqSection />
      <FinalCta />
    </div>
  );
}

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Jasa landing page premium untuk UMKM Pekanbaru</p>
          <h1>Ubah usaha lokal Anda jadi brand yang langsung terlihat dipercaya.</h1>
          <p className={styles.heroLead}>
            PekanWeb Studio membuat landing page mewah, cepat, dan fokus menjual. Satu link profesional untuk profil bisnis, katalog, lokasi, bukti kerja, chat WhatsApp, dan opsi AI chatbot.
          </p>
          <div className={styles.heroCta}>
            <Button as="a" href={whatsappUrl} target="_blank" rel="noopener noreferrer" size="lg">
              Konsultasi via WhatsApp
            </Button>
            <Button as="a" href="#demo" variant="secondary" size="lg">
              Lihat Demo
            </Button>
          </div>
          <div className={styles.trustBar} aria-label="Keunggulan layanan">
            <span>Desain custom</span>
            <span>Mobile-first</span>
            <span>AI chatbot-ready</span>
          </div>
        </div>
        <CommandCenterMockup />
      </div>
    </section>
  );
}

function CommandCenterMockup() {
  return (
    <div className={styles.commandShell} aria-label="Mockup command center landing page UMKM">
      <div className={styles.commandTop}>
        <span></span>
        <span></span>
        <span></span>
        <strong>UMKM Growth OS</strong>
      </div>
      <div className={styles.commandGrid}>
        <div className={styles.websitePreview}>
          <div className={styles.previewNav}>
            <span>Brand UMKM</span>
            <small>Landing page live</small>
          </div>
          <div className={styles.previewHero}>
            <p>Paket nasi box premium Pekanbaru</p>
            <h3>Pesanan kantor lebih mudah, cepat, dan rapi.</h3>
            <div className={styles.previewButton}>Pesan via WhatsApp</div>
          </div>
          <div className={styles.previewCards}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={styles.signalStack}>
          <div className={styles.signalCard}>
            <small>Lead masuk</small>
            <strong>38</strong>
            <span>+19% minggu ini</span>
          </div>
          <div className={styles.chatCard}>
            <small>WhatsApp inquiry</small>
            <p>Halo, produk best seller yang ready hari ini apa saja?</p>
          </div>
          <div className={styles.mapCard}>
            <span>Pekanbaru</span>
            <div className={styles.mapPulse}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProblemSection() {
  return (
    <section className={styles.problemSection}>
      <div className={`container ${styles.problemGrid}`}>
        <div>
          <p className={styles.eyebrowDark}>Masalah yang sering terjadi</p>
          <h2>Bisnis bagus bisa terlihat biasa saja kalau halaman digitalnya tidak meyakinkan.</h2>
        </div>
        <div className={styles.problemList}>
          {painPoints.map((point, index) => (
            <div className={styles.problemItem} key={point}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className={styles.solutionSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Solusi yang langsung terasa</p>
          <h2>Landing page yang bekerja seperti front office digital.</h2>
          <p>Dirancang untuk menjelaskan nilai bisnis Anda dengan cepat, terlihat premium, dan mengarahkan calon pelanggan ke percakapan WhatsApp atau bantuan AI chatbot.</p>
        </div>
        <div className={styles.valueGrid}>
          {valueProps.map((item) => (
            <article className={styles.valueCard} key={item.title}>
              <span>{item.metric}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section className={styles.portfolioSection} id="demo">
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrowDark}>Project demo</p>
          <h2>Contoh project demo yang bisa langsung dibayangkan oleh pemilik UMKM.</h2>
          <p>Setiap demo menunjukkan arah copy, struktur halaman, dan fokus konversi yang bisa disesuaikan dengan bisnis asli client.</p>
        </div>
        <div className={styles.demoGrid}>
          {demoProjects.map((demo) => (
            <Link className={styles.demoCard} href={demo.href} key={demo.title} aria-label={`Lihat demo ${demo.title}`}>
              <div className={`${styles.demoVisual} ${styles[demo.theme]}`}>
                <div className={styles.demoBadge}>{demo.sector}</div>
                <div className={styles.demoWindow}>
                  <span>{demo.title}</span>
                  <strong>{demo.tagline}</strong>
                  <small>{demo.highlight}</small>
                  <div className={styles.demoWindowAction}>Lihat Demo</div>
                </div>
              </div>
              <div className={styles.demoContent}>
                <div>
                  <h3>{demo.title}</h3>
                  <p>{demo.desc}</p>
                </div>
                <ul className={styles.demoSections} aria-label={`Section demo ${demo.title}`}>
                  {demo.sections.map((section) => (
                    <li key={section}>{section}</li>
                  ))}
                </ul>
                <div className={styles.demoStats} aria-label={`Fitur utama ${demo.title}`}>
                  {demo.stats.map((stat) => (
                    <span key={stat}>{stat}</span>
                  ))}
                </div>
                <Button as="span" variant="secondary" fullWidth>
                  Lihat Demo
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className={styles.pricingSection}>
      <div className={`container ${styles.pricingBox}`}>
        <div>
          <p className={styles.eyebrow}>Investasi awal</p>
          <h2>Mulai dari Rp1 jutaan untuk landing page UMKM yang siap dibagikan dan AI chatbot-ready.</h2>
          <p>
            Harga final menyesuaikan jumlah section, materi, revisi, dan kebutuhan teknis. Starter sudah bisa diarahkan ke AI chatbot basic, sementara Pro bisa memakai WA chatbot berbasis produk client.
          </p>
        </div>
        <div className={styles.pricePanel}>
          <span>Mulai dari</span>
          <strong>Rp1jt</strong>
          <small>Landing page + WhatsApp CTA + responsive design + AI chatbot basic</small>
          <Button as="a" href={whatsappUrl} target="_blank" rel="noopener noreferrer" fullWidth>
            Tanya Paket
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className={styles.processSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrowDark}>Flow kerja</p>
          <h2>Proses ringkas, hasilnya tetap terasa serius.</h2>
        </div>
        <div className={styles.processGrid}>
          {processSteps.map((step, index) => (
            <article className={styles.processCard} key={step.title}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className={styles.faqSection}>
      <div className={`container ${styles.faqGrid}`}>
        <div>
          <p className={styles.eyebrow}>FAQ</p>
          <h2>Pertanyaan sebelum mulai.</h2>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq) => (
            <article className={styles.faqItem} key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className={styles.finalCta}>
      <div className={`container ${styles.finalCtaBox}`}>
        <p className={styles.eyebrowDark}>Siap terlihat lebih profesional?</p>
        <h2>Bangun landing page yang membuat calon pelanggan yakin sebelum chat pertama.</h2>
        <Button as="a" href={whatsappUrl} target="_blank" rel="noopener noreferrer" size="lg">
          Mulai Konsultasi Gratis
        </Button>
      </div>
    </section>
  );
}
