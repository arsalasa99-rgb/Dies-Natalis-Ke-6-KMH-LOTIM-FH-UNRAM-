import React, { useState } from 'react';
import { MapPin, Mail, Phone, Instagram, HelpCircle, Check, CreditCard, Copy, ChevronDown, ChevronUp, Wallet } from 'lucide-react';

const ContactView: React.FC = () => {
  const [copiedBNI, setCopiedBNI] = useState(false);
  const [copiedDANA, setCopiedDANA] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleCopyBNI = () => {
    navigator.clipboard.writeText('1974531050');
    setCopiedBNI(true);
    setTimeout(() => setCopiedBNI(false), 2000);
  };

  const handleCopyDANA = () => {
    navigator.clipboard.writeText('081912856462');
    setCopiedDANA(true);
    setTimeout(() => setCopiedDANA(false), 2000);
  };

  const toggleFaq = (index: number) => {
      setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const contactPersons = [
    {
      role: 'Ketua Panitia',
      name: 'Yusron Kholit Mazit',
      phone: '+62 877-4479-7794', // Updated Number
      type: 'primary'
    },
    {
      role: 'Sekretaris (Admin)',
      name: 'M. Zivana AR Salasa',
      phone: '+62 822-7788-5930',
      type: 'secondary'
    },
  ];

  const faqData = [
      {
          question: "Apa tema Dies Natalis tahun ini dan maknanya?",
          answer: "Tema tahun ini adalah \"Menjaga Simfoni Biru di Bawah Naungan Sang Merah, Harmoni Justitia di Bumi Patuh Karya\". Maknanya adalah menjaga keseimbangan hukum (Biru) dengan semangat keberanian (Merah) untuk menciptakan keadilan yang harmonis di Lombok Timur (Bumi Patuh Karya)."
      },
      {
          question: "Siapa saja yang boleh mengikuti rangkaian acara?",
          answer: "Rangkaian acara terbuka untuk umum, namun khusus untuk Seminar Hukum Nasional diperuntukkan bagi Internal KMH LOTIM."
      },
      {
          question: "Bagaimana cara mendaftar Lomba Desain Infografis?",
          answer: "Pendaftaran lomba dilakukan secara online melalui link yang tersedia di Instagram resmi @diesnatalis.kmhlotim. Peserta wajib mengirimkan karya orisinal sesuai tema hukum yang ditentukan."
      },
      {
          question: "Apakah Seminar Hukum Nasional berbayar?",
          answer: "Tidak. Seminar Hukum Nasional ini diselenggarakan khusus untuk internal anggota KMH LOTIM dan tidak dipungut biaya (Gratis)."
      },
      {
          question: "Kapan dan di mana malam puncak dilaksanakan?",
          answer: "Malam puncak Dies Natalis ke-6 akan dilaksanakan pada tanggal 1 April 2026 bertempat di Taman Budaya. Acara ini akan menampilkan pentas seni budaya dan penganugerahan pemenang lomba."
      },
      {
          question: "Bagaimana jika saya ingin berdonasi untuk Santunan Panti Asuhan?",
          answer: "Kami sangat mengapresiasi donasi Anda. Donasi dapat berupa uang tunai melalui transfer ke rekening panitia atau barang sembako yang dapat diantar langsung ke Sekretariat Panitia."
      }
  ];

  return (
    <div className="pt-24 pb-20 bg-transparent min-h-screen overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Pusat Informasi</h2>
            <p className="text-slate-200 max-w-2xl mx-auto text-sm md:text-lg font-light">
                Media komunikasi resmi Dies Natalis KMH LOTIM ke-6. <br className="hidden md:block"/>
                Informasi lengkap seputar kegiatan dan partisipasi.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Column: Sponsorship & Contact Info */}
          <div className="lg:col-span-1 space-y-8 reveal delay-100">
            
            {/* SPONSORSHIP CARD (HIGHLIGHT) - White Glass */}
            <div className="bg-white/10 backdrop-blur-xl text-white p-5 md:p-6 rounded-2xl shadow-xl border border-white/20 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                {/* Decorative Effect */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 opacity-20 rounded-full -mr-10 -mt-10 blur-3xl group-hover:opacity-30 transition-opacity"></div>
                
                <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 relative z-10">
                    <CreditCard className="text-amber-400" size={24} /> Sponsorship & Donasi
                </h3>
                <p className="text-slate-200 text-xs md:text-sm mb-6 leading-relaxed relative z-10 border-b border-white/10 pb-4">
                    Dukung kesuksesan acara ini melalui transfer ke rekening resmi bendahara panitia:
                </p>

                {/* BNI SECTION */}
                <div className="bg-black/30 backdrop-blur-md p-4 rounded-xl border border-white/10 mb-4 relative z-10">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-teal-400 uppercase tracking-widest flex items-center gap-1"><CreditCard size={14}/> Bank BNI</span>
                        <button 
                            onClick={handleCopyBNI}
                            className="text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded-md"
                            title="Salin Nomor Rekening"
                        >
                            {copiedBNI ? <span className="text-green-400 font-bold">Tersalin</span> : 'Salin'}
                            {copiedBNI ? <Check size={12} className="text-green-400"/> : <Copy size={12} />}
                        </button>
                    </div>
                    <div className="text-xl md:text-2xl font-mono font-bold tracking-wider mb-1 text-white tabular-nums truncate">
                        1974 5310 50
                    </div>
                    <div className="text-[10px] text-teal-200 uppercase font-medium truncate">
                        a.n. AZKA WIGANTARI
                    </div>
                </div>

                {/* DANA SECTION */}
                <div className="bg-sky-500/20 backdrop-blur-md p-4 rounded-xl border border-sky-500/30 mb-6 relative z-10">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-sky-300 uppercase tracking-widest flex items-center gap-1"><Wallet size={14}/> DANA</span>
                        <button 
                            onClick={handleCopyDANA}
                            className="text-sky-100 hover:text-white transition-colors flex items-center gap-1 text-xs bg-sky-900/40 px-2 py-1 rounded-md"
                            title="Salin Nomor DANA"
                        >
                            {copiedDANA ? <span className="text-green-300 font-bold">Tersalin</span> : 'Salin'}
                            {copiedDANA ? <Check size={12} className="text-green-300"/> : <Copy size={12} />}
                        </button>
                    </div>
                    <div className="text-lg md:text-xl font-mono font-bold tracking-wider mb-1 text-white tabular-nums truncate">
                        0819 1285 6462
                    </div>
                    <div className="text-[10px] text-sky-200 uppercase font-medium truncate">
                        a.n. YENIKA ASTARI
                    </div>
                </div>

                <a
                    href="https://wa.me/6281912856462?text=Halo%20Kak,%20saya%20ingin%20konfirmasi%20transfer%20sponsorship%20untuk%20Dies%20Natalis%20KMH%20LOTIM%20VI..."
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-all shadow-lg hover:shadow-green-500/20 relative z-10 text-sm md:text-base hover:scale-105 active:scale-95 border-t-2 border-green-500"
                >
                    <span className="flex items-center justify-center gap-2"><Instagram size={18}/> Konfirmasi Transfer WA</span>
                </a>
            </div>

            {/* Main Office Card - White Glass */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MapPin className="text-sky-300" /> Sekretariat
              </h3>
              <address className="not-italic text-slate-200 space-y-4 text-sm leading-relaxed">
                <p className="font-medium text-white">Universitas Mataram</p>
                <p>Jl. Majapahit No. 62, Gomong, Kec. Selaparang, Kota Mataram, Nusa Tenggara Barat 83125</p>
                
                <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                    <a href="mailto:kmhlotim@unram.ac.id" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                            <Mail size={16} />
                        </div>
                        kmhlotim@unram.ac.id
                    </a>
                    <a href="https://instagram.com/diesnatalis.kmhlotim" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                            <Instagram size={16} />
                        </div>
                        @diesnatalis.kmhlotim
                    </a>
                </div>
              </address>
            </div>

            {/* Contact Persons List (Simplified) */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Phone size={20} className="text-amber-400" /> Narahubung Cepat
              </h3>
              <div className="space-y-3">
                {contactPersons.map((person, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center justify-between group hover:border-white/30 transition-all hover:shadow-md">
                    <div>
                      <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">{person.role}</p>
                      <p className="font-bold text-white text-sm md:text-base group-hover:text-sky-300 transition-colors">{person.name}</p>
                    </div>
                    <a 
                      href={`https://wa.me/${person.phone.replace(/[^0-9]/g, '')}`} 
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-green-600/20 text-green-400 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all shadow-sm hover:scale-110"
                      title="Chat WhatsApp"
                    >
                      <Phone size={18} />
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: FAQ Section - Light Glass */}
          <div className="lg:col-span-2 reveal delay-200">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6 md:p-10 sticky top-24">
                
                <div className="mb-8 flex flex-col md:flex-row md:items-center gap-4 border-b border-white/10 pb-6">
                    <div className="w-12 h-12 bg-white text-navy-900 rounded-full flex items-center justify-center flex-shrink-0 animate-bounce-slight shadow-lg">
                        <HelpCircle size={28} />
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">Pertanyaan Umum (FAQ)</h3>
                        <p className="text-slate-300 text-sm mt-1">
                            Temukan jawaban cepat untuk pertanyaan yang sering diajukan terkait Dies Natalis KMH LOTIM ke-6.
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    {faqData.map((item, idx) => {
                        const isOpen = openFaqIndex === idx;
                        return (
                            <div 
                                key={idx} 
                                className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                                    isOpen ? 'border-white bg-white/10 shadow-md transform scale-[1.01]' : 'border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10'
                                }`}
                            >
                                <button 
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                                >
                                    <h4 className={`font-bold text-sm md:text-base pr-4 transition-colors ${isOpen ? 'text-white' : 'text-slate-200'}`}>
                                        {item.question}
                                    </h4>
                                    <div className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`}>
                                        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </div>
                                </button>
                                
                                <div 
                                    className={`px-5 text-sm md:text-base text-slate-300 leading-relaxed overflow-hidden transition-all duration-500 ease-in-out ${
                                        isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="pt-2 border-t border-white/10 animate-fadeIn">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-slate-400 text-sm mb-4">Masih memiliki pertanyaan lain?</p>
                    <a 
                        href="https://instagram.com/diesnatalis.kmhlotim" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-white hover:bg-slate-200 text-navy-900 font-bold px-6 py-3 rounded-lg transition-all hover:scale-105 active:scale-95 text-sm shadow-lg"
                    >
                        <Instagram size={18} /> DM Instagram Kami
                    </a>
                </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactView;