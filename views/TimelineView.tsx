import React from 'react';
import { TIMELINE_EVENTS } from '../constants';
import { CheckCircle, Clock, Calendar, Target, Crosshair, Star, Zap, Heart, Trophy, MapPin, ChevronRight, Users, Flag } from 'lucide-react';

const TimelineView: React.FC = () => {
  return (
    <div className="pt-28 pb-32 bg-transparent min-h-screen relative">
      
      {/* Decorative Floating Particles for this specific view */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-ping opacity-20"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-sky-400 rounded-full animate-ping delay-700 opacity-40"></div>
      <div className="absolute bottom-1/3 left-1/4 w-32 h-32 border border-white/5 rounded-full animate-spin-slow pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Modern Header */}
        <div className="text-center mb-20 md:mb-28 reveal">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-sky-500/20 to-purple-500/20 backdrop-blur-md border border-white/10 mb-6 group hover:scale-105 transition-transform cursor-default">
            <span className="px-6 py-2 rounded-full bg-navy-950/80 text-sky-300 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-3 shadow-inner">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                Roadmap Resmi
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Jejak <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">Langkah</span>
          </h2>
          <p className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Strategi presisi dan target terukur demi menyukseskan <br/><span className="text-white font-semibold">Dies Natalis KMH LOTIM ke-6</span>.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          
          {/* THE BEAM SPINE (Garis Tengah Neon) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] md:w-[2px] bg-white/10 transform md:-translate-x-1/2">
             {/* The moving light inside the beam */}
             <div className="absolute top-0 left-[-1px] right-[-1px] h-[150px] bg-gradient-to-b from-transparent via-sky-400 to-transparent blur-sm animate-float opacity-70"></div>
          </div>
          
          <div className="space-y-16 md:space-y-24 pb-12">
            {TIMELINE_EVENTS.map((event, index) => {
              const isEven = index % 2 === 0;
              const isCompleted = event.status === 'completed';
              const isOngoing = event.status === 'ongoing';
              
              // Detect Highlight Types
              const isMainEvent = event.items.length === 1 && (event.items[0].division.includes('EVENT') || event.items[0].division.includes('MAIN'));
              const isSocial = event.items.length === 1 && event.items[0].division.includes('SOSIAL');
              const isCompetition = event.items.length === 1 && event.items[0].division.includes('KOMPETISI');
              
              // New Detection for "Medium" Importance (Rapat Penting)
              const isMeeting = event.items.length === 1 && event.items[0].division.includes('RAPAT PENTING');

              const isHighlight = isMainEvent || isSocial || isCompetition;

              return (
                <div key={event.id} className={`relative flex md:justify-between items-center group ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* CENTRAL NODE (The Planet) */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-20 reveal">
                    {/* Orbit Ring */}
                    <div className={`absolute inset-0 border border-white/20 rounded-full w-[200%] h-[200%] top-[-50%] left-[-50%] animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
                    
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-full blur-xl transition-all duration-500
                         ${isHighlight ? 'bg-amber-500/60 w-16 h-16 -m-3' : isMeeting ? 'bg-indigo-500/60 w-14 h-14 -m-2.5' : isOngoing ? 'bg-sky-500/60 w-12 h-12 -m-2' : 'bg-white/10 w-8 h-8 -m-1'}
                    `}></div>
                    
                    {/* The Core Dot */}
                    <div className={`relative flex items-center justify-center transition-all duration-500 z-30
                        ${isHighlight 
                            ? 'w-12 h-12 md:w-16 md:h-16 bg-navy-950 border-2 border-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.5)] rounded-2xl rotate-45 group-hover:rotate-0 group-hover:scale-110' 
                            : isMeeting
                            ? 'w-10 h-10 md:w-14 md:h-14 bg-navy-950 border-2 border-indigo-400 shadow-[0_0_25px_rgba(99,102,241,0.5)] rounded-full group-hover:scale-110'
                            : isOngoing 
                            ? 'w-8 h-8 md:w-10 md:h-10 bg-navy-950 border-2 border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.5)] rounded-full group-hover:scale-110'
                            : 'w-6 h-6 md:w-6 md:h-6 bg-navy-900 border-2 border-slate-600 rounded-full group-hover:border-white'
                        }
                    `}>
                        {isHighlight ? (
                            <div className={`transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 ${isSocial ? 'text-pink-500' : isCompetition ? 'text-purple-400' : 'text-amber-400'}`}>
                                {isSocial ? <Heart size={20} fill="currentColor"/> : isCompetition ? <Trophy size={20} fill="currentColor"/> : <Star size={24} fill="currentColor" />}
                            </div>
                        ) : isMeeting ? (
                            <Users size={20} className="text-indigo-400" fill="currentColor" />
                        ) : isCompleted ? (
                             <CheckCircle size={14} className="text-emerald-500" />
                        ) : (
                             <div className={`w-2 h-2 rounded-full ${isOngoing ? 'bg-sky-400 animate-pulse' : 'bg-slate-500'}`}></div>
                        )}
                    </div>
                  </div>

                  {/* CONNECTOR LINE (The Circuit) */}
                  <div className={`hidden md:block absolute top-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent w-[15%] transition-all duration-700
                    ${isEven ? 'left-1/2' : 'right-1/2'}
                    ${isHighlight ? 'w-[20%] via-amber-500/50' : isMeeting ? 'w-[18%] via-indigo-500/50' : ''}
                  `}>
                      {/* Pulse on line */}
                      <div className={`absolute top-0 bottom-0 w-10 bg-white/50 blur-[1px] animate-shimmer ${isEven ? 'left-0' : 'right-0'}`}></div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* CARD CONTENT */}
                  <div className={`w-full pl-20 md:pl-0 md:w-[42%] relative reveal perspective-1000`} style={{ transitionDelay: `${index * 50}ms` }}>
                    
                    {/* The Card Itself */}
                    <div className={`
                        relative overflow-hidden rounded-3xl border transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]
                        ${isHighlight 
                            ? 'bg-gradient-to-br from-navy-900/90 to-navy-950/90 border-amber-500/30 p-1' 
                            : isMeeting
                            ? 'bg-gradient-to-br from-indigo-950/80 to-navy-950/90 border-indigo-500/30 hover:border-indigo-400/50'
                            : 'bg-navy-900/40 border-white/10 hover:border-sky-500/30 hover:bg-navy-900/60'
                        }
                        backdrop-blur-xl
                    `}>
                        {/* Highlight Border Gradient Animation */}
                        {(isHighlight || isMeeting) && (
                             <div className={`absolute inset-0 bg-gradient-to-r animate-shimmer opacity-30
                                ${isHighlight ? 'from-amber-500/20 via-purple-500/20 to-amber-500/20' : 'from-indigo-500/20 via-blue-500/20 to-indigo-500/20'}
                             `}></div>
                        )}

                        <div className={`relative h-full rounded-[20px] p-6 md:p-8 ${(isHighlight || isMeeting) ? 'bg-navy-950/80' : ''}`}>
                            
                            {/* Decorative Top Line */}
                            {!isHighlight && !isMeeting && <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-sky-400/50 transition-colors duration-500"></div>}

                            {/* DATE HEADER */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${isHighlight ? 'bg-amber-500/10 text-amber-400' : isMeeting ? 'bg-indigo-500/10 text-indigo-400' : 'bg-sky-500/10 text-sky-400'}`}>
                                        <Calendar size={16} />
                                    </div>
                                    <span className={`font-mono text-sm md:text-base font-bold ${isHighlight ? 'text-white' : 'text-slate-200'}`}>
                                        {event.date}
                                    </span>
                                </div>
                                
                                {/* Status Badge */}
                                {!isHighlight && !isMeeting && (
                                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 border
                                        ${isCompleted ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                                        : isOngoing ? 'bg-sky-500/10 text-sky-400 border-sky-500/20 shadow-[0_0_10px_rgba(56,189,248,0.2)]' 
                                        : 'bg-slate-800/50 text-slate-400 border-slate-700'}
                                    `}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${isCompleted ? 'bg-emerald-400' : isOngoing ? 'bg-sky-400 animate-pulse' : 'bg-slate-400'}`}></span>
                                        {isCompleted ? 'Selesai' : isOngoing ? 'Berjalan' : 'Segera'}
                                    </span>
                                )}
                            </div>

                            {/* CONTENT ITEMS */}
                            <div className="space-y-6 relative z-10">
                                {event.items.map((item, idx) => (
                                    <div key={idx} className={`${(isHighlight || isMeeting) ? 'text-center' : ''} group/item`}>
                                        
                                        {/* Division Label */}
                                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest mb-3
                                            ${isHighlight 
                                                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg mx-auto' 
                                                : isMeeting 
                                                ? 'bg-indigo-900 text-indigo-200 border border-indigo-500/30 mx-auto'
                                                : 'bg-white/5 text-slate-400 border border-white/5'}
                                        `}>
                                            {isHighlight && <Star size={10} fill="currentColor"/>}
                                            {item.division}
                                        </div>

                                        {/* Target Title */}
                                        <h3 className={`font-bold leading-tight mb-3 transition-colors
                                            ${isHighlight ? 'text-3xl md:text-4xl text-white drop-shadow-md py-2' 
                                              : isMeeting ? 'text-xl md:text-2xl text-white drop-shadow-md'
                                              : 'text-lg text-white group-hover:text-sky-300'}
                                        `}>
                                            {item.target}
                                        </h3>

                                        {/* Focus Box */}
                                        <div className={`p-4 rounded-xl border transition-all duration-300
                                            ${isHighlight 
                                                ? 'bg-white/5 border-white/10 text-base md:text-lg text-slate-200' 
                                                : isMeeting
                                                ? 'bg-indigo-500/5 border-indigo-500/10 text-slate-200'
                                                : 'bg-black/20 border-white/5 text-sm text-slate-400 hover:bg-white/5 hover:border-white/10 hover:text-slate-300'}
                                        `}>
                                            <p className="leading-relaxed whitespace-pre-line">
                                                {!isHighlight && !isMeeting && <span className="text-sky-500 font-bold mr-2">Fokus:</span>}
                                                {item.focus}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
          
           {/* Grand Finish - Futuristic Portal (UPDATED TO "SELESAI") */}
           <div className="flex justify-center mt-20 relative z-10 reveal delay-300">
                <div className="relative group cursor-pointer">
                    {/* Energy Field */}
                    <div className="absolute inset-0 bg-emerald-500/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                    
                    {/* Button */}
                    <div className="relative bg-navy-950 px-10 py-5 rounded-full border-2 border-emerald-400/50 group-hover:border-white shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center gap-4 transition-all duration-300 group-hover:scale-105">
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] text-emerald-300 uppercase tracking-[0.3em] font-bold mb-1">Status</span>
                            <span className="text-2xl font-black text-white italic tracking-widest">SELESAI</span>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-500">
                            <Flag size={24} fill="currentColor" />
                        </div>
                    </div>
                </div>
           </div>

        </div>
      </div>
    </div>
  );
};

export default TimelineView;