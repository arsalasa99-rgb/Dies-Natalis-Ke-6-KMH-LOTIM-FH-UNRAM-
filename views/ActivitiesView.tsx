import React, { useState } from 'react';
import { ACTIVITIES } from '../constants';
import { Activity } from '../types';
import { Calendar, MapPin, ArrowRight, Filter, Sparkles } from 'lucide-react';

interface ActivitiesViewProps {
  onSelectActivity: (activity: Activity) => void;
}

const ActivitiesView: React.FC<ActivitiesViewProps> = ({ onSelectActivity }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  // Extract unique categories
  const categories = ['Semua', ...Array.from(new Set(ACTIVITIES.map(a => a.category)))];

  // Filter logic
  const filteredActivities = activeCategory === 'Semua' 
    ? ACTIVITIES 
    : ACTIVITIES.filter(a => a.category === activeCategory);

  return (
    <div className="pt-24 pb-20 bg-transparent min-h-screen">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-navy-950 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-pulse-slow">
             <Sparkles size={14} className="text-amber-500" /> Agenda Dies Natalis VI
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">Rangkaian Kegiatan</h2>
          <p className="text-slate-200 max-w-2xl mx-auto leading-relaxed font-light">
            Eksplorasi berbagai agenda akademik, sosial, dan kompetisi yang telah kami rancang untuk memeriahkan perayaan tahun ini.
          </p>
        </div>

        {/* Interactive Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 reveal delay-100">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border relative overflow-hidden group ${
                activeCategory === cat
                  ? 'bg-white text-navy-900 border-white shadow-[0_0_15px_rgba(255,255,255,0.4)] scale-105'
                  : 'bg-white/10 text-slate-300 border-white/10 hover:border-white/40 hover:text-white hover:bg-white/20'
              }`}
            >
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Activity Grid */}
        <div key={activeCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((activity, index) => (
            <div 
              key={activity.id} 
              // Changed to WHITE/10 (Milky Glass) instead of dark navy
              className="group relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 border border-white/20 flex flex-col h-full cursor-pointer hover:-translate-y-3 reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => onSelectActivity(activity)}
            >
              {/* Image Area */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={activity.imageUrl} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-navy-950/0 transition-colors duration-500"></div>
                
                {/* Floating Date Badge - White Style */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg flex flex-col items-center z-10">
                    <span className="text-[10px] font-bold text-navy-900 uppercase tracking-wider">Status</span>
                    <span className={`text-sm font-black ${
                        activity.status === 'Completed' ? 'text-emerald-600' : 
                        activity.status === 'Ongoing' ? 'text-sky-600' : 'text-amber-600'
                    }`}>
                        {activity.status}
                    </span>
                </div>

                {/* Category Tag */}
                <div className="absolute top-4 right-4 transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                     <span className="px-3 py-1 bg-navy-900 text-white text-xs font-bold rounded-lg shadow-md uppercase tracking-wide border border-white/20">
                        {activity.category}
                     </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-7 flex flex-col flex-grow relative z-20">
                {/* Hover Action Button (Floating on border) - White */}
                <div className="absolute -top-6 right-8 w-12 h-12 bg-white text-navy-900 rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100 z-30">
                    <ArrowRight size={20} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-sky-300 transition-colors">
                  {activity.title}
                </h3>
                
                <p className="text-slate-300 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {activity.description}
                </p>

                <div className="mt-auto pt-5 border-t border-dashed border-white/20 flex flex-col gap-3 group-hover:border-white/40 transition-colors">
                  <div className="flex items-center text-sm text-slate-200 font-medium group-hover:translate-x-1 transition-transform duration-300">
                    <Calendar size={16} className="mr-3 text-sky-300" />
                    {activity.date}
                  </div>
                  <div className="flex items-center text-sm text-slate-200 font-medium group-hover:translate-x-1 transition-transform duration-300 delay-75">
                    <MapPin size={16} className="mr-3 text-red-300" />
                    {activity.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredActivities.length === 0 && (
            <div className="text-center py-20 animate-fadeIn">
                <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce border border-white/20">
                    <Filter className="text-white" size={32} />
                </div>
                <p className="text-slate-300 font-medium text-lg">Tidak ada kegiatan dalam kategori ini.</p>
            </div>
        )}

      </div>
    </div>
  );
};

export default ActivitiesView;