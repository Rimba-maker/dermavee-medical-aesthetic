import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const concerns = ['Acne (Jerawat)', 'Hyperpigmentation', 'Anti-Aging', 'Acne Scars', 'Rosacea & Sensitif', 'Dehydration', 'Skin Tag & Mole', 'Postpartum Skin'];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [concern, setConcern] = useState('');
  const [branch, setBranch] = useState('');
  const prepareConsultation = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const selection = new URLSearchParams();
    if (concern) selection.set('concern', concern);
    if (branch) selection.set('branch', branch);
    window.location.hash = selection.size ? `booking?${selection.toString()}` : 'booking';
    document.getElementById('booking')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };

  return (
    <section className="hero" aria-label="Konsultasi dermatologi Dermavée">
      <div className="container-dv">
        <div className="hero-stage">
          <div className="hero-copy">
            <h1>Solusi untuk kulit Anda.<br /><span>Dari dermatologist,</span> bukan beautician.</h1>
            <p>Klinik dermatologi medis dengan dokter spesialis kulit (Sp.KK) untuk acne, melasma, scar, anti-aging, dan kondisi kulit kronis. Treatment plan personal, bukan paket cookie-cutter.</p>
            <a className="text-link" href={concern ? '#concerns' : '#treatments'}>Lihat Treatment</a>
          </div>
          <div className="hero-visual">
            <motion.img src="/images/consultation.webp" alt="Ilustrasi tenaga medis melakukan perawatan wajah dengan pendekatan personal" width="1600" height="1067" loading="eager" fetchPriority="high" initial={{ clipPath: 'inset(0)' }} animate={{ clipPath: ['inset(0 0 6% 0)', 'inset(0)'] }} transition={{ duration: reduceMotion ? 0 : 1, ease: [0.16, 1, 0.3, 1] }} />
          </div>
        </div>
        <p className="caption hero-image-caption">Fotografi ilustratif. Bukan dokumentasi dokter atau pasien Dermavée.</p>
        <form className="hero-request" onSubmit={prepareConsultation} aria-label="Mulai konsultasi berdasarkan concern">
          <div className="hero-request-intro"><strong>Mulai dengan memahami kulit Anda.</strong><p>Free Skin Analysis + konsultasi dokter Sp.KK</p></div>
          <div><label htmlFor="hero-concern">Concern utama</label><select id="hero-concern" value={concern} onChange={e => setConcern(e.target.value)}><option value="">Pilih concern Anda</option>{concerns.map(item => <option key={item}>{item}</option>)}</select></div>
          <div><label htmlFor="hero-branch">Cabang preferensi</label><select id="hero-branch" value={branch} onChange={e => setBranch(e.target.value)}><option value="">Pilih cabang</option>{['PIK', 'Senopati', 'Surabaya', 'Medan'].map(item => <option key={item}>{item}</option>)}</select></div>
          <button className="button" type="submit">Free Skin Analysis</button>
        </form>
        <div className="hero-principles" aria-label="Pendekatan perawatan">
          <p>Dipimpin dokter spesialis kulit</p><p>Evidence-based treatment</p><p>Rencana perawatan personal</p><p>Medical-grade technology</p>
        </div>
      </div>
    </section>
  );
}
