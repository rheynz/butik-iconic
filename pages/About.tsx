import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Image */}
        <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-10 shadow-md">
          <img 
            src="https://i.imgur.com/bD5oT9b.jpeg" 
            alt="Interior Butik Iconic" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-stone prose-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 text-center mb-8">Tentang Butik Iconic</h1>
          
          <p className="lead text-xl text-stone-600 text-center mb-10 italic">
            "Fashion bukan hanya tentang pakaian, tapi tentang bagaimana Anda mempresentasikan diri kepada dunia."
          </p>

          <h3 className="font-serif text-stone-900">Profil Kami</h3>
          <p>
            Berdiri sejak 2025, <strong>Butik Iconic</strong> hadir sebagai solusi bagi wanita modern yang menginginkan pakaian berkualitas tinggi dengan harga yang masuk akal. Kami percaya bahwa setiap wanita berhak tampil elegan dan percaya diri tanpa harus menguras dompet.
          </p>
          <p>
            Kami mengkurasi setiap produk dengan ketelitian tinggi, memilih bahan-bahan terbaik seperti satin premium, katun rayon, dan linen yang nyaman dipakai di iklim tropis Indonesia.
          </p>

          <h3 className="font-serif text-stone-900 mt-8">Visi & Misi</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Visi:</strong> Menjadi brand fashion lokal pilihan utama wanita Indonesia yang mengedepankan kualitas dan keanggunan.
            </li>
            <li>
              <strong>Misi:</strong>
              <ul className="list-none pl-0 pt-2 space-y-1">
                <li>1. Menyediakan produk fashion yang *timeless* dan *versatile*.</li>
                <li>2. Memberikan pelayanan pelanggan yang personal dan responsif.</li>
                <li>3. Mendukung industri tekstil lokal melalui pemilihan bahan dan produksi dalam negeri.</li>
              </ul>
            </li>
          </ul>

          <div className="bg-stone-100 p-6 rounded-lg mt-10 border-l-4 border-stone-800">
            <p className="mb-0 text-stone-700 text-base">
              Kami berkomitmen untuk terus berinovasi dan mendengarkan kebutuhan Anda. Terima kasih telah menjadi bagian dari perjalanan Butik Iconic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;