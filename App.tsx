import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SplashScreen from './components/SplashScreen';
import HomeView from './views/HomeView';
import ActivitiesView from './views/ActivitiesView';
import ActivityDetailView from './views/ActivityDetailView';
import TimelineView from './views/TimelineView';
import GalleryView from './views/GalleryView';
import CommitteeView from './views/CommitteeView';
import ContactView from './views/ContactView';
import RABView from './views/RABView';
import DonationModal from './components/DonationModal'; // New Import
import { View, Activity } from './types';
import { Instagram, Heart, X } from 'lucide-react';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false); // Modal State
  const [showFab, setShowFab] = useState(false); // FAB Animation State
  const [isFabClosed, setIsFabClosed] = useState(false); // User Closed FAB State

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  // Show FAB after splash or delay
  useEffect(() => {
    if (!showSplash) {
        const timer = setTimeout(() => setShowFab(true), 1500); // Delay sedikit lebih lama agar tidak kaget
        return () => clearTimeout(timer);
    }
  }, [showSplash]);

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    if (view !== View.ACTIVITY_DETAIL) {
      setSelectedActivity(null);
    }
  };

  const handleSelectActivity = (activity: Activity) => {
    setSelectedActivity(activity);
    setCurrentView(View.ACTIVITY_DETAIL);
  };

  const renderView = () => {
    switch (currentView) {
      case View.HOME:
        return <HomeView onNavigate={handleNavigate} />;
      case View.ACTIVITIES:
        return <ActivitiesView onSelectActivity={handleSelectActivity} />;
      case View.ACTIVITY_DETAIL:
        return selectedActivity ? (
          <ActivityDetailView 
            activity={selectedActivity} 
            onBack={() => handleNavigate(View.ACTIVITIES)} 
          />
        ) : <ActivitiesView onSelectActivity={handleSelectActivity} />;
      case View.TIMELINE:
        return <TimelineView />;
      case View.GALLERY:
        return <GalleryView />;
      case View.COMMITTEE:
        return <CommitteeView />;
      case View.CONTACT:
        return <ContactView />;
      case View.RAB:
        // Pass the open modal function to RAB View
        return <RABView onOpenDonate={() => setIsDonateModalOpen(true)} />;
      default:
        return <HomeView onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 relative overflow-hidden bg-navy-950 selection:bg-sky-500/30">
      
      {/* GLOBAL LIVING BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         {/* Base Dark Layer */}
         <div className="absolute inset-0 bg-navy-950"></div>
         
         {/* Static Texture */}
         <img 
            src="https://i.ibb.co.com/M42sjzx/Gemini-Generated-Image-g3n9ing3n9ing3n9-1.png" 
            alt="Texture" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
         />

         {/* MOVING ORBS (The "Living" Part) */}
         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-sky-600/20 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
         <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"></div>
         <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-blue-900/20 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen"></div>
         
         {/* Noise Overlay for Texture */}
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
         
         {/* Vignette */}
         <div className="absolute inset-0 bg-radial-gradient from-transparent via-navy-950/50 to-navy-950/90"></div>
      </div>

      {/* SPLASH SCREEN */}
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <Header currentView={currentView} onNavigate={handleNavigate} />
      
      {/* Main Content - Relative z-10 to float ABOVE the background */}
      <main className="flex-grow relative z-10">
        <div key={currentView} className="animate-fadeIn">
          {renderView()}
        </div>
      </main>

      {/* GLOBAL DONATION MODAL */}
      {isDonateModalOpen && <DonationModal onClose={() => setIsDonateModalOpen(false)} />}

      {/* GLOBAL FLOATING DONATE BUTTON (FAB) */}
      <div 
        className={`fixed z-50 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            ${showFab && !isFabClosed ? 'bottom-6 right-4 md:bottom-10 md:right-10 opacity-100 scale-100' : '-bottom-24 right-4 opacity-0 scale-75'}
        `}
      >
          {/* Close Button (X) */}
          <button
            onClick={() => setIsFabClosed(true)}
            className="absolute -top-3 -left-3 w-7 h-7 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg border-2 border-navy-950 z-20 animate-bounce-slight"
            aria-label="Tutup tombol donasi"
          >
             <X size={14} strokeWidth={3} />
          </button>

          {/* Main Action Button */}
          <button
            onClick={() => setIsDonateModalOpen(true)}
            className="group flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white rounded-full shadow-[0_0_20px_rgba(245,158,11,0.6)] border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(245,158,11,0.8)]"
          >
              <div className="relative">
                  <Heart size={24} className="fill-white animate-pulse-slow drop-shadow-md" />
                  {/* Notification Dot */}
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600 border border-white"></span>
                  </span>
              </div>
              <div className="flex flex-col items-start">
                  <span className="font-black text-xs md:text-sm uppercase tracking-wider leading-none mb-0.5">Dukung</span>
                  <span className="font-medium text-[10px] md:text-xs opacity-90 leading-none">Acara Kami</span>
              </div>
          </button>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-black/20 backdrop-blur-xl text-white py-12 border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                <div className="bg-navy-900 p-1.5 rounded-lg border border-white/20 shadow-lg shadow-sky-500/10">
                    <img 
                    src="https://i.ibb.co.com/9HzZKk4Z/Screenshot-2026-01-12-103512.png" 
                    alt="Logo KMH" 
                    className="w-8 h-8 object-contain" 
                    />
                </div>
                KMH LOTIM
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Menjaga Simfoni Biru di Bawah Naungan Sang Merah, Harmoni Justitia di Bumi Patuh Karya.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Tautan Cepat</h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li><button onClick={() => handleNavigate(View.ACTIVITIES)} className="hover:text-sky-400 hover:translate-x-2 transition-all flex items-center gap-2"><span className="w-1 h-1 bg-sky-500 rounded-full"></span>Kegiatan</button></li>
                <li><button onClick={() => handleNavigate(View.RAB)} className="hover:text-sky-400 hover:translate-x-2 transition-all flex items-center gap-2"><span className="w-1 h-1 bg-sky-500 rounded-full"></span>Anggaran (RAB)</button></li>
                <li><button onClick={() => handleNavigate(View.TIMELINE)} className="hover:text-sky-400 hover:translate-x-2 transition-all flex items-center gap-2"><span className="w-1 h-1 bg-sky-500 rounded-full"></span>Timeline</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Ikuti Kami</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com/diesnatalis.kmhlotim" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all border border-white/10 group">
                    <Instagram size={24} className="group-hover:scale-110 transition-transform"/>
                </a>
              </div>
              <div className="mt-6 text-sm text-slate-400 font-light">
                Email: <span className="text-sky-300">kmhlotim@unram.ac.id</span>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-light gap-4">
            <span>&copy; 2026 Dies Natalis KMH LOTIM FH UNRAM VI.</span>
            <span>Developed with ❤️ by Kepanitiaan Dies Natalis KMH Lotim FH UNRAM yang ke 6</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;