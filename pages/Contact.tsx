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
                  <p className="text-stone-600 mb-1">+62 853 7897 9991</p>
                  <a href="https://wa.me/6285378979991" target="_blank" rel="noreferrer" className="text-sm text-green-600 font-medium hover:underline">
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
                  <p className="text-stone-600 mb-1">@theiconicgirl__</p>
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
                  <p className="text-stone-600">kontak@butikiconic.com</p>
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

          {/* Location / Map */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 h-full flex flex-col">
            <h2 className="font-serif text-xl font-bold text-stone-900 mb-6">Lokasi Butik</h2>
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-stone-100 p-3 rounded-full shrink-0">
                <MapPin className="h-5 w-5 text-stone-800" />
              </div>
              <div>
                <h3 className="font-medium text-stone-900">Alamat</h3>
                <p className="text-stone-600">
                  Jl. Semeru Raya No.20,<br /> 
                  Karangrejo, Kec. Gajahmungkur, <br />
                  Kota Semarang, Jawa Tengah 50231
                </p>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="w-full flex-grow min-h-[300px] rounded-lg overflow-hidden border border-stone-200 bg-stone-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.9064091645446!2d110.41211167400088!3d-7.0202867687696395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708bbf5d7f131b%3A0xfc209fd10d92bba1!2sBUTIK%20ICONIC%20By%20Neeva%20Nodra!5e0!3m2!1sen!2sid!4v1770585637329!5m2!1sen!2sidhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.458872583561!2d106.81895631476906!3d-6.197939995512762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f41f2d65377d%3A0x6968032c58977d2e!2sPlaza%20Indonesia!5e0!3m2!1sid!2sid!4v1679821234567!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '300px' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Butik Iconic"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;