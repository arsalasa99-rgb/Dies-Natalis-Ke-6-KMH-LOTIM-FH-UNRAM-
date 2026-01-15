import React, { useState } from 'react';
import { X, CreditCard, Wallet, Copy, Check, Instagram, Heart, Sparkles } from 'lucide-react';

interface DonationModalProps {
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ onClose }) => {
  const [copiedBNI, setCopiedBNI] = useState(false);
  const [copiedDANA, setCopiedDANA] = useState(false);

  const handleCopyBNI = () => {
    navigator.clipboard.writeText('1974531050');
    setCopiedBNI(true);
    setTimeout(() => setCopiedBNI(false), 2000);
  };

  const handleCopyDANA = () => {
    navigator.clipboard.writeText('081912856462');
    setCopiedDANA(true);
    setTimeout(() => setCopiedDANA(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy-950/80 backdrop-blur-md transition-opacity animate-fadeIn"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-navy-900 border border-white/20 rounded-3xl shadow-2xl overflow-hidden animate-zoom-in">
        
        {/* Header Background */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 opacity-20"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/30 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors z-20 backdrop-blur-sm"
        >
          <X size={20} />
        </button>

        <div className="relative z-10 p-6 md:p-8">
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(245,158,11,0.4)] animate-bounce-slight">
                    <Heart size={32} className="text-white fill-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Dukungan Anda <br/> Sangat Berarti</h2>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    Setiap rupiah yang Anda donasikan akan menjadi energi bagi kami untuk menyukseskan <span className="text-amber-400 font-bold">Dies Natalis KMH LOTIM Ke-6</span>.
                </p>
            </div>

            <div className="space-y-4">
                {/* BNI SECTION */}
                <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 group hover:border-amber-500/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-widest flex items-center gap-2">
                            <CreditCard size={14} className="text-amber-400"/> Bank BNI
                        </span>
                        <button 
                            onClick={handleCopyBNI}
                            className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full transition-all font-medium ${
                                copiedBNI 
                                ? 'bg-green-500/20 text-green-400 ring-1 ring-green-500/50' 
                                : 'bg-white/10 text-white hover:bg-white/20'
                            }`}
                        >
                            {copiedBNI ? <Check size={12}/> : <Copy size={12} />}
                            {copiedBNI ? 'TERSALIN' : 'SALIN'}
                        </button>
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <div className="text-xl md:text-2xl font-mono font-bold tracking-wider text-white mb-1 tabular-nums selection:bg-amber-500/30">
                                1974 5310 50
                            </div>
                            <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                                a.n. AZKA WIGANTARI
                            </div>
                        </div>
                    </div>
                </div>

                {/* DANA SECTION */}
                <div className="bg-sky-500/10 backdrop-blur-md p-4 rounded-xl border border-sky-500/20 group hover:border-sky-400/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-widest flex items-center gap-2">
                            <Wallet size={14} className="text-sky-400"/> DANA / E-Wallet
                        </span>
                        <button 
                            onClick={handleCopyDANA}
                            className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full transition-all font-medium ${
                                copiedDANA 
                                ? 'bg-green-500/20 text-green-400 ring-1 ring-green-500/50' 
                                : 'bg-sky-500/20 text-sky-100 hover:bg-sky-500/30'
                            }`}
                        >
                            {copiedDANA ? <Check size={12}/> : <Copy size={12} />}
                            {copiedDANA ? 'TERSALIN' : 'SALIN'}
                        </button>
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <div className="text-xl md:text-2xl font-mono font-bold tracking-wider text-white mb-1 tabular-nums selection:bg-sky-500/30">
                                0819 1285 6462
                            </div>
                            <div className="text-[10px] text-sky-200 uppercase font-bold tracking-wider">
                                a.n. YENIKA ASTARI
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
                <a
                    href="https://wa.me/6281912856462?text=Halo%20Panitia,%20saya%20sudah%20melakukan%20transfer%20donasi/sponsorship%20untuk%20Dies%20Natalis%20KMH%20LOTIM%20VI.%20Mohon%20dikonfirmasi.%20Terima%20kasih."
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full text-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-[1.02] active:scale-95 border-t border-white/20"
                >
                    <span className="flex items-center justify-center gap-2 uppercase tracking-wide text-sm">
                        <Instagram size={18}/> Konfirmasi Bukti Transfer
                    </span>
                </a>
                <p className="text-center text-[10px] text-slate-500 mt-4">
                    Terima kasih atas partisipasi dan kebaikan hati Anda. <br/> Semoga menjadi ladang pahala.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;