export interface Product {
  id: number;
  nama: string;
  harga: number; // Harga jual (setelah diskon)
  harga_asli?: number; // Optional: Harga sebelum diskon (untuk fitur coret)
  deskripsi: string;
  ukuran: string[];
  kategori: string;
  foto: string;
  video?: string; // Optional: Link to Instagram Reel / YouTube / MP4
  status: 'available' | 'sold_out';
}

export type Category = 'All' | 'Dress' | 'Atasan' | 'Bawahan' | 'Aksesoris';