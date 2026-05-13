import { PrismaClient } from "@prisma/client"
import { Pool } from "pg"
import { PrismaPg } from "@prisma/adapter-pg"

const connectionString = process.env.DATABASE_URL
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

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
      products: [
        { name: "Nasi Box Rendang", price: "Mulai Rp32rb", desc: "Rendang sapi, nasi hangat, sambal ijo, sayur singkong, dan kerupuk." },
        { name: "Hampers Rendang", price: "Mulai Rp185rb", desc: "Kemasan premium untuk keluarga, kolega, dan hadiah hari besar." },
        { name: "Rendang 500gr", price: "Rp155rb", desc: "Rendang kering tahan simpan dengan rasa pedas gurih khas Riau." }
      ],
      highlights: ["Rendang sapi rempah kering", "Paket nasi box kantor", "Hampers rendang vakum"],
      stats: [
        { value: "4.9/5", label: "rating pelanggan" },
        { value: "3 paket", label: "nasi box & hampers" },
        { value: "H-1", label: "pre-order aman" }
      ],
      proofTitle: "Rasa dulu, baru transaksi.",
      proofItems: ["Foto menu besar sebagai bukti visual utama.", "Testimoni singkat untuk mengurangi ragu pembeli baru.", "CTA WhatsApp yang langsung membawa konteks pesanan."],
      testimonialQuote: "Biasanya order lewat chat berantakan. Dengan halaman ini tim kantor tinggal pilih paket dan kirim jumlah box.",
      testimonialPerson: "Mira, admin kantor Sudirman",
      finalTitle: "Buat pembeli lapar sebelum chat pertama.",
      metaTitle: "Demo Landing Page Dapur Rendang Riau | PekanWeb Studio",
      metaDescription: "Contoh landing page satu halaman untuk brand rendang rumahan premium di Pekanbaru."
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
