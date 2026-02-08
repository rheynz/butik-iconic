import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import Papa from 'papaparse';
import { Product } from '../types';

// Default / Fallback Data if Google Sheet fails or is empty
const fallbackProducts: Product[] = [
  {
    id: 1,
    nama: "Contoh: Dress Satin (Data Fallback)",
    harga: 250000,
    harga_asli: 350000, // Contoh data diskon
    deskripsi: "Ini adalah data contoh. Mohon hubungkan Google Sheet Anda sesuai panduan di PANDUAN_GOOGLE_SHEET.md",
    ukuran: ["S", "M", "L"],
    kategori: "Dress",
    foto: "https://picsum.photos/id/431/800/1000",
    status: "available"
  }
];

// ============================================================================
// ⚙️ KONFIGURASI GOOGLE SHEET
// ============================================================================
// Baca file 'PANDUAN_GOOGLE_SHEET.md' untuk instruksi lengkap cara mendapatkan link ini.
// Pastikan link berakhiran 'output=csv'.

const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2A5RTqsi_ZTxDVOjiDZiQu7P6cyU8E87ZZnrvdzz-cwsSA2N_a27dBqnTXQi5fryBU4f6GexZfBc2/pub?gid=0&single=true&output=csv"; 

// ============================================================================

interface ProductContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
  refreshProducts: () => void;
}

const ProductContext = createContext<ProductContextType>({
  products: [],
  loading: true,
  error: null,
  refreshProducts: () => {},
});

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = () => {
    setLoading(true);
    // Tambahkan timestamp agar tidak dicache oleh browser/cloudflare secara agresif
    const urlWithTimestamp = `${GOOGLE_SHEET_CSV_URL}&t=${new Date().getTime()}`;
    
    Papa.parse(urlWithTimestamp, {
      download: true,
      header: true,
      skipEmptyLines: true, // Skip baris kosong
      complete: (results) => {
        try {
          // Transform CSV data to Product type
          const parsedProducts: Product[] = results.data
            .filter((row: any) => row.id && row.nama) // Filter empty rows atau header error
            .map((row: any) => ({
              id: Number(row.id),
              nama: row.nama,
              harga: Number(row.harga), // Harga Jual (Diskon)
              harga_asli: row.harga_asli ? Number(row.harga_asli) : undefined, // Harga Coret (Optional)
              deskripsi: row.deskripsi,
              ukuran: row.ukuran ? row.ukuran.split(',').map((u: string) => u.trim()) : [],
              kategori: row.kategori,
              foto: row.foto,
              video: row.video || '', 
              status: row.status === 'sold_out' ? 'sold_out' : 'available'
            }));

          if (parsedProducts.length > 0) {
            setProducts(parsedProducts);
            setError(null);
          } else {
            console.warn("Data CSV kosong atau format salah.");
            setProducts(fallbackProducts);
          }
        } catch (err) {
          console.error("Error parsing product data:", err);
          setError("Gagal memproses data produk.");
          setProducts(fallbackProducts);
        } finally {
          setLoading(false);
        }
      },
      error: (err) => {
        console.error("Error fetching CSV:", err);
        setError("Gagal mengambil data dari Google Sheet. Cek link CSV Anda.");
        setProducts(fallbackProducts);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error, refreshProducts: fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);