import React, { useState } from 'react';
import { 
  Package, 
  Search, 
  Barcode, 
  AlertTriangle, 
  ArrowLeft, 
  Plus, 
  Minus, 
  CheckCircle, 
  Layers, 
  TrendingDown 
} from 'lucide-react';
import { sound } from '../../utils/soundEffects.js';
import { triggerConfetti } from '../../utils/confetti.js';

const INITIAL_STOCK = [
  { id: 'ART-849', barcode: '7791234567890', name: 'Microcontrolador ESP32-WROOM-32D', category: 'Electrónica', stock: 142, minThreshold: 30, unitCostUSD: 4.50 },
  { id: 'ART-850', barcode: '7791234567891', name: 'Sensor de Presión y Temperatura Industrial', category: 'Insumos', stock: 12, minThreshold: 25, unitCostUSD: 18.20 }, // Crítico
  { id: 'ART-851', barcode: '7791234567892', name: 'Módulo Relé 4 Canales Optoacoplado 12V', category: 'Electrónica', stock: 85, minThreshold: 20, unitCostUSD: 6.80 },
  { id: 'ART-852', barcode: '7791234567893', name: 'Cable Blindado Par Trenzado RS-485 (Bobina 100m)', category: 'Cables', stock: 6, minThreshold: 10, unitCostUSD: 54.00 } // Crítico
];

export default function InventarioStockApp({ onBack }) {
  const [items, setItems] = useState(INITIAL_STOCK);
  const [search, setSearch] = useState('');
  const [lastScanned, setLastScanned] = useState(null);

  const adjustStock = (id, delta) => {
    sound.playPop();
    setItems(items.map(item => {
      if (item.id === id) {
        const newStock = Math.max(0, item.stock + delta);
        return { ...item, stock: newStock };
      }
      return item;
    }));
  };

  const handleSimulateScan = () => {
    sound.playBlip();
    const randomItem = items[Math.floor(Math.random() * items.length)];
    setLastScanned(randomItem);
    adjustStock(randomItem.id, -1);
  };

  const totalUnits = items.reduce((acc, i) => acc + i.stock, 0);
  const totalValuation = items.reduce((acc, i) => acc + (i.stock * i.unitCostUSD), 0);
  const criticalCount = items.filter(i => i.stock <= i.minThreshold).length;

  const filteredItems = items.filter(i => 
    i.name.toLowerCase().includes(search.toLowerCase()) ||
    i.id.toLowerCase().includes(search.toLowerCase()) ||
    i.barcode.includes(search)
  );

  return (
    <div className="min-h-screen bg-[#141414] text-[#EDEDED] py-8 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* BARRA SUPERIOR */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-8 pb-4 border-b border-[#444444]/40">
        <button
          onClick={() => { sound.playPop(); onBack(); }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#222222] hover:bg-[#DA0037] text-xs sm:text-sm font-semibold transition-all border border-[#444444]/60 cursor-pointer text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Portafolio RED</span>
        </button>

        <span className="text-[11px] font-mono font-bold tracking-widest text-[#DA0037] uppercase bg-[#171717] px-3 py-1.5 rounded-full border border-[#DA0037]/30">
          DEMO ERP 03 &bull; INVENTARIO &amp; CÓDIGOS DE BARRA
        </span>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* CABECERA & ACCIÓN DE ESCANEO */}
        <div className="bg-[#1e1e1e] rounded-2xl border border-[#444444]/50 p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Package className="w-6 h-6 text-[#DA0037]" />
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                Control de Stock, Almacén &amp; Trazabilidad
              </h1>
            </div>
            <p className="text-xs text-[#A1A1AA]">
              Gestión de inventario físico con alertas automáticas de reposición y compatibilidad con pistolas lectoras de código de barras.
            </p>
          </div>

          <button
            onClick={handleSimulateScan}
            className="px-5 py-3 rounded-xl bg-[#DA0037] hover:bg-[#b0002c] text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-red-glow transition-all cursor-pointer shrink-0"
          >
            <Barcode className="w-4 h-4" />
            <span>Simular Disparo de Lector (Descontar 1)</span>
          </button>
        </div>

        {/* NOTIFICACIÓN DE ÚLTIMO ESCANEADO */}
        {lastScanned && (
          <div className="p-3 bg-emerald-950/50 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 font-mono flex items-center justify-between animate-fadeIn">
            <span>⚡ Lector detectó código: <strong>{lastScanned.barcode}</strong> &bull; {lastScanned.name} (Se descontó 1 unidad de stock).</span>
            <button onClick={() => setLastScanned(null)} className="text-gray-400 hover:text-white">✕</button>
          </div>
        )}

        {/* 3 KPIS DE ALMACÉN */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-[#1e1e1e] p-5 rounded-xl border border-[#444444]/40">
            <span className="text-[10px] font-mono text-gray-400 uppercase">Valuación Total en Almacén</span>
            <p className="text-2xl font-black text-white font-mono mt-1">${totalValuation.toLocaleString()} USD</p>
            <span className="text-xs text-gray-500">{totalUnits} unidades físicas</span>
          </div>

          <div className="bg-[#1e1e1e] p-5 rounded-xl border border-amber-500/30">
            <span className="text-[10px] font-mono text-amber-400 uppercase">Artículos en Umbral Crítico</span>
            <p className="text-2xl font-black text-amber-400 font-mono mt-1">{criticalCount} Productos</p>
            <span className="text-xs text-amber-300/70">Requieren orden de compra urgente</span>
          </div>

          <div className="bg-[#1e1e1e] p-5 rounded-xl border border-[#444444]/40">
            <span className="text-[10px] font-mono text-gray-400 uppercase">Precisión de Inventario</span>
            <p className="text-2xl font-black text-emerald-400 font-mono mt-1">99.8%</p>
            <span className="text-xs text-gray-400">Tubería sin discrepancias físicas</span>
          </div>
        </div>

        {/* TABLA DE PRODUCTOS */}
        <div className="bg-[#1e1e1e] rounded-2xl border border-[#444444]/50 p-6 space-y-4 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nombre, código o EAN..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#171717] border border-[#444444] rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#DA0037]"
              />
            </div>
            <span className="text-xs font-mono text-gray-400">
              Mostrando {filteredItems.length} artículos
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#171717] text-gray-400 uppercase font-mono text-[10px] border-b border-[#444444]/40">
                <tr>
                  <th className="py-3 px-4">Código / EAN</th>
                  <th className="py-3 px-4">Descripción del Artículo</th>
                  <th className="py-3 px-4">Rubro</th>
                  <th className="py-3 px-4">Costo Unit.</th>
                  <th className="py-3 px-4">Stock Físico</th>
                  <th className="py-3 px-4">Estado</th>
                  <th className="py-3 px-4 text-right">Ajuste Manual</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#444444]/30">
                {filteredItems.map((item) => {
                  const isCritical = item.stock <= item.minThreshold;
                  return (
                    <tr key={item.id} className="hover:bg-[#252525] transition-colors">
                      <td className="py-3.5 px-4 font-mono">
                        <span className="text-white font-bold block">{item.id}</span>
                        <span className="text-[10px] text-gray-500">{item.barcode}</span>
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-white">{item.name}</td>
                      <td className="py-3.5 px-4 text-gray-400 font-mono">{item.category}</td>
                      <td className="py-3.5 px-4 font-mono font-bold text-white">${item.unitCostUSD.toFixed(2)} USD</td>
                      <td className="py-3.5 px-4 font-mono font-black text-sm">
                        <span className={isCritical ? 'text-[#DA0037]' : 'text-emerald-400'}>
                          {item.stock} u.
                        </span>
                        <span className="text-[10px] text-gray-500 block font-normal">Mín: {item.minThreshold}</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${
                          isCritical
                            ? 'bg-rose-950/60 text-rose-400 border-rose-800/40 animate-pulse'
                            : 'bg-emerald-950/40 text-emerald-400 border-emerald-800/40'
                        }`}>
                          {isCritical ? 'Stock Crítico' : 'Abastecido'}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <div className="inline-flex items-center gap-1">
                          <button
                            onClick={() => adjustStock(item.id, -1)}
                            className="w-7 h-7 rounded bg-[#171717] hover:bg-[#333] border border-[#444] text-gray-300 flex items-center justify-center cursor-pointer"
                            title="Restar 1"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => adjustStock(item.id, 1)}
                            className="w-7 h-7 rounded bg-[#171717] hover:bg-[#333] border border-[#444] text-gray-300 flex items-center justify-center cursor-pointer"
                            title="Sumar 1"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
