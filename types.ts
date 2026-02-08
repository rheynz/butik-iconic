export interface Product {
  id: number;
  nama: string;
  harga: number; // Stored as number for calculation, formatted for display
  deskripsi: string;
  ukuran: string[];
  kategori: string;
  foto: string;
  status: 'available' | 'sold_out';
}

export type Category = 'All' | 'Dress' | 'Atasan' | 'Bawahan' | 'Aksesoris';