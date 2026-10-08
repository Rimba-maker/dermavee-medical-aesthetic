# Dermavée Medical Aesthetic

Landing page berbahasa Indonesia dengan arah visual Modern Clinical, dibangun menggunakan Astro, React islands, TypeScript, Tailwind CSS, dan Framer Motion.

## Menjalankan proyek

```sh
npm ci
npm run dev
```

## Build dan pemeriksaan tipe

```sh
npm run build
npx tsc --noEmit
npm run preview
```

Hasil build statis berada di `dist/`.

## Struktur

- `src/pages/`: integrasi halaman.
- `src/layouts/`: shell dokumen, metadata, dan pemuatan aset.
- `src/components/`: navigasi, pricing, footer, dan komponen React interaktif.
- `src/styles/`: sistem visual dan styles kelompok fitur.
- `public/images/`: foto WebP lokal dan sidecar sumbernya.
- `public/fonts/`: font lokal beserta lisensi masing-masing keluarga.
- `docs/assets/image-sources.json`: sumber foto, pembuat, lisensi, dan metadata font.

## Batas fungsi dan materi

Form konsultasi hanya menyiapkan, menampilkan, dan menyalin ringkasan. Belum ada endpoint pengiriman, penyimpanan data pasien, konfirmasi jadwal, atau verifikasi ketersediaan dokter. Kegagalan clipboard menyediakan pilihan salin manual.

Foto Pexels merupakan ilustrasi, bukan dokumentasi dokter, klinik, perangkat bermerek, pasien, atau hasil treatment Dermavée. Publikasi hasil before–after memerlukan foto pasien yang sesuai dan persetujuan. Identitas, kredensial, testimoni, harga, dan klaim klinis yang tersedia belum diverifikasi independen.
