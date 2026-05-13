import Image from 'next/image';
import { notFound } from 'next/navigation';
import Button from '@/components/UI/Button';
import Eyebrow from '@/components/UI/Eyebrow';
import prisma from '@/utils/prisma';
import styles from './client.module.css';

import { 
  Flame, Briefcase, Gift, Star, Package, Clock, Camera, MessageCircleHeart, Send,
  Shirt, Scissors, Users, Layers, Ruler, Truck, Image as ImageIcon, BookOpen, Maximize,
  Sparkles, Droplets, Wrench, Home, CheckSquare, MapPin, ImagePlus, ListChecks, Map, CheckCircle, Check
} from 'lucide-react';

const IconMap = {
  Flame, Briefcase, Gift, Star, Package, Clock, Camera, MessageCircleHeart, Send,
  Shirt, Scissors, Users, Layers, Ruler, Truck, Image: ImageIcon, BookOpen, Maximize,
  Sparkles, Droplets, Wrench, Home, CheckSquare, MapPin, ImagePlus, ListChecks, Map, CheckCircle
};

function DynamicIcon({ name, className, size = 24 }) {
  const Icon = IconMap[name] || CheckCircle;
  return <Icon className={className} size={size} />;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  let clientData = null;
  try {
    clientData = await prisma.client.findUnique({
      where: { slug }
    });
  } catch (error) {
    console.error("Database error during metadata generation.");
  }

  if (!clientData) {
    return {
      title: 'Halaman tidak ditemukan | PekanWeb Studio',
    };
  }

  return {
    title: clientData.metaTitle || `${clientData.businessName} | PekanWeb Studio`,
    description: clientData.metaDescription || clientData.heroLead,
  };
}

export default async function ClientPage({ params }) {
  const { slug } = await params;
  
  let clientData = null;
  try {
    clientData = await prisma.client.findUnique({
      where: { slug }
    });
  } catch (error) {
    console.error(`Database error during page generation for slug "${slug}".`);
  }

  if (!clientData) {
    notFound();
  }

  const defaultWaMessage = 'Halo, saya ingin konsultasi dari halaman landing page.';
  const message = clientData.whatsappMessage || defaultWaMessage;
  const whatsappUrl = `https://wa.me/${clientData.whatsappNumber}?text=${encodeURIComponent(message)}`;

  const safeJsonParse = (str, fallback = []) => {
    if (!str) return fallback;
    try {
      return JSON.parse(str);
    } catch (e) {
      return fallback;
    }
  };

  const demo = {
    theme: clientData.theme || 'default',
    businessType: clientData.businessType,
    heroTitle: clientData.heroTitle,
    heroLead: clientData.heroLead,
    primaryCta: clientData.primaryCta || 'Chat WhatsApp',
    secondaryCta: clientData.secondaryCta,
    whatsappUrl: whatsappUrl,
    accentLabel: clientData.accentLabel || 'Pilihan Utama',
    heroAsset: clientData.heroAssetUrl || '/demo/dapur-rendang-riau.svg',
    highlights: safeJsonParse(clientData.highlights),
    stats: safeJsonParse(clientData.stats),
    title: clientData.businessName,
    productsTitle: clientData.productsTitle,
    products: safeJsonParse(clientData.products),
    proofTitle: clientData.proofTitle,
    proofItems: safeJsonParse(clientData.proofItems),
    testimonial: {
      quote: clientData.testimonialQuote,
      person: clientData.testimonialPerson
    },
    finalTitle: clientData.finalTitle || 'Mulai konsultasi sekarang'
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
              {demo.highlights.map((item, i) => {
                const text = typeof item === 'string' ? item : item.text;
                const icon = typeof item === 'object' ? item.icon : 'CheckCircle';
                return (
                  <li key={i}>
                    <DynamicIcon name={icon} size={16} className={styles.highlightIcon} />
                    {text}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.visualBackdrop} />
          {demo.accentLabel && (
            <span className={styles.assetLabel}>{demo.accentLabel}</span>
          )}
          <Image src={demo.heroAsset} width={900} height={840} alt={`Visual ${demo.title}`} priority className={styles.heroImage} />
        </div>
      </div>
      {demo.stats && demo.stats.length > 0 && (
        <div className={`container ${styles.statStrip}`} aria-label={`Statistik ${demo.title}`}>
          {demo.stats.map((stat, i) => {
            const label = typeof stat === 'string' ? stat : stat.label;
            const value = typeof stat === 'string' ? '' : stat.value;
            const icon = typeof stat === 'object' ? stat.icon : 'Star';
            return (
              <div className={styles.statItem} key={i}>
                <div className={styles.statIconWrapper}>
                  <DynamicIcon name={icon} size={28} className={styles.statIcon} />
                </div>
                <div className={styles.statContent}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              </div>
            );
          })}
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
          <p className={styles.sectionLead}>Pilih paket yang paling sesuai dengan kebutuhan Anda. Hubungi kami jika butuh kustomisasi.</p>
        </div>
        <div className={styles.productGrid}>
          {demo.products.map((product, i) => (
            <article className={`${styles.productCard} ${product.popular ? styles.productCardPopular : ''}`} key={i}>
              {product.popular && <span className={styles.popularBadge}>Paling Diminati</span>}
              <div className={styles.productHeader}>
                <h3>{product.name}</h3>
                <span className={styles.productPrice}>{product.price}</span>
              </div>
              <p className={styles.productDesc}>{product.desc}</p>
              {product.features && product.features.length > 0 && (
                <ul className={styles.featureList}>
                  {product.features.map((feat, fi) => (
                    <li key={fi}>
                      <Check size={16} className={styles.featureIcon} />
                      {feat}
                    </li>
                  ))}
                </ul>
              )}
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
          <Eyebrow className={styles.demoEyebrow}>Alasan memilih kami</Eyebrow>
          <h2>{demo.proofTitle}</h2>
          {demo.proofItems && demo.proofItems.length > 0 && (
            <div className={styles.proofList}>
              {demo.proofItems.map((item, i) => {
                const title = typeof item === 'string' ? item : item.title;
                const desc = typeof item === 'string' ? '' : item.desc;
                const icon = typeof item === 'object' ? item.icon : 'CheckCircle';
                
                return (
                  <div className={styles.proofItem} key={i}>
                    <div className={styles.proofIconWrapper}>
                      <DynamicIcon name={icon} size={24} className={styles.proofIcon} />
                    </div>
                    <div>
                      <h4 className={styles.proofItemTitle}>{title}</h4>
                      {desc && <p className={styles.proofItemDesc}>{desc}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {demo.testimonial && demo.testimonial.quote && (
          <figure className={styles.testimonial}>
            <div className={styles.testimonialIcon}>
              <Star size={32} />
              <Star size={32} />
              <Star size={32} />
              <Star size={32} />
              <Star size={32} />
            </div>
            <blockquote>&quot;{demo.testimonial.quote}&quot;</blockquote>
            <figcaption>— {demo.testimonial.person}</figcaption>
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
        <div className={styles.finalBoxBg} />
        <div className={styles.finalContent}>
          <h2>{demo.finalTitle}</h2>
          <p>Hubungi kami langsung via WhatsApp untuk pertanyaan lebih lanjut atau memulai pesanan Anda sekarang juga.</p>
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
      </div>
    </section>
  );
}
