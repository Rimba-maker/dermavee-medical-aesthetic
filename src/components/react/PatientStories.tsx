import { useState } from 'react';

const stories = [
  {
    quote: "Melasma saya sudah 5 tahun, sudah coba berbagai klinik 'kecantikan'. Di Dermavée, dr. Linda diagnosis melasma deep dermal type — butuh PicoSure + tretinoin protocol. 6 bulan, 80% lebih cerah. Worth the wait.",
    name: 'Bu Indah',
    age: '38 tahun',
    concern: 'Melasma post-pregnancy',
  },
  {
    quote: 'Acne severe sejak SMA, sudah obat Roaccutane 2 kali tapi balik lagi. dr. Reza buatkan protocol: medical skincare + treatment + lifestyle change. 4 bulan, kulit hampir clear. Pertama kali percaya diri tanpa makeup.',
    name: 'Andini',
    age: '26 tahun',
    concern: 'Hormonal acne',
  },
  {
    quote: 'Pasca melahirkan, kulit aging 5 tahun lebih cepat — kerut, sagging, kusam. Dapat plan combo: skin booster + Botox preventif + tretinoin. 3 bulan, suami bilang saya glowing lagi.',
    name: 'Maya',
    age: '35 tahun',
    concern: 'Postpartum aging',
  },
];

export default function PatientStories() {
  const [active, setActive] = useState(0);
  const story = stories[active];

  return (
    <section id="stories" className="section section-soft care-stories" aria-labelledby="stories-title">
      <div className="container-dv">
        <div className="section-header">
          <h2 id="stories-title">Cerita Patient Kami</h2>
          <p className="lead">Cerita dalam brief Dermavée, belum diverifikasi sebagai testimoni pasien.</p>
        </div>

        <div className="care-stories-layout" role="region" aria-roledescription="carousel" aria-label="Tiga cerita dalam brief Dermavée">
          <figure className="care-stories-photo">
            <img className="photo" src="/images/portrait.webp" width="1200" height="1200" loading="lazy" alt="Potret ilustratif untuk mendampingi cerita perawatan kulit" />
            <figcaption className="caption">Foto ilustrasi; bukan Bu Indah, Andini, Maya, atau pasien Dermavée.</figcaption>
          </figure>

          <div className="care-story-panel">
            <div className="care-story-select" role="group" aria-label="Pilih cerita">
              {stories.map((item, index) => (
                <button
                  key={item.name}
                  className="care-story-button"
                  type="button"
                  aria-pressed={active === index}
                  aria-controls="care-story-content"
                  onClick={() => setActive(index)}
                  aria-label={`Baca cerita ${item.name}: ${item.concern}`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div id="care-story-content" className="care-story-content" aria-live="polite" aria-atomic="true">
              <p className="care-story-concern">{story.concern}</p>
              <blockquote>
                <p>“{story.quote}”</p>
                <footer>{story.name}, {story.age}<span>Nama dan cerita mengikuti brief Dermavée.</span></footer>
              </blockquote>
            </div>

            <div className="care-story-navigation">
              <p className="caption">Cerita {active + 1} dari {stories.length}</p>
              <div>
                <button className="care-story-nav-button" type="button" aria-label="Tampilkan cerita sebelumnya" onClick={() => setActive((index) => (index + stories.length - 1) % stories.length)}>Sebelumnya</button>
                <button className="care-story-nav-button" type="button" aria-label="Tampilkan cerita berikutnya" onClick={() => setActive((index) => (index + 1) % stories.length)}>Berikutnya</button>
              </div>
            </div>
            <p className="care-story-note caption">Kutipan dipertahankan sesuai brief, bukan bukti hasil klinis atau jaminan hasil treatment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
