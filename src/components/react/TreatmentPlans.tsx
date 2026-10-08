const steps = [
  {
    title: 'Skin Analysis (VISIA)',
    detail: 'Gratis · 20 menit',
    description: 'Analisis kulit sebagai titik awal untuk memahami kondisi dan kebutuhan Anda.',
  },
  {
    title: 'Konsultasi Dokter Sp.KK',
    detail: '45 menit',
    description: 'Diagnosis oleh dokter spesialis dan diskusi goal, lifestyle, serta riwayat kondisi kulit.',
  },
  {
    title: 'Treatment Plan Personal',
    detail: 'Rekomendasi + estimasi cost',
    description: 'Rencana perawatan yang disusun berdasarkan kondisi kulit dan tujuan Anda, dengan estimasi biaya.',
  },
  {
    title: 'Treatment Sequence',
    detail: 'In-office + home skincare',
    description: 'Urutan prosedur di klinik dan perawatan kulit di rumah dalam satu rencana yang terintegrasi.',
  },
  {
    title: 'Progress Tracking',
    detail: 'Follow-up + re-scan setiap 3 bulan',
    description: 'Evaluasi berkala bersama dokter dan VISIA re-scan untuk membahas perkembangan perawatan.',
  },
];

export default function TreatmentPlans() {
  return (
    <section id="journey" className="section care-journey" aria-labelledby="journey-title">
      <div className="container-dv">
        <div className="section-header">
          <h2 id="journey-title">Personalized Treatment Journey</h2>
          <p className="lead">Kami tidak jual paket cookie-cutter. Setiap patient dapat treatment plan personal berdasarkan kondisi kulit, lifestyle, dan goal.</p>
        </div>

        <div className="care-journey-layout">
          <div className="care-journey-aside">
            <figure className="care-journey-photo">
              <img className="photo" src="/images/clinic.webp" width="1200" height="960" loading="lazy" alt="Ilustrasi ruang pelayanan medis yang terang dan tenang" />
              <figcaption className="caption">Foto ilustrasi ruang pelayanan medis; bukan dokumentasi cabang Dermavée.</figcaption>
            </figure>
            <div className="care-journey-start">
              <h3>Dimulai dari memahami kulit Anda.</h3>
              <p>Konsultasi pertama + skin analysis — gratis, tanpa commitment treatment.</p>
              <a href="#booking" className="button">Mulai Journey Saya</a>
            </div>
          </div>

          <ol className="care-journey-steps" aria-label="Lima langkah perawatan personal">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="care-step-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div className="care-step-content">
                  <h3>{step.title}</h3>
                  <p className="care-step-detail">{step.detail}</p>
                  <p className="care-step-description">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
