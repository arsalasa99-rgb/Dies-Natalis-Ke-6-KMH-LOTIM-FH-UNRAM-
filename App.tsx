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
import { View, Activity } from './types';
import { Instagram } from 'lucide-react';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

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
        return <RABView />;
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