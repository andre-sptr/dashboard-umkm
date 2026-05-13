import Image from 'next/image';
import { notFound } from 'next/navigation';
import Button from '@/components/UI/Button';
import Eyebrow from '@/components/UI/Eyebrow';
import { getClientBySlug } from '@/utils/supabase';
import styles from './client.module.css';

export const dynamicParams = true; // Allow dynamic fetching from Supabase

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const clientData = await getClientBySlug(slug);

  if (!clientData) {
    return {
      title: 'Halaman tidak ditemukan | PekanWeb Studio',
    };
  }

  return {
    title: clientData.meta_title || `${clientData.business_name} | PekanWeb Studio`,
    description: clientData.meta_description || clientData.hero_lead,
  };
}

export default async function ClientPage({ params }) {
  const { slug } = await params;
  const clientData = await getClientBySlug(slug);

  if (!clientData) {
    notFound();
  }

  // Construct WhatsApp URL
  const defaultWaMessage = 'Halo, saya ingin konsultasi dari halaman landing page.';
  const message = clientData.whatsapp_message || defaultWaMessage;
  const whatsappUrl = `https://wa.me/${clientData.whatsapp_number}?text=${encodeURIComponent(message)}`;

  // Map database fields to the UI component expectations
  const demo = {
    theme: clientData.theme || 'default',
    businessType: clientData.business_type,
    heroTitle: clientData.hero_title,
    heroLead: clientData.hero_lead,
    primaryCta: clientData.primary_cta || 'Chat WhatsApp',
    secondaryCta: clientData.secondary_cta,
    whatsappUrl: whatsappUrl,
    accentLabel: clientData.accent_label || 'Pilihan Utama',
    heroAsset: clientData.hero_asset_url || '/demo/dapur-rendang-riau.svg', // Fallback
    highlights: clientData.highlights || [],
    stats: clientData.stats || [],
    title: clientData.business_name,
    productsTitle: clientData.products_title,
    products: clientData.products || [],
    proofTitle: clientData.proof_title,
    proofItems: clientData.proof_items || [],
    testimonial: {
      quote: clientData.testimonial_quote,
      person: clientData.testimonial_person
    },
    finalTitle: clientData.final_title || 'Mulai konsultasi sekarang'
  };

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
          {demo.businessType && (
            <Eyebrow className={styles.demoEyebrow}>{demo.businessType}</Eyebrow>
          )}
          <h1>{demo.heroTitle}</h1>
          {demo.heroLead && (
            <p className={styles.heroLead}>{demo.heroLead}</p>
          )}
          <div className={styles.heroActions}>
            <Button
              as="a"
              className={styles.accentButton}
              href={demo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {demo.primaryCta}
            </Button>
            {demo.secondaryCta && (
              <Button as="a" variant="secondary" className={styles.outlineButton} href="#paket">
                {demo.secondaryCta}
              </Button>
            )}
          </div>
          {demo.highlights && demo.highlights.length > 0 && (
            <ul className={styles.highlightList} aria-label={`Keunggulan ${demo.title}`}>
              {demo.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        <div className={styles.heroVisual}>
          {demo.accentLabel && (
            <span className={styles.assetLabel}>{demo.accentLabel}</span>
          )}
          <Image src={demo.heroAsset} width={900} height={840} alt={`Visual ${demo.title}`} priority />
        </div>
      </div>
      {demo.stats && demo.stats.length > 0 && (
        <div className={`container ${styles.statStrip}`} aria-label={`Statistik ${demo.title}`}>
          {demo.stats.map((stat) => (
            <div className={styles.statItem} key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function ProductSection({ demo }) {
  if (!demo.products || demo.products.length === 0) return null;
  return (
    <section className={styles.productSection} id="paket">
      <div className={`container ${styles.sectionGrid}`}>
        <div className={styles.sectionIntro}>
          <Eyebrow className={styles.demoEyebrow}>{demo.title}</Eyebrow>
          {demo.productsTitle && (
            <h2>{demo.productsTitle}</h2>
          )}
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
  if (!demo.proofTitle) return null;
  return (
    <section className={styles.proofSection}>
      <div className={`container ${styles.proofGrid}`}>
        <div className={styles.proofPanel}>
          <Eyebrow className={styles.demoEyebrow}>Bukti konversi</Eyebrow>
          <h2>{demo.proofTitle}</h2>
          {demo.proofItems && demo.proofItems.length > 0 && (
            <ul>
              {demo.proofItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        {demo.testimonial && demo.testimonial.quote && (
          <figure className={styles.testimonial}>
            <blockquote>{demo.testimonial.quote}</blockquote>
            <figcaption>{demo.testimonial.person}</figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}

function FinalCta({ demo }) {
  return (
    <section className={styles.finalSection}>
      <div className={`container ${styles.finalBox}`}>
        <h2>{demo.finalTitle}</h2>
        <p>Hubungi kami langsung via WhatsApp untuk pertanyaan lebih lanjut.</p>
        <Button
          as="a"
          className={styles.accentButton}
          href={demo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {demo.primaryCta}
        </Button>
      </div>
    </section>
  );
}
