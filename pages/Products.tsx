import React, { useState, useMemo } from 'react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import { Category } from '../types';

const Products: React.FC = () => {
  const { products, loading } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const categories: Category[] = ['All', 'Dress', 'Atasan', 'Bawahan', 'Aksesoris'];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return products;
    return products.filter(p => p.kategori === selectedCategory);
  }, [selectedCategory, products]);

  return (
    <div className="bg-stone-50 min-h-screen pt-8 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">Koleksi Lengkap</h1>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Jelajahi berbagai pilihan fashion yang dikurasi khusus untuk gaya elegan Anda.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-stone-800 text-white shadow-md'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {loading ? (
           <div className="flex flex-col items-center justify-center py-20">
             <div className="loader mb-4"></div>
             <p className="text-stone-500">Mengambil data terbaru...</p>
           </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-stone-500 text-lg">Produk tidak ditemukan untuk kategori ini.</p>
            <button 
              onClick={() => setSelectedCategory('All')}
              className="mt-4 text-stone-800 underline hover:text-stone-600"
            >
              Lihat semua produk
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;