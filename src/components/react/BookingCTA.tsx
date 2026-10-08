import { useEffect, useRef, useState } from 'react';

const concerns = ['Acne (Jerawat)', 'Hyperpigmentation', 'Anti-Aging', 'Acne Scars', 'Rosacea & Sensitif', 'Dehydration', 'Skin Tag & Mole', 'Postpartum Skin'];
const branches = ['PIK', 'Senopati', 'Surabaya', 'Medan'];
type FormData = { name: string; whatsapp: string; email: string; selectedConcerns: string[]; branch: string; preferredDate: string; doctor: string };
type Errors = Partial<Record<keyof FormData, string>>;
const emptyForm: FormData = { name: '', whatsapp: '', email: '', selectedConcerns: [], branch: '', preferredDate: '', doctor: '' };
function localToday() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

export default function BookingCTA() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [prepared, setPrepared] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');
  const [manualCopy, setManualCopy] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLHeadingElement>(null);
  const manualRef = useRef<HTMLTextAreaElement>(null);
  const [today, setToday] = useState('');

  useEffect(() => {
    setToday(localToday());
    const prefill = () => {
      const [anchor, query = ''] = window.location.hash.slice(1).split('?');
      if (anchor !== 'booking') return;
      const params = new URLSearchParams(query);
      setPrepared(false);
      setCopyStatus('');
      setManualCopy(false);
      setErrors({});
      // A plain #booking is navigation, not a request to discard entered personal data.
      if (!query) return;
      setForm(previous => ({
        ...previous,
        ...(params.has('concern') ? { selectedConcerns: concerns.filter(concern => params.getAll('concern').includes(concern)) } : {}),
        ...(params.has('branch') ? { branch: branches.includes(params.get('branch') || '') ? params.get('branch')! : '' } : {}),
        ...(params.has('doctor') ? { doctor: (params.get('doctor') || '').trim() } : {}),
      }));
    };
    prefill();
    window.addEventListener('hashchange', prefill);
    return () => window.removeEventListener('hashchange', prefill);
  }, []);
  useEffect(() => { if (prepared) summaryRef.current?.focus(); }, [prepared]);
  useEffect(() => { if (manualCopy) { manualRef.current?.focus(); manualRef.current?.select(); } }, [manualCopy]);

  const update = (key: keyof FormData, value: string | string[]) => {
    setForm(previous => ({ ...previous, [key]: value }));
    setErrors(previous => ({ ...previous, [key]: undefined }));
  };
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Errors = {};
    if (!form.name.trim()) next.name = 'Masukkan nama lengkap Anda.';
    const digits = form.whatsapp.replace(/\D/g, '');
    if (!/^[+\d\s()-]+$/.test(form.whatsapp) || digits.length < 9 || digits.length > 15) next.whatsapp = 'Masukkan nomor WhatsApp yang valid (9–15 digit), termasuk kode negara bila diperlukan.';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Masukkan alamat email yang valid atau kosongkan kolom ini.';
    if (!form.selectedConcerns.length) next.selectedConcerns = 'Pilih setidaknya satu concern kulit.';
    if (!branches.includes(form.branch)) next.branch = 'Pilih cabang preferensi Anda.';
    if (form.preferredDate && (Number.isNaN(Date.parse(form.preferredDate)) || form.preferredDate < localToday())) next.preferredDate = 'Pilih tanggal hari ini atau setelahnya.';
    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setCopyStatus('');
    setManualCopy(false);
    setPrepared(true);
  };
  const summary = [
    'Permintaan konsultasi Dermavée — belum dikirim',
    `Nama: ${form.name.trim()}`, `WhatsApp: ${form.whatsapp.trim()}`,
    `Email: ${form.email.trim() || 'Tidak diisi'}`, `Concern: ${form.selectedConcerns.join(', ')}`,
    `Cabang preferensi: ${form.branch}`, `Tanggal preferensi: ${form.preferredDate || 'Belum ditentukan'}`,
    `Dokter preferensi: ${form.doctor || 'Belum ditentukan'}`,
    'Penawaran: Free Skin Analysis + dermatologist consultation; tanpa commitment treatment.',
    'Tanggal dan dokter adalah preferensi, bukan konfirmasi ketersediaan atau janji temu.',
    'Data belum dikirim. Kanal booking klinik belum dikonfigurasi.',
  ].join('\n');
  const copy = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(summary);
      setCopyStatus('Ringkasan disalin. Data tetap belum dikirim ke klinik.');
      setManualCopy(false);
    } catch {
      setCopyStatus('Penyalinan otomatis tidak tersedia. Pilih dan salin teks ringkasan di bawah secara manual.');
      setManualCopy(true);
    }
  };
  const reset = () => {
    setForm(emptyForm); setErrors({}); setPrepared(false); setCopyStatus(''); setManualCopy(false);
    if (window.location.hash.startsWith('#booking?')) window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#booking`);
    requestAnimationFrame(() => formRef.current?.querySelector<HTMLInputElement>('#booking-name')?.focus());
  };
  const fieldError = (key: keyof FormData) => errors[key] ? <p id={`booking-${key}-error`} className="consultation-error">{errors[key]}</p> : null;
  const attributes = (key: keyof FormData) => ({ 'aria-invalid': !!errors[key], 'aria-describedby': errors[key] ? `booking-${key}-error` : undefined });

  return <section id="booking" className="section section-soft consultation-booking">
    <div className="container-dv consultation-booking-layout">
      <div className="consultation-intro">
        <div className="section-header"><h2>Mulai Dengan Free Skin Analysis</h2><p className="lead">Konsultasi pertama gratis (skin analysis + dermatologist consultation). Tidak ada commitment treatment.</p></div>
        <figure><img src="/images/consultation.webp" width="1200" height="800" loading="lazy" className="photo" alt="Ilustrasi percakapan konsultasi antara tenaga medis dan pasien" /><figcaption className="caption">Foto ilustrasi konsultasi, bukan dokumentasi dokter atau cabang Dermavée.</figcaption></figure>
        <p className="consultation-notice">Form ini menyiapkan ringkasan untuk Anda tinjau dan salin. Data belum dikirim. Kanal booking klinik belum dikonfigurasi.</p>
      </div>
      <div className="consultation-panel">
        {prepared ? <div className="consultation-review">
          <h3 ref={summaryRef} tabIndex={-1}>Tinjau permintaan konsultasi</h3>
          <p className="consultation-notice">Data belum dikirim. Kanal booking klinik belum dikonfigurasi.</p>
          <dl>{[['Nama', form.name.trim()], ['WhatsApp', form.whatsapp.trim()], ['Email', form.email.trim() || 'Tidak diisi'], ['Concern', form.selectedConcerns.join(', ')], ['Cabang preferensi', form.branch], ['Tanggal preferensi', form.preferredDate || 'Belum ditentukan'], ['Dokter preferensi', form.doctor || 'Belum ditentukan']].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
          <p className="caption">Tanggal dan dokter adalah preferensi, bukan konfirmasi ketersediaan atau janji temu. Penawaran: Free Skin Analysis + dermatologist consultation; tanpa commitment treatment.</p>
          <div className="consultation-actions"><button className="button" onClick={copy}>Salin permintaan lengkap</button><button className="button-outline" onClick={() => { setPrepared(false); setCopyStatus(''); setManualCopy(false); requestAnimationFrame(() => formRef.current?.querySelector<HTMLInputElement>('#booking-name')?.focus()); }}>Edit data</button></div>
          <p role="status" className="consultation-copy-status">{copyStatus}</p>
          {manualCopy && <div className="consultation-field"><label htmlFor="booking-manual-copy">Ringkasan untuk disalin manual</label><textarea ref={manualRef} id="booking-manual-copy" readOnly value={summary} rows={13} /></div>}
          <button className="text-link consultation-reset" type="button" onClick={reset}>Hapus data dan mulai ulang</button>
        </div> : <form ref={formRef} onSubmit={submit} noValidate>
          <h3>Detail konsultasi Anda</h3><p className="caption consultation-required">Kolom bertanda * wajib diisi. Data hanya berada di halaman ini, tidak disimpan.</p>
          <div className="consultation-fields">
            <div className="consultation-field"><label htmlFor="booking-name">Nama lengkap *</label><input id="booking-name" name="name" autoComplete="name" required value={form.name} onChange={e => update('name', e.target.value)} {...attributes('name')} />{fieldError('name')}</div>
            <div className="consultation-field"><label htmlFor="booking-whatsapp">WhatsApp *</label><input id="booking-whatsapp" name="whatsapp" type="tel" autoComplete="tel" placeholder="Contoh: +62 812 3456 7890" required value={form.whatsapp} onChange={e => update('whatsapp', e.target.value)} {...attributes('whatsapp')} />{fieldError('whatsapp')}</div>
            <div className="consultation-field"><label htmlFor="booking-email">Email (opsional)</label><input id="booking-email" name="email" type="email" autoComplete="email" value={form.email} onChange={e => update('email', e.target.value)} {...attributes('email')} />{fieldError('email')}</div>
            <div className="consultation-field"><label htmlFor="booking-branch">Cabang preferensi *</label><select id="booking-branch" name="branch" required value={form.branch} onChange={e => update('branch', e.target.value)} {...attributes('branch')}><option value="">Pilih cabang</option>{branches.map(branch => <option key={branch} value={branch}>{branch}</option>)}</select>{fieldError('branch')}</div>
          </div>
          <fieldset className="consultation-concerns" aria-describedby={errors.selectedConcerns ? 'booking-selectedConcerns-error' : 'booking-concern-help'}><legend>Concern utama *</legend><p id="booking-concern-help" className="caption">Bisa pilih lebih dari satu.</p><div>{concerns.map(concern => <label key={concern}><input name="selectedConcerns" type="checkbox" value={concern} checked={form.selectedConcerns.includes(concern)} onChange={e => update('selectedConcerns', e.target.checked ? [...form.selectedConcerns, concern] : form.selectedConcerns.filter(item => item !== concern))} aria-invalid={!!errors.selectedConcerns} /><span>{concern}</span></label>)}</div>{fieldError('selectedConcerns')}</fieldset>
          <div className="consultation-field consultation-date"><label htmlFor="booking-date">Tanggal preferensi (opsional)</label><input id="booking-date" name="preferredDate" type="date" min={today || undefined} value={form.preferredDate} onChange={e => update('preferredDate', e.target.value)} {...attributes('preferredDate')} />{fieldError('preferredDate')}<p className="caption">Tanggal pilihan tidak menjamin ketersediaan jadwal.</p></div>
          {form.doctor && <div className="consultation-doctor"><p>Dokter preferensi: <strong>{form.doctor}</strong></p><button type="button" className="text-link" onClick={() => update('doctor', '')}>Hapus preferensi dokter</button></div>}
          <p className="consultation-notice">Data belum dikirim. Kanal booking klinik belum dikonfigurasi. Tombol di bawah hanya menyiapkan ringkasan, bukan membuat janji temu.</p>
          <div className="consultation-actions"><button type="submit" className="button">Siapkan permintaan konsultasi</button><button type="button" className="text-link" onClick={reset}>Reset form</button></div>
        </form>}
      </div>
    </div>
  </section>;
}
