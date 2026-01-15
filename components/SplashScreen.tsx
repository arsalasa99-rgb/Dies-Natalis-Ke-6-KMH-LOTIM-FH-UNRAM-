import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [loadingText, setLoadingText] = useState('INISIALISASI SISTEM...');

  useEffect(() => {
    const MIN_DURATION = 7000; // Minimal 7 Detik
    const startTime = Date.now();

    // Fungsi utilitas untuk mengecek status load gambar dalam DOM
    const checkImagesReady = () => {
        const images = Array.from(document.images);
        // Anggap selesai jika tidak ada gambar atau semua gambar valid sudah complete
        // img.complete bernilai true jika gambar selesai loading atau error
        return images.every(img => img.complete);
    };

    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      
      // Hitung progress berdasarkan waktu (Max 99% sebelum complete)
      // Kita buat progressnya agak nonlinear biar terasa 'loading'
      let calculatedProgress = (elapsedTime / MIN_DURATION) * 100;
      
      const isWindowLoaded = document.readyState === 'complete';
      const areImagesLoaded = checkImagesReady();

      // Logika Update Text agar terlihat "Live"
      if (calculatedProgress < 20) {
          setLoadingText('MENGHUBUNGKAN KE SERVER...');
      } else if (calculatedProgress < 40) {
          setLoadingText('MENGUNDUH STRUKTUR HALAMAN...');
      } else if (calculatedProgress < 70) {
          setLoadingText('MEMUAT ASET VISUAL & GALERI...');
      } else if (!areImagesLoaded) {
          setLoadingText('MENUNGGU RENDER GAMBAR...');
      } else {
          setLoadingText('FINALISASI KONFIGURASI...');
      }

      setLoadingProgress(prev => {
        // Kondisi Selesai: Waktu habis DAN Window Load DAN Gambar Aman
        if (elapsedTime >= MIN_DURATION && isWindowLoaded && areImagesLoaded) {
            return 100;
        }

        // Jika belum selesai, progress mentok di 99%
        // Gunakan Math.max agar tidak mundur
        return Math.min(Math.max(prev, calculatedProgress), 99);
      });

    }, 50); // Update tiap 50ms untuk animasi smooth

    return () => clearInterval(interval);
  }, []);

  // Efek ketika loading mencapai 100%
  useEffect(() => {
    if (loadingProgress >= 100) {
      setLoadingText('AKSES DIBERIKAN');
      
      // Tahan di 100% sebentar (800ms) untuk kepuasan visual
      const exitDelay = setTimeout(() => {
        setIsExiting(true);
        
        // Tunggu animasi exit CSS selesai (1000ms) baru unmount
        const completeDelay = setTimeout(() => {
          onComplete();
        }, 1000);

        return () => clearTimeout(completeDelay);
      }, 800);

      return () => clearTimeout(exitDelay);
    }
  }, [loadingProgress, onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] overflow-hidden bg-navy-950 transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col ${
        isExiting ? '-translate-y-full opacity-0 scale-105' : 'translate-y-0 opacity-100 scale-100'
      }`}
    >
      {/* 1. BACKGROUND IMAGE with Ken Burns Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://i.ibb.co.com/M42sjzx/Gemini-Generated-Image-g3n9ing3n9ing3n9-1.png" 
          alt="Splash Background" 
          className="w-full h-full object-cover animate-ken-burns opacity-50"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/90 to-navy-950/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* 2. DECORATIVE GLOWS */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-sky-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
      </div>

      {/* 3. CONTENT CONTAINER (Flexbox for Vertical Spacing) */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between px-4 py-8 md:py-12">
        
        {/* Top Spacer */}
        <div className="flex-1"></div>

        {/* Center Content: Logo, Title, Loader */}
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto flex-shrink-0">
            
            {/* Logo Container - Floating */}
            <div className="relative mb-8 md:mb-12 animate-float">
                {/* Glowing Ring */}
                <div className="absolute inset-0 bg-sky-400/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="relative bg-white/5 backdrop-blur-xl p-4 md:p-6 rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(56,189,248,0.15)]">
                    <img 
                        src="https://i.ibb.co.com/k6cGgdMH/logo-dn.png" 
                        alt="Logo Dies Natalis KMH" 
                        className="w-24 h-24 md:w-40 md:h-40 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" 
                    />
                </div>
            </div>

            {/* Text Content - Animated per section */}
            <div className="space-y-2 md:space-y-4 mb-10 md:mb-16 relative text-center">
                {/* Top Text */}
                <h2 className="text-sky-300 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase animate-tracking-in opacity-0" style={{ animationDelay: '0.2s' }}>
                    SELAMAT DATANG DI WEBSITE
                </h2>
                
                {/* Main Title */}
                <div className="relative leading-tight">
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl animate-blur-in opacity-0" style={{ animationDelay: '0.5s' }}>
                        DIES NATALIS
                    </h1>
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-white to-sky-400 animate-blur-in opacity-0" style={{ animationDelay: '0.8s' }}>
                        KE-6
                    </h1>
                </div>

                {/* Subtext */}
                <p className="text-slate-400 text-[10px] md:text-sm tracking-[0.3em] mt-6 animate-fade-in-up opacity-0" style={{ animationDelay: '1.2s' }}>
                    KMH LOTIM - FAKULTAS HUKUM UNRAM
                </p>
            </div>

            {/* LOADING INDICATOR (Futuristic Line) */}
            <div className="w-full max-w-[200px] md:max-w-xs mx-auto relative h-1 bg-white/10 rounded-full overflow-hidden mb-2">
                <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-sky-500 via-white to-sky-500 shadow-[0_0_20px_#38bdf8]"
                    style={{ 
                        width: `${loadingProgress}%`,
                        transition: 'width 0.1s linear'
                    }}
                ></div>
            </div>
            
            {/* Dynamic Status Text */}
            <div className="text-[10px] text-sky-200/50 font-mono tracking-widest animate-pulse h-4 uppercase">
                {loadingText} {Math.round(loadingProgress)}%
            </div>
        </div>

        {/* Bottom Spacer */}
        <div className="flex-1"></div>

        {/* POWERED BY FOOTER */}
        <div className="w-full text-center mt-8 animate-fade-in-up opacity-0 flex-shrink-0" style={{ animationDelay: '1.5s' }}>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">
                Powered by <span className="text-sky-300/80 font-semibold block md:inline mt-1 md:mt-0">Kepanitiaan Dies Natalis KMH yang ke-6</span>
            </p>
        </div>

      </div>

    </div>
  );
};

export default SplashScreen;