# Butik Iconic 🛍️

Website toko online butik fashion modern yang cepat, mobile-first, dan mudah dikelola menggunakan WhatsApp Checkout.

## 📱 Cara Update Produk via HP (Google Sheets)

Sekarang Anda bisa mengupdate produk, harga, dan stok langsung dari HP tanpa coding!

### Langkah 1: Buat Google Sheet
1. Buka Google Sheets (atau [klik template ini](https://docs.google.com/spreadsheets/d/1O5D-9yC_u-tFwJ_vj5K3_wK_wK_wK_wK_wK_wK_wK_w/copy) untuk menyalin format). *Note: Link template ini dummy, buat manual saja sesuai instruksi dibawah.*
2. Buat sheet baru dengan kolom **Baris Pertama** persis seperti ini (huruf kecil semua):
   `id`, `nama`, `harga`, `deskripsi`, `ukuran`, `kategori`, `foto`, `status`

### Langkah 2: Isi Data
Contoh pengisian data:
- **id**: `101` (Angka unik)
- **nama**: `Gamian Syari`
- **harga**: `250000` (Angka saja, tanpa Rp/Titik)
- **deskripsi**: `Bahan adem premium...`
- **ukuran**: `S, M, L, XL` (Pisahkan dengan koma)
- **kategori**: `Dress`
- **foto**: Link gambar (Bisa pakai link Instagram, Cloudinary, atau Public Link Google Drive)
- **status**: `available` (untuk ada) atau `sold_out` (untuk habis)

### Langkah 3: Publish ke Web
Agar website bisa membaca data ini:
1. Di Google Sheets, klik **File** > **Share** > **Publish to web**.
2. Pilih Tab yang berisi data.
3. Ubah pilihan "Web page" menjadi **Comma-separated values (.csv)**.
4. Klik **Publish**.
5. Salin Link yang muncul.

### Langkah 4: Sambungkan ke Website
1. Buka file kode `src/context/ProductContext.tsx`.
2. Cari variabel `GOOGLE_SHEET_CSV_URL`.
3. Paste link CSV Anda di situ.
4. Deploy ulang website.

Setelah langkah 4 ini selesai sekali saja, selanjutnya Anda cukup edit Google Sheet di HP, dan website akan update otomatis saat di-refresh!

---

## 🚀 Panduan Deployment ke Cloudflare Pages

### Langkah 1: Persiapan GitHub
1.  Buat repository baru di [GitHub](https://github.com/new).
2.  Push semua file ke repository tersebut.

### Langkah 2: Setup Cloudflare Pages
1.  Login ke Dashboard [Cloudflare](https://dash.cloudflare.com/).
2.  Masuk ke menu **Workers & Pages**.
3.  Klik **Create application** > **Pages** > **Connect to Git**.
4.  Pilih repository Anda.

### Langkah 3: Konfigurasi Build
*   **Framework preset**: Vite
*   **Build command**: `npm run build`
*   **Build output directory**: `dist`

### Langkah 4: Deploy
Klik **Save and Deploy**. Website Anda sekarang online!