import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Produk', path: '/products' },
    { name: 'Cara Pesan', path: '/cara-pesan' },
    { name: 'Tentang', path: '/tentang' },
    { name: 'Kontak', path: '/kontak' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // 🖼️ CARA GANTI LOGO:
  // 1. Siapkan file logo Anda (format PNG transparan lebih bagus).
  // 2. Simpan di folder: public/images/logo.png
  // 3. Ganti src di bawah ini menjadi "/images/logo.png"
  const LOGO_URL = "https://i.imgur.com/xhtxBKX.png"; 

  return (
    <nav className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            {/* Opsi 1: Menggunakan Gambar Logo */}
            <img 
              src={LOGO_URL} 
              alt="Butik Iconic Logo" 
              className="h-10 w-auto object-contain"
            />
            
            {/* Opsi 2: Jika logo gambar gagal load, bisa aktifkan text fallback ini (opsional) */}
            {/* 
            <div className="flex items-center space-x-2 ml-2">
               <span className="font-serif text-xl font-bold text-stone-900 tracking-wide">Butik Iconic</span>
            </div> 
            */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-stone-900 ${
                  isActive(link.path) ? 'text-stone-900 border-b-2 border-stone-800' : 'text-stone-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-stone-800 hover:text-stone-600 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-stone-50 border-b border-stone-200 animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-stone-200 text-stone-900'
                    : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;