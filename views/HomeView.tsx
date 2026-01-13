import React from 'react';
import Hero from '../components/Hero';
import { View } from '../types';
import { Users, Target, BookOpen, Star, Sparkles, ShieldCheck } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: View) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="overflow-hidden bg-navy-950">
      <Hero onNavigate={onNavigate} />
      
      {/* SECTION 1: INTRODUCTION & PHILOSOPHY (Bento Grid Layout) */}
      <section className="py-20 relative">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT COLUMN: ABOUT (Span 7) */}
            <div className="lg:col-span-7 flex flex-col gap-8 reveal">
                {/* Intro Card */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-white/20 transition-all duration-500">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-400 to-blue-600"></div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-sky-500/20 rounded-lg text-sky-400">
                            <Sparkles size={24} />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                            Esensi Perayaan
                        </h2>
                    </div>
                    <div className="text-slate-300 leading-relaxed space-y-4 text-justify md:text-left">
                        <p>
                            <span className="text-white font-semibold">Keluarga Mahasiswa Hukum Lombok Timur (KMH LOTIM)</span> Fakultas Hukum Universitas Mataram bukan sekadar organisasi, melainkan rumah bagi gagasan dan pergerakan.
                        </p>
                        <p>
                            Dies Natalis ke-6 adalah momentum sakral untuk merefleksikan perjalanan panjang kami. Bukan hanya pesta pora, melainkan penegasan kembali komitmen untuk mengawal isu hukum dan memberikan dampak nyata bagi masyarakat "Bumi Patuh Karya".
                        </p>
                    </div>
                </div>

                {/* Sub Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-navy-900/50 p-6 rounded-2xl border border-white/5 hover:bg-navy-800/50 transition-colors group">
                        <Users className="text-sky-400 mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
                        <h3 className="text-white font-bold text-lg mb-2">Solidaritas</h3>
                        <p className="text-slate-400 text-sm">Mempererat ikatan persaudaraan antar anggota dan alumni dalam satu visi.</p>
                    </div>
                    <div className="bg-navy-900/50 p-6 rounded-2xl border border-white/5 hover:bg-navy-800/50 transition-colors group">
                        <ShieldCheck className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
                        <h3 className="text-white font-bold text-lg mb-2">Integritas</h3>
                        <p className="text-slate-400 text-sm">Menjunjung tinggi nilai kejujuran dan keadilan dalam setiap langkah pergerakan.</p>
                    </div>
                </div>
            </div>
            
            {/* RIGHT COLUMN: PHILOSOPHY (Span 5) */}
            <div className="lg:col-span-5 reveal delay-200">
                <div className="h-full bg-gradient-to-br from-indigo-900/40 to-navy-950 backdrop-blur-md border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-500">
                    {/* Decorative Blobs */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3 relative z-10 border-b border-white/10 pb-4">
                        <BookOpen className="text-indigo-400" size={24}/>
                        Filosofi Tema
                    </h3>
                    
                    <div className="relative z-10">
                        <div className="text-2xl font-serif italic text-white leading-snug mb-8">
                            <span className="text-sky-400">"</span>Menjaga Simfoni Biru di Bawah Naungan Sang Merah, Harmoni Justitia di Bumi Patuh Karya<span className="text-sky-400">"</span>
                        </div>

                        <div className="space-y-5">
                            <div className="flex gap-4 group/item">
                                <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center flex-shrink-0 border border-sky-500/20 group-hover/item:bg-sky-500 group-hover/item:text-white transition-colors">
                                    <span className="font-bold text-sky-400 group-hover/item:text-white">01</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Simfoni Biru</h4>
                                    <p className="text-slate-400 text-sm">Lambang ketenangan hukum, ketertiban, dan kedamaian.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 group/item">
                                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 border border-red-500/20 group-hover/item:bg-red-500 group-hover/item:text-white transition-colors">
                                    <span className="font-bold text-red-400 group-hover/item:text-white">02</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Sang Merah</h4>
                                    <p className="text-slate-400 text-sm">Simbol keberanian dan semangat juang mahasiswa.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 group/item">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 border border-emerald-500/20 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-colors">
                                    <span className="font-bold text-emerald-400 group-hover/item:text-white">03</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Bumi Patuh Karya</h4>
                                    <p className="text-slate-400 text-sm">Identitas Lombok Timur sebagai tanah pengabdian.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: STATS STRIP (Minimalist Floating Bar) */}
      <section className="pb-20 relative px-4">
        <div className="container mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8 relative overflow-hidden reveal delay-300">
                {/* Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500"></div>
                
                {[
                    { val: '6', label: 'Tahun Berkarya', icon: Star },
                    { val: '4', label: 'Agenda Utama', icon: Target },
                    { val: '2026', label: 'Tahun Pelaksanaan', icon: Sparkles },
                    { val: '100%', label: 'Dedikasi Panitia', icon: Users }
                ].map((stat, idx) => (
                    <div key={idx} className="text-center group relative">
                        {idx !== 3 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-slate-100"></div>}
                        <div className="flex justify-center mb-3">
                            <stat.icon className="text-slate-300 group-hover:text-sky-500 transition-colors duration-300" size={24} />
                        </div>
                        <div className="text-3xl md:text-5xl font-black text-navy-900 mb-1 group-hover:scale-110 transition-transform duration-300">
                            {stat.val}
                        </div>
                        <div className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-widest">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;