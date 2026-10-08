const analysisPoints = [
  { label: 'Acne & Inflammation Scoring', description: 'Jerawat dan area inflammasi aktif' },
  { label: 'Pigmentation & UV Damage', description: 'Pigmentasi dan tanda kerusakan akibat UV' },
  { label: 'Wrinkles & Fine Lines', description: 'Kerutan dan garis halus' },
  { label: 'Texture & Pore Size', description: 'Tekstur kulit dan ukuran pori' },
  { label: 'Hydration Level', description: 'Evaluasi kelembapan kulit' },
  { label: 'Vascular Issues (Redness)', description: 'Kemerahan dan concern vaskular' },
];

export default function SkinAnalysis() {
  return (
    <section id="analysis" className="section analysis-section" aria-labelledby="analysis-heading">
      <div className="container-dv">
        <div className="analysis-feature">
          <div className="analysis-intro">
            <header className="section-header">
              <h2 id="analysis-heading">Mulai Dengan Skin Analysis Komprehensif</h2>
              <p className="lead">Setiap konsultasi diawali dengan analisis kulit menggunakan AI-powered VISIA Skin Analysis. Pemeriksaan dan interpretasi dokter menjadi dasar treatment plan Anda.</p>
            </header>
            <a className="button" href="#booking">Book Free Analysis</a>
            <p className="caption analysis-consultation-note">Konsultasi pertama: skin analysis + konsultasi dokter. Tanpa commitment treatment.</p>
          </div>
          <figure className="analysis-figure">
            <img
              src="/images/analysis.webp"
              alt="Ilustrasi konsultasi dan pemeriksaan kulit wajah, bukan mesin VISIA"
              className="photo analysis-photo"
              width="1200"
              height="900"
              loading="lazy"
            />
            <figcaption className="caption">Foto ilustrasi konsultasi kulit. Bukan foto mesin VISIA atau dokumentasi pemeriksaan di Dermavée.</figcaption>
          </figure>
        </div>

        <div className="analysis-information">
          <div className="analysis-parameters">
            <h3>Enam aspek yang dievaluasi</h3>
            <dl className="analysis-parameter-list">
              {analysisPoints.map((point) => (
                <div key={point.label}>
                  <dt>{point.label}</dt>
                  <dd>{point.description}</dd>
                </div>
              ))}
            </dl>
            <p className="caption">Evaluasi komprehensif mencakup imaging dan pemeriksaan dokter; tidak semua parameter merupakan pengukuran langsung perangkat VISIA.</p>
          </div>
          <aside className="analysis-report" aria-labelledby="analysis-report-heading">
            <h3 id="analysis-report-heading">Hasil yang bisa Anda pahami.</h3>
            <p>Personalized report PDF dan treatment recommendation dari dokter Sp.KK membantu Anda memahami kondisi kulit serta langkah perawatan yang disarankan.</p>
            <p className="caption">Report bersifat personal setelah pemeriksaan. Halaman ini tidak menampilkan atau menyediakan PDF hasil analisis pasien.</p>
            <a href="#booking" className="text-link">Siapkan konsultasi pertama Anda</a>
          </aside>
        </div>
      </div>
    </section>
  );
}
