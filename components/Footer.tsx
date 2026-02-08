import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-white mb-4">Butik Iconic</h3>
            <p className="text-sm leading-relaxed text-stone-400">
              Menghadirkan fashion wanita yang elegan, modern, dan nyaman. 
              Tampil percaya diri di setiap kesempatan bersama koleksi kami.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-white transition">Koleksi Produk</Link></li>
              <li><Link to="/cara-pesan" className="hover:text-white transition">Cara Pemesanan</Link></li>
              <li><Link to="/tentang" className="hover:text-white transition">Tentang Kami</Link></li>
              <li><Link to="/kontak" className="hover:text-white transition">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Ikuti Kami</h4>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.instagram.com/theiconicgirl__/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://wa.me/6285378979991" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
            <p className="text-xs text-stone-500">
              &copy; {new Date().getFullYear()} Butik Iconic. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;