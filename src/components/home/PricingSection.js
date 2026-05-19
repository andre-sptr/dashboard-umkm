'use client';

import { useState } from 'react';
import Eyebrow from '@/components/UI/Eyebrow';
import MagneticButton from '@/components/fx/MagneticButton';
import ScrollReveal from '@/components/fx/ScrollReveal';
import SplitHeading from '@/components/fx/SplitHeading';
import styles from '@/app/page.module.css';

const ADD_ONS = [
  { id: 'catalog', name: 'Katalog Produk Custom', price: 500000 },
  { id: 'ai', name: 'AI Chatbot Lanjutan', price: 750000 },
  { id: 'domain', name: 'Domain .com / .co.id', price: 250000 },
  { id: 'copywriting', name: 'Copywriting Premium', price: 300000 },
];

export default function PricingSection() {
  const [selectedAddons, setSelectedAddons] = useState([]);
  const basePrice = 1000000;

  const handleToggleAddon = (id) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const totalPrice = basePrice + selectedAddons.reduce((acc, curr) => {
    const addon = ADD_ONS.find(item => item.id === curr);
    return acc + (addon ? addon.price : 0);
  }, 0);

  const formatRupiah = (number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);

  const currentWhatsappMessage = `Halo PekanWeb Studio, saya tertarik dengan paket Landing Page UMKM. Estimasi simulasi harga yang saya buat adalah ${formatRupiah(totalPrice)}.`;
  const dynamicWhatsappUrl = `https://wa.me/6282387025429?text=${encodeURIComponent(currentWhatsappMessage)}`;

  return (
    <section className={styles.pricingSection}>
      <div className={`container ${styles.pricingBox}`}>
        <div>
          <Eyebrow>Pricing simulator</Eyebrow>
          <SplitHeading as="h2">
            Simulasikan investasi landing page Anda.
          </SplitHeading>
          <ScrollReveal>
            <p>
              Sesuaikan dengan kebutuhan bisnis Anda. Paket dasar sudah mencakup landing page, integrasi tombol WhatsApp, dan desain responsif premium.
            </p>
            <div className={styles.addonList}>
              <h3 className={styles.addonTitle}>Tambahan Opsional:</h3>
              {ADD_ONS.map((addon) => (
                <label key={addon.id} className={styles.addonOption}>
                  <input
                    type="checkbox"
                    checked={selectedAddons.includes(addon.id)}
                    onChange={() => handleToggleAddon(addon.id)}
                    className={styles.addonCheckbox}
                  />
                  <div className={styles.addonMeta}>
                    <span>{addon.name}</span>
                    <span className={styles.addonPrice}>+ {formatRupiah(addon.price)}</span>
                  </div>
                </label>
              ))}
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.2}>
          <div className={styles.pricePanel}>
            <span>Estimasi Total</span>
            <strong className={styles.priceValue}>{formatRupiah(totalPrice)}</strong>
            <small>Termasuk paket dasar {formatRupiah(basePrice)}</small>
            <MagneticButton as="a" href={dynamicWhatsappUrl} target="_blank" rel="noopener noreferrer" fullWidth>
              Kirim Simulasi via WA →
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
