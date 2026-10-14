import React, { useState } from 'react';
import { 
  Truck, 
  MapPin, 
  Fuel, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  ArrowLeft, 
  Plus, 
  Search, 
  Settings, 
  Activity, 
  Calendar, 
  UserCheck 
} from 'lucide-react';

// EDITAR AQUÍ: Parámetros del combustible y rutas
const FLEET_CONFIG = {
  fuelPricePerLiter: 1.15, // USD por litro de diésel
  baseUnitsTotal: 25,
  companyName: "Logística Nacional S.A."
};

export default function LogisticaApp({ onBack }) {
  // Lista de unidades de flota activas
  const [units, setUnits] = useState([
    { id: "UN-01", model: "Scania R450", driver: "Carlos Rodríguez", route: "La Plata &rarr; CABA", status: "En Ruta", fuelPct: 78, kmRemaining: 45 },
    { id: "UN-02", model: "Mercedes Actros 2045", driver: "Gustavo Peralta", route: "Rosario &rarr; Córdoba", status: "En Ruta", fuelPct: 52, kmRemaining: 180 },
    { id: "UN-03", model: "Volvo FH 500", driver: "Marcos Almirón", route: "Mendoza &rarr; San Juan", status: "En Espera", fuelPct: 95, kmRemaining: 0 },
    { id: "UN-04", model: "Scania P360", driver: "Jorge Silva", route: "Bahía Blanca &rarr; Mar del Plata", status: "En Ruta", fuelPct: 34, kmRemaining: 210 },
    { id: "UN-08", model: "Iveco Stralis 460", driver: "En Taller", route: "Base Operativa Norte", status: "Mantenimiento", fuelPct: 15, kmRemaining: 0 }
  ]);

  const [filterStatus, setFilterStatus] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  // Calculadora de viático dinámico
  const [calcKm, setCalcKm] = useState(350);
  const [calcConsumption, setCalcConsumption] = useState(32); // Litros cada 100km

  const estimatedLiters = Math.round((calcKm / 100) * calcConsumption);
  const estimatedCostUSD = Math.round(estimatedLiters * FLEET_CONFIG.fuelPricePerLiter);

  // Filtrado de camiones
  const filteredUnits = units.filter(u => {
    const matchesFilter = filterStatus === 'Todos' || u.status === filterStatus;
    const matchesSearch = u.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          u.driver.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          u.model.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const activeCount = units.filter(u => u.status === 'En Ruta').length;

  return (
    <div className="min-h-screen bg-[#141414] text-[#EDEDED] py-8 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* BARRA SUPERIOR DE NAVEGACIÓN */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-8 pb-4 border-b border-[#444444]/40">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#222222] hover:bg-[#DA0037] text-xs sm:text-sm font-semibold transition-all border border-[#444444]/60 cursor-pointer text-[#EDEDED]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Portafolio RED</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#A1A1AA] hidden sm:inline">
            Sistema de Tráfico Comercial
          </span>
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#DA0037] uppercase bg-[#171717] px-3 py-1.5 rounded-full border border-[#DA0037]/30">
            DEMO FUNCIONAL &bull; SISTEMA 02
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* TABLERO DE CONTROL SUPERIOR */}
        <div className="bg-[#1e1e1e] rounded-2xl border border-[#444444]/50 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Truck className="w-5 h-5 text-[#DA0037]" />
                <h1 className="text-xl sm:text-2xl font-bold text-white">
                  Panel de Tráfico y Control de Flotas
                </h1>
              </div>
              <p className="text-xs sm:text-sm text-[#A1A1AA]">
                Monitoreo continuo de unidades, choferes y consumo de combustible para <strong>{FLEET_CONFIG.companyName}</strong>.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1.5 rounded-lg bg-[#171717] border border-emerald-500/40 text-emerald-400 font-mono text-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                TELEMETRÍA GPS ACTIVA
              </span>
            </div>
          </div>

          {/* 4 TARJETAS DE INDICADORES CLAVE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#171717] p-4 rounded-xl border border-[#444444]/40">
              <span className="text-xs text-[#A1A1AA] uppercase font-mono">Unidades Activas</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl sm:text-3xl font-black text-white font-mono">{activeCount} / 25</span>
                <span className="text-xs text-emerald-400 font-semibold">(96% Operativo)</span>
              </div>
            </div>

            <div className="bg-[#171717] p-4 rounded-xl border border-[#444444]/40">
              <span className="text-xs text-[#A1A1AA] uppercase font-mono">Ahorro en Combustible</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl sm:text-3xl font-black text-[#DA0037] font-mono">+32%</span>
                <span className="text-xs text-[#A1A1AA]">vs Ruteo Tradicional</span>
              </div>
            </div>

            <div className="bg-[#171717] p-4 rounded-xl border border-[#444444]/40">
              <span className="text-xs text-[#A1A1AA] uppercase font-mono">Ruta Más Frecuente</span>
              <p className="text-sm font-bold text-white truncate mt-2">La Plata &rarr; Bs.As (Puerto)</p>
              <span className="text-[11px] text-emerald-400">Tráfico Despejado</span>
            </div>

            <div className="bg-[#171717] p-4 rounded-xl border border-[#444444]/40">
              <span className="text-xs text-[#A1A1AA] uppercase font-mono">Mantenimientos</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold text-amber-400 font-mono">1 Unidad</span>
                <span className="text-xs text-[#A1A1AA]">en taller</span>
              </div>
            </div>
          </div>
        </div>

        {/* LAYOUT PRINCIPAL: LISTADO DE UNIDADES + CALCULADORA DE COMBUSTIBLE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* TABLA / GRILLA DE UNIDADES (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* BARRA DE BÚSQUEDA Y FILTRO */}
            <div className="bg-[#1e1e1e] p-4 rounded-xl border border-[#444444]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar unidad, chofer o modelo..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#171717] border border-[#444444] rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#DA0037]"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                {["Todos", "En Ruta", "En Espera", "Mantenimiento"].map((st) => (
                  <button
                    key={st}
                    onClick={() => setFilterStatus(st)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      filterStatus === st
                        ? "bg-[#DA0037] text-white font-bold"
                        : "bg-[#171717] text-[#A1A1AA] hover:text-white border border-[#444444]/40"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* LISTA DE CAMIONES */}
            <div className="space-y-3">
              {filteredUnits.map((u) => (
                <div
                  key={u.id}
                  className="bg-[#1e1e1e] rounded-xl border border-[#444444]/40 hover:border-[#DA0037]/60 p-5 transition-all shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#171717] border border-[#444444]/60 flex items-center justify-center text-[#DA0037] shrink-0 mt-0.5">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-sm text-white">{u.id}</span>
                        <span className="text-xs text-gray-400">&bull; {u.model}</span>
                      </div>
                      <p className="text-xs text-[#EDEDED] font-medium flex items-center gap-1.5 mt-1">
                        <UserCheck className="w-3.5 h-3.5 text-[#DA0037]" />
                        Chofer: {u.driver}
                      </p>
                      <p className="text-xs text-gray-400 font-mono mt-0.5" dangerouslySetInnerHTML={{ __html: u.route }} />
                    </div>
                  </div>

                  {/* Estado y Tanque de Combustible */}
                  <div className="w-full sm:w-auto flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2">
                    <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${
                      u.status === 'En Ruta'
                        ? 'bg-emerald-950/50 text-emerald-400 border-emerald-800/40'
                        : u.status === 'En Espera'
                        ? 'bg-blue-950/50 text-blue-400 border-blue-800/40'
                        : 'bg-amber-950/50 text-amber-400 border-amber-800/40'
                    }`}>
                      {u.status}
                    </span>

                    <div className="flex items-center gap-2 text-xs font-mono">
                      <Fuel className="w-3.5 h-3.5 text-gray-400" />
                      <span className="text-gray-300">Tanque: {u.fuelPct}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* CALCULADORA DE COMBUSTIBLE Y RUTA (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-[#1e1e1e] rounded-2xl border border-[#444444]/60 p-6 shadow-xl">
              <span className="text-xs font-mono font-bold text-[#DA0037] uppercase tracking-wider block mb-2">
                CALCULADORA DE RUTA Y VIÁTICOS
              </span>
              <h2 className="text-base font-bold text-white mb-4">
                Estimación de Consumo por Tramo
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-gray-300 mb-1">
                    Distancia del viaje: <strong>{calcKm} km</strong>
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="1200"
                    step="10"
                    value={calcKm}
                    onChange={(e) => setCalcKm(Number(e.target.value))}
                    className="w-full accent-[#DA0037] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-0.5">
                    <span>50 km</span>
                    <span>1200 km</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-300 mb-1">
                    Consumo medio: <strong>{calcConsumption} L / 100km</strong>
                  </label>
                  <input
                    type="range"
                    min="22"
                    max="45"
                    step="1"
                    value={calcConsumption}
                    onChange={(e) => setCalcConsumption(Number(e.target.value))}
                    className="w-full accent-[#DA0037] cursor-pointer"
                  />
                </div>

                {/* RESULTADO CALCULADO */}
                <div className="bg-[#171717] p-4 rounded-xl border border-[#444444]/40 space-y-2 mt-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Litros Diésel estimados:</span>
                    <span className="font-mono font-bold text-white">{estimatedLiters} L</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Precio Diésel ref.:</span>
                    <span className="font-mono text-gray-300">${FLEET_CONFIG.fuelPricePerLiter} USD/L</span>
                  </div>
                  <div className="pt-2 border-t border-[#444444]/40 flex justify-between items-baseline">
                    <span className="text-xs font-bold text-[#EDEDED]">Costo Total Tramo:</span>
                    <span className="text-xl font-mono font-black text-[#DA0037]">${estimatedCostUSD} USD</span>
                  </div>
                </div>

                <div className="text-[11px] text-gray-400 leading-snug bg-[#171717]/60 p-3 rounded-lg border border-[#333]">
                  💡 <strong>Impacto RED:</strong> Las tuberías de datos evitan sobrecostos de combustible y desvían rutas con congestión en tiempo real.
                </div>
              </div>
            </div>

            {/* ALERTA DE MANTENIMIENTO PREVENTIVO */}
            <div className="bg-[#1e1e1e] rounded-2xl border border-amber-500/30 p-5 shadow-xl">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold font-mono mb-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>ALERTA DE MANTENIMIENTO</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed mb-3">
                Unidad <strong>UN-08 (Iveco Stralis)</strong> ingresó a base con aviso de cambio preventivo de pastillas de freno y neumáticos eje trasero.
              </p>
              <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 pt-2 border-t border-[#444444]/30">
                <span>Estado: En Taller</span>
                <span className="text-emerald-400">Repuestos en Stock</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
