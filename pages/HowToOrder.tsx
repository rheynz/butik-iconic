import React from 'react';
import { Smartphone, CheckCircle, CreditCard, Package } from 'lucide-react';

const HowToOrder: React.FC = () => {
  const steps = [
    {
      icon: <Smartphone className="h-8 w-8 text-white" />,
      title: "Pilih Produk",
      desc: "Pilih produk yang Anda suka di website, tentukan ukuran, lalu klik tombol 'Pesan via WhatsApp'."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Konfirmasi Pesanan",
      desc: "Kirim pesan otomatis di WhatsApp. Admin kami akan mengecek ketersediaan stok dan memberikan total harga."
    },
    {
      icon: <CreditCard className="h-8 w-8 text-white" />,
      title: "Lakukan Pembayaran",
      desc: "Bayar via Transfer Bank (BCA/Mandiri) atau Scan QRIS. Kirim bukti transfer ke Admin."
    },
    {
      icon: <Package className="h-8 w-8 text-white" />,
      title: "Pesanan Dikirim",
      desc: "Setelah pembayaran terverifikasi, pesanan Anda akan segera diproses dan dikirim ke alamat tujuan."
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">Cara Pemesanan</h1>
          <p className="text-stone-600">Belanja mudah dan aman di Butik Iconic tanpa ribet.</p>
        </div>

        {/* Steps */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-stone-300 before:to-transparent">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Icon Bubble */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-stone-800 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="scale-50">{step.icon}</span>
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
                <div className="flex flex-col space-y-2">
                  <div className="font-serif font-bold text-lg text-stone-900">
                    {index + 1}. {step.title}
                  </div>
                  <div className="text-stone-600 text-sm leading-relaxed">
                    {step.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mt-16 bg-white p-8 rounded-xl border border-stone-200 text-center">
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">Metode Pembayaran</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 bg-stone-50 rounded-lg border border-stone-100">
              <h3 className="font-bold text-stone-800 mb-2">Transfer Bank</h3>
              <p className="text-sm text-stone-600">BCA: 123 456 7890</p>
              <p className="text-sm text-stone-600">Mandiri: 123 000 456 7890</p>
              <p className="text-xs text-stone-400 mt-1">a.n Butik Iconic Official</p>
            </div>
            <div className="p-4 bg-stone-50 rounded-lg border border-stone-100">
              <h3 className="font-bold text-stone-800 mb-2">QRIS</h3>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-stone-200 flex items-center justify-center mb-2 text-xs text-stone-500">
                  [QR Code]
                </div>
                <p className="text-sm text-stone-600">Scan menggunakan GoPay, OVO, Dana, dll</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToOrder;