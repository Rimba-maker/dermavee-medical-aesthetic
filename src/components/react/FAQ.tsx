
const faqs = [
  {
    q: 'Beda klinik kecantikan biasa vs medical aesthetic?',
    a: 'Medical aesthetic dipimpin dokter Sp.KK (Spesialis Kulit & Kelamin), treatment evidence-based, equipment medical-grade, dan prosedur dilakukan atau disupervisi langsung oleh dokter. Klinik kecantikan biasa sering dipimpin dokter umum atau beautician yang tidak memiliki spesialisasi dermatologi.',
    tag: 'General',
  },
  {
    q: 'Botox & filler aman?',
    a: 'Aman jika dilakukan dokter terlatih dengan produk FDA-approved dari brand terpercaya (Allergan, Galderma). Risiko signifikan muncul jika dilakukan oleh non-medical (di salon, dll) dengan produk tidak bersertifikasi. Di Dermavée, semua injectable hanya dilakukan oleh dokter Sp.KK.',
    tag: 'Injectable',
  },
  {
    q: 'Hasil treatment berapa lama bertahan?',
    a: 'Tergantung treatment. Botox: 4–6 bulan. Filler HA: 12–18 bulan. Laser pigmentation: sustain jangka panjang dengan sun protection dan maintenance sesional. Acne scar: permanen setelah protokol selesai. Dokter akan jelaskan ekspektasi realistis saat konsultasi.',
    tag: 'Hasil',
  },
  {
    q: 'Saya ibu menyusui, boleh treatment?',
    a: 'Ada yang boleh, ada yang tidak. Treatment yang aman: beberapa medical skincare (tergantung formula), facial treatment non-invasif. Yang perlu dihindari: Botox, Roaccutane, Tretinoin dosis tinggi, chemical peel medium-deep. Konsultasi dengan dokter Sp.KK kami untuk rekomendasi yang aman untuk kondisi spesifik Anda.',
    tag: 'Keamanan',
  },
  {
    q: 'Apakah harus pakai medical skincare seumur hidup?',
    a: 'Untuk concern tertentu seperti melasma dan anti-aging — ya, maintenance penting untuk sustain hasil. Tapi formulasi bisa di-step down setelah target tercapai. Untuk acne — setelah kulit terkontrol, formulasi bisa dikurangi bertahap. Setiap pasien mendapat protokol yang disesuaikan.',
    tag: 'Skincare',
  },
  {
    q: 'Ada side effect dari treatment?',
    a: 'Setiap treatment memiliki potensi side effect minor: kemerahan (laser, peel), downtime ringan (3–5 hari untuk fractional), sedikit bengkak setelah injectable (1–2 hari). Major risk sangat minimal jika dilakukan dokter terlatih dengan equipment tersertifikasi. Dokter kami akan menjelaskan expected downtime dan cara penanganannya secara detail.',
    tag: 'Efek Samping',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section consultation-faq">
      <div className="container-dv consultation-faq-layout">
        <div className="section-header">
          <h2>FAQ Medical Treatment</h2>
          <p className="lead">Pertanyaan yang paling sering ditanya oleh patient kami.</p>
          <p className="consultation-faq-guidance">Kenali pilihan, ekspektasi hasil, dan risiko sebelum menentukan langkah perawatan.</p>
          <a className="text-link" href="#booking">Siapkan konsultasi personal</a>
        </div>
        <div>
          <div className="consultation-faq-list">
            {faqs.map(faq => (
              <details key={faq.q}>
                <summary>{faq.q}</summary>
                <div className="consultation-faq-answer"><p>{faq.a}</p></div>
              </details>
            ))}
          </div>
          <p className="consultation-disclaimer"><strong>Medical Disclaimer:</strong> Informasi di atas bersifat edukatif dan bukan pengganti konsultasi medis profesional. Setiap kondisi kulit berbeda dan memerlukan evaluasi langsung dari dokter Sp.KK. Hubungi kami untuk konsultasi personal.</p>
        </div>
      </div>
    </section>
  );
}
