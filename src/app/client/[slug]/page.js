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
    console.error('Database error during metadata generation.');
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
    whatsappUrl,
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

  const Variant = {
    rendang: CulinaryDemo,
    batik: LookbookDemo,
    cleaning: ServiceDemo,
    wellness: WellnessDemo,
    learning: LearningDemo,
    florist: FloristDemo,
  }[demo.theme] || GeneralDemo;

  const pageClass = [styles.page, styles[demo.theme], styles[`${demo.theme}Page`]].filter(Boolean).join(' ');

  return (
    <div className={pageClass}>
      <Variant demo={demo} />
    </div>
  );
}

function HeroActions({ demo, align = 'start' }) {
  return (
    <div className={`${styles.heroActions} ${styles[`${align}Actions`] || ''}`}>
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
  );
}

function HighlightList({ items = [], className = '' }) {
  if (!items.length) return null;

  return (
    <ul className={`${styles.highlightList} ${className}`}>
      {items.map((item, i) => {
        const text = typeof item === 'string' ? item : item.text;
        const icon = typeof item === 'object' ? item.icon : 'CheckCircle';

        return (
          <li key={`${text}-${i}`}>
            <DynamicIcon name={icon} size={16} className={styles.highlightIcon} />
            {text}
          </li>
        );
      })}
    </ul>
  );
}

function StatStrip({ stats = [], variant = 'strip' }) {
  if (!stats.length) return null;

  return (
    <div className={`${styles.statStrip} ${styles[`${variant}Stats`]}`}>
      {stats.map((stat, i) => {
        const label = typeof stat === 'string' ? stat : stat.label;
        const value = typeof stat === 'string' ? '' : stat.value;
        const icon = typeof stat === 'object' ? stat.icon : 'Star';

        return (
          <div className={styles.statItem} key={`${label}-${i}`}>
            <DynamicIcon name={icon} size={24} className={styles.statIcon} />
            <div>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ProductCards({ products = [], mode = 'standard' }) {
  if (!products.length) return null;
  const gridClass = [styles.productGrid, styles[`${mode}Products`]].filter(Boolean).join(' ');

  return (
    <div className={gridClass}>
      {products.map((product, i) => (
        <article className={`${styles.productCard} ${product.popular ? styles.productCardPopular : ''}`} key={`${product.name}-${i}`}>
          <div className={styles.productIndex}>{String(i + 1).padStart(2, '0')}</div>
          {product.popular && <span className={styles.popularBadge}>Paling Diminati</span>}
          <div className={styles.productHeader}>
            <h3>{product.name}</h3>
            <span className={styles.productPrice}>{product.price}</span>
          </div>
          <p className={styles.productDesc}>{product.desc}</p>
          {product.features && product.features.length > 0 && (
            <ul className={styles.featureList}>
              {product.features.map((feat, fi) => (
                <li key={`${feat}-${fi}`}>
                  <Check size={16} className={styles.featureIcon} />
                  {feat}
                </li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

function ProofItems({ items = [], mode = 'standard' }) {
  if (!items.length) return null;
  const proofClass = [styles.proofList, styles[`${mode}Proof`]].filter(Boolean).join(' ');

  return (
    <div className={proofClass}>
      {items.map((item, i) => {
        const title = typeof item === 'string' ? item : item.title;
        const desc = typeof item === 'string' ? '' : item.desc;
        const icon = typeof item === 'object' ? item.icon : 'CheckCircle';

        return (
          <div className={styles.proofItem} key={`${title}-${i}`}>
            <div className={styles.proofIconWrapper}>
              <DynamicIcon name={icon} size={24} className={styles.proofIcon} />
            </div>
            <div>
              <h4>{title}</h4>
              {desc && <p>{desc}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Testimonial({ testimonial, compact = false }) {
  if (!testimonial?.quote) return null;

  return (
    <figure className={`${styles.testimonial} ${compact ? styles.compactTestimonial : ''}`}>
      <div className={styles.testimonialStars} aria-label="Rating 5 dari 5">
        <Star size={20} />
        <Star size={20} />
        <Star size={20} />
        <Star size={20} />
        <Star size={20} />
      </div>
      <blockquote>&quot;{testimonial.quote}&quot;</blockquote>
      <figcaption>- {testimonial.person}</figcaption>
    </figure>
  );
}

function CulinaryDemo({ demo }) {
  const firstProduct = demo.products?.[0];

  return (
    <>
      <section className={`${styles.variantHero} ${styles.culinaryHero}`}>
        <div className={`container ${styles.culinaryHeroGrid}`}>
          <div className={styles.heroCopy}>
            {demo.businessType && <Eyebrow className={styles.demoEyebrow}>{demo.businessType}</Eyebrow>}
            <h1>{demo.heroTitle}</h1>
            {demo.heroLead && <p className={styles.heroLead}>{demo.heroLead}</p>}
            <HeroActions demo={demo} />
            <HighlightList items={demo.highlights} />
          </div>

          <div className={styles.culinaryBoard}>
            <span className={styles.assetLabel}>{demo.accentLabel}</span>
            <Image src={demo.heroAsset} width={900} height={840} alt={`Visual ${demo.title}`} priority className={styles.heroImage} />
            {firstProduct && (
              <div className={styles.orderTicket}>
                <span>Menu utama</span>
                <strong>{firstProduct.name}</strong>
                <small>{firstProduct.price}</small>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className={styles.menuSection} id="paket">
        <div className={`container ${styles.menuLayout}`}>
          <div className={styles.sectionIntro}>
            <Eyebrow className={styles.demoEyebrow}>Gaya menu restoran</Eyebrow>
            <h2>{demo.productsTitle}</h2>
            <p>Demo kuliner dibuat seperti halaman promo menu: cepat menggugah selera, harga langsung terlihat, lalu pengunjung diarahkan ke order WhatsApp.</p>
          </div>
          <ProductCards products={demo.products} mode="menu" />
        </div>
      </section>

      <section className={styles.flavorProofSection}>
        <div className={`container ${styles.flavorGrid}`}>
          <div>
            <Eyebrow className={styles.demoEyebrow}>Bukti sebelum order</Eyebrow>
            <h2>{demo.proofTitle}</h2>
            <ProofItems items={demo.proofItems} mode="timeline" />
          </div>
          <div className={styles.flavorAside}>
            <StatStrip stats={demo.stats} variant="stacked" />
            <Testimonial testimonial={demo.testimonial} compact />
          </div>
        </div>
      </section>

      <FinalCta demo={demo} />
    </>
  );
}

function LookbookDemo({ demo }) {
  return (
    <>
      <section className={`${styles.variantHero} ${styles.lookbookHero}`}>
        <div className={`container ${styles.lookbookHeroInner}`}>
          <div className={styles.lookbookCopy}>
            {demo.businessType && <Eyebrow className={styles.demoEyebrow}>{demo.businessType}</Eyebrow>}
            <h1>{demo.heroTitle}</h1>
            {demo.heroLead && <p className={styles.heroLead}>{demo.heroLead}</p>}
            <HeroActions demo={demo} align="center" />
          </div>
          <div className={styles.lookbookStage}>
            <div className={styles.lookbookSideNote}>
              <span>Koleksi</span>
              <strong>{demo.products?.length || 0} pilihan</strong>
            </div>
            <Image src={demo.heroAsset} width={900} height={840} alt={`Visual ${demo.title}`} priority className={styles.lookbookImage} />
            <div className={styles.lookbookCaption}>
              <span>{demo.accentLabel}</span>
              <small>Lookbook, cerita motif, panduan ukuran, dan chat admin dalam satu alur.</small>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.collectionSection} id="paket">
        <div className={`container ${styles.collectionLayout}`}>
          <div className={styles.sectionIntro}>
            <Eyebrow className={styles.demoEyebrow}>Gaya lookbook premium</Eyebrow>
            <h2>{demo.productsTitle}</h2>
            <p>Demo retail dibuat lebih editorial agar produk terasa bernilai, cocok untuk fashion, craft, hampers, skincare, dan produk dengan katalog visual.</p>
            <HighlightList items={demo.highlights} className={styles.verticalHighlights} />
          </div>
          <ProductCards products={demo.products} mode="lookbook" />
        </div>
      </section>

      <section className={styles.editorialProofSection}>
        <div className={`container ${styles.editorialProofGrid}`}>
          <div>
            <Eyebrow className={styles.demoEyebrow}>Detail yang mengangkat brand</Eyebrow>
            <h2>{demo.proofTitle}</h2>
          </div>
          <ProofItems items={demo.proofItems} mode="editorial" />
          <Testimonial testimonial={demo.testimonial} />
        </div>
      </section>

      <FinalCta demo={demo} />
    </>
  );
}

function ServiceDemo({ demo }) {
  return (
    <>
      <section className={`${styles.variantHero} ${styles.serviceHero}`}>
        <div className={`container ${styles.serviceHeroGrid}`}>
          <div className={styles.serviceVisual}>
            <Image src={demo.heroAsset} width={900} height={840} alt={`Visual ${demo.title}`} priority className={styles.serviceImage} />
            <StatStrip stats={demo.stats} variant="floating" />
          </div>

          <div className={styles.servicePanel}>
            {demo.businessType && <Eyebrow className={styles.demoEyebrow}>{demo.businessType}</Eyebrow>}
            <h1>{demo.heroTitle}</h1>
            {demo.heroLead && <p className={styles.heroLead}>{demo.heroLead}</p>}
            <HighlightList items={demo.highlights} className={styles.serviceHighlights} />
            <HeroActions demo={demo} />
          </div>
        </div>
      </section>

      <section className={styles.servicePlannerSection} id="paket">
        <div className={`container ${styles.servicePlannerGrid}`}>
          <div className={styles.plannerIntro}>
            <Eyebrow className={styles.demoEyebrow}>Gaya booking jasa</Eyebrow>
            <h2>{demo.productsTitle}</h2>
            <p>Demo jasa dibuat seperti halaman booking: layanan jelas, estimasi terbaca, checklist kerja transparan, dan calon pelanggan langsung tahu langkah berikutnya.</p>
          </div>
          <ProductCards products={demo.products} mode="service" />
        </div>
      </section>

      <section className={styles.sopSection}>
        <div className={`container ${styles.sopGrid}`}>
          <div className={styles.sopPanel}>
            <Eyebrow className={styles.demoEyebrow}>SOP dan trust</Eyebrow>
            <h2>{demo.proofTitle}</h2>
            <ProofItems items={demo.proofItems} mode="checklist" />
          </div>
          <Testimonial testimonial={demo.testimonial} />
        </div>
      </section>

      <FinalCta demo={demo} />
    </>
  );
}

function WellnessDemo({ demo }) {
  const featuredClass = demo.products?.[0];

  return (
    <>
      <section className={`${styles.variantHero} ${styles.wellnessHero}`}>
        <div className={`container ${styles.wellnessHeroGrid}`}>
          <div className={styles.wellnessVisual}>
            <Image src={demo.heroAsset} width={900} height={840} alt={`Visual ${demo.title}`} priority className={styles.wellnessImage} />
            {featuredClass && (
              <div className={styles.wellnessScheduleCard}>
                <span>Jadwal cepat</span>
                <strong>{featuredClass.name}</strong>
                <small>{featuredClass.price}</small>
              </div>
            )}
          </div>

          <div className={styles.wellnessCopy}>
            {demo.businessType && <Eyebrow className={styles.demoEyebrow}>{demo.businessType}</Eyebrow>}
            <h1>{demo.heroTitle}</h1>
            {demo.heroLead && <p className={styles.heroLead}>{demo.heroLead}</p>}
            <HighlightList items={demo.highlights} className={styles.wellnessHighlights} />
            <HeroActions demo={demo} />
          </div>
        </div>
      </section>

      <section className={styles.wellnessScheduleSection} id="paket">
        <div className={`container ${styles.wellnessScheduleGrid}`}>
          <div className={styles.sectionIntro}>
            <Eyebrow className={styles.demoEyebrow}>Gaya jadwal kelas</Eyebrow>
            <h2>{demo.productsTitle}</h2>
            <p>Demo wellness dibuat seperti studio appointment: atmosfer dulu, pilihan kelas ringkas, lalu reservasi kelas coba tanpa membuat pengunjung membaca terlalu banyak.</p>
            <StatStrip stats={demo.stats} variant="strip" />
          </div>
          <ProductCards products={demo.products} mode="wellness" />
        </div>
      </section>

      <section className={styles.wellnessProofSection}>
        <div className={`container ${styles.wellnessProofGrid}`}>
          <div>
            <Eyebrow className={styles.demoEyebrow}>Rasa aman sebelum ikut kelas</Eyebrow>
            <h2>{demo.proofTitle}</h2>
            <ProofItems items={demo.proofItems} mode="wellness" />
          </div>
          <Testimonial testimonial={demo.testimonial} compact />
        </div>
      </section>

      <FinalCta demo={demo} />
    </>
  );
}

function LearningDemo({ demo }) {
  const primaryProgram = demo.products?.[0];

  return (
    <>
      <section className={`${styles.variantHero} ${styles.learningHero}`}>
        <div className={`container ${styles.learningHeroGrid}`}>
          <div className={styles.learningCopy}>
            {demo.businessType && <Eyebrow className={styles.demoEyebrow}>{demo.businessType}</Eyebrow>}
            <h1>{demo.heroTitle}</h1>
            {demo.heroLead && <p className={styles.heroLead}>{demo.heroLead}</p>}
            <HeroActions demo={demo} />
            <HighlightList items={demo.highlights} />
          </div>

          <div className={styles.learningBoard}>
            <span className={styles.assetLabel}>{demo.accentLabel}</span>
            <Image src={demo.heroAsset} width={900} height={840} alt={`Visual ${demo.title}`} priority className={styles.learningImage} />
            {primaryProgram && (
              <div className={styles.learningBoardFooter}>
                <span>Program awal</span>
                <strong>{primaryProgram.name}</strong>
                <small>{primaryProgram.desc}</small>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className={styles.learningProgramSection} id="paket">
        <div className={`container ${styles.learningProgramGrid}`}>
          <div className={styles.plannerIntro}>
            <Eyebrow className={styles.demoEyebrow}>Gaya learning planner</Eyebrow>
            <h2>{demo.productsTitle}</h2>
            <p>Demo edukasi dibuat untuk orang tua yang butuh kepastian: program jelas, hasil belajar terukur, jadwal trial mudah, dan tutor terasa kredibel sejak halaman pertama.</p>
          </div>
          <ProductCards products={demo.products} mode="learning" />
        </div>
      </section>

      <section className={styles.learningProofSection}>
        <div className={`container ${styles.learningProofGrid}`}>
          <div className={styles.learningProofIntro}>
            <Eyebrow className={styles.demoEyebrow}>Progress yang terlihat</Eyebrow>
            <h2>{demo.proofTitle}</h2>
            <StatStrip stats={demo.stats} variant="strip" />
          </div>
          <ProofItems items={demo.proofItems} mode="learning" />
          <Testimonial testimonial={demo.testimonial} />
        </div>
      </section>

      <FinalCta demo={demo} />
    </>
  );
}

function FloristDemo({ demo }) {
  return (
    <>
      <section className={`${styles.variantHero} ${styles.floristHero}`}>
        <div className={`container ${styles.floristHeroInner}`}>
          <div className={styles.floristCopy}>
            {demo.businessType && <Eyebrow className={styles.demoEyebrow}>{demo.businessType}</Eyebrow>}
            <h1>{demo.heroTitle}</h1>
            {demo.heroLead && <p className={styles.heroLead}>{demo.heroLead}</p>}
            <HeroActions demo={demo} />
          </div>

          <div className={styles.floristStage}>
            <div className={styles.floristImageWrap}>
              <span className={styles.assetLabel}>{demo.accentLabel}</span>
              <Image src={demo.heroAsset} width={900} height={840} alt={`Visual ${demo.title}`} priority className={styles.floristImage} />
            </div>
            <div className={styles.floristOccasionPanel}>
              <span>Occasion finder</span>
              <h2>Pilih momen, baru pilih rangkaian.</h2>
              <HighlightList items={demo.highlights} className={styles.floristHighlights} />
              <StatStrip stats={demo.stats} variant="stacked" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.floristCatalogSection} id="paket">
        <div className={`container ${styles.floristCatalogGrid}`}>
          <div className={styles.sectionIntro}>
            <Eyebrow className={styles.demoEyebrow}>Gaya event catalog</Eyebrow>
            <h2>{demo.productsTitle}</h2>
            <p>Demo florist dibuat seperti katalog berbasis momen: pengunjung memilih hadiah ulang tahun, ucapan kantor, atau dekor kecil, lalu langsung diarahkan ke chat order.</p>
          </div>
          <ProductCards products={demo.products} mode="florist" />
        </div>
      </section>

      <section className={styles.floristProofSection}>
        <div className={`container ${styles.floristProofGrid}`}>
          <ProofItems items={demo.proofItems} mode="florist" />
          <Testimonial testimonial={demo.testimonial} />
        </div>
      </section>

      <FinalCta demo={demo} />
    </>
  );
}

function GeneralDemo({ demo }) {
  return (
    <>
      <section className={`${styles.variantHero} ${styles.generalHero}`}>
        <div className={`container ${styles.generalHeroGrid}`}>
          <div className={styles.heroCopy}>
            {demo.businessType && <Eyebrow className={styles.demoEyebrow}>{demo.businessType}</Eyebrow>}
            <h1>{demo.heroTitle}</h1>
            {demo.heroLead && <p className={styles.heroLead}>{demo.heroLead}</p>}
            <HeroActions demo={demo} />
            <HighlightList items={demo.highlights} />
          </div>
          <div className={styles.generalVisual}>
            <Image src={demo.heroAsset} width={900} height={840} alt={`Visual ${demo.title}`} priority className={styles.heroImage} />
          </div>
        </div>
      </section>

      <section className={styles.productSection} id="paket">
        <div className={`container ${styles.sectionGrid}`}>
          <div className={styles.sectionIntro}>
            <Eyebrow className={styles.demoEyebrow}>{demo.title}</Eyebrow>
            <h2>{demo.productsTitle}</h2>
            <p>Pilih paket yang paling sesuai dengan kebutuhan Anda. Hubungi kami jika butuh kustomisasi.</p>
          </div>
          <ProductCards products={demo.products} />
        </div>
      </section>

      <section className={styles.proofSection}>
        <div className={`container ${styles.proofGrid}`}>
          <div className={styles.proofPanel}>
            <Eyebrow className={styles.demoEyebrow}>Alasan memilih kami</Eyebrow>
            <h2>{demo.proofTitle}</h2>
            <ProofItems items={demo.proofItems} />
          </div>
          <Testimonial testimonial={demo.testimonial} />
        </div>
      </section>

      <FinalCta demo={demo} />
    </>
  );
}

function FinalCta({ demo }) {
  return (
    <section className={styles.finalSection}>
      <div className={`container ${styles.finalBox}`}>
        <div className={styles.finalContent}>
          <Eyebrow className={styles.demoEyebrow}>Siap dipersonalisasi</Eyebrow>
          <h2>{demo.finalTitle}</h2>
          <p>Hubungi kami langsung via WhatsApp untuk memilih gaya demo ini atau menyesuaikannya dengan bisnis Anda.</p>
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
