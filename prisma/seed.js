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
