import React from 'react';
import { MapPin, Phone, Clock, Instagram, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">Hubungi Kami</h1>
          <p className="text-stone-600">Ada pertanyaan? Tim kami siap membantu Anda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 h-full">
            <h2 className="font-serif text-xl font-bold text-stone-900 mb-6">Informasi Kontak</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-stone-100 p-3 rounded-full shrink-0">
                  <Phone className="h-5 w-5 text-stone-800" />
                </div>
                <div>
                  <h3 className="font-medium text-stone-900">WhatsApp</h3>
                  <p className="text-stone-600 mb-1">+62 812 3456 7890</p>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="text-sm text-green-600 font-medium hover:underline">
                    Chat Langsung &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-stone-100 p-3 rounded-full shrink-0">
                  <Instagram className="h-5 w-5 text-stone-800" />
                </div>
                <div>
                  <h3 className="font-medium text-stone-900">Instagram</h3>
                  <p className="text-stone-600 mb-1">@butikiconic.id</p>
                  <a href="#" className="text-sm text-stone-800 font-medium hover:underline">
                    Follow Kami &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-stone-100 p-3 rounded-full shrink-0">
                  <Mail className="h-5 w-5 text-stone-800" />
                </div>
                <div>
                  <h3 className="font-medium text-stone-900">Email</h3>
                  <p className="text-stone-600">hello@butikiconic.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-stone-100 p-3 rounded-full shrink-0">
                  <Clock className="h-5 w-5 text-stone-800" />
                </div>
                <div>
                  <h3 className="font-medium text-stone-900">Jam Operasional</h3>
                  <p className="text-stone-600">Senin - Jumat: 09.00 - 17.00</p>
                  <p className="text-stone-600">Sabtu: 09.00 - 15.00</p>
                  <p className="text-stone-500 text-sm">Minggu & Libur Nasional: Tutup</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location / Map Placeholder */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 h-full flex flex-col">
            <h2 className="font-serif text-xl font-bold text-stone-900 mb-6">Lokasi Butik</h2>
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-stone-100 p-3 rounded-full shrink-0">
                <MapPin className="h-5 w-5 text-stone-800" />
              </div>
              <div>
                <h3 className="font-medium text-stone-900">Alamat</h3>
                <p className="text-stone-600">
                  Jl. Fashion Raya No. 123<br />
                  Jakarta Selatan, DKI Jakarta 12345
                </p>
              </div>
            </div>
            
            {/* Fake Map */}
            <div className="bg-stone-200 w-full h-full min-h-[250px] rounded-lg flex items-center justify-center text-stone-500">
              <div className="text-center p-4">
                <MapPin className="h-10 w-10 mx-auto mb-2 opacity-50" />
                <span>Google Maps Embed Here</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;