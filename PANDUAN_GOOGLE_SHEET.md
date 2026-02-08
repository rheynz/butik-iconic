# 📈 Panduan Integrasi Google Sheet

File ini berisi instruksi detail cara menghubungkan website Butik Iconic dengan Google Sheet agar Anda bisa mengupdate produk langsung dari HP/Laptop tanpa coding.

## 1. Persiapan Template Google Sheet
Buat sheet baru atau copy template berikut. Pastikan **Baris Pertama (Header)** persis seperti ini (huruf kecil):

| Kolom | Header (Wajib) | Contoh Isi |
|-------|---------------|------------|
| A     | `id`          | 101 |
| B     | `nama`        | Dress Bunga |
| C     | `harga`       | 250000 |
| D     | `deskripsi`   | Bahan katun jepang adem... |
| E     | `ukuran`      | S, M, L |
| F     | `kategori`    | Dress |
| G     | `foto`        | https://i.imgur.com/foto.jpg |
| H     | `status`      | available |
| I     | `video`       | https://instagram.com/p/kodevideo |

> **Catatan:**
> - **harga**: Tulis angka saja tanpa titik/koma/Rp.
> - **status**: Isi `available` (ada) atau `sold_out` (habis).
> - **foto**: Gunakan direct link gambar (akhiran .jpg/.png).
> - **video** (Opsional): Masukkan link Instagram Reel, TikTok, atau YouTube. Nanti akan muncul tombol "Lihat Video" di halaman produk.

## 2. Cara Mendapatkan Link CSV (Wajib)
Website hanya bisa membaca format CSV. Ikuti langkah ini:

1. Di Google Sheet, klik menu **File**.
2. Pilih **Bagikan (Share)** > **Publikasikan ke web (Publish to web)**.
3. Muncul kotak dialog:
   - Pilih Sheet yang berisi data (misal: "Sheet1").
   - Ganti pilihan "Halaman Web" menjadi **Nilai yang dipisahkan koma (.csv)**.
4. Klik **Publikasikan (Publish)**.
5. **Salin Link** yang diberikan.

Link harus berakhiran `output=csv`. Contoh:
`https://docs.google.com/spreadsheets/d/e/2PACX-...../pub?output=csv`

## 3. Pasang Link di Website
1. Buka file di folder project: `context/ProductContext.tsx`.
2. Cari variabel `GOOGLE_SHEET_CSV_URL`.
3. Ganti URL di dalamnya dengan link CSV Anda.
   ```typescript
   const GOOGLE_SHEET_CSV_URL = "LINK_CSV_ANDA_DISINI";
   ```
4. Commit & Push ke GitHub. Cloudflare Pages akan otomatis update.

## 4. Tips Foto & Video

**Foto:**
Gunakan hosting gambar gratis atau Google Drive Direct Link.

**Video:**
Cukup copy link dari browser/aplikasi (Share -> Copy Link).
Contoh Link Instagram: `https://www.instagram.com/reel/C3abcde1234/`
