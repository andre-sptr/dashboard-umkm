import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  console.log("Seeding dummy data for demonstration...")

  await prisma.client.upsert({
    where: { slug: "dapur-rendang-riau" },
    update: {
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
        { 
          name: "Nasi Box Rendang", 
          price: "Mulai Rp32rb", 
          desc: "Rendang sapi, nasi hangat, sambal ijo, sayur singkong, dan kerupuk.", 
          features: ["Cocok untuk meeting", "Pesan min. 10 box", "Gratis ongkir"],
          popular: true 
        },
        { 
          name: "Hampers Rendang", 
          price: "Mulai Rp185rb", 
          desc: "Kemasan premium untuk keluarga, kolega, dan hadiah hari besar.", 
          features: ["Packaging eksklusif", "Kartu ucapan", "Tahan 2 minggu"],
          popular: false 
        },
        { 
          name: "Rendang 500gr", 
          price: "Rp155rb", 
          desc: "Rendang kering tahan simpan dengan rasa pedas gurih khas Riau.", 
          features: ["Vakum higienis", "Tanpa pengawet", "Bisa kirim luar kota"],
          popular: false 
        }
      ]),
      highlights: JSON.stringify([
        { icon: "Flame", text: "Rendang sapi rempah kering" },
        { icon: "Briefcase", text: "Paket nasi box kantor" },
        { icon: "Gift", text: "Hampers rendang vakum" }
      ]),
      stats: JSON.stringify([
        { icon: "Star", value: "4.9/5", label: "rating pelanggan" },
        { icon: "Package", value: "3 paket", label: "nasi box & hampers" },
        { icon: "Clock", value: "H-1", label: "pre-order aman" }
      ]),
      proofTitle: "Rasa dulu, baru transaksi.",
      proofItems: JSON.stringify([
        { icon: "Camera", title: "Visual Menggugah Selera", desc: "Foto menu resolusi tinggi sebagai bukti visual kualitas bumbu dan potongan daging." },
        { icon: "MessageCircleHeart", title: "Testimoni Asli Pelanggan", desc: "Komentar positif dari pelanggan setia untuk meyakinkan pembeli baru." },
        { icon: "Send", title: "Pemesanan Bebas Ribet", desc: "Sistem order langsung ke WhatsApp dengan format pesan yang sudah terisi otomatis." }
      ]),
      testimonialQuote: "Biasanya order lewat chat berantakan. Dengan halaman ini tim kantor tinggal pilih paket dan kirim jumlah box.",
      testimonialPerson: "Mira, admin kantor Sudirman",
      finalTitle: "Buat pembeli lapar sebelum chat pertama.",
      metaTitle: "Demo Landing Page Dapur Rendang Riau | PekanWeb Studio",
      metaDescription: "Contoh landing page satu halaman untuk brand rendang rumahan premium di Pekanbaru."
    },
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
        { 
          name: "Nasi Box Rendang", 
          price: "Mulai Rp32rb", 
          desc: "Rendang sapi, nasi hangat, sambal ijo, sayur singkong, dan kerupuk.", 
          features: ["Cocok untuk meeting", "Pesan min. 10 box", "Gratis ongkir"],
          popular: true 
        },
        { 
          name: "Hampers Rendang", 
          price: "Mulai Rp185rb", 
          desc: "Kemasan premium untuk keluarga, kolega, dan hadiah hari besar.", 
          features: ["Packaging eksklusif", "Kartu ucapan", "Tahan 2 minggu"],
          popular: false 
        },
        { 
          name: "Rendang 500gr", 
          price: "Rp155rb", 
          desc: "Rendang kering tahan simpan dengan rasa pedas gurih khas Riau.", 
          features: ["Vakum higienis", "Tanpa pengawet", "Bisa kirim luar kota"],
          popular: false 
        }
      ]),
      highlights: JSON.stringify([
        { icon: "Flame", text: "Rendang sapi rempah kering" },
        { icon: "Briefcase", text: "Paket nasi box kantor" },
        { icon: "Gift", text: "Hampers rendang vakum" }
      ]),
      stats: JSON.stringify([
        { icon: "Star", value: "4.9/5", label: "rating pelanggan" },
        { icon: "Package", value: "3 paket", label: "nasi box & hampers" },
        { icon: "Clock", value: "H-1", label: "pre-order aman" }
      ]),
      proofTitle: "Rasa dulu, baru transaksi.",
      proofItems: JSON.stringify([
        { icon: "Camera", title: "Visual Menggugah Selera", desc: "Foto menu resolusi tinggi sebagai bukti visual kualitas bumbu dan potongan daging." },
        { icon: "MessageCircleHeart", title: "Testimoni Asli Pelanggan", desc: "Komentar positif dari pelanggan setia untuk meyakinkan pembeli baru." },
        { icon: "Send", title: "Pemesanan Bebas Ribet", desc: "Sistem order langsung ke WhatsApp dengan format pesan yang sudah terisi otomatis." }
      ]),
      testimonialQuote: "Biasanya order lewat chat berantakan. Dengan halaman ini tim kantor tinggal pilih paket dan kirim jumlah box.",
      testimonialPerson: "Mira, admin kantor Sudirman",
      finalTitle: "Buat pembeli lapar sebelum chat pertama.",
      metaTitle: "Demo Landing Page Dapur Rendang Riau | PekanWeb Studio",
      metaDescription: "Contoh landing page satu halaman untuk brand rendang rumahan premium di Pekanbaru."
    }
  })

  await prisma.client.upsert({
    where: { slug: "loka-batik-pekanbaru" },
    update: {
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
        { 
          name: "Kemeja Motif Lancang", 
          price: "Rp289rb", 
          desc: "Potongan rapi untuk kerja dan agenda formal.", 
          features: ["Bahan katun premium", "Furing halus", "Size S - XXL"],
          popular: true 
        },
        { 
          name: "Outer Melayu Modern", 
          price: "Rp349rb", 
          desc: "Layer ringan dengan detail motif Riau yang tetap modern.", 
          features: ["Potongan loose fit", "Kerah elegan", "Mudah dipadukan"],
          popular: false 
        },
        { 
          name: "Couple Seri Siak", 
          price: "Rp625rb", 
          desc: "Paket pasangan untuk acara keluarga, kantor, dan undangan.", 
          features: ["Bebas pilih size", "Tersedia motif anak", "Box eksklusif"],
          popular: true 
        }
      ]),
      highlights: JSON.stringify([
        { icon: "Shirt", text: "Kemeja batik pria" },
        { icon: "Scissors", text: "Outer batik wanita" },
        { icon: "Users", text: "Set couple acara resmi" }
      ]),
      stats: JSON.stringify([
        { icon: "Layers", value: "12+", label: "koleksi aktif" },
        { icon: "Ruler", value: "S-XXL", label: "size tersedia" },
        { icon: "Truck", value: "2 hari", label: "kirim Pekanbaru" }
      ]),
      proofTitle: "Yang dijual bukan cuma kain, tapi rasa percaya diri.",
      proofItems: JSON.stringify([
        { icon: "Image", title: "Lookbook Editorial", desc: "Penyajian foto ala majalah untuk mengangkat persepsi nilai produk." },
        { icon: "BookOpen", title: "Cerita di Balik Motif", desc: "Edukasi singkat tentang makna motif Riau untuk sentuhan emosional." },
        { icon: "Maximize", title: "Panduan Ukuran Jelas", desc: "Tabel ukuran yang detail agar pembeli nyaman bertransaksi online." }
      ]),
      testimonialQuote: "Koleksi jadi kelihatan jauh lebih butik. Customer langsung tanya size, bukan lagi minta foto satu-satu.",
      testimonialPerson: "Rani, owner Loka Batik",
      finalTitle: "Jadikan katalog batik terasa seperti butik digital.",
      metaTitle: "Demo Landing Page Loka Batik Pekanbaru | PekanWeb Studio",
      metaDescription: "Contoh landing page satu halaman untuk brand batik Pekanbaru dengan katalog premium."
    },
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
        { 
          name: "Kemeja Motif Lancang", 
          price: "Rp289rb", 
          desc: "Potongan rapi untuk kerja dan agenda formal.", 
          features: ["Bahan katun premium", "Furing halus", "Size S - XXL"],
          popular: true 
        },
        { 
          name: "Outer Melayu Modern", 
          price: "Rp349rb", 
          desc: "Layer ringan dengan detail motif Riau yang tetap modern.", 
          features: ["Potongan loose fit", "Kerah elegan", "Mudah dipadukan"],
          popular: false 
        },
        { 
          name: "Couple Seri Siak", 
          price: "Rp625rb", 
          desc: "Paket pasangan untuk acara keluarga, kantor, dan undangan.", 
          features: ["Bebas pilih size", "Tersedia motif anak", "Box eksklusif"],
          popular: true 
        }
      ]),
      highlights: JSON.stringify([
        { icon: "Shirt", text: "Kemeja batik pria" },
        { icon: "Scissors", text: "Outer batik wanita" },
        { icon: "Users", text: "Set couple acara resmi" }
      ]),
      stats: JSON.stringify([
        { icon: "Layers", value: "12+", label: "koleksi aktif" },
        { icon: "Ruler", value: "S-XXL", label: "size tersedia" },
        { icon: "Truck", value: "2 hari", label: "kirim Pekanbaru" }
      ]),
      proofTitle: "Yang dijual bukan cuma kain, tapi rasa percaya diri.",
      proofItems: JSON.stringify([
        { icon: "Image", title: "Lookbook Editorial", desc: "Penyajian foto ala majalah untuk mengangkat persepsi nilai produk." },
        { icon: "BookOpen", title: "Cerita di Balik Motif", desc: "Edukasi singkat tentang makna motif Riau untuk sentuhan emosional." },
        { icon: "Maximize", title: "Panduan Ukuran Jelas", desc: "Tabel ukuran yang detail agar pembeli nyaman bertransaksi online." }
      ]),
      testimonialQuote: "Koleksi jadi kelihatan jauh lebih butik. Customer langsung tanya size, bukan lagi minta foto satu-satu.",
      testimonialPerson: "Rani, owner Loka Batik",
      finalTitle: "Jadikan katalog batik terasa seperti butik digital.",
      metaTitle: "Demo Landing Page Loka Batik Pekanbaru | PekanWeb Studio",
      metaDescription: "Contoh landing page satu halaman untuk brand batik Pekanbaru dengan katalog premium."
    }
  })

  await prisma.client.upsert({
    where: { slug: "bersihkilap-home-care" },
    update: {
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
        { 
          name: "General Cleaning", 
          price: "Mulai Rp250rb", 
          desc: "Pembersihan rutin untuk rumah, kos, dan apartemen kecil.", 
          features: ["Sapu & Pel", "Lap Kaca & Perabot", "Durasi 2-3 jam"],
          popular: false 
        },
        { 
          name: "Deep Cleaning", 
          price: "Mulai Rp550rb", 
          desc: "Pembersihan detail untuk dapur, kamar mandi, kaca, dan sudut sulit.", 
          features: ["Kerak kamar mandi", "Lemari dapur", "Poles lantai dasar"],
          popular: true 
        },
        { 
          name: "Sofa & Kasur", 
          price: "Mulai Rp180rb", 
          desc: "Vacuum ekstraksi untuk noda, debu, dan bau tidak sedap.", 
          features: ["Vacuum tungau", "Cuci basah (ekstraksi)", "Kering 80% di tempat"],
          popular: false 
        }
      ]),
      highlights: JSON.stringify([
        { icon: "Sparkles", text: "Deep cleaning rumah" },
        { icon: "Droplets", text: "Cuci sofa & kasur" },
        { icon: "Wrench", text: "Cleaning pasca renovasi" }
      ]),
      stats: JSON.stringify([
        { icon: "Home", value: "4 layanan", label: "rumah & kos" },
        { icon: "CheckSquare", value: "SOP", label: "alat higienis" },
        { icon: "MapPin", value: "8 area", label: "Pekanbaru" }
      ]),
      proofTitle: "Trust datang dari detail yang terlihat.",
      proofItems: JSON.stringify([
        { icon: "ImagePlus", title: "Galeri Before-After", desc: "Tampilan visual nyata dari hasil pekerjaan untuk meyakinkan calon pelanggan." },
        { icon: "ListChecks", title: "Checklist Transparan", desc: "Rincian SOP apa saja yang dibersihkan agar ekspektasi pelanggan jelas." },
        { icon: "Map", title: "Cakupan Area Spesifik", desc: "Informasi area layanan mengurangi pertanyaan yang tidak relevan di chat." }
      ]),
      testimonialQuote: "Calon customer langsung kirim foto ruangan dan pilih layanan. Admin tidak perlu menjelaskan dari nol terus.",
      testimonialPerson: "Dimas, koordinator lapangan",
      finalTitle: "Buat booking jasa rumah terasa rapi sejak klik pertama.",
      metaTitle: "Demo Landing Page BersihKilap Home Care | PekanWeb Studio",
      metaDescription: "Contoh landing page satu halaman untuk jasa home cleaning profesional di Pekanbaru."
    },
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
        { 
          name: "General Cleaning", 
          price: "Mulai Rp250rb", 
          desc: "Pembersihan rutin untuk rumah, kos, dan apartemen kecil.", 
          features: ["Sapu & Pel", "Lap Kaca & Perabot", "Durasi 2-3 jam"],
          popular: false 
        },
        { 
          name: "Deep Cleaning", 
          price: "Mulai Rp550rb", 
          desc: "Pembersihan detail untuk dapur, kamar mandi, kaca, dan sudut sulit.", 
          features: ["Kerak kamar mandi", "Lemari dapur", "Poles lantai dasar"],
          popular: true 
        },
        { 
          name: "Sofa & Kasur", 
          price: "Mulai Rp180rb", 
          desc: "Vacuum ekstraksi untuk noda, debu, dan bau tidak sedap.", 
          features: ["Vacuum tungau", "Cuci basah (ekstraksi)", "Kering 80% di tempat"],
          popular: false 
        }
      ]),
      highlights: JSON.stringify([
        { icon: "Sparkles", text: "Deep cleaning rumah" },
        { icon: "Droplets", text: "Cuci sofa & kasur" },
        { icon: "Wrench", text: "Cleaning pasca renovasi" }
      ]),
      stats: JSON.stringify([
        { icon: "Home", value: "4 layanan", label: "rumah & kos" },
        { icon: "CheckSquare", value: "SOP", label: "alat higienis" },
        { icon: "MapPin", value: "8 area", label: "Pekanbaru" }
      ]),
      proofTitle: "Trust datang dari detail yang terlihat.",
      proofItems: JSON.stringify([
        { icon: "ImagePlus", title: "Galeri Before-After", desc: "Tampilan visual nyata dari hasil pekerjaan untuk meyakinkan calon pelanggan." },
        { icon: "ListChecks", title: "Checklist Transparan", desc: "Rincian SOP apa saja yang dibersihkan agar ekspektasi pelanggan jelas." },
        { icon: "Map", title: "Cakupan Area Spesifik", desc: "Informasi area layanan mengurangi pertanyaan yang tidak relevan di chat." }
      ]),
      testimonialQuote: "Calon customer langsung kirim foto ruangan dan pilih layanan. Admin tidak perlu menjelaskan dari nol terus.",
      testimonialPerson: "Dimas, koordinator lapangan",
      finalTitle: "Buat booking jasa rumah terasa rapi sejak klik pertama.",
      metaTitle: "Demo Landing Page BersihKilap Home Care | PekanWeb Studio",
      metaDescription: "Contoh landing page satu halaman untuk jasa home cleaning profesional di Pekanbaru."
    }
  })

  const additionalClients = [
    {
      slug: "studio-yoga-senja",
      businessName: "Studio Yoga Senja",
      businessType: "Wellness studio & kelas kecil",
      theme: "wellness",
      whatsappNumber: "6282387025429",
      whatsappMessage: "Halo Studio Yoga Senja, saya ingin reservasi kelas coba dan tanya jadwal minggu ini.",
      heroTitle: "Studio yoga kecil dengan jadwal rapi, kelas tenang, dan reservasi tanpa ribet.",
      heroLead: "Demo ini dibuat untuk bisnis wellness yang menjual atmosfer: calon peserta langsung melihat jadwal, paket kelas, instruktur, dan cara reservasi kelas coba.",
      primaryCta: "Reservasi Kelas",
      secondaryCta: "Lihat Jadwal",
      accentLabel: "Kelas kecil harian",
      heroAssetUrl: "/demo/studio-yoga-senja.svg",
      productsTitle: "Paket kelas dibuat mudah dibandingkan.",
      products: JSON.stringify([
        {
          name: "Drop-In Class",
          price: "Rp95rb",
          desc: "Satu sesi kelas kecil untuk mencoba flow yoga sore atau morning stretch.",
          features: ["Mat tersedia", "Maks. 10 peserta", "Cocok pemula"],
          popular: true
        },
        {
          name: "Paket 8 Sesi",
          price: "Rp620rb",
          desc: "Paket rutin satu bulan dengan jadwal fleksibel untuk membangun kebiasaan.",
          features: ["Bebas pilih kelas", "Reminder jadwal", "Progress ringan"],
          popular: false
        },
        {
          name: "Private Breathwork",
          price: "Rp280rb",
          desc: "Sesi privat untuk latihan napas, mobilitas, dan relaksasi setelah kerja.",
          features: ["1:1 dengan instruktur", "Durasi 75 menit", "Jadwal by request"],
          popular: false
        }
      ]),
      highlights: JSON.stringify([
        { icon: "Sparkles", text: "Kelas kecil dan tenang" },
        { icon: "Clock", text: "Jadwal pagi dan sore" },
        { icon: "Users", text: "Instruktur mendampingi pemula" }
      ]),
      stats: JSON.stringify([
        { icon: "Clock", value: "6 jadwal", label: "kelas mingguan" },
        { icon: "Users", value: "10 orang", label: "maksimum kelas" },
        { icon: "Star", value: "4.9/5", label: "review peserta" }
      ]),
      proofTitle: "Rasa tenang perlu terlihat sebelum calon peserta datang.",
      proofItems: JSON.stringify([
        { icon: "CheckSquare", title: "Jadwal Ringkas", desc: "Slot kelas terlihat jelas agar pengunjung langsung tahu kapan bisa mencoba." },
        { icon: "ListChecks", title: "Level Kelas Transparan", desc: "Setiap kelas diberi konteks untuk pemula, rutin, atau privat agar tidak salah pilih." },
        { icon: "MapPin", title: "Lokasi dan Reservasi Mudah", desc: "Informasi studio, kuota, dan tombol reservasi dibuat dekat dengan keputusan booking." }
      ]),
      testimonialQuote: "Banyak peserta baru akhirnya berani coba karena jadwal dan level kelas sudah jelas dari awal.",
      testimonialPerson: "Nadia, instruktur Studio Yoga Senja",
      finalTitle: "Buat studio wellness terasa tenang sejak halaman pertama.",
      metaTitle: "Demo Landing Page Studio Yoga Senja | PekanWeb Studio",
      metaDescription: "Contoh landing page satu halaman untuk studio yoga dan wellness dengan jadwal kelas."
    },
    {
      slug: "aksara-les-privat",
      businessName: "Aksara Les Privat",
      businessType: "Les privat & bimbel",
      theme: "learning",
      whatsappNumber: "6282387025429",
      whatsappMessage: "Halo Aksara Les Privat, saya ingin konsultasi program belajar dan jadwal trial untuk anak saya.",
      heroTitle: "Les privat yang terasa terukur: program, jadwal trial, dan laporan belajar dalam satu alur.",
      heroLead: "Demo ini dirancang untuk edukasi lokal yang perlu meyakinkan orang tua: program jelas, tutor kredibel, hasil belajar dipantau, dan trial class mudah diambil.",
      primaryCta: "Konsultasi Belajar",
      secondaryCta: "Lihat Program",
      accentLabel: "Trial class terjadwal",
      heroAssetUrl: "/demo/aksara-les-privat.svg",
      productsTitle: "Program belajar disusun seperti planner, bukan daftar paket biasa.",
      products: JSON.stringify([
        {
          name: "Trial 90 Menit",
          price: "Rp75rb",
          desc: "Sesi awal untuk cek kebutuhan belajar, karakter anak, dan target orang tua.",
          features: ["Assessment ringan", "Rekomendasi tutor", "Jadwal fleksibel"],
          popular: true
        },
        {
          name: "Matematika 1:1",
          price: "Rp520rb/bln",
          desc: "Pendampingan rutin untuk SD-SMP dengan latihan bertahap dan review mingguan.",
          features: ["8 pertemuan", "Laporan progress", "Latihan per bab"],
          popular: false
        },
        {
          name: "Kelas UTBK Mini",
          price: "Rp780rb/bln",
          desc: "Kelompok kecil untuk persiapan UTBK dengan target materi dan tryout berkala.",
          features: ["Maks. 6 siswa", "Bank soal", "Evaluasi skor"],
          popular: false
        }
      ]),
      highlights: JSON.stringify([
        { icon: "BookOpen", text: "Program per mapel" },
        { icon: "Users", text: "Tutor terkurasi" },
        { icon: "CheckSquare", text: "Laporan progress rutin" }
      ]),
      stats: JSON.stringify([
        { icon: "Users", value: "1:1", label: "opsi privat" },
        { icon: "BookOpen", value: "4 mapel", label: "program aktif" },
        { icon: "ListChecks", value: "Mingguan", label: "progress report" }
      ]),
      proofTitle: "Orang tua butuh bukti bahwa belajar anak dipantau.",
      proofItems: JSON.stringify([
        { icon: "ListChecks", title: "Learning Roadmap", desc: "Halaman menjelaskan alur assessment, jadwal, latihan, dan laporan agar ekspektasi jelas." },
        { icon: "Star", title: "Tutor Terlihat Kredibel", desc: "Profil pendek tutor dan fokus mapel membuat orang tua lebih nyaman sebelum trial." },
        { icon: "Send", title: "Brief Trial Langsung ke WhatsApp", desc: "CTA membawa konteks kelas, jenjang, dan kebutuhan anak ke percakapan admin." }
      ]),
      testimonialQuote: "Yang paling membantu adalah orang tua sudah paham sistem laporan sebelum chat. Konsultasinya jadi lebih cepat.",
      testimonialPerson: "Fadli, koordinator tutor Aksara",
      finalTitle: "Jadikan jasa edukasi terasa rapi, terukur, dan mudah dipercaya.",
      metaTitle: "Demo Landing Page Aksara Les Privat | PekanWeb Studio",
      metaDescription: "Contoh landing page satu halaman untuk les privat dan bimbel dengan learning planner."
    },
    {
      slug: "mekar-florist-hampers",
      businessName: "Mekar Florist & Hampers",
      businessType: "Florist & hampers event",
      theme: "florist",
      whatsappNumber: "6282387025429",
      whatsappMessage: "Halo Mekar Florist & Hampers, saya ingin pesan bouquet atau hampers untuk momen spesial.",
      heroTitle: "Bouquet, hampers, dan dekor kecil yang dipilih berdasarkan momen, bukan katalog panjang.",
      heroLead: "Demo ini menata florist seperti event catalog: pembeli memilih momen, melihat paket yang cocok, memahami timeline order, lalu chat dengan referensi yang jelas.",
      primaryCta: "Pesan Rangkaian",
      secondaryCta: "Lihat Paket",
      accentLabel: "Custom note tersedia",
      heroAssetUrl: "/demo/mekar-florist-hampers.svg",
      productsTitle: "Paket hadiah dibuat berdasarkan occasion.",
      products: JSON.stringify([
        {
          name: "Bouquet Signature",
          price: "Mulai Rp175rb",
          desc: "Rangkaian bunga segar untuk ulang tahun, wisuda, dan ucapan personal.",
          features: ["Pilih tone warna", "Kartu ucapan", "Foto sebelum kirim"],
          popular: true
        },
        {
          name: "Hampers Custom",
          price: "Mulai Rp260rb",
          desc: "Paket hadiah dengan snack, bunga kering, kartu, dan packaging premium.",
          features: ["Isi bisa request", "Box premium", "Ribbon matching"],
          popular: false
        },
        {
          name: "Dekor Meja Intimate",
          price: "Mulai Rp650rb",
          desc: "Dekor bunga kecil untuk dinner, lamaran sederhana, atau event kantor.",
          features: ["Moodboard awal", "Setup lokasi", "Sewa vas included"],
          popular: false
        }
      ]),
      highlights: JSON.stringify([
        { icon: "Gift", text: "Hadiah ulang tahun & wisuda" },
        { icon: "Camera", text: "Foto preview sebelum kirim" },
        { icon: "Send", text: "Same-day terbatas" }
      ]),
      stats: JSON.stringify([
        { icon: "Clock", value: "H+0", label: "same-day terbatas" },
        { icon: "Package", value: "3 paket", label: "buket & hampers" },
        { icon: "MessageCircleHeart", value: "Custom", label: "note personal" }
      ]),
      proofTitle: "Hadiah terasa lebih aman saat ekspektasi visualnya jelas.",
      proofItems: JSON.stringify([
        { icon: "ImagePlus", title: "Moodboard Occasion", desc: "Referensi warna dan momen membantu pembeli memilih tanpa harus scroll katalog panjang." },
        { icon: "Package", title: "Timeline Order Jelas", desc: "Informasi batas same-day, custom note, dan pengiriman mengurangi chat bolak-balik." },
        { icon: "MessageCircleHeart", title: "Preview Sebelum Kirim", desc: "Bukti foto sebelum pengiriman meningkatkan rasa aman saat membeli hadiah online." }
      ]),
      testimonialQuote: "Customer sekarang kirim momen dan tone warna. Admin lebih cepat kasih rekomendasi paket yang pas.",
      testimonialPerson: "Maya, owner Mekar Florist",
      finalTitle: "Buat katalog hadiah terasa personal dan mudah dipilih.",
      metaTitle: "Demo Landing Page Mekar Florist & Hampers | PekanWeb Studio",
      metaDescription: "Contoh landing page satu halaman untuk florist, hampers, dan event catalog."
    },
    {
      slug: "teras-kopi-roastery",
      businessName: "Teras Kopi Roastery",
      businessType: "Roastery & coffee bar",
      theme: "roastery",
      whatsappNumber: "6282387025429",
      whatsappMessage: "Halo Teras Kopi Roastery, saya ingin tanya roast drop terbaru dan paket langganan.",
      heroTitle: "Batch kopi rilis mingguan dengan tasting notes, stok jelas, dan order yang cepat.",
      heroLead: "Demo ini dibuat untuk roastery yang ingin menjual batch seperti product launch: profil rasa, tanggal roasting, paket retail, dan wholesale cafe tampil dalam alur yang ringkas.",
      primaryCta: "Order Roast Drop",
      secondaryCta: "Lihat Batch",
      accentLabel: "Roast Jumat ini",
      heroAssetUrl: "/demo/teras-kopi-roastery.svg",
      productsTitle: "Batch dan paket dibuat terasa seperti rilis produk.",
      products: JSON.stringify([
        {
          name: "Roast Drop 250gr",
          price: "Rp95rb",
          desc: "Single origin mingguan dengan tasting notes dan tanggal roasting yang jelas.",
          features: ["Roast date tertulis", "Profil filter atau espresso", "Stok terbatas"],
          popular: true
        },
        {
          name: "Langganan Dua Minggu",
          price: "Rp320rb/bln",
          desc: "Dua kiriman kopi per bulan untuk pelanggan rumah yang ingin eksplor rasa.",
          features: ["Kurasi berbeda", "Reminder kirim", "Bisa request grind size"],
          popular: false
        },
        {
          name: "Wholesale Cafe Pack",
          price: "Mulai Rp1,2jt",
          desc: "Paket biji kopi untuk cafe kecil, kantor, dan reseller kopi lokal.",
          features: ["Sample cupping", "Harga tier", "Support menu brew"],
          popular: false
        }
      ]),
      highlights: JSON.stringify([
        { icon: "Flame", text: "Roast batch mingguan" },
        { icon: "BookOpen", text: "Tasting notes jelas" },
        { icon: "Briefcase", text: "Wholesale cafe kecil" }
      ]),
      stats: JSON.stringify([
        { icon: "Clock", value: "Jumat", label: "roast day" },
        { icon: "Package", value: "4 batch", label: "stok aktif" },
        { icon: "Star", value: "86+", label: "subscriber" }
      ]),
      proofTitle: "Kopi premium perlu bukti rasa sebelum pembeli chat.",
      proofItems: JSON.stringify([
        { icon: "Camera", title: "Batch Terlihat Nyata", desc: "Visual roast drop, label tanggal, dan stok membuat produk terasa segar." },
        { icon: "BookOpen", title: "Tasting Notes Ringkas", desc: "Catatan rasa membantu pembeli memilih kopi tanpa harus paham istilah rumit." },
        { icon: "Send", title: "Order Wholesale Cepat", desc: "CTA memisahkan retail dan wholesale agar percakapan admin lebih terarah." }
      ]),
      testimonialQuote: "Pelanggan sekarang tanya batch Jumat, bukan minta daftar harga dari awal. Wholesale juga lebih jelas masuknya.",
      testimonialPerson: "Raka, head roaster Teras Kopi",
      finalTitle: "Buat roast drop terasa seperti rilis yang ditunggu.",
      metaTitle: "Demo Landing Page Teras Kopi Roastery | PekanWeb Studio",
      metaDescription: "Contoh landing page satu halaman untuk roastery, roast drop, dan paket kopi langganan."
    },
    {
      slug: "titik-refill-pekanbaru",
      businessName: "Titik Refill Pekanbaru",
      businessType: "Refill store ramah lingkungan",
      theme: "refill",
      whatsappNumber: "6282387025429",
      whatsappMessage: "Halo Titik Refill Pekanbaru, saya ingin tanya produk curah dan jadwal pickup refill.",
      heroTitle: "Belanja isi ulang dibuat praktis dengan kalkulator hemat plastik dan jadwal pickup.",
      heroLead: "Demo ini cocok untuk refill store yang perlu menjelaskan manfaat, produk curah, mekanisme bawa wadah, dan membership tanpa membuat pelanggan bingung.",
      primaryCta: "Mulai Refill",
      secondaryCta: "Lihat Produk",
      accentLabel: "Impact bulan ini",
      heroAssetUrl: "/demo/titik-refill-pekanbaru.svg",
      productsTitle: "Produk curah dibuat mudah dipilih dan diulang.",
      products: JSON.stringify([
        {
          name: "Sabun Curah Family",
          price: "Mulai Rp18rb",
          desc: "Sabun cuci, sabun piring, dan pembersih lantai isi ulang per liter.",
          features: ["Bawa wadah sendiri", "Aroma bisa pilih", "Harga per liter"],
          popular: true
        },
        {
          name: "Pantry Refill Kit",
          price: "Mulai Rp85rb",
          desc: "Paket starter untuk rumah yang ingin mulai mengurangi kemasan sekali pakai.",
          features: ["Label botol", "Panduan takaran", "Pickup terjadwal"],
          popular: false
        },
        {
          name: "Member Bulanan",
          price: "Rp35rb/bln",
          desc: "Benefit untuk keluarga yang belanja refill rutin setiap minggu.",
          features: ["Diskon produk curah", "Reminder stok", "Priority pickup"],
          popular: false
        }
      ]),
      highlights: JSON.stringify([
        { icon: "Droplets", text: "Produk curah rumah" },
        { icon: "Package", text: "Bawa wadah sendiri" },
        { icon: "CheckSquare", text: "Member refill bulanan" }
      ]),
      stats: JSON.stringify([
        { icon: "Package", value: "42 botol", label: "hemat plastik" },
        { icon: "MapPin", value: "3 titik", label: "pickup aktif" },
        { icon: "Star", value: "120+", label: "member rutin" }
      ]),
      proofTitle: "Dampak kecil terasa nyata saat angkanya terlihat.",
      proofItems: JSON.stringify([
        { icon: "ListChecks", title: "Impact Calculator", desc: "Estimasi botol yang dihemat membantu pelanggan memahami nilai refill." },
        { icon: "Map", title: "Pickup Slot Jelas", desc: "Jadwal dan titik pickup mengurangi pertanyaan operasional di chat." },
        { icon: "MessageCircleHeart", title: "Reminder Member", desc: "Member rutin diarahkan untuk mengisi ulang sebelum stok rumah habis." }
      ]),
      testimonialQuote: "Customer baru lebih cepat paham cara refill karena dampak dan langkah pickup langsung terlihat.",
      testimonialPerson: "Intan, pengelola Titik Refill",
      finalTitle: "Jadikan kebiasaan refill terasa mudah dimulai.",
      metaTitle: "Demo Landing Page Titik Refill Pekanbaru | PekanWeb Studio",
      metaDescription: "Contoh landing page satu halaman untuk refill store dan produk curah ramah lingkungan."
    },
    {
      slug: "dentara-gigi-keluarga",
      businessName: "Dentara Gigi Keluarga",
      businessType: "Klinik gigi keluarga",
      theme: "clinic",
      whatsappNumber: "6282387025429",
      whatsappMessage: "Halo Dentara Gigi Keluarga, saya ingin booking jadwal dan konsultasi keluhan gigi.",
      heroTitle: "Booking perawatan gigi terasa aman dengan triage keluhan dan jadwal yang jelas.",
      heroLead: "Demo ini menata klinik sebagai appointment flow: calon pasien memilih kebutuhan, melihat layanan utama, memahami estimasi kunjungan, lalu chat dengan konteks yang tepat.",
      primaryCta: "Booking Jadwal",
      secondaryCta: "Cek Layanan",
      accentLabel: "Triage awal",
      heroAssetUrl: "/demo/dentara-gigi-keluarga.svg",
      productsTitle: "Layanan disusun dari keluhan paling umum.",
      products: JSON.stringify([
        {
          name: "Konsultasi Keluhan",
          price: "Mulai Rp75rb",
          desc: "Pemeriksaan awal untuk nyeri, gusi sensitif, atau evaluasi perawatan.",
          features: ["Triage WhatsApp", "Estimasi tindakan", "Jadwal dokter"],
          popular: true
        },
        {
          name: "Scaling & Poles",
          price: "Mulai Rp250rb",
          desc: "Pembersihan karang gigi dan poles ringan untuk perawatan rutin.",
          features: ["Durasi 30-45 menit", "Edukasi kebersihan", "Reminder kontrol"],
          popular: false
        },
        {
          name: "Paket Anak",
          price: "Mulai Rp180rb",
          desc: "Kunjungan ramah anak untuk cek gigi, edukasi sikat, dan konsultasi orang tua.",
          features: ["Pendekatan pelan", "Catatan dokter", "Jadwal follow-up"],
          popular: false
        }
      ]),
      highlights: JSON.stringify([
        { icon: "CheckSquare", text: "Triage keluhan awal" },
        { icon: "Users", text: "Dokter keluarga" },
        { icon: "Clock", text: "Booking jadwal cepat" }
      ]),
      stats: JSON.stringify([
        { icon: "Clock", value: "30-45m", label: "estimasi kontrol" },
        { icon: "Star", value: "4.9/5", label: "review pasien" },
        { icon: "Users", value: "2 dokter", label: "jadwal praktik" }
      ]),
      proofTitle: "Klinik dipercaya saat prosesnya terasa jelas.",
      proofItems: JSON.stringify([
        { icon: "ListChecks", title: "Keluhan Difilter Dulu", desc: "Triage membuat admin tahu kebutuhan pasien sebelum menawarkan jadwal." },
        { icon: "CheckCircle", title: "Layanan Tidak Menakutkan", desc: "Penjelasan ringkas membantu pasien memahami tindakan tanpa bahasa rumit." },
        { icon: "MapPin", title: "Jadwal dan Lokasi Dekat CTA", desc: "Informasi praktis diletakkan dekat tombol booking agar keputusan cepat." }
      ]),
      testimonialQuote: "Pasien baru datang dengan konteks keluhan yang lebih jelas. Admin tidak perlu mengulang pertanyaan dasar.",
      testimonialPerson: "drg. Mita, Dentara Gigi Keluarga",
      finalTitle: "Buat booking klinik terasa jelas sebelum chat pertama.",
      metaTitle: "Demo Landing Page Dentara Gigi Keluarga | PekanWeb Studio",
      metaDescription: "Contoh landing page satu halaman untuk klinik gigi keluarga dengan appointment triage."
    },
    {
      slug: "garasi-ev-riau",
      businessName: "Garasi EV Riau",
      businessType: "Service motor listrik",
      theme: "ev",
      whatsappNumber: "6282387025429",
      whatsappMessage: "Halo Garasi EV Riau, saya ingin booking diagnostic motor listrik dan cek paket servis.",
      heroTitle: "Servis motor listrik dibuat rapi dengan diagnostic bay, estimasi, dan checklist baterai.",
      heroLead: "Demo ini dibuat untuk bengkel teknis yang perlu terlihat modern: pelanggan memilih keluhan, memahami paket servis, dan membawa data kendaraan sejak awal chat.",
      primaryCta: "Booking Diagnostic",
      secondaryCta: "Lihat Paket",
      accentLabel: "Battery health check",
      heroAssetUrl: "/demo/garasi-ev-riau.svg",
      productsTitle: "Paket servis dipisahkan dari keluhan teknis.",
      products: JSON.stringify([
        {
          name: "Battery Health Check",
          price: "Rp120rb",
          desc: "Pemeriksaan tegangan, konektor, performa charging, dan rekomendasi awal.",
          features: ["Laporan singkat", "Estimasi tindakan", "Durasi 45 menit"],
          popular: true
        },
        {
          name: "Tune Up Dinamo",
          price: "Mulai Rp280rb",
          desc: "Pemeriksaan motor, controller, kabel, rem, dan sensor dasar.",
          features: ["Checklist teknisi", "Test ride", "Garansi servis"],
          popular: false
        },
        {
          name: "Emergency Pickup",
          price: "Mulai Rp90rb",
          desc: "Penjemputan kendaraan dalam kota untuk kasus mogok atau gagal charge.",
          features: ["Area Pekanbaru", "Foto kondisi", "Update WhatsApp"],
          popular: false
        }
      ]),
      highlights: JSON.stringify([
        { icon: "Wrench", text: "Diagnostic motor listrik" },
        { icon: "CheckSquare", text: "Checklist baterai" },
        { icon: "Truck", text: "Pickup darurat kota" }
      ]),
      stats: JSON.stringify([
        { icon: "Clock", value: "45m", label: "cek awal" },
        { icon: "CheckSquare", value: "18 poin", label: "checklist" },
        { icon: "MapPin", value: "Kota", label: "pickup area" }
      ]),
      proofTitle: "Servis teknis perlu terlihat sistematis.",
      proofItems: JSON.stringify([
        { icon: "ListChecks", title: "Diagnostic Flow", desc: "Keluhan umum difilter agar teknisi siap sebelum kendaraan datang." },
        { icon: "Camera", title: "Bukti Kondisi", desc: "Foto dan catatan kondisi awal membantu membangun kepercayaan pelanggan." },
        { icon: "Send", title: "Booking dengan Data", desc: "CTA mengirim jenis kendaraan, keluhan, dan jadwal ke WhatsApp admin." }
      ]),
      testimonialQuote: "Customer jadi kirim keluhan dan tipe motor sejak awal. Pemeriksaan di bengkel lebih cepat.",
      testimonialPerson: "Andre, teknisi Garasi EV Riau",
      finalTitle: "Buat bengkel EV terasa modern dan mudah dipercaya.",
      metaTitle: "Demo Landing Page Garasi EV Riau | PekanWeb Studio",
      metaDescription: "Contoh landing page satu halaman untuk bengkel motor listrik dan diagnostic service."
    },
    {
      slug: "rakara-custom-furniture",
      businessName: "Rakara Custom Furniture",
      businessType: "Furniture custom",
      theme: "furniture",
      whatsappNumber: "6282387025429",
      whatsappMessage: "Halo Rakara Custom Furniture, saya ingin konsultasi furniture custom dan kirim ukuran ruangan.",
      heroTitle: "Furniture custom dimulai dari brief ruang, material, ukuran, dan estimasi yang rapi.",
      heroLead: "Demo ini membantu calon pembeli menyusun kebutuhan sebelum chat: pilih ruang, lihat material, pahami alur ukur, lalu kirim referensi desain ke WhatsApp.",
      primaryCta: "Kirim Brief",
      secondaryCta: "Lihat Paket",
      accentLabel: "Quote studio",
      heroAssetUrl: "/demo/rakara-custom-furniture.svg",
      productsTitle: "Brief dibuat lebih penting daripada katalog panjang.",
      products: JSON.stringify([
        {
          name: "Kitchen Set Compact",
          price: "Mulai Rp7,5jt",
          desc: "Kitchen set untuk rumah kecil dengan modul bawah, kabinet atas, dan top table.",
          features: ["Survey ukuran", "Pilihan finishing", "Estimasi 14 hari"],
          popular: true
        },
        {
          name: "Lemari Built-in",
          price: "Mulai Rp4,8jt",
          desc: "Lemari custom untuk kamar, laundry, atau storage ruang keluarga.",
          features: ["Desain 2D", "Material board", "Instalasi di tempat"],
          popular: false
        },
        {
          name: "Meja Kerja Custom",
          price: "Mulai Rp1,9jt",
          desc: "Meja kerja rumah atau kantor kecil dengan ukuran dan kabel management.",
          features: ["Ukuran fleksibel", "Pilihan warna", "Cable tray"],
          popular: false
        }
      ]),
      highlights: JSON.stringify([
        { icon: "Ruler", text: "Ukuran custom" },
        { icon: "Layers", text: "Material board" },
        { icon: "Image", text: "Moodboard desain" }
      ]),
      stats: JSON.stringify([
        { icon: "Ruler", value: "2D", label: "preview awal" },
        { icon: "Clock", value: "14-21d", label: "produksi" },
        { icon: "Package", value: "3 ruang", label: "paket contoh" }
      ]),
      proofTitle: "Furniture mahal butuh alur brief yang tidak asal chat.",
      proofItems: JSON.stringify([
        { icon: "ImagePlus", title: "Moodboard Sebelum Estimasi", desc: "Referensi style membantu admin memberi arahan harga yang realistis." },
        { icon: "Ruler", title: "Ukuran Jadi Konteks Utama", desc: "Calon pembeli diarahkan menyiapkan panjang, tinggi, dan foto ruang." },
        { icon: "CheckSquare", title: "Tahap Kerja Terbaca", desc: "Survey, desain, produksi, dan instalasi dijelaskan agar ekspektasi rapi." }
      ]),
      testimonialQuote: "Brief yang masuk lebih lengkap. Kami bisa balas estimasi awal tanpa tanya ukuran berulang.",
      testimonialPerson: "Rangga, Rakara Custom Furniture",
      finalTitle: "Ubah konsultasi furniture menjadi brief yang siap dihitung.",
      metaTitle: "Demo Landing Page Rakara Custom Furniture | PekanWeb Studio",
      metaDescription: "Contoh landing page satu halaman untuk furniture custom dan quote studio."
    },
    {
      slug: "sagara-frozen-seafood",
      businessName: "Sagara Frozen Seafood",
      businessType: "Frozen seafood",
      theme: "frozen",
      whatsappNumber: "6282387025429",
      whatsappMessage: "Halo Sagara Frozen Seafood, saya ingin cek stok harian dan paket reseller.",
      heroTitle: "Katalog seafood beku dengan stok harian, cold-chain, dan zona kirim yang jelas.",
      heroLead: "Demo ini dirancang untuk frozen food yang perlu membuktikan kualitas simpan: stok hari ini, standar suhu, paket reseller, dan pengiriman ditampilkan seperti inventory board.",
      primaryCta: "Cek Stok",
      secondaryCta: "Lihat Paket",
      accentLabel: "Stok freezer hari ini",
      heroAssetUrl: "/demo/sagara-frozen-seafood.svg",
      productsTitle: "Stok harian dibuat cepat dibandingkan.",
      products: JSON.stringify([
        {
          name: "Paket Udang Kupas",
          price: "Mulai Rp88rb",
          desc: "Udang kupas beku untuk rumah makan, catering kecil, dan keluarga.",
          features: ["Kemasan 500gr", "Vacuum pack", "Suhu terjaga"],
          popular: true
        },
        {
          name: "Mix Seafood 2kg",
          price: "Rp245rb",
          desc: "Campuran cumi, udang, ikan fillet, dan bakso seafood untuk stok dapur.",
          features: ["Paket hemat", "Siap masak", "Kirim same-day"],
          popular: false
        },
        {
          name: "Reseller Box",
          price: "Mulai Rp950rb",
          desc: "Paket reseller dengan pilihan SKU fast-moving dan margin jelas.",
          features: ["Harga tier", "Bantuan daftar menu", "Area eksklusif"],
          popular: false
        }
      ]),
      highlights: JSON.stringify([
        { icon: "Package", text: "Vacuum pack rapi" },
        { icon: "Clock", text: "Stok update harian" },
        { icon: "Truck", text: "Zona kirim terjadwal" }
      ]),
      stats: JSON.stringify([
        { icon: "Package", value: "18 SKU", label: "stok aktif" },
        { icon: "Clock", value: "H+0", label: "same-day" },
        { icon: "MapPin", value: "6 zona", label: "kirim kota" }
      ]),
      proofTitle: "Produk beku dipercaya saat rantai dinginnya jelas.",
      proofItems: JSON.stringify([
        { icon: "CheckSquare", title: "Cold-Chain Terbaca", desc: "Standar simpan dan packing dijelaskan agar pembeli tidak ragu kualitas." },
        { icon: "ListChecks", title: "Inventory Harian", desc: "Stok yang berubah cepat dibuat terlihat tanpa harus tanya satu per satu." },
        { icon: "Map", title: "Zona Kirim Spesifik", desc: "Area dan slot kirim memotong percakapan logistik yang berulang." }
      ]),
      testimonialQuote: "Reseller lebih cepat pilih paket karena stok dan zona kirim sudah jelas di halaman.",
      testimonialPerson: "Ayu, admin Sagara Frozen",
      finalTitle: "Buat produk beku terasa aman sebelum masuk freezer pelanggan.",
      metaTitle: "Demo Landing Page Sagara Frozen Seafood | PekanWeb Studio",
      metaDescription: "Contoh landing page satu halaman untuk frozen seafood, stok harian, dan reseller."
    },
    {
      slug: "musikala-studio",
      businessName: "Musikala Studio",
      businessType: "Studio musik latihan",
      theme: "music",
      whatsappNumber: "6282387025429",
      whatsappMessage: "Halo Musikala Studio, saya ingin booking room latihan dan cek jadwal kosong.",
      heroTitle: "Booking room latihan lebih cepat dengan jadwal, gear list, dan paket rekaman mini.",
      heroLead: "Demo ini dibuat untuk studio musik yang perlu menjual slot waktu: pengunjung melihat room, alat, paket, aturan, dan CTA booking dalam alur seperti scheduler.",
      primaryCta: "Booking Slot",
      secondaryCta: "Lihat Room",
      accentLabel: "Slot malam ini",
      heroAssetUrl: "/demo/musikala-studio.svg",
      productsTitle: "Room dan paket dibuat seperti jadwal operasional.",
      products: JSON.stringify([
        {
          name: "Room Band 2 Jam",
          price: "Rp140rb",
          desc: "Room latihan full band dengan drum, ampli gitar, bass, mic, dan mixer.",
          features: ["Maks. 6 orang", "AC dan monitor", "Booking DP"],
          popular: true
        },
        {
          name: "Recording Demo",
          price: "Mulai Rp450rb",
          desc: "Paket rekaman demo satu lagu untuk band, solois, atau konten live session.",
          features: ["Engineer basic", "Mix rough", "File WAV/MP3"],
          popular: false
        },
        {
          name: "Podcast Room",
          price: "Rp90rb/jam",
          desc: "Room kecil dengan mic podcast, lighting sederhana, dan backdrop bersih.",
          features: ["2 mic", "Lighting basic", "File mentah"],
          popular: false
        }
      ]),
      highlights: JSON.stringify([
        { icon: "Clock", text: "Jadwal room cepat" },
        { icon: "Wrench", text: "Gear list lengkap" },
        { icon: "Camera", text: "Paket rekaman mini" }
      ]),
      stats: JSON.stringify([
        { icon: "Clock", value: "6 slot", label: "hari ini" },
        { icon: "Users", value: "3 room", label: "aktif" },
        { icon: "Star", value: "4.8/5", label: "rating band" }
      ]),
      proofTitle: "Studio dipilih saat slot dan alatnya transparan.",
      proofItems: JSON.stringify([
        { icon: "ListChecks", title: "Gear List Terbuka", desc: "Daftar alat membuat band tahu apakah room cocok sebelum booking." },
        { icon: "Clock", title: "Slot Waktu Dominan", desc: "Jadwal kosong ditempatkan dekat CTA agar admin tidak cek manual berulang." },
        { icon: "CheckCircle", title: "Aturan Studio Ringkas", desc: "DP, durasi, dan kapasitas ditulis jelas untuk mengurangi miskomunikasi." }
      ]),
      testimonialQuote: "Band yang chat sudah tahu room, alat, dan slot. Booking malam jadi lebih cepat terkunci.",
      testimonialPerson: "Gilang, operator Musikala Studio",
      finalTitle: "Buat studio latihan terasa siap dibooking kapan saja.",
      metaTitle: "Demo Landing Page Musikala Studio | PekanWeb Studio",
      metaDescription: "Contoh landing page satu halaman untuk studio musik, scheduler room, dan paket recording."
    },
    {
      slug: "rutekita-shuttle",
      businessName: "RuteKita Shuttle",
      businessType: "Travel shuttle lokal",
      theme: "shuttle",
      whatsappNumber: "6282387025429",
      whatsappMessage: "Halo RuteKita Shuttle, saya ingin reservasi kursi dan cek jadwal keberangkatan.",
      heroTitle: "Rute, jam berangkat, titik jemput, dan sisa kursi terlihat dalam satu papan.",
      heroLead: "Demo ini menata travel shuttle seperti departure board: calon penumpang bisa membandingkan rute, jam, pickup point, fasilitas, dan reservasi WhatsApp tanpa membaca panjang.",
      primaryCta: "Reservasi Kursi",
      secondaryCta: "Lihat Rute",
      accentLabel: "Departure board",
      heroAssetUrl: "/demo/rutekita-shuttle.svg",
      productsTitle: "Rute dibuat seperti papan keberangkatan.",
      products: JSON.stringify([
        {
          name: "Pekanbaru - Duri",
          price: "Rp145rb",
          desc: "Keberangkatan pagi dan sore dengan pickup area kota.",
          features: ["07.00 & 16.00", "AC", "Bagasi kabin"],
          popular: true
        },
        {
          name: "Pekanbaru - Dumai",
          price: "Rp185rb",
          desc: "Shuttle harian untuk perjalanan kerja, keluarga, dan urusan pelabuhan.",
          features: ["2 jadwal", "Seat terbatas", "Drop point kota"],
          popular: false
        },
        {
          name: "Car Charter",
          price: "Mulai Rp850rb",
          desc: "Sewa mobil dan driver untuk rute custom dalam atau luar kota.",
          features: ["Jadwal fleksibel", "Driver lokal", "Include BBM kota"],
          popular: false
        }
      ]),
      highlights: JSON.stringify([
        { icon: "Map", text: "Rute antar kota" },
        { icon: "Clock", text: "Jam berangkat jelas" },
        { icon: "Users", text: "Sisa kursi cepat dicek" }
      ]),
      stats: JSON.stringify([
        { icon: "MapPin", value: "5 titik", label: "pickup" },
        { icon: "Clock", value: "2x", label: "jadwal harian" },
        { icon: "Users", value: "7 seat", label: "per armada" }
      ]),
      proofTitle: "Travel dipercaya saat jadwal dan titik jemput tidak samar.",
      proofItems: JSON.stringify([
        { icon: "Map", title: "Route Board Cepat", desc: "Rute utama dibuat seperti papan agar penumpang langsung membandingkan pilihan." },
        { icon: "Clock", title: "Jam Berangkat Terlihat", desc: "Jam dan titik pickup dekat dengan harga supaya booking tidak banyak tanya." },
        { icon: "Send", title: "Reservasi Berisi Konteks", desc: "CTA membawa rute, tanggal, jumlah kursi, dan titik jemput ke WhatsApp." }
      ]),
      testimonialQuote: "Penumpang chat sudah menyebut rute dan jam. Admin tinggal konfirmasi kursi dan pickup point.",
      testimonialPerson: "Dewi, admin RuteKita Shuttle",
      finalTitle: "Buat layanan shuttle terasa seteratur papan keberangkatan.",
      metaTitle: "Demo Landing Page RuteKita Shuttle | PekanWeb Studio",
      metaDescription: "Contoh landing page satu halaman untuk travel shuttle lokal dengan route board."
    },
    {
      slug: "terra-microgreens",
      businessName: "Terra Microgreens",
      businessType: "Urban farm subscription",
      theme: "farm",
      whatsappNumber: "6282387025429",
      whatsappMessage: "Halo Terra Microgreens, saya ingin cek jadwal panen dan paket langganan.",
      heroTitle: "Microgreens panen mingguan untuk cafe, katering, dan keluarga yang ingin stok segar.",
      heroLead: "Demo ini dibuat untuk urban farm yang perlu menjual freshness: kalender panen, paket langganan, edukasi nutrisi, dan order chef ditampilkan sesuai siklus panen.",
      primaryCta: "Cek Panen",
      secondaryCta: "Lihat Paket",
      accentLabel: "Harvest calendar",
      heroAssetUrl: "/demo/terra-microgreens.svg",
      productsTitle: "Paket disusun mengikuti jadwal panen.",
      products: JSON.stringify([
        {
          name: "Chef Box Weekly",
          price: "Mulai Rp165rb",
          desc: "Pilihan microgreens untuk cafe, plating, salad bar, dan menu sehat mingguan.",
          features: ["Panen H-1", "Mix 4 varietas", "Invoice mingguan"],
          popular: true
        },
        {
          name: "Family Greens Pack",
          price: "Rp85rb",
          desc: "Paket keluarga untuk topping makanan, jus, dan salad ringan di rumah.",
          features: ["2 varietas", "Panduan simpan", "Pickup Jumat"],
          popular: false
        },
        {
          name: "Trial Harvest",
          price: "Rp45rb",
          desc: "Paket coba untuk pelanggan baru yang ingin mengenal rasa dan cara pakai.",
          features: ["Sample mix", "Kartu nutrisi", "Resep singkat"],
          popular: false
        }
      ]),
      highlights: JSON.stringify([
        { icon: "Sparkles", text: "Panen H-1 order" },
        { icon: "Package", text: "Subscription cafe" },
        { icon: "BookOpen", text: "Panduan nutrisi" }
      ]),
      stats: JSON.stringify([
        { icon: "Clock", value: "Jumat", label: "hari panen" },
        { icon: "Package", value: "6 varian", label: "aktif" },
        { icon: "Briefcase", value: "12 cafe", label: "langganan" }
      ]),
      proofTitle: "Produk segar butuh kalender, bukan katalog statis.",
      proofItems: JSON.stringify([
        { icon: "Clock", title: "Harvest Calendar", desc: "Jadwal panen membuat pelanggan tahu kapan stok paling segar tersedia." },
        { icon: "BookOpen", title: "Edukasi Cara Pakai", desc: "Nutrisi dan ide menu membantu pembeli memakai microgreens dengan percaya diri." },
        { icon: "Briefcase", title: "Order Chef Terpisah", desc: "Cafe dan catering diarahkan ke paket langganan agar admin tidak mencampur order retail." }
      ]),
      testimonialQuote: "Cafe langganan lebih mudah menyesuaikan menu karena jadwal panen sudah terlihat sebelum order.",
      testimonialPerson: "Laras, founder Terra Microgreens",
      finalTitle: "Jadikan produk segar terlihat siap panen, bukan sekadar ready stock.",
      metaTitle: "Demo Landing Page Terra Microgreens | PekanWeb Studio",
      metaDescription: "Contoh landing page satu halaman untuk urban farm, microgreens, dan paket langganan panen."
    }
  ]

  for (const client of additionalClients) {
    const { slug, ...clientData } = client
    await prisma.client.upsert({
      where: { slug },
      update: clientData,
      create: { slug, ...clientData }
    })
  }

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
