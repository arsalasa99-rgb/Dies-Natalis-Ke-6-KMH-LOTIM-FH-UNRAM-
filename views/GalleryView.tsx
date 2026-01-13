import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { X, ChevronLeft, ChevronRight, Camera, History, Image as ImageIcon } from 'lucide-react';

const GalleryView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'DN6' | 'DN5'>('DN6');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Filter items based on active tab
  const filteredItems = GALLERY_ITEMS.filter(item => item.category === activeTab);
  
  // Filter only images (strictly) since we removed videos
  const photos = filteredItems.filter(item => item.type === 'image');

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
        setSelectedImageIndex((selectedImageIndex + 1) % photos.length);
    }
  };
  
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
        setSelectedImageIndex((selectedImageIndex - 1 + photos.length) % photos.length);
    }
  };

  const handleTabChange = (tab: 'DN6' | 'DN5') => {
      setActiveTab(tab);
      setSelectedImageIndex(null); // Close lightbox if open to prevent index mismatch
  };

  return (
    <div className="pt-24 pb-20 bg-navy-950 min-h-screen relative overflow-hidden">
      {/* Background Image Setup - DUPLICATED VERTICALLY to prevent zoom/stretch on long content */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="w-full h-full relative">
            {/* Layer 1 */}
            <img 
                src="https://i.ibb.co.com/M42sjzx/Gemini-Generated-Image-g3n9ing3n9ing3n9-1.png" 
                alt="Gallery Background" 
                className="w-full h-screen object-cover object-center absolute top-0 left-0"
            />
            {/* Layer 2 (Duplicate for scrolling) */}
            <img 
                src="https://i.ibb.co.com/M42sjzx/Gemini-Generated-Image-g3n9ing3n9ing3n9-1.png" 
                alt="Gallery Background Repeated" 
                className="w-full h-screen object-cover object-center absolute top-[100vh] left-0"
            />
             {/* Layer 3 (Duplicate for extra long scrolling) */}
             <img 
                src="https://i.ibb.co.com/M42sjzx/Gemini-Generated-Image-g3n9ing3n9ing3n9-1.png" 
                alt="Gallery Background Repeated" 
                className="w-full h-screen object-cover object-center absolute top-[200vh] left-0"
            />
        </div>
        <div className="fixed inset-0 bg-navy-950/85 mix-blend-multiply"></div>
        <div className="fixed inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/80"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-14 reveal">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Galeri Kegiatan</h2>
          <p className="text-slate-300 text-lg font-light">Momen kebersamaan dalam bingkai visual.</p>
        </div>

        {/* Tab Switcher - Animated */}
        <div className="flex justify-center mb-12 reveal delay-100">
            <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-full inline-flex relative border border-white/20 shadow-xl">
                <button
                    onClick={() => handleTabChange('DN6')}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 relative z-10 ${
                        activeTab === 'DN6' 
                        ? 'bg-sky-500 text-white shadow-lg scale-105' 
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                >
                    <Camera size={16} />
                    Dies Natalis Ke-6
                </button>
                
                <button
                    onClick={() => handleTabChange('DN5')}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 relative z-10 ${
                        activeTab === 'DN5' 
                        ? 'bg-sky-500 text-white shadow-lg scale-105' 
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                >
                    <History size={16} />
                    Flashback (DN 5)
                </button>
            </div>
        </div>

        <div key={activeTab}>
            {/* SECTION: PHOTOS */}
            {photos.length > 0 && (
                <div className="reveal delay-100">
                    <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-2">
                        <ImageIcon className="text-sky-400" />
                        <h3 className="text-xl font-bold text-white">Dokumentasi Foto</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {photos.map((item, index) => (
                            <div 
                                key={item.id} 
                                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-navy-900 border border-white/10 shadow-lg reveal"
                                style={{ transitionDelay: `${index * 50}ms` }}
                                onClick={() => openLightbox(index)}
                            >
                                <img 
                                    src={item.url} 
                                    alt={item.caption} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                />
                                
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-navy-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 border border-white/30">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                </div>
                                
                                {/* Caption Slide Up */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy-950/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white text-sm font-medium truncate border-l-2 border-sky-400 pl-2 drop-shadow-md">{item.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>

        {photos.length === 0 && (
            <div className="text-center py-20 bg-white/5 backdrop-blur-sm rounded-2xl border-2 border-dashed border-white/10 animate-fadeIn">
                <p className="text-slate-400 font-medium">Belum ada dokumentasi untuk kategori ini.</p>
            </div>
        )}
      </div>

      {/* Lightbox Overlay */}
      {selectedImageIndex !== null && photos[selectedImageIndex] && (
        <div 
            className="fixed inset-0 z-[100] bg-navy-950/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn"
            onClick={closeLightbox}
        >
            <button className="absolute top-6 right-6 text-white hover:text-sky-400 transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20 z-[110]" onClick={closeLightbox}>
                <X size={24} />
            </button>

            <button 
                className="absolute left-4 md:left-8 text-white hover:text-sky-400 transition-colors p-3 bg-white/10 rounded-full hover:bg-white/20 z-[105] hover:scale-110"
                onClick={prevImage}
            >
                <ChevronLeft size={32} />
            </button>

            <div className="max-w-6xl max-h-[90vh] w-full flex flex-col items-center justify-center relative animate-zoom-in" onClick={(e) => e.stopPropagation()}>
                <div className="relative rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10 w-full flex justify-center bg-black">
                    <img 
                        src={photos[selectedImageIndex].url} 
                        alt={photos[selectedImageIndex].caption} 
                        className="max-w-full max-h-[80vh] object-contain"
                    />
                </div>
                <div className="mt-6 text-center px-4 max-w-2xl">
                    <h3 className="text-white font-bold text-xl">{photos[selectedImageIndex].caption}</h3>
                    <div className="h-1 w-12 bg-sky-500 mx-auto mt-3 rounded-full"></div>
                </div>
            </div>

            <button 
                className="absolute right-4 md:right-8 text-white hover:text-sky-400 transition-colors p-3 bg-white/10 rounded-full hover:bg-white/20 z-[105] hover:scale-110"
                onClick={nextImage}
            >
                <ChevronRight size={32} />
            </button>
        </div>
      )}
    </div>
  );
};

export default GalleryView;