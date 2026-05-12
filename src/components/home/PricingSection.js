'use client';

import { useState } from 'react';
import Button from '@/components/UI/Button';
import Reveal from '@/components/UI/Reveal';
import { whatsappUrl } from '@/data/homeData';
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

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
  };

  const currentWhatsappMessage = `Halo PekanWeb Studio, saya tertarik dengan paket Landing Page UMKM. Estimasi simulasi harga yang saya buat adalah ${formatRupiah(totalPrice)}.`;
  const dynamicWhatsappUrl = `https://wa.me/6282387025429?text=${encodeURIComponent(currentWhatsappMessage)}`;

  return (
    <section className={styles.pricingSection}>
      <div className={`container ${styles.pricingBox}`}>
        <Reveal>
          <div>
            <p className={styles.eyebrow}>Investasi awal</p>
            <h2>Simulasikan investasi landing page UMKM Anda.</h2>
            <p>
              Sesuaikan dengan kebutuhan bisnis Anda. Paket dasar sudah mencakup landing page, integrasi tombol WhatsApp, dan desain responsif.
            </p>
            
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Tambahan Opsional:</h3>
              {ADD_ONS.map((addon) => (
                <label key={addon.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                  <input 
                    type="checkbox" 
                    checked={selectedAddons.includes(addon.id)}
                    onChange={() => handleToggleAddon(addon.id)}
                    style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: '#f0b955' }}
                  />
                  <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: '500' }}>{addon.name}</span>
                    <span style={{ color: '#f0b955', fontWeight: 'bold' }}>+ {formatRupiah(addon.price)}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className={styles.pricePanel}>
            <span>Estimasi Total</span>
            <strong style={{ fontSize: '42px', wordBreak: 'break-word' }}>{formatRupiah(totalPrice)}</strong>
            <small>Termasuk paket dasar {formatRupiah(basePrice)}</small>
            <Button as="a" href={dynamicWhatsappUrl} target="_blank" rel="noopener noreferrer" fullWidth>
              Kirim Simulasi via WA
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
