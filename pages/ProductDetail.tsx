import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { products } from '../data/products';
import { ChevronLeft, MessageCircle, Check, Shield, Truck } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(product.harga);

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
Harga : ${formattedPrice}
Ukuran : ${selectedSize}
Jumlah : 1

Mohon info ketersediaan dan total pembayaran.
Terima kasih 🙏`;

    const encodedMessage = encodeURIComponent(message);
    const waNumber = "6281234567890"; // Replace with real number
    const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;

    window.open(waUrl, '_blank');
  };

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
          {/* Image Section */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-stone-100 rounded-lg overflow-hidden border border-stone-100">
              <img 
                src={product.foto} 
                alt={product.nama} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info Section */}
          <div>
            <span className="text-sm font-medium text-stone-500 uppercase tracking-wider">{product.kategori}</span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-2">{product.nama}</h1>
            <p className="text-2xl font-semibold text-stone-800 mb-6">{formattedPrice}</p>

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