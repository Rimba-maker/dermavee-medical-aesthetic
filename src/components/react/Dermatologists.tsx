const doctors = [
  { name: 'dr. Andreas Wibowo, Sp.KK(K)', specialty: 'Dermatologist Konsultan, Anti-Aging' },
  { name: 'dr. Sari Larasati, Sp.KK', specialty: 'Pediatric & Adult Dermatology' },
  { name: 'dr. Maya Hartono, Sp.KK', specialty: 'Cosmetic Dermatology' },
  { name: 'dr. Reza Kurniawan, Sp.KK', specialty: 'Laser & Acne Specialist' },
  { name: 'dr. Linda Wijaya, Sp.KK', specialty: 'Pigmentation & Melasma Expert' },
  { name: 'dr. Bayu Pramana, Sp.KK', specialty: 'Hair Restoration' },
  { name: 'dr. Nina Setiawan, Sp.KK', specialty: 'Postpartum & Female Dermatology' },
  { name: 'dr. Daniel Hartanto, Sp.KK', specialty: 'Scar Specialist' },
];

export default function Dermatologists() {
  return (
    <section id="doctors" className="section care-doctors" aria-labelledby="doctors-title">
      <div className="container-dv">
        <div className="section-header">
          <h2 id="doctors-title">Tim Dokter Spesialis Kulit</h2>
          <p className="lead">Dokter spesialis kulit (Sp.KK), bukan dokter umum. Pilih fokus konsultasi yang sesuai dengan kebutuhan kulit Anda.</p>
        </div>

        <div className="care-doctors-layout">
          <div className="care-doctors-intro">
            <figure className="care-doctors-photo">
              <img className="photo" src="/images/consultation.webp" width="1600" height="1067" loading="lazy" alt="Ilustrasi tenaga medis berdiskusi dengan seseorang saat konsultasi" />
              <figcaption className="caption">Foto ilustrasi konsultasi; bukan potret dokter dalam direktori.</figcaption>
            </figure>
            <p className="care-doctors-note">Nama, gelar, dan fokus dokter mengikuti brief Dermavée. Profil resmi, pendidikan, serta jadwal praktik perlu dikonfirmasi saat konsultasi.</p>
          </div>

          <ul className="care-doctors-directory" aria-label="Direktori dokter dan fokus konsultasi">
            {doctors.map((doctor) => (
              <li key={doctor.name} className="care-doctor-entry">
                <h3>{doctor.name}</h3>
                <p>{doctor.specialty}</p>
                <a
                  className="text-link care-doctor-book"
                  href={`#booking?doctor=${encodeURIComponent(doctor.name)}`}
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'instant', block: 'start' })}
                  aria-label={`Pilih konsultasi dengan ${doctor.name}`}
                >
                  Book with this doctor
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
