import { useState } from 'react';

const cases = [
  {
    label: 'Melasma',
    protocol: '6 sesi PicoSure',
    context: 'Contoh rangkaian sesi dalam brief untuk membahas perawatan melasma bersama dokter.',
    concern: 'Hyperpigmentation',
    image: 'skin',
    alt: 'Ilustrasi tekstur kulit wajah dalam pencahayaan alami',
  },
  {
    label: 'Severe Acne',
    protocol: '3 bulan protocol',
    context: 'Contoh periode perawatan dalam brief untuk membahas acne berat, bukan durasi yang dijamin untuk setiap orang.',
    concern: 'Acne (Jerawat)',
    image: 'skin',
    alt: 'Ilustrasi tekstur kulit wajah dalam pencahayaan alami',
  },
  {
    label: 'Acne Scars',
    protocol: '5 sesi Fraxel',
    context: 'Contoh rangkaian sesi dalam brief untuk membahas pilihan perawatan bekas jerawat.',
    concern: 'Acne Scars',
    image: 'skin',
    alt: 'Ilustrasi tekstur kulit wajah dalam pencahayaan alami',
  },
  {
    label: 'Anti-Aging',
    protocol: 'Botox + filler combination',
    context: 'Contoh kombinasi treatment dalam brief. Kebutuhan prosedur dan waktunya ditentukan melalui konsultasi.',
    concern: 'Anti-Aging',
    image: 'portrait',
    alt: 'Potret ilustratif untuk topik perawatan kulit, bukan foto pasien',
  },
  {
    label: 'Hair Restoration',
    protocol: '6 bulan PRP',
    context: 'Contoh periode perawatan rambut dalam brief untuk dibahas sesuai kondisi dan diagnosis dokter.',
    concern: null,
    image: 'hair',
    alt: 'Ilustrasi rambut untuk topik perawatan rambut, bukan hasil treatment',
  },
];

export default function BeforeAfter() {
  const [activeCase, setActiveCase] = useState(0);
  const active = cases[activeCase];

  return (
    <section id="results" className="section section-soft care-results" aria-labelledby="results-title">
      <div className="container-dv">
        <div className="section-header">
          <h2 id="results-title">Hasil Real Patient</h2>
          <p className="lead">Pahami topik dan alur perawatannya terlebih dahulu. Dokumentasi hasil pasien belum tersedia untuk ditampilkan.</p>
        </div>

        <div className="care-case-select" role="group" aria-label="Pilih topik perawatan">
          {cases.map((item, index) => (
            <button
              key={item.label}
              type="button"
              className="care-case-button"
              aria-pressed={activeCase === index}
              aria-controls="care-case-detail"
              onClick={() => setActiveCase(index)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="care-case-layout">
          <figure className="care-case-photo">
            <img className="photo" src={`/images/${active.image}.webp`} width="1200" height={active.image === 'portrait' ? 1200 : active.image === 'hair' ? 1800 : 750} loading="lazy" alt={active.alt} />
            <figcaption className="caption">Foto ilustrasi topik perawatan; bukan foto before &amp; after.</figcaption>
          </figure>

          <div id="care-case-detail" className="care-case-detail" aria-live="polite" aria-atomic="true">
            <p className="care-case-disclosure">Ilustrasi alur perawatan, bukan hasil pasien</p>
            <h3>{active.label}</h3>
            <dl className="care-case-protocol">
              <dt>Protokol / durasi indikatif dalam brief</dt>
              <dd>{active.protocol}</dd>
            </dl>
            <p className="care-case-context">{active.context}</p>
            <p className="care-case-context">Treatment plan personal ditentukan dokter setelah analisis kulit dan konsultasi. Rangkaian ini tidak menyatakan atau menjanjikan tingkat perbaikan.</p>
            <a
              className="button care-case-cta"
              href={active.concern ? `#booking?concern=${encodeURIComponent(active.concern)}` : '#booking'}
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'instant', block: 'start' })}
            >
              Konsultasi untuk kondisi saya
            </a>
          </div>
        </div>

        <p className="care-results-evidence caption">Perbandingan before &amp; after hanya akan ditampilkan dengan foto pasien yang berpasangan dan consent tertulis. Hasil dapat berbeda pada setiap individu.</p>
      </div>
    </section>
  );
}
