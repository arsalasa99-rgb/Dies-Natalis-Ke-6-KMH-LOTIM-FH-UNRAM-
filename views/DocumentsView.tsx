import React, { useState, useRef, useEffect } from 'react';
import { Document } from '../types';
import { DOCUMENTS } from '../constants';
import { Search, FileText, Upload, Eye, Trash2, Plus, Download, Globe, HardDrive, AlertTriangle, Info } from 'lucide-react';

const DocumentsView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  // STATE 1: Dokumen User (Diambil dari Local Storage) - HANYA LOKAL
  const [userDocs, setUserDocs] = useState<Document[]>(() => {
    try {
      const savedDocs = localStorage.getItem('kmh_user_uploads_v2');
      return savedDocs ? JSON.parse(savedDocs) : [];
    } catch (e) {
      console.error('Gagal memuat dokumen user', e);
      return [];
    }
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  // EFFECT: Simpan otomatis setiap ada perubahan pada userDocs
  useEffect(() => {
    try {
      localStorage.setItem('kmh_user_uploads_v2', JSON.stringify(userDocs));
    } catch (e) {
      // Menangani error jika LocalStorage penuh (QuotaExceededError)
      console.error('Storage penuh', e);
      setError('Memori penyimpanan lokal penuh. Harap hapus beberapa file.');
    }
  }, [userDocs]);

  // COMBINED: Menggabungkan Dokumen User + Dokumen Publik (CONSTANTS)
  const allDocs = [...userDocs, ...DOCUMENTS];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const file = event.target.files?.[0];
    if (file) {
      // Limit file size to 4MB (LocalStorage safe limit is usually 5MB total)
      const MAX_SIZE_MB = 4; 
      if (file.size > MAX_SIZE_MB * 1024 * 1024) {
        alert(`Maaf, ukuran file maksimal adalah ${MAX_SIZE_MB}MB agar dapat disimpan permanen di browser.`);
        return;
      }

      const reader = new FileReader();
      
      reader.onload = () => {
        try {
            const base64String = reader.result as string;
            
            const newDoc: Document = {
              id: `user-${Date.now()}`, // ID unik
              title: file.name,
              type: file.name.split('.').pop()?.toUpperCase() || 'FILE',
              date: new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }),
              size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
              category: 'Upload Lokal (Hanya di HP ini)', // Ubah label agar user paham
              url: base64String // Simpan Base64 agar persisten
            };
            
            // Coba simpan ke state (yang akan memicu useEffect localStorage)
            try {
                // Test quota check before adding to state
                localStorage.setItem('test_quota', base64String);
                localStorage.removeItem('test_quota');
                
                setUserDocs(prev => [newDoc, ...prev]);
            } catch (quotaError) {
                alert('Penyimpanan browser penuh! File tidak dapat disimpan.');
            }

        } catch (err) {
            console.error("Error reading file", err);
            alert("Gagal memproses file.");
        }
      };

      reader.onerror = () => {
          alert("Gagal membaca file.");
      };

      reader.readAsDataURL(file);
    }
    // Reset input
    if (fileInputRef.current) {
        fileInputRef.current.value = '';
    }
  };

  const handleDelete = (id: string) => {
      // Prevent deleting official docs (those from constants.ts don't have 'user-' prefix)
      if (!id.startsWith('user-')) {
        alert("Dokumen resmi tidak dapat dihapus dari halaman ini.");
        return;
      }

      if (confirm('Apakah Anda yakin ingin menghapus dokumen ini dari penyimpanan browser?')) {
          setUserDocs(prev => prev.filter(doc => doc.id !== id));
      }
  };

  const handleView = (doc: Document) => {
      if(doc.url) {
        if(doc.url === '#') {
            alert('File ini belum tersedia secara publik. Silakan hubungi panitia untuk link akses.');
            return;
        }
        
        const win = window.open();
        if(win) {
             // Jika PDF, gunakan iframe viewer. Jika gambar, tampilkan gambar.
             if (doc.type === 'PDF') {
                 win.document.write(`<iframe src="${doc.url}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`);
             } else if (['JPG', 'JPEG', 'PNG'].includes(doc.type)) {
                 win.document.write(`<div style="display:flex;justify-content:center;align-items:center;height:100vh;background:#0f172a;"><img src="${doc.url}" style="max-width:100%;max-height:100%;box-shadow:0 0 20px rgba(0,0,0,0.5);"/></div>`);
             } else {
                 // Fallback untuk file lain
                 win.document.write(`<iframe src="${doc.url}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`);
             }
        }
      }
  };

  const handleDownload = (doc: Document) => {
     if (doc.url && doc.url !== '#') {
         const a = document.createElement('a');
         a.href = doc.url;
         a.download = doc.title;
         document.body.appendChild(a);
         a.click();
         document.body.removeChild(a);
     } else {
         alert('Link download belum tersedia.');
     }
  };

  const filteredDocs = allDocs.filter((doc) => {
    return doc.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="pt-24 pb-20 bg-transparent min-h-screen animate-fadeIn">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white">Arsip Digital & Cloud</h2>
            <p className="text-slate-400 mt-1 flex items-center gap-2">
                <Globe size={14}/> Dokumen Publik (Open Access)
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto items-center">
             {/* Search */}
             <div className="relative w-full sm:w-auto">
                <input 
                    type="text" 
                    placeholder="Cari dokumen..." 
                    className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg focus:outline-none focus:border-sky-500 w-full sm:w-64 placeholder-slate-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 text-slate-500" size={18} />
             </div>
             
             {/* Upload Button */}
             <div className="relative">
                 <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                 />
                 <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-lg shadow-sky-600/20 w-full sm:w-auto justify-center"
                 >
                     <Plus size={20} />
                     Upload Lokal
                 </button>
             </div>
          </div>
        </div>

        {/* INFO BANNER - Penjelasan Local Storage */}
        <div className="bg-sky-500/10 text-sky-200 p-4 rounded-lg mb-6 flex items-start gap-3 border border-sky-500/20 backdrop-blur-sm">
            <Info size={24} className="flex-shrink-0 mt-0.5" />
            <div>
                <h4 className="font-bold text-sm text-sky-300">Penting: Fitur Upload Lokal</h4>
                <p className="text-xs md:text-sm mt-1 leading-relaxed text-slate-300">
                    Dokumen yang Anda upload melalui tombol <strong>"Upload Lokal"</strong> hanya tersimpan di 
                    browser perangkat ini (Local Storage). Dokumen tersebut <strong>TIDAK</strong> akan muncul 
                    di perangkat lain atau di website publik.
                </p>
            </div>
        </div>

        {error && (
            <div className="bg-red-500/10 text-red-200 p-4 rounded-lg mb-6 flex items-center gap-3 border border-red-500/20 backdrop-blur-sm">
                <AlertTriangle size={20} />
                {error}
            </div>
        )}

        {/* Table / List */}
        <div className="bg-navy-900/50 backdrop-blur-md rounded-xl shadow-xl border border-white/10 overflow-hidden min-h-[400px]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-4 font-semibold text-sm text-white uppercase tracking-wider">Nama Dokumen</th>
                  <th className="p-4 font-semibold text-sm text-white uppercase tracking-wider">Tipe</th>
                  <th className="p-4 font-semibold text-sm text-white uppercase tracking-wider">Akses</th>
                  <th className="p-4 font-semibold text-sm text-white uppercase tracking-wider">Ukuran</th>
                  <th className="p-4 font-semibold text-sm text-white uppercase tracking-wider text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredDocs.length > 0 ? (
                  filteredDocs.map((doc) => {
                      const isLocal = doc.id.startsWith('user-');
                      return (
                        <tr key={doc.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                        <td className="p-4">
                            <div className="flex items-center">
                            <div className={`p-2 rounded-lg mr-3 ${isLocal ? 'bg-amber-500/20 text-amber-400' : 'bg-sky-500/20 text-sky-400'}`}>
                                <FileText size={20} />
                            </div>
                            <div>
                                <span className="font-medium text-slate-200 group-hover:text-white transition-colors block">
                                    {doc.title}
                                </span>
                                <span className="text-xs text-slate-500">
                                    {doc.date}
                                </span>
                            </div>
                            </div>
                        </td>
                        <td className="p-4">
                            