import React from 'react';
import { Calculator, Wallet, Award, Gift, PartyPopper, Video, Utensils, Package, Mic2, Music, Camera, Heart } from 'lucide-react';

// Helper component for Mobile Card Item
const MobileItemCard = ({ no, name, unit, price, total, highlight = false }: any) => (
  <div className={`backdrop-blur-sm p-4 rounded-xl border shadow-sm flex flex-col gap-2 mb-3 ${highlight ? 'bg-amber-500/10 border-amber-500/30' : 'bg-white/5 border-white/10'}`}>
    <div className="flex justify-between items-start">
      <div className="flex gap-3">
         {no && <span className="flex-shrink-0 w-6 h-6 bg-white/10 text-white rounded-full flex items-center justify-center text-xs font-bold border border-white/20">{no}</span>}
         <div>
            <h5 className="font-bold text-white text-sm">{name}</h5>
            {unit && price && <p className="text-xs text-slate-400 mt-0.5 font-mono">{unit} x {price}</p>}
         </div>
      </div>
    </div>
    <div className="border-t border-white/5 pt-2 mt-1 flex justify-between items-center">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total</span>
        <span className={`font-bold font-mono ${highlight ? 'text-amber-400' : 'text-sky-300'}`}>{total}</span>
    </div>
  </div>
);

// Helper for Desktop Table Row
const TableRow = ({ no, name, unit, price, total, highlight = false }: any) => (
    <tr className={`hover:bg-white/5 transition-colors border-b border-white/5 ${highlight ? 'bg-amber-500/5' : ''}`}>
        <td className="px-4 py-3 text-slate-400 text-center">{no}</td>
        <td className="px-4 py-3 font-medium text-slate-200">{name}</td>
        <td className="px-4 py-3 text-center text-slate-400 font-mono text-xs">{unit}</td>
        <td className="px-4 py-3 text-right text-slate-400 font-mono text-xs">{price}</td>
        <td className={`px-4 py-3 text-right font-bold font-mono whitespace-nowrap ${highlight ? 'text-amber-400' : 'text-sky-300'}`}>{total}</td>
    </tr>
);

interface RABViewProps {
  onOpenDonate?: () => void;
}

const RABView: React.FC<RABViewProps> = ({ onOpenDonate }) => {
  return (
    <div className="pt-24 pb-20 bg-transparent min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-navy-900 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-lg backdrop-blur-md">
                <Calculator size={14} className="text-sky-500" /> Transparansi Dana
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg uppercase tracking-tight">Rancangan Anggaran Biaya</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-purple-500 mx-auto rounded-full mb-4"></div>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto font-light">
                Detail estimasi kebutuhan dana Panitia DN KMH ke-6 KMH LOTIM FH UNRAM.
            </p>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto">
            
            {/* =================================================================================
                1. SEMINAR HUKUM (Halaman 09)
               ================================================================================= */}
            <div className="reveal">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-navy-900 flex items-center justify-center shadow-lg shadow-blue-900/50 border border-white/10">
                        <Wallet className="text-white" size={24} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white uppercase tracking-wide">1. Seminar Hukum</h3>
                        <p className="text-sky-400 text-sm font-mono font-bold">Total: Rp. 2.450.000</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* 1. PERLENGKAPAN */}
                    <div className="bg-navy-900/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden flex flex-col">
                        <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex justify-between items-center">
                            <h4 className="font-bold text-white flex items-center gap-2"><Package size={16} className="text-slate-400"/> 1. Perlengkapan</h4>
                            <span className="text-xs bg-navy-950 text-slate-300 px-2 py-1 rounded border border-white/10">Rp. 1.610.000</span>
                        </div>
                        
                        <div className="p-4 md:p-0 overflow-x-auto">
                            <table className="w-full text-sm text-slate-300 hidden md:table">
                                <thead className="bg-navy-950/50 text-slate-400 font-semibold uppercase text-[10px] tracking-wider">
                                    <tr>
                                        <th className="px-4 py-3 text-center w-10">No</th>
                                        <th className="px-4 py-3 text-left">Nama Barang</th>
                                        <th className="px-4 py-3 text-center">Unit</th>
                                        <th className="px-4 py-3 text-right">Harga/Unit</th>
                                        <th className="px-4 py-3 text-right">Jumlah</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { no: 1, name: 'Banner', unit: '7x5', price: 'Rp700.000', total: 'Rp700.000' },
                                        { no: 2, name: 'Pulpen', unit: '3', price: 'Rp5.000', total: 'Rp15.000' },
                                        { no: 3, name: 'Map', unit: '5', price: 'Rp5.000', total: 'Rp25.000' },
                                        { no: 4, name: 'SewaSound', unit: '1', price: 'Rp300.000', total: 'Rp300.000' },
                                        { no: 5, name: 'Bingkai', unit: '3', price: 'Rp60.000', total: 'Rp180.000' },
                                        { no: 6, name: 'Print', unit: '1', price: 'Rp50.000', total: 'Rp50.000' },
                                        { no: 7, name: 'Kertas HVS', unit: '2 Rim', price: 'Rp150.000', total: 'Rp300.000' },
                                        { no: 8, name: 'Amplop', unit: '1 Pack', price: 'Rp25.000', total: 'Rp25.000' },
                                        { no: 10, name: 'Sertifikat', unit: '3', price: 'Rp. 5.000.', total: 'Rp. 15.000' },
                                    ].map((item, i) => <TableRow key={i} {...item} />)}
                                </tbody>
                            </table>
                            {/* Mobile List */}
                            <div className="md:hidden">
                                {[
                                    { no: 1, name: 'Banner', unit: '7x5', price: 'Rp700.000', total: 'Rp700.000' },
                                    { no: 2, name: 'Pulpen', unit: '3', price: 'Rp5.000', total: 'Rp15.000' },
                                    { no: 3, name: 'Map', unit: '5', price: 'Rp5.000', total: 'Rp25.000' },
                                    { no: 4, name: 'SewaSound', unit: '1', price: 'Rp300.000', total: 'Rp300.000' },
                                    { no: 5, name: 'Bingkai', unit: '3', price: 'Rp60.000', total: 'Rp180.000' },
                                    { no: 6, name: 'Print', unit: '1', price: 'Rp50.000', total: 'Rp50.000' },
                                    { no: 7, name: 'Kertas HVS', unit: '2 Rim', price: 'Rp150.000', total: 'Rp300.000' },
                                    { no: 8, name: 'Amplop', unit: '1 Pack', price: 'Rp25.000', total: 'Rp25.000' },
                                    { no: 10, name: 'Sertifikat', unit: '3', price: 'Rp. 5.000.', total: 'Rp. 15.000' },
                                ].map((item, i) => <MobileItemCard key={i} {...item} />)}
                            </div>
                        </div>
                    </div>

                    {/* 2. KONSUMSI */}
                    <div className="bg-navy-900/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden flex flex-col">
                        <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex justify-between items-center">
                            <h4 className="font-bold text-white flex items-center gap-2"><Utensils size={16} className="text-slate-400"/> 2. Konsumsi</h4>
                            <span className="text-xs bg-navy-950 text-slate-300 px-2 py-1 rounded border border-white/10">Rp. 840.000</span>
                        </div>
                        
                        <div className="p-4 md:p-0 overflow-x-auto">
                            <table className="w-full text-sm text-slate-300 hidden md:table">
                                <thead className="bg-navy-950/50 text-slate-400 font-semibold uppercase text-[10px] tracking-wider">
                                    <tr>
                                        <th className="px-4 py-3 text-center w-10">No</th>
                                        <th className="px-4 py-3 text-left">Nama Barang</th>
                                        <th className="px-4 py-3 text-center">Unit</th>
                                        <th className="px-4 py-3 text-right">Harga/Unit</th>
                                        <th className="px-4 py-3 text-right">Jumlah</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Special Row for Header inside table */}
                                    <tr className="bg-white/5">
                                        <td className="px-4 py-3 text-center text-slate-500"></td>
                                        <td colSpan={4} className="px-4 py-3 font-bold text-white italic">Konsumsi Pemateri</td>
                                    </tr>
                                    {[
                                        { no: 1, name: '- Nasi Kotak', unit: '4', price: 'Rp.30.000', total: 'Rp.120.000' },
                                        { no: '', name: '- Buah', unit: '4', price: 'Rp.50.000', total: 'Rp.200.000' },
                                        { no: '', name: '- Hampers', unit: '4', price: 'Rp.100.000', total: 'Rp.400.000' },
                                        { no: '', name: '- Snack', unit: '4', price: 'Rp.30.000', total: 'Rp.120.000' },
                                    ].map((item, i) => <TableRow key={i} {...item} />)}
                                </tbody>
                            </table>
                            {/* Mobile List */}
                            <div className="md:hidden">
                                <div className="text-xs font-bold text-slate-400 mb-2 uppercase px-1">Konsumsi Pemateri</div>
                                {[
                                    { no: 1, name: 'Nasi Kotak', unit: '4', price: 'Rp.30.000', total: 'Rp.120.000' },
                                    { no: '', name: 'Buah', unit: '4', price: 'Rp.50.000', total: 'Rp.200.000' },
                                    { no: '', name: 'Hampers', unit: '4', price: 'Rp.100.000', total: 'Rp.400.000' },
                                    { no: '', name: 'Snack', unit: '4', price: 'Rp.30.000', total: 'Rp.120.000' },
                                ].map((item, i) => <MobileItemCard key={i} {...item} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* =================================================================================
                2. SANTUNAN PANTI ASUHAN (Halaman 10 Top)
               ================================================================================= */}
            <div className="reveal">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-600 to-rose-900 flex items-center justify-center shadow-lg shadow-pink-900/50 border border-white/10">
                        <Gift className="text-white" size={24} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white uppercase tracking-wide">2. Santunan Panti Asuhan</h3>
                        <p className="text-sky-400 text-sm font-mono font-bold">Total: Rp13.990.000</p>
                    </div>
                </div>

                <div className="bg-navy-900/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                    <div className="p-4 md:p-0 overflow-x-auto">
                        <table className="w-full text-sm text-slate-300 hidden md:table">
                            <thead className="bg-navy-950/50 text-slate-400 font-semibold uppercase text-[10px] tracking-wider">
                                <tr>
                                    <th className="px-4 py-3 text-center w-10">NO</th>
                                    <th className="px-4 py-3 text-left">NAMA BARANG</th>
                                    <th className="px-4 py-3 text-center">JUMLAH</th>
                                    <th className="px-4 py-3 text-right">HARGA SATUAN</th>
                                    <th className="px-4 py-3 text-right">JUMLAH</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { no: 1, name: 'Beras', unit: '4 Kwintal', price: 'Rp.15.000/kg', total: 'Rp6.000.000' },
                                    { no: 2, name: 'Telur', unit: '30 trai', price: 'Rp.55.000/trai', total: 'Rp1.650.000' },
                                    { no: 3, name: 'Gula', unit: '50 kg', price: 'Rp.14.000/kg', total: 'Rp700.000' },
                                    { no: 4, name: 'Mie Instan', unit: '10 dus', price: 'Rp.110.000/dus', total: 'Rp1.100.000' },
                                    { no: 5, name: 'Minyak', unit: '50/liter', price: 'Rp.20.000/l', total: 'Rp1.000.000' },
                                    { no: 6, name: 'Buku dan Alat Tulis', unit: '10 lusin/10 kotak', price: 'Rp70.000', total: 'Rp700.000' },
                                    { no: 7, name: "Al-Qur'an", unit: '30', price: 'Rp. 90.000', total: 'Rp2.700.000' },
                                ].map((item, i) => <TableRow key={i} {...item} />)}
                            </tbody>
                        </table>
                        <div className="md:hidden">
                            {[
                                { no: 1, name: 'Beras', unit: '4 Kwintal', price: 'Rp.15.000/kg', total: 'Rp6.000.000' },
                                { no: 2, name: 'Telur', unit: '30 trai', price: 'Rp.55.000/trai', total: 'Rp1.650.000' },
                                { no: 3, name: 'Gula', unit: '50 kg', price: 'Rp.14.000/kg', total: 'Rp700.000' },
                                { no: 4, name: 'Mie Instan', unit: '10 dus', price: 'Rp.110.000/dus', total: 'Rp1.100.000' },
                                { no: 5, name: 'Minyak', unit: '50/liter', price: 'Rp.20.000/l', total: 'Rp1.000.000' },
                                { no: 6, name: 'Buku dan Alat Tulis', unit: '10 lusin/10 kotak', price: 'Rp70.000', total: 'Rp700.000' },
                                { no: 7, name: "Al-Qur'an", unit: '30', price: 'Rp. 90.000', total: 'Rp2.700.000' },
                            ].map((item, i) => <MobileItemCard key={i} {...item} />)}
                        </div>
                    </div>
                </div>
            </div>

            {/* =================================================================================
                3. SERANGKAIAN LOMBA DN (Halaman 10 Bottom)
               ================================================================================= */}
            <div className="reveal">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-700 flex items-center justify-center shadow-lg shadow-amber-900/50 border border-white/10">
                        <Award className="text-white" size={24} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white uppercase tracking-wide">3. Serangkaian Lomba DN</h3>
                        <p className="text-sky-400 text-sm font-mono font-bold">Total: Rp. 1.250.000</p>
                    </div>
                </div>

                <div className="bg-navy-900/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                    <div className="p-4 md:p-0 overflow-x-auto">
                        <table className="w-full text-sm text-slate-300 hidden md:table">
                            <thead className="bg-navy-950/50 text-slate-400 font-semibold uppercase text-[10px] tracking-wider">
                                <tr>
                                    <th className="px-4 py-3 text-center w-10">No</th>
                                    <th className="px-4 py-3 text-left">NAMA BARANG</th>
                                    <th className="px-4 py-3 text-center">UNIT</th>
                                    <th className="px-4 py-3 text-right">BARANG/UNIT</th>
                                    <th className="px-4 py-3 text-right">JUMLAH</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { no: 1, name: 'Piala', unit: '6', price: 'Rp. 50.000', total: 'Rp. 300.000' },
                                    { no: 2, name: 'Sertifikat', unit: '6', price: 'Rp. 8.500', total: 'Rp. 50.000' },
                                    { no: 3, name: 'Uang untuk Juara 1 Poster', unit: '', price: '', total: 'Rp. 200.000' },
                                    { no: 4, name: 'Uang untuk Juara 2 Poster', unit: '', price: '', total: 'Rp. 150.000' },
                                    { no: 8, name: 'Uang untuk Juara 3 Poster', unit: '', price: '', total: 'Rp. 100.000' },
                                ].map((item, i) => <TableRow key={i} {...item} />)}
                            </tbody>
                        </table>
                         <div className="md:hidden">
                            {[
                                { no: 1, name: 'Piala', unit: '6', price: 'Rp. 50.000', total: 'Rp. 300.000' },
                                { no: 2, name: 'Sertifikat', unit: '6', price: 'Rp. 8.500', total: 'Rp. 50.000' },
                                { no: 3, name: 'Uang untuk Juara 1 Poster', unit: '', price: '', total: 'Rp. 200.000' },
                                { no: 4, name: 'Uang untuk Juara 2 Poster', unit: '', price: '', total: 'Rp. 150.000' },
                                { no: 8, name: 'Uang untuk Juara 3 Poster', unit: '', price: '', total: 'Rp. 100.000' },
                            ].map((item, i) => <MobileItemCard key={i} {...item} />)}
                         </div>
                    </div>
                </div>
            </div>

            {/* =================================================================================
                4. ACARA SEREMONIAL PUNCAK (Halaman 11, 12, 13)
               ================================================================================= */}
            <div className="reveal">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-900 flex items-center justify-center shadow-lg shadow-purple-900/50 border border-white/10">
                        <PartyPopper className="text-white" size={24} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white uppercase tracking-wide">4. Acara Seremonial Puncak</h3>
                        <p className="text-sky-400 text-sm font-mono font-bold">Total: Rp8.819.000</p>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* 1. ACARA (Halaman 11) */}
                    <div className="bg-navy-900/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                        <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex justify-between items-center">
                            <h4 className="font-bold text-white flex items-center gap-2"><Mic2 size={16} className="text-slate-400"/> 1. ACARA</h4>
                            <span className="text-xs bg-navy-950 text-slate-300 px-2 py-1 rounded border border-white/10">Rp3.245.000</span>
                        </div>
                        <div className="p-4 md:p-0 overflow-x-auto">
                            <table className="w-full text-sm text-slate-300 hidden md:table">
                                <thead className="bg-navy-950/50 text-slate-400 font-semibold uppercase text-[10px] tracking-wider">
                                    <tr>
                                        <th className="px-4 py-3 text-center w-10">NO</th>
                                        <th className="px-4 py-3 text-left">NAMA BARANG</th>
                                        <th className="px-4 py-3 text-center">JUMLAH</th>
                                        <th className="px-4 py-3 text-right">HARGA/UNIT</th>
                                        <th className="px-4 py-3 text-right">TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { no: 1, name: 'Gedung Taman Budaya', unit: '1', price: 'Rp1.500.000', total: 'Rp1.500.000' },
                                        { no: 2, name: 'Alat peresean', unit: '2', price: 'Rp50.000', total: 'Rp100.000' },
                                        { no: 3, name: 'Kostum tari', unit: '3', price: 'Rp100.000', total: 'Rp300.000' },
                                        { no: 4, name: 'HT', unit: '15', price: 'Rp20.000', total: 'Rp300.000' },
                                        { no: 5, name: 'Aksesoris tari', unit: '3', price: 'Rp50.000', total: 'Rp150.000' },
                                        { no: 6, name: 'Gendang beleq', unit: '1', price: 'Rp350.000', total: 'Rp350.000' },
                                        { no: 7, name: 'Kostum pembawa tumpeng', unit: '1', price: 'Rp150.000', total: 'Rp150.000' },
                                        { no: 8, name: 'Hadiah dorprize', unit: '3', price: 'Rp15.000', total: 'Rp45.000' },
                                        { no: 9, name: 'Souvenir dorprize', unit: '-', price: '-', total: 'Rp50.000' },
                                        { no: 10, name: 'Guest star', unit: '-', price: '-', total: 'Rp300.000' },
                                    ].map((item, i) => <TableRow key={i} {...item} />)}
                                </tbody>
                            </table>
                            <div className="md:hidden">
                                {[
                                    { no: 1, name: 'Gedung Taman Budaya', unit: '1', price: 'Rp1.500.000', total: 'Rp1.500.000' },
                                    { no: 2, name: 'Alat peresean', unit: '2', price: 'Rp50.000', total: 'Rp100.000' },
                                    { no: 3, name: 'Kostum tari', unit: '3', price: 'Rp100.000', total: 'Rp300.000' },
                                    { no: 4, name: 'HT', unit: '15', price: 'Rp20.000', total: 'Rp300.000' },
                                    { no: 5, name: 'Aksesoris tari', unit: '3', price: 'Rp50.000', total: 'Rp150.000' },
                                    { no: 6, name: 'Gendang beleq', unit: '1', price: 'Rp350.000', total: 'Rp350.000' },
                                    { no: 7, name: 'Kostum pembawa tumpeng', unit: '1', price: 'Rp150.000', total: 'Rp150.000' },
                                    { no: 8, name: 'Hadiah dorprize', unit: '3', price: 'Rp15.000', total: 'Rp45.000' },
                                    { no: 9, name: 'Souvenir dorprize', unit: '-', price: '-', total: 'Rp50.000' },
                                    { no: 10, name: 'Guest star', unit: '-', price: '-', total: 'Rp300.000' },
                                ].map((item, i) => <MobileItemCard key={i} {...item} />)}
                            </div>
                        </div>
                    </div>

                    {/* 2. MEDIA (Halaman 11) */}
                    <div className="bg-navy-900/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                        <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex justify-between items-center">
                            <h4 className="font-bold text-white flex items-center gap-2"><Camera size={16} className="text-slate-400"/> 2. MEDIA</h4>
                            <span className="text-xs bg-navy-950 text-slate-300 px-2 py-1 rounded border border-white/10">Rp.339.000</span>
                        </div>
                        <div className="p-4 md:p-0 overflow-x-auto">
                            <table className="w-full text-sm text-slate-300 hidden md:table">
                                <thead className="bg-navy-950/50 text-slate-400 font-semibold uppercase text-[10px] tracking-wider">
                                    <tr>
                                        <th className="px-4 py-3 text-center w-10">NO</th>
                                        <th className="px-4 py-3 text-left">NAMA BARANG</th>
                                        <th className="px-4 py-3 text-center">JUMLAH</th>
                                        <th className="px-4 py-3 text-right">HARGA/UNIT</th>
                                        <th className="px-4 py-3 text-right">TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { no: 1, name: 'Sewa Kamera', unit: '1', price: 'Rp100.000', total: 'Rp100.000' },
                                        { no: 2, name: 'Canva Pro', unit: '1', price: 'Rp95.000', total: 'Rp95.000' },
                                        { no: 3, name: 'Capcut Pro', unit: '1', price: 'Rp144.000', total: 'Rp144.000' },
                                    ].map((item, i) => <TableRow key={i} {...item} />)}
                                </tbody>
                            </table>
                            <div className="md:hidden">
                                {[
                                    { no: 1, name: 'Sewa Kamera', unit: '1', price: 'Rp100.000', total: 'Rp100.000' },
                                    { no: 2, name: 'Canva Pro', unit: '1', price: 'Rp95.000', total: 'Rp95.000' },
                                    { no: 3, name: 'Capcut Pro', unit: '1', price: 'Rp144.000', total: 'Rp144.000' },
                                ].map((item, i) => <MobileItemCard key={i} {...item} />)}
                            </div>
                        </div>
                    </div>

                    {/* 3. PERLENGKAPAN (Halaman 12) */}
                    <div className="bg-navy-900/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                        <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex justify-between items-center">
                            <h4 className="font-bold text-white flex items-center gap-2"><Package size={16} className="text-slate-400"/> 3. PERLENGKAPAN</h4>
                            <span className="text-xs bg-navy-950 text-slate-300 px-2 py-1 rounded border border-white/10">Rp. 2.495.000</span>
                        </div>
                        <div className="p-4 md:p-0 overflow-x-auto">
                             <table className="w-full text-sm text-slate-300 hidden md:table">
                                <thead className="bg-navy-950/50 text-slate-400 font-semibold uppercase text-[10px] tracking-wider">
                                    <tr>
                                        <th className="px-4 py-3 text-center w-10">NO</th>
                                        <th className="px-4 py-3 text-left">NAMA BARANG</th>
                                        <th className="px-4 py-3 text-center">JUMLAH</th>
                                        <th className="px-4 py-3 text-right">HARGA/UNIT</th>
                                        <th className="px-4 py-3 text-right">TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { no: 1, name: 'Pisau Tumpeng & Buah', unit: '1', price: 'Rp35.000', total: 'Rp35.000' },
                                        { no: 2, name: 'Baterai AAA', unit: '5', price: 'Rp20.000', total: 'Rp100.000' },
                                        { no: 3, name: 'Pulpen', unit: '5', price: 'Rp3.000', total: 'Rp15.000' },
                                        { no: 4, name: 'Map', unit: '5', price: 'Rp5.000', total: 'Rp25.000' },
                                        { no: 5, name: 'Kain Putih Dekorasi', unit: '1', price: 'Rp300.000', total: 'Rp300.000' },
                                        { no: 6, name: 'Dekorasi Panggung', unit: '1', price: 'Rp350.000', total: 'Rp350.000' },
                                        { no: 7, name: 'Trash Bag (Kantong Sampah)', unit: '1', price: 'Rp20.000', total: 'Rp20.000' },
                                        { no: 8, name: 'Sewa Proyektor', unit: '1', price: 'Rp300.000', total: 'Rp300.000' },
                                        { no: 9, name: 'Photobooth', unit: '1', price: '1.000.000', total: 'Rp1.000.000' },
                                        { no: 10, name: 'Dana Darurat', unit: '-', price: '-', total: 'Rp350.000' },
                                    ].map((item, i) => <TableRow key={i} {...item} />)}
                                </tbody>
                            </table>
                            <div className="md:hidden">
                                {[
                                    { no: 1, name: 'Pisau Tumpeng & Buah', unit: '1', price: 'Rp35.000', total: 'Rp35.000' },
                                    { no: 2, name: 'Baterai AAA', unit: '5', price: 'Rp20.000', total: 'Rp100.000' },
                                    { no: 3, name: 'Pulpen', unit: '5', price: 'Rp3.000', total: 'Rp15.000' },
                                    { no: 4, name: 'Map', unit: '5', price: 'Rp5.000', total: 'Rp25.000' },
                                    { no: 5, name: 'Kain Putih Dekorasi', unit: '1', price: 'Rp300.000', total: 'Rp300.000' },
                                    { no: 6, name: 'Dekorasi Panggung', unit: '1', price: 'Rp350.000', total: 'Rp350.000' },
                                    { no: 7, name: 'Trash Bag (Kantong Sampah)', unit: '1', price: 'Rp20.000', total: 'Rp20.000' },
                                    { no: 8, name: 'Sewa Proyektor', unit: '1', price: 'Rp300.000', total: 'Rp300.000' },
                                    { no: 9, name: 'Photobooth', unit: '1', price: '1.000.000', total: 'Rp1.000.000' },
                                    { no: 10, name: 'Dana Darurat', unit: '-', price: '-', total: 'Rp350.000' },
                                ].map((item, i) => <MobileItemCard key={i} {...item} />)}
                            </div>
                        </div>
                    </div>

                    {/* 4. KONSUMSI (Halaman 13) */}
                    <div className="bg-navy-900/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                        <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex justify-between items-center">
                            <h4 className="font-bold text-white flex items-center gap-2"><Utensils size={16} className="text-slate-400"/> 4. KONSUMSI</h4>
                            <span className="text-xs bg-navy-950 text-slate-300 px-2 py-1 rounded border border-white/10">Rp.2.740.000</span>
                        </div>
                        <div className="p-4 md:p-0 overflow-x-auto">
                            <table className="w-full text-sm text-slate-300 hidden md:table">
                                <thead className="bg-navy-950/50 text-slate-400 font-semibold uppercase text-[10px] tracking-wider">
                                    <tr>
                                        <th className="px-4 py-3 text-center w-10">NO</th>
                                        <th className="px-4 py-3 text-left">NAMA BARANG</th>
                                        <th className="px-4 py-3 text-center">JUMLAH</th>
                                        <th className="px-4 py-3 text-right">HARGA/UNIT</th>
                                        <th className="px-4 py-3 text-right">TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { no: 1, name: 'VVIP (Snack Kotak dan Air)', unit: '10', price: 'Rp13.000', total: 'Rp130.000' },
                                        { no: 2, name: 'VIP', unit: '100', price: 'Rp5.000', total: 'Rp500.000' },
                                        { no: 3, name: 'Penonton', unit: '200', price: 'Rp5.000', total: 'Rp1.000.000' },
                                        { no: 4, name: 'Air Cup', unit: '6', price: 'Rp20.000', total: 'Rp120.000' },
                                        { no: 5, name: 'Nasi Tumpeng', unit: '1', price: 'Rp500.000', total: 'Rp500.000' },
                                        { no: 6, name: 'Permen', unit: '2', price: 'Rp10.000', total: 'Rp20.000' },
                                        { no: 7, name: 'Tissue', unit: '2', price: 'Rp10.000', total: 'Rp20.000' },
                                        { no: 8, name: 'Nasi Panitia', unit: '50', price: 'Rp5.000', total: 'Rp250.000' },
                                        { no: 10, name: 'Dana Darurat', unit: '-', price: '-', total: 'Rp200.000' },
                                    ].map((item, i) => <TableRow key={i} {...item} />)}
                                </tbody>
                            </table>
                             <div className="md:hidden">
                                {[
                                    { no: 1, name: 'VVIP (Snack Kotak dan Air)', unit: '10', price: 'Rp13.000', total: 'Rp130.000' },
                                    { no: 2, name: 'VIP', unit: '100', price: 'Rp5.000', total: 'Rp500.000' },
                                    { no: 3, name: 'Penonton', unit: '200', price: 'Rp5.000', total: 'Rp1.000.000' },
                                    { no: 4, name: 'Air Cup', unit: '6', price: 'Rp20.000', total: 'Rp120.000' },
                                    { no: 5, name: 'Nasi Tumpeng', unit: '1', price: 'Rp500.000', total: 'Rp500.000' },
                                    { no: 6, name: 'Permen', unit: '2', price: 'Rp10.000', total: 'Rp20.000' },
                                    { no: 7, name: 'Tissue', unit: '2', price: 'Rp10.000', total: 'Rp20.000' },
                                    { no: 8, name: 'Nasi Panitia', unit: '50', price: 'Rp5.000', total: 'Rp250.000' },
                                    { no: 10, name: 'Dana Darurat', unit: '-', price: '-', total: 'Rp200.000' },
                                ].map((item, i) => <MobileItemCard key={i} {...item} />)}
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* =================================================================================
                5. TOTAL KESELURUHAN (Halaman 14)
               ================================================================================= */}
            <div className="reveal delay-200">
                <div className="relative group rounded-3xl p-[1px] bg-gradient-to-r from-sky-400 via-purple-400 to-amber-400">
                    <div className="bg-navy-950 rounded-3xl overflow-hidden relative">
                         {/* Background FX */}
                         <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>
                         <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -ml-16 -mb-16 pointer-events-none"></div>

                         <div className="p-8 md:p-12 text-center relative z-10">
                             <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-xs font-bold text-white uppercase tracking-[0.2em] mb-6 border border-white/20">
                                Rekapitulasi Akhir
                             </div>
                             
                             <h3 className="text-2xl md:text-4xl font-black text-white mb-8 tracking-tight">TOTAL RANCANGAN <br/> ANGGARAN BIAYA</h3>

                             <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden mb-10">
                                <table className="w-full text-left">
                                    <thead className="bg-white/5 text-slate-300 text-xs font-bold uppercase tracking-wider">
                                        <tr>
                                            <th className="px-6 py-4 text-center w-16">No</th>
                                            <th className="px-6 py-4">Nama Program Kerja</th>
                                            <th className="px-6 py-4 text-right">Total Keseluruhan</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-sm md:text-base">
                                        {[
                                            { no: 1, name: 'Seminar Hukum', total: 'Rp2.285.000' },
                                            { no: 2, name: 'Santunan Panti Asuhan', total: 'Rp13.990.000' },
                                            { no: 3, name: 'Lomba Hut DN KMH ke-5', total: 'Rp1.250.000' },
                                            { no: 5, name: 'Acara Puncak DN KMH Ke-5', total: 'Rp8.819.000' },
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-white/5 transition-colors">
                                                <td className="px-6 py-4 text-center font-mono text-slate-400">{row.no}</td>
                                                <td className="px-6 py-4 font-bold text-slate-200">{row.name}</td>
                                                <td className="px-6 py-4 text-right font-mono font-bold text-sky-400">{row.total}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                             </div>

                             <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-8 bg-gradient-to-r from-sky-600 to-blue-700 p-1 rounded-2xl shadow-[0_0_50px_rgba(37,99,235,0.3)] transform hover:scale-105 transition-transform duration-500 mb-8">
                                 <div className="bg-navy-950 px-8 py-6 rounded-xl flex flex-col items-center md:items-start w-full md:w-auto">
                                     <span className="text-sky-300 text-xs font-bold uppercase tracking-widest mb-1">Total Dana Dibutuhkan</span>
                                     <span className="text-white text-3xl md:text-5xl font-black font-mono tracking-tighter">Rp 26.344.000</span>
                                 </div>
                             </div>
                             
                             {/* CALL TO ACTION BUTTON (NEW) */}
                             {onOpenDonate && (
                                <button 
                                    onClick={onOpenDonate}
                                    className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black uppercase tracking-widest rounded-xl shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:shadow-[0_0_50px_rgba(245,158,11,0.8)] transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 border border-white/20 relative overflow-hidden group"
                                >
                                    <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                                    <Heart className="fill-white animate-pulse" size={20} />
                                    Dukung Kesuksesan Acara Ini
                                </button>
                             )}

                             <p className="mt-8 text-xs text-slate-500 font-mono">
                                 Terbilang: Dua Puluh Enam Juta Tiga Ratus Empat Puluh Empat Ribu Rupiah.
                             </p>
                         </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default RABView;