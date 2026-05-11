import Image from 'next/image';
import { notFound } from 'next/navigation';
import { demoPages, getDemoPage } from '../demoData';
import styles from './demo.module.css';

export const dynamicParams = false;

export function generateStaticParams() {
  return demoPages.map((demo) => ({ slug: demo.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const demo = getDemoPage(slug);

  if (!demo) {
    return {
      title: 'Demo tidak ditemukan | PekanWeb Studio',
    };
  }

  return {
    title: demo.metaTitle,
    description: demo.metaDescription,
  };
}

export default async function DemoPage({ params }) {
  const { slug } = await params;
  const demo = getDemoPage(slug);

  if (!demo) {
    notFound();
  }

  return (
    <div className={`${styles.page} ${styles[demo.theme]}`}>
      <Hero demo={demo} />
      <ProductSection demo={demo} />
      <ProofSection demo={demo} />
      <FinalCta demo={demo} />
    </div>
  );
}

function Hero({ demo }) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.brandLine}>{demo.businessType}</p>
          <h1>{demo.heroTitle}</h1>
          <p className={styles.heroLead}>{demo.heroLead}</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href={demo.whatsappUrl} target="_blank" rel="noopener noreferrer">
              {demo.primaryCta}
            </a>
            <a className={styles.secondaryButton} href="#paket">
              {demo.secondaryCta}
            </a>
          </div>
          <ul className={styles.highlightList} aria-label={`Keunggulan ${demo.title}`}>
            {demo.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.heroVisual}>
          <span className={styles.assetLabel}>{demo.accentLabel}</span>
          <Image src={demo.heroAsset} width={900} height={840} alt={`Visual demo ${demo.title}`} priority />
        </div>
      </div>
      <div className={`container ${styles.statStrip}`} aria-label={`Statistik demo ${demo.title}`}>
        {demo.stats.map((stat) => (
          <div className={styles.statItem} key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductSection({ demo }) {
  return (
    <section className={styles.productSection} id="paket">
      <div className={`container ${styles.sectionGrid}`}>
        <div className={styles.sectionIntro}>
          <p>{demo.title}</p>
          <h2>{demo.productsTitle}</h2>
        </div>
        <div className={styles.productGrid}>
          {demo.products.map((product) => (
            <article className={styles.productCard} key={product.name}>
              <span>{product.price}</span>
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofSection({ demo }) {
  return (
    <section className={styles.proofSection}>
      <div className={`container ${styles.proofGrid}`}>
        <div className={styles.proofPanel}>
          <h2>{demo.proofTitle}</h2>
          <ul>
            {demo.proofItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <figure className={styles.testimonial}>
          <blockquote>{demo.testimonial.quote}</blockquote>
          <figcaption>{demo.testimonial.person}</figcaption>
        </figure>
      </div>
    </section>
  );
}

function FinalCta({ demo }) {
  return (
    <section className={styles.finalSection}>
      <div className={`container ${styles.finalBox}`}>
        <h2>{demo.finalTitle}</h2>
        <p>Struktur demo ini bisa disesuaikan dengan foto, harga, area layanan, dan karakter brand asli client.</p>
        <a className={styles.primaryButton} href={demo.whatsappUrl} target="_blank" rel="noopener noreferrer">
          {demo.primaryCta}
        </a>
      </div>
    </section>
  );
}
