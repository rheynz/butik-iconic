import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { ChevronLeft, MessageCircle, Check, Shield, Truck, Instagram, PlayCircle } from 'lucide-react';
import { Product } from '../types';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products, loading } = useProducts();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && products.length > 0) {
      const found = products.find(p => p.id === Number(id));
      setProduct(found);
    }
  }, [id, products, loading]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="loader"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 px-4 text-center">
        <h2 className="text-2xl font-serif text-stone-900 mb-2">Produk Tidak Ditemukan</h2>
        <p className="text-stone-600 mb-6">Produk yang Anda cari mungkin sudah dihapus atau link salah.</p>
        <Link to="/products" className="bg-stone-800 text-white px-6 py-2 rounded-lg hover:bg-stone-700 transition">
          Kembali ke Koleksi
        </Link>
      </div>
    );
  }

  // Format Harga Jual
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(product.harga);

  // Logika Diskon
  const hasDiscount = product.harga_asli && product.harga_asli > product.harga;
  let formattedOriginalPrice = '';
  let discountPercent = 0;

  if (hasDiscount && product.harga_asli) {
    formattedOriginalPrice = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(product.harga_asli);
    discountPercent = Math.round(((product.harga_asli - product.harga) / product.harga_asli) * 100);
  }

  const handleOrder = () => {
    if (!selectedSize) {
      setError("Mohon pilih ukuran terlebih dahulu");
      return;
    }
    setError(null);

    // WhatsApp Message Format
    const message = `Halo Admin butikiconic.com 👋
Saya ingin memesan:

Nama Produk : ${product.nama}
Harga : ${formattedPrice} ${hasDiscount ? '(Diskon)' : ''}
Ukuran : ${selectedSize}
Jumlah : 1

Mohon info ketersediaan dan total pembayaran.
Terima kasih 🙏`;

    const encodedMessage = encodeURIComponent(message);
    const waNumber = "6285378979991"; // Replace with real number
    const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;

    window.open(waUrl, '_blank');
  };

  const isInstagramLink = (url: string) => url.includes('instagram.com');

  return (
    <div className="bg-white min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back */}
        <div className="mb-6">
          <Link to="/products" className="inline-flex items-center text-stone-500 hover:text-stone-800 transition">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Kembali ke Koleksi
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image & Video Section */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-stone-100 rounded-lg overflow-hidden border border-stone-100 relative group">
              <img 
                src={product.foto} 
                alt={product.nama} 
                className="w-full h-full object-cover"
              />
              {/* Badge Overlay */}
              {hasDiscount && (
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1.5 rounded-full font-bold text-sm shadow-md">
                  Diskon {discountPercent}%
                </div>
              )}
            </div>
            
            {/* Video Button Link */}
            {product.video && (
              <a 
                href={product.video}
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg font-medium transition-colors border ${
                  isInstagramLink(product.video) 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent hover:opacity-90' 
                    : 'bg-stone-100 text-stone-800 border-stone-200 hover:bg-stone-200'
                }`}
              >
                {isInstagramLink(product.video) ? (
                  <>
                    <Instagram className="h-5 w-5" />
                    <span>Lihat Video Review di Instagram</span>
                  </>
                ) : (
                  <>
                    <PlayCircle className="h-5 w-5" />
                    <span>Tonton Video Produk</span>
                  </>
                )}
              </a>
            )}
          </div>

          {/* Info Section */}
          <div>
            <span className="text-sm font-medium text-stone-500 uppercase tracking-wider">{product.kategori}</span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-2">{product.nama}</h1>
            
            {/* Price Block */}
            <div className="flex items-end gap-3 mb-6">
              <p className="text-3xl font-semibold text-stone-800">{formattedPrice}</p>
              {hasDiscount && (
                <div className="flex flex-col mb-1">
                  <p className="text-lg text-stone-400 line-through decoration-stone-400 font-medium">
                    {formattedOriginalPrice}
                  </p>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="prose prose-stone mb-8">
              <p className="text-stone-600 leading-relaxed">{product.deskripsi}</p>
            </div>

            {/* Size Selector */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-stone-900">Pilih Ukuran</span>
                <span className="text-sm text-stone-500 underline cursor-pointer">Panduan Ukuran</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.ukuran.map(size => (
                  <button
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setError(null);
                    }}
                    disabled={product.status === 'sold_out'}
                    className={`h-12 w-12 rounded-full border flex items-center justify-center font-medium transition-all ${
                      selectedSize === size
                        ? 'bg-stone-800 text-white border-stone-800 scale-110'
                        : 'bg-white text-stone-600 border-stone-300 hover:border-stone-800'
                    } ${product.status === 'sold_out' ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {error && <p className="mt-2 text-red-600 text-sm animate-pulse">{error}</p>}
            </div>

            {/* Action Button */}
            <div className="space-y-4">
              {product.status === 'available' ? (
                <button
                  onClick={handleOrder}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-transform active:scale-[0.98] shadow-md"
                >
                  <MessageCircle className="h-6 w-6" />
                  Pesan via WhatsApp
                </button>
              ) : (
                <button disabled className="w-full bg-stone-300 text-stone-500 py-4 px-6 rounded-lg font-bold text-lg cursor-not-allowed">
                  Stok Habis
                </button>
              )}
              
              <p className="text-center text-xs text-stone-500">
                Anda akan diarahkan ke WhatsApp untuk menyelesaikan pemesanan.
              </p>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-stone-200">
              <div className="flex items-center gap-3 text-sm text-stone-600">
                <Shield className="h-5 w-5 text-stone-400" />
                <span>Jaminan Kualitas</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-stone-600">
                <Truck className="h-5 w-5 text-stone-400" />
                <span>Pengiriman Cepat</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-stone-600">
                <Check className="h-5 w-5 text-stone-400" />
                <span>Stok Realtime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;