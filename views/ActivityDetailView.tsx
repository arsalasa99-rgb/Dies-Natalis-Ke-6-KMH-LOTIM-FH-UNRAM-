import React from 'react';
import { Activity } from '../types';
import { ArrowLeft, Calendar, MapPin, User } from 'lucide-react';

interface ActivityDetailViewProps {
  activity: Activity;
  onBack: () => void;
}

const ActivityDetailView: React.FC<ActivityDetailViewProps> = ({ activity, onBack }) => {
  return (
    <div className="pt-20 bg-transparent min-h-screen animate-fadeIn">
      <div className="relative z-10">
        {/* Header Image - Adjusted height for mobile */}
        <div className="h-[30vh] md:h-[40vh] relative">
            <img 
                src={activity.imageUrl} 
                alt={activity.title} 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent opacity-100" />
            
            {/* Title Overlay in Image */}
            <div className="absolute bottom-0 left-0 w-full p-4 md:p-12">
                <div className="container mx-auto">
                    <div className="bg-sky-500 text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 inline-block rounded-md mb-2 md:mb-3 shadow-lg">
                        {activity.category}
                    </div>
                    <h1 className="text-2xl md:text-5xl font-bold text-white mb-2 leading-tight drop-shadow-lg">{activity.title}</h1>
                </div>
            </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
            
            {/* SAFE AREA BACK BUTTON - Moved here to avoid header collision */}
            <div className="mb-6">
                <button 
                    onClick={onBack} 
                    className="flex items-center text-white hover:text-sky-300 transition-colors text-sm bg-white/10 border border-white/20 hover:bg-white/20 px-4 py-2 rounded-lg font-medium w-fit backdrop-blur-sm shadow-md"
                >
                    <ArrowLeft className="mr-2" size={16} /> Kembali ke Daftar
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Main Content Area */}
                <div className="lg:col-span-2 order-2 lg:order-1">
                    <div className="bg-white/5 backdrop-blur-md p-5 md:p-8 rounded-xl border border-white/10 shadow-xl min-h-[300px]">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 border-b border-white/10 pb-4">Deskripsi Kegiatan</h3>
                        <div className="prose prose-invert max-w-none animate-fadeIn">
                            <p className="text-sm md:text-lg leading-relaxed text-slate-300 text-justify">
                                {activity.fullDescription}
                            </p>
                            <div className="mt-6 md:mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
                                <h4 className="text-sky-400 font-bold mb-2 text-sm md:text-base">Tujuan Kegiatan</h4>
                                <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm md:text-base">
                                    <li>Mempererat tali silaturahmi antar anggota.</li>
                                    <li>Meningkatkan kompetensi akademik mahasiswa hukum.</li>
                                    <li>Memberikan kontribusi nyata bagi masyarakat Lombok Timur.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Info - Sticky only on Desktop */}
                <div className="lg:col-span-1 order-1 lg:order-2">
                    <div className="bg-white/5 backdrop-blur-md p-5 md:p-6 rounded-xl border border-white/10 shadow-xl lg:sticky lg:top-28">
                        <h3 className="font-bold text-base md:text-lg text-white mb-4 md:mb-6 pb-2 border-b border-white/10">Informasi Kegiatan</h3>
                        
                        <div className="space-y-4 md:space-y-6">
                            <div className="flex items-start">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mr-3 md:mr-4 border border-white/5">
                                    <Calendar className="text-sky-400" size={18} />
                                </div>
                                <div>
                                    <span className="block text-[10px] md:text-xs text-slate-400 uppercase font-semibold">Tanggal</span>
                                    <span className="text-white font-medium text-sm md:text-base">{activity.date}</span>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mr-3 md:mr-4 border border-white/5">
                                    <MapPin className="text-red-400" size={18} />
                                </div>
                                <div>
                                    <span className="block text-[10px] md:text-xs text-slate-400 uppercase font-semibold">Lokasi</span>
                                    <span className="text-white font-medium text-sm md:text-base">{activity.location}</span>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mr-3 md:mr-4 border border-white/5">
                                    <User className="text-emerald-400" size={18} />
                                </div>
                                <div>
                                    <span className="block text-[10px] md:text-xs text-slate-400 uppercase font-semibold">Penanggung Jawab</span>
                                    <span className="text-white font-medium text-sm md:text-base">{activity.coordinator}</span>
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-6 md:mt-8 bg-sky-500 hover:bg-sky-600 text-white font-medium py-2.5 md:py-3 rounded-lg transition-colors text-sm md:text-base shadow-lg shadow-sky-500/20">
                            Hubungi Panitia
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetailView;