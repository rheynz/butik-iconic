import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    nama: "Dress Satin Elegan",
    harga: 325000,
    deskripsi: "Dress satin premium dengan potongan modern yang memberikan siluet ramping. Cocok untuk acara formal maupun semi-formal. Bahan adem dan tidak menerawang.",
    ukuran: ["S", "M", "L", "XL"],
    kategori: "Dress",
    foto: "https://picsum.photos/id/431/800/1000",
    status: "available"
  },
  {
    id: 2,
    nama: "Blouse Sutra Minimalis",
    harga: 210000,
    deskripsi: "Atasan blouse dengan bahan menyerupai sutra, sangat lembut di kulit. Desain minimalis dengan detail kancing mutiara.",
    ukuran: ["S", "M", "L"],
    kategori: "Atasan",
    foto: "https://picsum.photos/id/331/800/1000",
    status: "available"
  },
  {
    id: 3,
    nama: "Rok Plisket Earth Tone",
    harga: 185000,
    deskripsi: "Rok plisket (pleated skirt) warna earth tone yang mudah dipadukan. Pinggang karet elastis yang nyaman dipakai seharian.",
    ukuran: ["All Size"],
    kategori: "Bawahan",
    foto: "https://picsum.photos/id/656/800/1000",
    status: "available"
  },
  {
    id: 4,
    nama: "Tunik Floral Vintage",
    harga: 245000,
    deskripsi: "Tunik panjang dengan motif bunga vintage yang manis. Bahan katun rayon premium yang jatuh dan sejuk.",
    ukuran: ["M", "L", "XL", "XXL"],
    kategori: "Atasan",
    foto: "https://picsum.photos/id/64/800/1000",
    status: "available"
  },
  {
    id: 5,
    nama: "Outer Kimono Linen",
    harga: 195000,
    deskripsi: "Luaran model kimono dari bahan linen alami. Memberikan kesan kasual namun tetap rapi.",
    ukuran: ["All Size"],
    kategori: "Atasan",
    foto: "https://picsum.photos/id/839/800/1000",
    status: "available"
  },
  {
    id: 6,
    nama: "Celana Kulot High Waist",
    harga: 175000,
    deskripsi: "Celana kulot potongan high waist yang membuat kaki terlihat jenjang. Tersedia dalam warna hitam dan cream.",
    ukuran: ["S", "M", "L", "XL"],
    kategori: "Bawahan",
    foto: "https://picsum.photos/id/1027/800/1000",
    status: "sold_out"
  }
];