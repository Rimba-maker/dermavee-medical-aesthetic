import { useEffect, useState } from 'react';

const concerns = [
  {
    name: 'Acne (Jerawat)',
    value: 'Acne (Jerawat)',
    description: 'Severe acne, hormonal acne, cystic acne',
    image: 'skin',
    imageAlt: 'Ilustrasi tekstur kulit wajah untuk pembahasan kondisi kulit',
    detail: 'Jenis jerawat dan inflammasi perlu dinilai terlebih dahulu. Dokter menyusun perawatan sesuai kondisi kulit, termasuk jerawat hormonal dan kistik.',
    recommendations: [
      { name: 'Medical Skincare & Prescription', href: '#treatment-skincare' },
      { name: 'Chemical Peels', href: '#treatment-peel' },
    ],
  },
  {
    name: 'Hyperpigmentation',
    value: 'Hyperpigmentation',
    description: 'Melasma, freckles, sun spots, post-inflammatory',
    image: 'skin',
    imageAlt: 'Ilustrasi kulit wajah, bukan dokumentasi pasien dengan melasma',
    detail: 'Penyebab pigmentasi menjadi dasar pilihan perawatan. Diskusikan melasma, freckles, sun spots, atau bekas inflammasi dengan dokter sebelum memilih prosedur.',
    recommendations: [
      { name: 'Laser Therapy', href: '#treatment-laser' },
      { name: 'Medical Skincare & Prescription', href: '#treatment-skincare' },
    ],
  },
  {
    name: 'Anti-Aging',
    value: 'Anti-Aging',
    description: 'Fine lines, wrinkles, sagging, loss of volume',
    image: 'injectable',
    imageAlt: 'Ilustrasi perawatan wajah dalam pembahasan anti-aging',
    detail: 'Garis halus, kerutan, kekenduran, dan perubahan volume dapat memerlukan pendekatan berbeda. Pilihan prosedur mengikuti evaluasi serta tujuan personal Anda.',
    recommendations: [
      { name: 'Injectable Therapy', href: '#treatment-injectable' },
      { name: 'Microneedling & RF', href: '#treatment-microneedling' },
    ],
  },
  {
    name: 'Acne Scars',
    value: 'Acne Scars',
    description: 'Atrophic, hypertrophic, ice pick, rolling',
    image: 'analysis',
    imageAlt: 'Ilustrasi evaluasi kulit bersama tenaga medis',
    detail: 'Scar atrofik, hipertrofik, ice pick, dan rolling tidak selalu ditangani dengan cara yang sama. Evaluasi jenis scar membantu dokter merencanakan urutan perawatan.',
    recommendations: [
      { name: 'Laser Therapy', href: '#treatment-laser' },
      { name: 'Microneedling & RF', href: '#treatment-microneedling' },
    ],
  },
  {
    name: 'Rosacea & Sensitif',
    value: 'Rosacea & Sensitif',
    description: 'Redness, sensitivity, broken capillaries',
    image: 'consultation',
    imageAlt: 'Ilustrasi konsultasi untuk memahami keluhan kulit sensitif',
    detail: 'Kemerahan, sensitivitas, dan pembuluh darah yang tampak perlu diperiksa oleh dokter. Kesesuaian skincare maupun prosedur dinilai berdasarkan kondisi dan pemicu kulit Anda.',
    recommendations: [
      { name: 'Medical Skincare & Prescription', href: '#treatment-skincare' },
      { name: 'Laser Therapy', href: '#treatment-laser' },
    ],
  },
  {
    name: 'Dehydration & Dullness',
    value: 'Dehydration',
    description: 'Dry skin, dullness, uneven texture',
    image: 'skincare',
    imageAlt: 'Ilustrasi skincare untuk pembahasan kelembapan kulit',
    detail: 'Kulit kering, kusam, dan tekstur tidak merata menjadi bagian dari evaluasi menyeluruh. Dokter dapat mendiskusikan skincare personal dan pilihan perawatan sesuai kebutuhan kulit.',
    recommendations: [
      { name: 'Medical Skincare & Prescription', href: '#treatment-skincare' },
      { name: 'Skin Booster / Injectable Therapy', href: '#treatment-injectable' },
    ],
  },
  {
    name: 'Skin Tag & Mole',
    value: 'Skin Tag & Mole',
    description: 'Removal & evaluation oleh dokter',
    image: 'analysis',
    imageAlt: 'Ilustrasi pemeriksaan kulit, bukan foto diagnosis lesi',
    detail: 'Skin tag dan tahi lalat perlu dievaluasi sebelum tindakan pengangkatan. Mulai dengan konsultasi dokter untuk pemeriksaan dan pembahasan pilihan yang sesuai.',
    recommendations: [
      { name: 'Evaluasi kulit & konsultasi dokter', href: '#analysis' },
    ],
  },
  {
    name: 'Postpartum Skin',
    value: 'Postpartum Skin',
    description: 'Melasma post-pregnancy, stretchmark, hair loss',
    image: 'hair',
    imageAlt: 'Ilustrasi perawatan rambut untuk pembahasan concern postpartum',
    detail: 'Melasma setelah kehamilan, stretchmark, dan kerontokan rambut perlu pendekatan personal. Sampaikan status menyusui agar dokter dapat menilai kesesuaian setiap pilihan perawatan.',
    recommendations: [
      { name: 'Medical Skincare & Prescription', href: '#treatment-skincare' },
      { name: 'Body Treatment & Hair Restoration', href: '#treatment-body' },
    ],
  },
];

export default function SkinConcerns() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = concerns[selectedIndex];

  useEffect(() => {
    const selector = document.getElementById('hero-concern') as HTMLSelectElement | null;
    const synchronize = () => {
      const index = concerns.findIndex(item => item.value === selector?.value);
      setSelectedIndex(index < 0 ? 0 : index);
    };
    synchronize();
    selector?.addEventListener('change', synchronize);
    return () => selector?.removeEventListener('change', synchronize);
  }, []);

  return (
    <section id="concerns" className="section concern-section" aria-labelledby="concerns-heading">
      <div className="container-dv">
        <header className="section-header">
          <h2 id="concerns-heading">Apa Masalah Kulit Anda?</h2>
          <p className="lead">Pilih concern untuk mengenal pilihan perawatan yang dapat Anda diskusikan dengan dokter.</p>
        </header>

        <div className="concern-layout">
          <div className="concern-index" role="group" aria-label="Pilih concern kulit">
            {concerns.map((concern, index) => (
              <button
                key={concern.value}
                type="button"
                className="concern-choice"
                aria-pressed={selectedIndex === index}
                aria-controls="concern-detail"
                onClick={() => {
                  setSelectedIndex(index);
                  if (window.matchMedia('(max-width: 760px)').matches) {
                    document.getElementById('concern-detail')?.scrollIntoView({ behavior: 'instant', block: 'start' });
                  }
                }}
              >
                <span className="concern-choice-name">{concern.name}</span>
                <span className="concern-choice-description">{concern.description}</span>
                <span className="concern-choice-action">{selectedIndex === index ? 'Sedang dilihat' : 'Lihat pilihan'}</span>
              </button>
            ))}
          </div>

          <div id="concern-detail" className="concern-detail">
            <figure className="concern-figure">
              <img
                src={`${import.meta.env.BASE_URL}images/${selected.image}.webp`}
                alt={selected.imageAlt}
                className="photo concern-photo"
                width="1200"
                height="900"
                loading="lazy"
              />
              <figcaption className="caption">Foto ilustrasi perawatan dan kulit; bukan pasien atau hasil treatment Dermavée.</figcaption>
            </figure>
            <div className="concern-detail-copy" aria-live="polite" aria-atomic="true">
              <h3>{selected.name}</h3>
              <p>{selected.detail}</p>
              <h4>Pilihan untuk didiskusikan</h4>
              <ul className="concern-recommendations">
                {selected.recommendations.map((recommendation) => (
                  <li key={recommendation.href}>
                    <a className="text-link" href={recommendation.href}>{recommendation.name}</a>
                  </li>
                ))}
              </ul>
              <p className="caption concern-disclaimer">Informasi awal, bukan diagnosis atau resep. Treatment plan ditentukan setelah konsultasi dokter Sp.KK.</p>
              <a
                className="button"
                href={`#booking?concern=${encodeURIComponent(selected.value)}`}
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'instant', block: 'start' })}
              >
                Konsultasikan concern ini
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
