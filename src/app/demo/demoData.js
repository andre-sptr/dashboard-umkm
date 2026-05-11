const whatsappNumber = '6282387025429';

function buildWhatsappUrl(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const demoPages = [
  {
    slug: 'dapur-rendang-riau',
    theme: 'rendang',
    title: 'Dapur Rendang Riau',
    businessType: 'Kuliner rumahan premium',
    metaTitle: 'Demo Landing Page Dapur Rendang Riau | PekanWeb Studio',
    metaDescription: 'Contoh landing page satu halaman untuk brand rendang rumahan premium di Pekanbaru.',
    heroTitle: 'Rendang Riau pekat rempah, siap antar untuk makan kantor dan hampers keluarga.',
    heroLead:
      'Landing page ini dibuat untuk membuat calon pembeli langsung paham menu andalan, paket kantor, bukti rasa, dan cara pesan tanpa perlu bolak-balik chat.',
    heroAsset: '/demo/dapur-rendang-riau.svg',
    primaryCta: 'Pesan Rendang',
    secondaryCta: 'Lihat Paket',
    whatsappUrl: buildWhatsappUrl('Halo Dapur Rendang Riau, saya ingin pesan paket rendang untuk acara/kantor.'),
    accentLabel: 'Masak harian terbatas',
    stats: [
      { value: '4.9/5', label: 'rating pelanggan' },
      { value: '3 paket', label: 'nasi box & hampers' },
      { value: 'H-1', label: 'pre-order aman' },
    ],
    highlights: [
      'Rendang sapi rempah kering',
      'Paket nasi box kantor',
      'Hampers rendang vakum',
    ],
    productsTitle: 'Menu yang paling mudah dijual dari halaman pertama.',
    products: [
      { name: 'Nasi Box Rendang', price: 'Mulai Rp32rb', desc: 'Rendang sapi, nasi hangat, sambal ijo, sayur singkong, dan kerupuk.' },
      { name: 'Hampers Rendang', price: 'Mulai Rp185rb', desc: 'Kemasan premium untuk keluarga, kolega, dan hadiah hari besar.' },
      { name: 'Rendang 500gr', price: 'Rp155rb', desc: 'Rendang kering tahan simpan dengan rasa pedas gurih khas Riau.' },
    ],
    proofTitle: 'Rasa dulu, baru transaksi.',
    proofItems: [
      'Foto menu besar sebagai bukti visual utama.',
      'Testimoni singkat untuk mengurangi ragu pembeli baru.',
      'CTA WhatsApp yang langsung membawa konteks pesanan.',
    ],
    testimonial: {
      quote: 'Biasanya order lewat chat berantakan. Dengan halaman ini tim kantor tinggal pilih paket dan kirim jumlah box.',
      person: 'Mira, admin kantor Sudirman',
    },
    finalTitle: 'Buat pembeli lapar sebelum chat pertama.',
  },
  {
    slug: 'loka-batik-pekanbaru',
    theme: 'batik',
    title: 'Loka Batik Pekanbaru',
    businessType: 'Fashion & retail',
    metaTitle: 'Demo Landing Page Loka Batik Pekanbaru | PekanWeb Studio',
    metaDescription: 'Contoh landing page satu halaman untuk brand batik Pekanbaru dengan katalog premium.',
    heroTitle: 'Batik Riau kontemporer untuk kerja, acara resmi, dan hadiah berkelas.',
    heroLead:
      'Demo ini menonjolkan lookbook, koleksi pilihan, rentang harga, ukuran, dan cerita motif agar produk terasa premium tanpa harus membangun toko online penuh.',
    heroAsset: '/demo/loka-batik-pekanbaru.svg',
    primaryCta: 'Chat Stylist',
    secondaryCta: 'Lihat Koleksi',
    whatsappUrl: buildWhatsappUrl('Halo Loka Batik Pekanbaru, saya ingin tanya koleksi batik yang ready dan ukuran yang tersedia.'),
    accentLabel: 'Lookbook koleksi baru',
    stats: [
      { value: '12+', label: 'koleksi aktif' },
      { value: 'S-XXL', label: 'size tersedia' },
      { value: '2 hari', label: 'kirim Pekanbaru' },
    ],
    highlights: [
      'Kemeja batik pria',
      'Outer batik wanita',
      'Set couple acara resmi',
    ],
    productsTitle: 'Katalog terasa seperti lookbook butik.',
    products: [
      { name: 'Kemeja Motif Lancang', price: 'Rp289rb', desc: 'Potongan rapi untuk kerja dan agenda formal.' },
      { name: 'Outer Melayu Modern', price: 'Rp349rb', desc: 'Layer ringan dengan detail motif Riau yang tetap modern.' },
      { name: 'Couple Seri Siak', price: 'Rp625rb', desc: 'Paket pasangan untuk acara keluarga, kantor, dan undangan.' },
    ],
    proofTitle: 'Yang dijual bukan cuma kain, tapi rasa percaya diri.',
    proofItems: [
      'Lookbook editorial untuk membuat koleksi terlihat premium.',
      'Size guide singkat supaya pembeli tidak ragu memilih ukuran.',
      'Cerita motif memberi alasan emosional untuk membeli.',
    ],
    testimonial: {
      quote: 'Koleksi jadi kelihatan jauh lebih butik. Customer langsung tanya size, bukan lagi minta foto satu-satu.',
      person: 'Rani, owner Loka Batik',
    },
    finalTitle: 'Jadikan katalog batik terasa seperti butik digital.',
  },
  {
    slug: 'bersihkilap-home-care',
    theme: 'cleaning',
    title: 'BersihKilap Home Care',
    businessType: 'Jasa home cleaning',
    metaTitle: 'Demo Landing Page BersihKilap Home Care | PekanWeb Studio',
    metaDescription: 'Contoh landing page satu halaman untuk jasa home cleaning profesional di Pekanbaru.',
    heroTitle: 'Booking cleaning rumah jadi jelas: layanan, area, estimasi, dan jadwal dalam satu halaman.',
    heroLead:
      'Demo ini dibuat untuk jasa profesional yang perlu membangun trust cepat: bukti before-after, daftar layanan, area kerja, checklist SOP, dan tombol booking WhatsApp.',
    heroAsset: '/demo/bersihkilap-home-care.svg',
    primaryCta: 'Booking Jadwal',
    secondaryCta: 'Cek Layanan',
    whatsappUrl: buildWhatsappUrl('Halo BersihKilap Home Care, saya ingin booking layanan cleaning dan tanya estimasi harga.'),
    accentLabel: 'Tim datang terjadwal',
    stats: [
      { value: '4 layanan', label: 'rumah & kos' },
      { value: 'SOP', label: 'alat higienis' },
      { value: '8 area', label: 'Pekanbaru' },
    ],
    highlights: [
      'Deep cleaning rumah',
      'Cuci sofa & kasur',
      'Cleaning pasca renovasi',
    ],
    productsTitle: 'Layanan dibuat mudah dipilih sebelum chat.',
    products: [
      { name: 'General Cleaning', price: 'Mulai Rp250rb', desc: 'Pembersihan rutin untuk rumah, kos, dan apartemen kecil.' },
      { name: 'Deep Cleaning', price: 'Mulai Rp550rb', desc: 'Pembersihan detail untuk dapur, kamar mandi, kaca, dan sudut sulit.' },
      { name: 'Sofa & Kasur', price: 'Mulai Rp180rb', desc: 'Vacuum ekstraksi untuk noda, debu, dan bau tidak sedap.' },
    ],
    proofTitle: 'Trust datang dari detail yang terlihat.',
    proofItems: [
      'Before-after besar agar hasil kerja cepat terbaca.',
      'Checklist SOP untuk menunjukkan proses profesional.',
      'Area layanan dan estimasi harga mengurangi chat berulang.',
    ],
    testimonial: {
      quote: 'Calon customer langsung kirim foto ruangan dan pilih layanan. Admin tidak perlu menjelaskan dari nol terus.',
      person: 'Dimas, koordinator lapangan',
    },
    finalTitle: 'Buat booking jasa rumah terasa rapi sejak klik pertama.',
  },
];

export function getDemoPage(slug) {
  return demoPages.find((demo) => demo.slug === slug);
}
