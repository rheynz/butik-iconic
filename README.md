# Butik Iconic 🛍️

Website toko online butik fashion modern yang cepat, mobile-first, dan mudah dikelola menggunakan WhatsApp Checkout.

## 🚀 Panduan Deployment ke Cloudflare Pages

Berikut adalah langkah-langkah **STEP-BY-STEP** untuk menayangkan website ini secara gratis menggunakan Cloudflare Pages.

### Langkah 1: Persiapan GitHub
1.  Buat repository baru di [GitHub](https://github.com/new). Beri nama misal: `butik-iconic`.
2.  Push semua file dalam folder project ini ke repository tersebut.
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/USERNAME/butik-iconic.git
    git push -u origin main
    ```

### Langkah 2: Setup Cloudflare Pages
1.  Login ke Dashboard [Cloudflare](https://dash.cloudflare.com/).
2.  Masuk ke menu **Workers & Pages**.
3.  Klik tombol **Create application**, lalu pilih tab **Pages**.
4.  Klik **Connect to Git**.
5.  Pilih akun GitHub Anda dan cari repository `butik-iconic` yang baru dibuat.
6.  Klik **Begin setup**.

### Langkah 3: Konfigurasi Build
Cloudflare akan mendeteksi project ini, namun pastikan pengaturannya sebagai berikut:

*   **Project name**: `butik-iconic` (atau sesuai keinginan)
*   **Production branch**: `main`
*   **Framework preset**: Pilih **Vite** (Penting!)
*   **Build command**: `npm run build` (Otomatis terisi jika preset Vite dipilih)
*   **Build output directory**: `dist` (Otomatis terisi jika preset Vite dipilih)

### Langkah 4: Deploy
1.  Klik tombol **Save and Deploy**.
2.  Tunggu proses build selesai (biasanya kurang dari 2 menit).
3.  Jika sukses, Cloudflare akan memberikan URL unik (contoh: `https://butik-iconic.pages.dev`).

Selesai! Website Butik Iconic Anda sekarang sudah online. 🎉

---

## 🛠️ Cara Mengupdate Produk

Untuk menambah atau mengubah produk:
1.  Buka file `data/products.ts` di komputer Anda.
2.  Edit data JSON produk sesuai format yang ada.
3.  Commit dan Push perubahan ke GitHub.
    ```bash
    git add .
    git commit -m "Update produk baru"
    git push
    ```
4.  Cloudflare Pages akan **otomatis** mendeteksi perubahan dan melakukan deployment ulang dalam beberapa detik.

## 💻 Menjalankan di Lokal

Jika ingin mencoba di komputer sendiri sebelum upload:

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Jalankan server development:
    ```bash
    npm run dev
    ```
3.  Buka browser di `http://localhost:5173`.
