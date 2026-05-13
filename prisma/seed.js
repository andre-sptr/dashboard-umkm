import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  console.log("Seeding dummy data for demonstration...")

  await prisma.client.upsert({
    where: { slug: "dapur-rendang-riau" },
    update: {},
    create: {
      slug: "dapur-rendang-riau",
      businessName: "Dapur Rendang Riau",
      businessType: "Kuliner rumahan premium",
      theme: "rendang",
      whatsappNumber: "6282387025429",
      whatsappMessage: "Halo Dapur Rendang Riau, saya ingin pesan paket rendang untuk acara/kantor.",
      heroTitle: "Rendang Riau pekat rempah, siap antar untuk makan kantor dan hampers keluarga.",
      heroLead: "Landing page ini dibuat untuk membuat calon pembeli langsung paham menu andalan, paket kantor, bukti rasa, dan cara pesan tanpa perlu bolak-balik chat.",
      primaryCta: "Pesan Rendang",
      secondaryCta: "Lihat Paket",
      accentLabel: "Masak harian terbatas",
      heroAssetUrl: "/demo/dapur-rendang-riau.svg",
      productsTitle: "Menu yang paling mudah dijual dari halaman pertama.",
      products: JSON.stringify([
        { name: "Nasi Box Rendang", price: "Mulai Rp32rb", desc: "Rendang sapi, nasi hangat, sambal ijo, sayur singkong, dan kerupuk." },
        { name: "Hampers Rendang", price: "Mulai Rp185rb", desc: "Kemasan premium untuk keluarga, kolega, dan hadiah hari besar." },
        { name: "Rendang 500gr", price: "Rp155rb", desc: "Rendang kering tahan simpan dengan rasa pedas gurih khas Riau." }
      ]),
      highlights: JSON.stringify(["Rendang sapi rempah kering", "Paket nasi box kantor", "Hampers rendang vakum"]),
      stats: JSON.stringify([
        { value: "4.9/5", label: "rating pelanggan" },
        { value: "3 paket", label: "nasi box & hampers" },
        { value: "H-1", label: "pre-order aman" }
      ]),
      proofTitle: "Rasa dulu, baru transaksi.",
      proofItems: JSON.stringify(["Foto menu besar sebagai bukti visual utama.", "Testimoni singkat untuk mengurangi ragu pembeli baru.", "CTA WhatsApp yang langsung membawa konteks pesanan."]),
      testimonialQuote: "Biasanya order lewat chat berantakan. Dengan halaman ini tim kantor tinggal pilih paket dan kirim jumlah box.",
      testimonialPerson: "Mira, admin kantor Sudirman",
      finalTitle: "Buat pembeli lapar sebelum chat pertama.",
      metaTitle: "Demo Landing Page Dapur Rendang Riau | PekanWeb Studio",
      metaDescription: "Contoh landing page satu halaman untuk brand rendang rumahan premium di Pekanbaru."
    }
  })

  await prisma.client.upsert({
    where: { slug: "loka-batik-pekanbaru" },
    update: {},
    create: {
      slug: "loka-batik-pekanbaru",
      businessName: "Loka Batik Pekanbaru",
      businessType: "Fashion & retail",
      theme: "batik",
      whatsappNumber: "6282387025429",
      whatsappMessage: "Halo Loka Batik Pekanbaru, saya ingin tanya koleksi batik yang ready dan ukuran yang tersedia.",
      heroTitle: "Batik Riau kontemporer untuk kerja, acara resmi, dan hadiah berkelas.",
      heroLead: "Demo ini menonjolkan lookbook, koleksi pilihan, rentang harga, ukuran, dan cerita motif agar produk terasa premium tanpa harus membangun toko online penuh.",
      primaryCta: "Chat Stylist",
      secondaryCta: "Lihat Koleksi",
      accentLabel: "Lookbook koleksi baru",
      heroAssetUrl: "/demo/loka-batik-pekanbaru.svg",
      productsTitle: "Katalog terasa seperti lookbook butik.",
      products: JSON.stringify([
        { name: "Kemeja Motif Lancang", price: "Rp289rb", desc: "Potongan rapi untuk kerja dan agenda formal." },
        { name: "Outer Melayu Modern", price: "Rp349rb", desc: "Layer ringan dengan detail motif Riau yang tetap modern." },
        { name: "Couple Seri Siak", price: "Rp625rb", desc: "Paket pasangan untuk acara keluarga, kantor, dan undangan." }
      ]),
      highlights: JSON.stringify(["Kemeja batik pria", "Outer batik wanita", "Set couple acara resmi"]),
      stats: JSON.stringify([
        { value: "12+", label: "koleksi aktif" },
        { value: "S-XXL", label: "size tersedia" },
        { value: "2 hari", label: "kirim Pekanbaru" }
      ]),
      proofTitle: "Yang dijual bukan cuma kain, tapi rasa percaya diri.",
      proofItems: JSON.stringify(["Lookbook editorial untuk membuat koleksi terlihat premium.", "Size guide singkat supaya pembeli tidak ragu memilih ukuran.", "Cerita motif memberi alasan emosional untuk membeli."]),
      testimonialQuote: "Koleksi jadi kelihatan jauh lebih butik. Customer langsung tanya size, bukan lagi minta foto satu-satu.",
      testimonialPerson: "Rani, owner Loka Batik",
      finalTitle: "Jadikan katalog batik terasa seperti butik digital.",
      metaTitle: "Demo Landing Page Loka Batik Pekanbaru | PekanWeb Studio",
      metaDescription: "Contoh landing page satu halaman untuk brand batik Pekanbaru dengan katalog premium."
    }
  })

  await prisma.client.upsert({
    where: { slug: "bersihkilap-home-care" },
    update: {},
    create: {
      slug: "bersihkilap-home-care",
      businessName: "BersihKilap Home Care",
      businessType: "Jasa home cleaning",
      theme: "cleaning",
      whatsappNumber: "6282387025429",
      whatsappMessage: "Halo BersihKilap Home Care, saya ingin booking layanan cleaning dan tanya estimasi harga.",
      heroTitle: "Booking cleaning rumah jadi jelas: layanan, area, estimasi, dan jadwal dalam satu halaman.",
      heroLead: "Demo ini dibuat untuk jasa profesional yang perlu membangun trust cepat: bukti before-after, daftar layanan, area kerja, checklist SOP, dan tombol booking WhatsApp.",
      primaryCta: "Booking Jadwal",
      secondaryCta: "Cek Layanan",
      accentLabel: "Tim datang terjadwal",
      heroAssetUrl: "/demo/bersihkilap-home-care.svg",
      productsTitle: "Layanan dibuat mudah dipilih sebelum chat.",
      products: JSON.stringify([
        { name: "General Cleaning", price: "Mulai Rp250rb", desc: "Pembersihan rutin untuk rumah, kos, dan apartemen kecil." },
        { name: "Deep Cleaning", price: "Mulai Rp550rb", desc: "Pembersihan detail untuk dapur, kamar mandi, kaca, dan sudut sulit." },
        { name: "Sofa & Kasur", price: "Mulai Rp180rb", desc: "Vacuum ekstraksi untuk noda, debu, dan bau tidak sedap." }
      ]),
      highlights: JSON.stringify(["Deep cleaning rumah", "Cuci sofa & kasur", "Cleaning pasca renovasi"]),
      stats: JSON.stringify([
        { value: "4 layanan", label: "rumah & kos" },
        { value: "SOP", label: "alat higienis" },
        { value: "8 area", label: "Pekanbaru" }
      ]),
      proofTitle: "Trust datang dari detail yang terlihat.",
      proofItems: JSON.stringify(["Before-after besar agar hasil kerja cepat terbaca.", "Checklist SOP untuk menunjukkan proses profesional.", "Area layanan dan estimasi harga mengurangi chat berulang."]),
      testimonialQuote: "Calon customer langsung kirim foto ruangan dan pilih layanan. Admin tidak perlu menjelaskan dari nol terus.",
      testimonialPerson: "Dimas, koordinator lapangan",
      finalTitle: "Buat booking jasa rumah terasa rapi sejak klik pertama.",
      metaTitle: "Demo Landing Page BersihKilap Home Care | PekanWeb Studio",
      metaDescription: "Contoh landing page satu halaman untuk jasa home cleaning profesional di Pekanbaru."
    }
  })

  console.log("Seeding finished!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
