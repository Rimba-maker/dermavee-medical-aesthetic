const treatments = [
  {
    id: 'treatment-injectable',
    name: 'Injectable Therapy',
    image: 'injectable',
    imageAlt: 'Ilustrasi prosedur perawatan wajah oleh tenaga medis',
    concern: 'Anti-Aging',
    items: [
      'Botox (Allergan, US FDA)',
      'Filler HA (Restylane, Juvederm)',
      'Skin booster (Restylane Vital, Profhilo)',
    ],
    note: 'Hanya oleh dokter Sp.KK',
  },
  {
    id: 'treatment-laser',
    name: 'Laser Therapy',
    image: 'laser',
    imageAlt: 'Ilustrasi perawatan dengan perangkat klinis, bukan perangkat bermerek tertentu',
    concern: 'Hyperpigmentation',
    items: [
      'Pico Laser (PicoSure Pro) — pigmentation, tattoo',
      'Fractional CO₂ — scar, resurfacing',
      'Long-Pulsed Nd:YAG — vascular, hair removal',
      'IPL — photoaging, redness',
    ],
    note: 'Pilihan perangkat berdasarkan evaluasi dokter',
  },
  {
    id: 'treatment-skincare',
    name: 'Medical Skincare & Prescription',
    image: 'skincare',
    imageAlt: 'Ilustrasi produk skincare, bukan resep atau produk bermerek yang ditampilkan',
    concern: 'Acne (Jerawat)',
    items: [
      'Tretinoin protocol',
      'Hydroquinone (medical-grade)',
      'Spironolactone untuk hormonal acne',
      'Personalized compounding',
    ],
    note: 'Formulasi dan resep personal dari dokter',
  },
  {
    id: 'treatment-peel',
    name: 'Chemical Peels',
    image: 'facial',
    imageAlt: 'Ilustrasi perawatan wajah, bukan dokumentasi prosedur chemical peel',
    concern: 'Acne (Jerawat)',
    items: [
      'TCA peel (medium-deep)',
      "Jessner's solution",
      'Glycolic, salicylic untuk acne',
    ],
    note: 'Dermatologist-supervised',
  },
  {
    id: 'treatment-microneedling',
    name: 'Microneedling & RF',
    image: 'analysis',
    imageAlt: 'Ilustrasi evaluasi wajah, bukan dokumentasi microneedling atau Morpheus8',
    concern: 'Acne Scars',
    items: [
      'Dermapen 4 medical-grade',
      'Morpheus8 RF microneedling',
      'PRP (platelet-rich plasma)',
    ],
    note: 'Kesesuaian prosedur dinilai saat konsultasi',
  },
  {
    id: 'treatment-body',
    name: 'Body Treatment',
    image: 'body',
    imageAlt: 'Ilustrasi perawatan tubuh, bukan dokumentasi CoolSculpting atau hasil pasien',
    concern: 'Postpartum Skin',
    items: [
      'CoolSculpting (fat freezing)',
      'Mesotherapy',
      'Stretchmark fractional',
      'Hair restoration (PRP, exosome)',
    ],
    note: 'Diskusikan tujuan perawatan tubuh dan rambut',
  },
];

export default function MedicalTreatments() {
  return (
    <section id="treatments" className="section section-soft treatment-section" aria-labelledby="treatments-heading">
      <div className="container-dv">
        <header className="section-header treatment-header">
          <h2 id="treatments-heading">Treatment Medis Bersertifikat</h2>
          <p className="lead">Semua dilakukan atau disupervisi oleh dokter Sp.KK. Tidak ada non-medical staff yang melakukan injectable.</p>
        </header>

        <div className="treatment-gallery">
          {treatments.map((treatment) => (
            <article key={treatment.id} id={treatment.id} className="treatment-entry" aria-labelledby={`${treatment.id}-heading`}>
              <figure>
                <img
                  src={`${import.meta.env.BASE_URL}images/${treatment.image}.webp`}
                  alt={treatment.imageAlt}
                  className="photo treatment-photo"
                  width="1200"
                  height="900"
                  loading="lazy"
                />
                <figcaption className="caption">Foto ilustrasi; bukan dokumentasi prosedur atau perangkat Dermavée.</figcaption>
              </figure>
              <div className="treatment-entry-copy">
                <h3 id={`${treatment.id}-heading`}>{treatment.name}</h3>
                <ul className="treatment-options">
                  {treatment.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <p className="treatment-note">{treatment.note}</p>
                <a
                  className="text-link treatment-booking"
                  href={`#booking?concern=${encodeURIComponent(treatment.concern)}`}
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'instant', block: 'start' })}
                  aria-label={`Konsultasikan ${treatment.name}`}
                >
                  Konsultasikan treatment
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="caption treatment-disclaimer">Pilihan di atas adalah informasi perawatan, bukan rekomendasi untuk semua orang. Treatment plan final ditentukan oleh dokter berdasarkan kondisi dan kebutuhan Anda.</p>
      </div>
    </section>
  );
}
