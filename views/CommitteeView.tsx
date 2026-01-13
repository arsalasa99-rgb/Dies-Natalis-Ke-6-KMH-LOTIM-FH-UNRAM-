import React, { useState } from 'react';
import { COMMITTEE, DIVISION_DETAILS } from '../constants';
import { 
  User, Crown, Sparkles, Quote, Users, Star
} from 'lucide-react';

const CommitteeView: React.FC = () => {
  const [activeDivision, setActiveDivision] = useState(DIVISION_DETAILS[0].key);

  // Logic to separate roles
  const penanggungJawab = COMMITTEE.find(m => m.id === 'pj');
  const coreCommittee = COMMITTEE.filter(m => ['ketua', 'sekretaris', 'bendahara'].includes(m.id));
  
  // Get members for the currently active division
  const activeMembers = COMMITTEE.filter(m => m.division === activeDivision);
  const activeCoordinator = activeMembers.find(m => m.role.includes('Koordinator'));
  const activeStaff = activeMembers.filter(m => !m.role.includes('Koordinator'));
  const activeDivisionDetails = DIVISION_DETAILS.find(d => d.key === activeDivision);

  return (
    <div className="pt-24 pb-20 bg-transparent min-h-screen overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-12 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-navy-900 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-lg backdrop-blur-md">
                <Sparkles size={14} className="text-amber-500" /> Dies Natalis VI
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4 uppercase leading-tight drop-shadow-xl">
                Struktur Kepanitiaan <br className="hidden md:block" /> Dies Natalis KMH LOTIM FH UNRAM Ke-6
            </h2>
            <p className="text-sm md:text-base text-slate-200 max-w-2xl mx-auto mt-4 font-light">
                Sinergi tim solid di balik layar yang bekerja keras mewujudkan visi "Harmoni Justitia di Bumi Patuh Karya".
            </p>
        </div>

        {/* SECTION 1: Penanggung Jawab - White Glass Card */}
        {penanggungJawab && (
            <div className="flex justify-center mb-12 md:mb-16 reveal delay-100">
                <div className="group relative w-full max-w-3xl bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-2xl border border-white/20">
                     {/* Background Glow */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-sky-500/10 to-purple-500/10 rounded-full blur-3xl -z-10 group-hover:scale-110 transition-transform duration-1000"></div>
                     
                     <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 relative z-10">
                        {/* Image Circle with Float Animation */}
                        <div className="relative flex-shrink-0 animate-float">
                            <div className="w-32 h-32 md:w-56 md:h-56 rounded-full p-1.5 bg-gradient-to-br from-white via-sky-200 to-sky-500 shadow-2xl">
                                <div className="w-full h-full rounded-full overflow-hidden bg-navy-950 border-4 border-white/50 relative group-hover:rotate-3 transition-transform duration-500">
                                    {penanggungJawab.imageUrl ? (
                                        <img 
                                            src={penanggungJawab.imageUrl} 
                                            alt={penanggungJawab.name} 
                                            className="w-full h-full object-cover" 
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-white/30">
                                            <Crown size={40} className="md:w-[60px] md:h-[60px]" />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-navy-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg whitespace-nowrap border border-white/50">
                                Penanggung Jawab
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="text-center md:text-left">
                            <Quote className="text-white/40 mb-4 mx-auto md:mx-0 transform -scale-x-100 w-8 h-8 md:w-12 md:h-12 animate-pulse-slow" />
                            <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">{penanggungJawab.name}</h3>
                            <div className="h-1.5 w-16 bg-white mx-auto md:mx-0 mb-4 rounded-full"></div>
                            <p className="text-slate-200 leading-relaxed italic text-sm md:text-lg font-serif">
                                "Menjadikan Dies Natalis ke-6 sebagai momentum kebangkitan integritas dan solidaritas mahasiswa hukum Lombok Timur."
                            </p>
                        </div>
                     </div>
                </div>
            </div>
        )}

        {/* SECTION 2: Core Committee - Staggered Cards */}
        <div className="mb-20">
            {/* FIXED TITLE */}
            <div className="flex justify-center mb-10 reveal">
                <div className="relative">
                    <h3 className="text-2xl md:text-4xl font-extrabold text-white pb-4 relative z-10 text-center uppercase">
                        Hierarki Kepengurusan
                    </h3>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-sky-400 rounded-full"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 md:px-0">
                {coreCommittee.map((member, idx) => (
                    <div 
                        key={member.id} 
                        className="group relative h-[350px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg md:shadow-xl cursor-pointer reveal border border-white/20"
                        style={{ transitionDelay: `${(idx + 1) * 150}ms` }}
                    >
                        {/* Image Scale Effect */}
                        <div className="absolute inset-0 bg-navy-900 overflow-hidden">
                             {member.imageUrl ? (
                                <img 
                                    src={member.imageUrl} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                                />
                             ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-600 bg-navy-800">
                                    <User size={64} />
                                </div>
                             )}
                        </div>
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                        
                        {/* Content Slide Up */}
                        <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="mb-2 overflow-hidden">
                                <span className={`inline-block px-3 py-1 rounded-lg text-xs uppercase font-bold text-navy-900 mb-2 shadow-sm transform transition-transform duration-500 group-hover:-translate-y-1 bg-white`}>
                                    {member.role}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{member.name}</h3>
                            <div className="h-1 w-0 group-hover:w-16 bg-white transition-all duration-700 ease-out"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* SECTION 3: INTERACTIVE DIVISIONS */}
        <div className="max-w-7xl mx-auto reveal delay-200">
            {/* FIXED TITLE */}
            <div className="flex justify-center mb-10">
                <div className="relative">
                    <h3 className="text-2xl md:text-4xl font-extrabold text-white pb-4 relative z-10 text-center">
                        Divisi & Tim Kerja
                    </h3>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-amber-400 rounded-full"></div>
                </div>
            </div>

            {/* Division Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 px-2">
                {DIVISION_DETAILS.map((div) => (
                    <button
                        key={div.key}
                        onClick={() => setActiveDivision(div.key)}
                        className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 border relative overflow-hidden ${
                            activeDivision === div.key 
                                ? 'bg-white text-navy-900 border-white shadow-[0_0_15px_rgba(255,255,255,0.5)] transform scale-110 z-10' 
                                : 'bg-white/5 text-slate-300 border-white/10 hover:border-white/40 hover:text-white hover:bg-white/10'
                        }`}
                    >
                        {div.key}
                    </button>
                ))}
            </div>

            {/* Active Division Content - White Glass */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/20 flex flex-col md:flex-row transition-all duration-500 min-h-[500px]" key={activeDivision}>
                
                {/* Left Side: Photo with Parallax feel */}
                <div className="w-full md:w-[45%] relative h-64 md:h-auto overflow-hidden group">
                    <img 
                        src={activeDivisionDetails?.groupPhotoUrl} 
                        alt={activeDivision}
                        className="w-full h-full object-cover object-center animate-zoom-in group-hover:scale-105 transition-transform duration-1000 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-60 md:opacity-40"></div>
                    
                    {/* Floating Label on Mobile ONLY */}
                    <div className="absolute bottom-5 left-5 md:hidden animate-slideInLeft">
                        <h2 className="text-3xl font-bold text-white drop-shadow-md">{activeDivision}</h2>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-[55%] p-6 md:p-10 flex flex-col justify-center relative animate-slideInRight">
                    {/* Desktop Title */}
                    <div className="hidden md:block mb-6">
                        <h2 className="text-4xl font-bold text-white mb-3">{activeDivision}</h2>
                        <div className="w-24 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
                    </div>

                    <div className="mb-8">
                        <p className="text-sm md:text-lg text-slate-200 leading-relaxed italic font-serif border-l-4 border-white pl-4 py-2 bg-white/5 rounded-r-lg">
                            "{activeDivisionDetails?.description}"
                        </p>
                    </div>

                    {/* Coordinator Section */}
                    {activeCoordinator && (
                        <div className="mb-8 bg-black/20 p-4 rounded-xl border border-white/20 shadow-md flex items-center justify-between hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-navy-900 shadow-lg">
                                    <Star size={20} fill="currentColor" className="animate-spin-slow" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-sky-300 uppercase tracking-widest mb-0.5 block">Koordinator Divisi</span>
                                    <h3 className="text-lg font-bold text-white">{activeCoordinator.name}</h3>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Staff Grid */}
                    <div className="bg-black/20 p-6 rounded-2xl border border-white/10">
                        <div className="flex items-center gap-2 mb-4 text-slate-300 font-bold uppercase text-xs tracking-wider">
                            <Users size={14} /> Anggota Tim ({activeStaff.length})
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {activeStaff.map((staff, idx) => (
                                <div key={staff.id} 
                                    className="flex items-center p-2 rounded-lg hover:bg-white/10 hover:shadow-sm transition-all border border-transparent hover:border-white/20 group/item"
                                    style={{ animationDelay: `${idx * 50}ms` }}
                                >
                                    <div className="w-2 h-2 rounded-full bg-slate-400 mr-3 group-hover/item:bg-white transition-colors flex-shrink-0 group-hover/item:scale-125"></div>
                                    <span className="text-slate-300 font-medium group-hover/item:text-white text-sm truncate">
                                        {staff.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default CommitteeView;