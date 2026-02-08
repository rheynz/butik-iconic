import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(product.harga);

  // Kalkulasi Diskon
  const hasDiscount = product.harga_asli && product.harga_asli > product.harga;
  let discountPercent = 0;
  let formattedOriginalPrice = '';

  if (hasDiscount && product.harga_asli) {
    discountPercent = Math.round(((product.harga_asli - product.harga) / product.harga_asli) * 100);
    formattedOriginalPrice = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(product.harga_asli);
  }

  return (
    <Link to={`/products/${product.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-stone-100 transition-all duration-300 hover:shadow-md hover:border-stone-300 relative">
        
        {/* Badge Section */}
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
          {product.status === 'sold_out' && (
            <span className="bg-stone-900 text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest rounded shadow-sm">
              Sold Out
            </span>
          )}
          {hasDiscount && product.status !== 'sold_out' && (
            <span className="bg-red-600 text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest rounded shadow-sm">
              Hemat {discountPercent}%
            </span>
          )}
        </div>

        <div className="aspect-[3/4] overflow-hidden bg-stone-200 relative">
          <img
            src={product.foto}
            alt={product.nama}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${product.status === 'sold_out' ? 'opacity-60 grayscale' : ''}`}
            loading="lazy"
          />
        </div>
        
        <div className="p-4">
          <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">{product.kategori}</p>
          <h3 className="font-serif text-lg font-medium text-stone-900 mb-2 truncate group-hover:text-primary transition-colors">
            {product.nama}
          </h3>
          
          <div className="flex items-center flex-wrap gap-2">
            <p className="text-stone-800 font-semibold">{formattedPrice}</p>
            {hasDiscount && (
              <p className="text-stone-400 text-xs line-through decoration-stone-400">
                {formattedOriginalPrice}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;