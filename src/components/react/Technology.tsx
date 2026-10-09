const technologies = [
  {
    name: 'PicoSure Pro',
    brand: 'Cynosure, US',
    type: 'Pico laser',
    description: 'Untuk pembahasan perawatan melasma, pigmentasi, dan tattoo removal.',
    href: '#treatment-laser',
    link: 'Pelajari laser therapy',
  },
  {
    name: 'Fraxel re:store',
    brand: 'Solta Medical, US',
    type: 'Fractional resurfacing',
    description: 'Fractional laser resurfacing untuk pembahasan scar, tekstur kulit, dan anti-aging.',
    href: '#treatment-laser',
    link: 'Pelajari laser therapy',
  },
  {
    name: 'VISIA Skin Analysis',
    brand: 'Canfield, US',
    type: 'AI-powered skin analysis',
    description: 'Imaging untuk membantu evaluasi kulit dan perencanaan perawatan bersama dokter.',
    href: '#analysis',
    link: 'Kenali skin analysis',
  },
  {
    name: 'Morpheus8',
    brand: 'InMode, Israel',
    type: 'RF microneedling',
    description: 'RF microneedling deep dermal untuk pembahasan tightening dan scar.',
    href: '#treatment-microneedling',
    link: 'Pelajari microneedling & RF',
  },
  {
    name: 'CoolSculpting Elite',
    brand: 'Allergan, US',
    type: 'FDA-approved fat freezing',
    description: 'Cryolipolysis untuk pembahasan fat reduction dan body contouring non-invasif.',
    href: '#treatment-body',
    link: 'Pelajari body treatment',
  },
];

export default function Technology() {
  return (
    <section id="technology" className="section section-soft technology-section" aria-labelledby="technology-heading">
      <div className="container-dv">
        <header className="section-header">
          <h2 id="technology-heading">Teknologi Medical-Grade</h2>
          <p className="lead">Kenali teknologi dari brand yang digunakan dalam dermatologi medis. Dokter menentukan pilihan perangkat berdasarkan kebutuhan kulit, bukan satu prosedur untuk semua.</p>
        </header>

        <div className="technology-layout">
          <div className="technology-photography">
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}images/laser.webp`}
                alt="Ilustrasi perawatan dengan perangkat klinis generik, bukan PicoSure, Fraxel, atau Morpheus8"
                className="photo technology-primary-photo"
                width="1200"
                height="900"
                loading="lazy"
              />
              <figcaption className="caption">Ilustrasi perawatan klinis. Bukan foto perangkat bermerek atau equipment Dermavée.</figcaption>
            </figure>
            <figure className="technology-secondary-figure">
              <img
                src={`${import.meta.env.BASE_URL}images/analysis.webp`}
                alt="Ilustrasi evaluasi kulit saat konsultasi, bukan perangkat VISIA"
                className="photo technology-secondary-photo"
                width="1200"
                height="900"
                loading="lazy"
              />
              <figcaption className="caption">Ilustrasi pemeriksaan kulit; bukan mesin VISIA.</figcaption>
            </figure>
          </div>

          <div className="technology-index">
            {technologies.map((technology) => (
              <article key={technology.name} className="technology-entry">
                <div className="technology-entry-title">
                  <h3>{technology.name}</h3>
                  <p className="caption">{technology.brand}</p>
                </div>
                <div className="technology-entry-description">
                  <p className="technology-type">{technology.type}</p>
                  <p>{technology.description}</p>
                  <a href={technology.href} className="text-link">{technology.link}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="technology-closing">
          <p>Ingin memahami teknologi yang sesuai untuk concern Anda? Mulai dari evaluasi bersama dokter Sp.KK.</p>
          <a href="#booking" className="button-outline">Tanya saat konsultasi</a>
        </div>
      </div>
    </section>
  );
}
