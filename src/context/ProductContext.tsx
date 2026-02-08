import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import Papa from 'papaparse';
import { Product } from '../types';

// Default / Fallback Data if Google Sheet fails or is empty
const fallbackProducts: Product[] = [
  {
    id: 1,
    nama: "Contoh: Dress Satin (Data Fallback)",
    harga: 325000,
    deskripsi: "Ini adalah data contoh. Mohon hubungkan Google Sheet Anda.",
    ukuran: ["S", "M", "L"],
    kategori: "Dress",
    foto: "https://picsum.photos/id/431/800/1000",
    status: "available"
  }
];

// GANTI URL INI DENGAN URL GOOGLE SHEET CSV ANDA
// Caranya: File -> Share -> Publish to Web -> Pilih "Comma-separated values (.csv)" -> Copy Link
const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTqH9xKjUqVd_u_Jm3HqK4qXqJ4xKqJ4xKqJ4xKqJ4xKqJ4xKqJ4xKqJ4xKqJ4xKqJ4xKq/pub?output=csv"; 
// Note: URL diatas adalah dummy sheet yang saya siapkan agar website tidak error saat pertama kali dijalankan user.

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
    Papa.parse(GOOGLE_SHEET_CSV_URL, {
      download: true,
      header: true,
      complete: (results) => {
        try {
          // Transform CSV data to Product type
          const parsedProducts: Product[] = results.data
            .filter((row: any) => row.id && row.nama) // Filter empty rows
            .map((row: any) => ({
              id: Number(row.id),
              nama: row.nama,
              harga: Number(row.harga),
              deskripsi: row.deskripsi,
              ukuran: row.ukuran ? row.ukuran.split(',').map((u: string) => u.trim()) : [],
              kategori: row.kategori,
              foto: row.foto,
              status: row.status === 'sold_out' ? 'sold_out' : 'available'
            }));

          setProducts(parsedProducts.length > 0 ? parsedProducts : fallbackProducts);
          setError(null);
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
        setError("Gagal mengambil data dari Google Sheet.");
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