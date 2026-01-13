import React, { useState, useEffect } from 'react';
import { View } from '../types';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'Beranda', view: View.HOME, desc: 'Halaman Utama' },
    { label: 'RAB', view: View.RAB, desc: 'Transparansi Dana' },
    { label: 'Kegiatan', view: View.ACTIVITIES, desc: 'Agenda Acara' },
    { label: 'Timeline', view: View.TIMELINE, desc: 'Jejak Waktu' },
    { label: 'Galeri', view: View.GALLERY, desc: 'Dokumentasi' },
    { label: 'Panitia', view: View.COMMITTEE, desc: 'Tim Kerja' },
    { label: 'Kontak', view: View.CONTACT, desc: 'Hubungi Kami' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-navy-950/80 backdrop-blur-xl shadow-lg py-3 border-white/5' 
            : 'bg-transparent py-5 border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center text-white">
          {/* Logo Area */}
          <div 
            className="flex items-center gap-3 cursor-pointer group relative z-[70]" 
            onClick={() => {
                onNavigate(View.HOME);
                setIsMobileMenuOpen(false);
            }}
          >
            <div className="flex gap-2">
              <div className="relative">
                  <div className="absolute inset-0 bg-sky-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  {/* Background changed to navy-900 */}
                  <div className="bg-navy-900 p-1.5 rounded-xl group-hover:bg-navy-800 transition-colors border border-white/10 relative">
                      <img 
                          src="https://i.ibb.co.com/k6cGgdMH/logo-dn.png" 
                          alt="Logo Dies Natalis" 
                          className="w-8 h-8 object-contain rounded-md" 
                      />
                  </div>
              </div>
              <div className="relative">
                  {/* Background changed to navy-900 */}
                  <div className="bg-navy-900 p-1.5 rounded-xl group-hover:bg-navy-800 transition-colors border border-white/10 relative">
                      <img 
                          src="https://i.ibb.co.com/9HzZKk4Z/Screenshot-2026-01-12-103512.png" 
                          alt="Logo KMH LOTIM" 
                          className="w-8 h-8 object-contain rounded-md" 
                      />
                  </div>
              </div>
            </div>
            
            <div className="flex flex-col ml-1">
              <h1 className="font-bold text-lg leading-tight tracking-wide font-sans">DIES NATALIS VI</h1>
              <span className="text-[10px] uppercase text-sky-200 tracking-[0.2em]">KMH LOTIM UNRAM</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-navy-900/50 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate(item.view)}
                className={`relative text-xs font-bold px-5 py-2 rounded-full transition-all duration-300 ${
                  currentView === item.view 
                    ? 'bg-white text-navy-950 shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button 
            className={`md:hidden p-2 relative z-[70] transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isMobileMenuOpen ? 'bg-white text-navy-900' : 'bg-white/10 text-white'}`}>
                {isMobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
            </div>
          </button>
        </div>
      </header>

      {/* ULTRA MODERN MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 z-[65] md:hidden transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible delay-300'
      }`}>
          
          {/* Background Layers */}
          <div className={`absolute inset-0 bg-navy-950 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] origin-top ${
              isMobileMenuOpen ? 'scale-y-100' : 'scale-y-0'
          }`}></div>
          
          {/* Decorative Blobs */}
          <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-sky-600/20 rounded-full blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-purple-600/10 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>

          {/* Menu Content Container */}
          <div className="relative z-10 h-full flex flex-col justify-center px-6 pt-20 pb-10">
            
            {/* Navigation List */}
            <nav className="flex flex-col gap-5">
                {navItems.map((item, idx) => {
                    const isActive = currentView === item.view;
                    return (
                        <button
                            key={item.label}
                            onClick={() => {
                                onNavigate(item.view);
                                setIsMobileMenuOpen(false);
                            }}
                            className={`group flex items-center gap-4 text-left w-full transition-all duration-700 ease-out transform ${
                                isMobileMenuOpen 
                                    ? 'translate-y-0 opacity-100' 
                                    : 'translate-y-12 opacity-0'
                            }`}
                            style={{ transitionDelay: `${150 + (idx * 75)}ms` }}
                        >
                            {/* Number Indicator */}
                            <span className={`text-xs font-mono font-bold tracking-widest transition-colors duration-300 ${
                                isActive ? 'text-sky-400' : 'text-slate-600 group-hover:text-slate-400'
                            }`}>
                                0{idx + 1}
                            </span>

                            {/* Main Label */}
                            <div className="relative overflow-hidden">
                                <span className={`text-4xl xs:text-5xl font-black uppercase tracking-tight transition-all duration-300 block ${
                                    isActive 
                                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-white translate-x-4' 
                                        : 'text-slate-300 group-hover:text-white group-hover:translate-x-4'
                                }`}>
                                    {item.label}
                                </span>
                                
                                {/* Active Dot / Hover Arrow */}
                                <span className={`absolute top-1/2 -left-4 -translate-y-1/2 transition-all duration-300 ${
                                    isActive || 'group-hover:opacity-100 opacity-0'
                                }`}>
                                    {isActive ? (
                                        <div className="w-2 h-2 bg-sky-400 rounded-full shadow-[0_0_10px_#38bdf8]"></div>
                                    ) : (
                                        <ArrowUpRight size={20} className="text-white" />
                                    )}
                                </span>
                            </div>
                        </button>
                    );
                })}
            </nav>

            {/* Footer / Info Area */}
            <div className={`mt-auto pt-8 border-t border-white/10 transition-all duration-1000 delay-500 transform ${
                 isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Dies Natalis VI</p>
                        <p className="text-white font-bold text-sm">Harmoni Justitia</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-slate-300 animate-spin-slow">
                            <Sparkles size={16} />
                        </div>
                    </div>
                </div>
            </div>

          </div>
      </div>
    </>
  );
};

export default Header;