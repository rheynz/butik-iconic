import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck, MessageCircle } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const { products, loading } = useProducts();
  
  // Get 4 random or specific products for "Featured"
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/id/1059/1600/900" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Tampil Elegan Setiap Saat
          </h1>
          <p className="text-lg md:text-xl text-stone-200 max-w-2xl mb-8 leading-relaxed">
            Temukan koleksi fashion wanita terbaik dengan desain modern, bahan premium, dan harga terjangkau.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center bg-stone-100 text-stone-900 px-8 py-3 rounded-full font-medium hover:bg-stone-200 transition-colors"
          >
            Belanja Sekarang
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-stone-100 rounded-full mb-4 text-stone-800">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">Kualitas Premium</h3>
              <p className="text-stone-600 text-sm">Bahan pilihan terbaik yang nyaman dipakai seharian.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-stone-100 rounded-full mb-4 text-stone-800">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">Pengiriman Cepat</h3>
              <p className="text-stone-600 text-sm">Proses pengemasan dan pengiriman kilat ke seluruh Indonesia.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-stone-100 rounded-full mb-4 text-stone-800">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">Terpercaya</h3>
              <p className="text-stone-600 text-sm">Ribuan pelanggan puas dengan pelayanan Butik Iconic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-stone-900">Koleksi Terbaru</h2>
              <p className="text-stone-500 mt-2">Pilihan terbaik minggu ini untuk Anda.</p>
            </div>
            <Link to="/products" className="text-stone-800 font-medium hover:underline text-sm hidden sm:block">
              Lihat Semua
            </Link>
          </div>
          
          {loading ? (
             <div className="flex justify-center py-12">
               <div className="loader"></div>
             </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
          
          <div className="mt-8 text-center sm:hidden">
             <Link to="/products" className="btn-secondary inline-block border border-stone-800 px-6 py-2 rounded-full text-sm font-medium hover:bg-stone-800 hover:text-white transition">
              Lihat Semua Produk
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-stone-900 mb-6">Butuh Bantuan Memilih Ukuran?</h2>
          <p className="text-stone-600 mb-8 text-lg">
            Admin kami siap membantu Anda menemukan outfit yang paling pas untuk bentuk tubuh Anda via WhatsApp.
          </p>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition shadow-lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Chat Admin Sekarang
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;