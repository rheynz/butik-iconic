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

  return (
    <Link to={`/products/${product.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-stone-100 transition-all duration-300 hover:shadow-md hover:border-stone-300">
        <div className="aspect-[3/4] overflow-hidden bg-stone-200 relative">
          <img
            src={product.foto}
            alt={product.nama}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {product.status === 'sold_out' && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="bg-stone-900 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
                Sold Out
              </span>
            </div>
          )}
        </div>
        <div className="p-4">
          <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">{product.kategori}</p>
          <h3 className="font-serif text-lg font-medium text-stone-900 mb-2 truncate group-hover:text-primary transition-colors">
            {product.nama}
          </h3>
          <p className="text-stone-800 font-semibold">{formattedPrice}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;