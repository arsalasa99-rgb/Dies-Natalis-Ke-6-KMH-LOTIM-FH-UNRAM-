import React from 'react';
import { View } from '../types';
import { Calculator, Phone, ChevronDown } from 'lucide-react';

interface HeroProps {
  onNavigate: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950 pt-20 pb-0">
      {/* Background Image with Responsive Cropping */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co.com/M42sjzx/Gemini-Generated-Image-g3n9ing3n9ing3n9-1.png" 
          alt="Latar Belakang Dies Natalis" 
          className="w-full h-full object-cover object-center animate-pulse-slow"
          style={{ animationDuration: '20s' }} // Efek bernafas sangat lambat
        />
        {/* Overlay layers for readability - Cleaned up */}
        <div className="absolute inset-0 bg-navy-950/75 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50"></div>
      </div>

      {/* Animated Lighting Effects (Rapi, Putih & Navy, Tidak Dominan) */}
       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Kiri: Navy Khas Aplikasi (Lebih kecil & tipis) */}
        <div className="absolute top-20 -left-20 w-64 h-64 bg-blue-800 rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-blob"></div>
        {/* Kanan: Putih (Lebih kecil & tipis) */}
        <div className="absolute top-32 -right-20 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-10 animate-blob delay-200"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center justify-center h-full pb-16">
        
        <div className="animate-slideDown">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-white text-xs md:text-sm font-semibold mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.1)] tracking-wider uppercase">
            Keluarga Mahasiswa Hukum Lombok Timur
            </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tight max-w-6xl animate-slideUp drop-shadow-2xl">
          Dies Natalis <span className="text-blue-400 animate-pulse-slow inline-block drop-shadow-[0_0_15px_rgba(30,58,138,0.5)]">Ke-6</span>
        </h1>
        
        <div className="max-w-4xl mx-auto mb-12 animate-slideUp delay-200 px-2 relative group">
            {/* Text Glow Effect */}
            <div className="absolute -inset-4 bg-navy-950/60 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <p className="relative text-base sm:text-lg md:text-2xl text-slate-100 font-light italic leading-relaxed drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            "Menjaga Simfoni Biru di Bawah Naungan Sang Merah,<br className="hidden md:block"/> Harmoni Justitia di Bumi Patuh Karya"
            </p>
        </div>

        <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 animate-slideUp delay-300 px-4 mb-8">
          <button 
            onClick={() => onNavigate(View.RAB)}
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-sky-50 text-navy-950 font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] active:scale-95"
          >
            <Calculator size={20} className="animate-bounce-slight" />
            Cek Anggaran (RAB)
          </button>
          <button 
            onClick={() => onNavigate(View.CONTACT)}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base backdrop-blur-md hover:border-sky-300 hover:text-sky-200 hover:scale-105 active:scale-95"
          >
            <Phone size={20} />
            Hubungi Panitia
          </button>
        </div>
      </div>

      {/* Scroll Indicator - Dikebawahin lagi (bottom-2) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce hidden md:flex flex-col items-center gap-1 z-20 cursor-pointer" onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll Down</span>
          <ChevronDown size={24} />
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;