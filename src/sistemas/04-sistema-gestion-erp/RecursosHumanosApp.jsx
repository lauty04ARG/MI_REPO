import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  Briefcase, 
  DollarSign, 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  FileText, 
  ShieldCheck, 
  Smile 
} from 'lucide-react';
import { sound } from '../../utils/soundEffects.js';
import { triggerConfetti } from '../../utils/confetti.js';

const INITIAL_EMPLOYEES = [
  { id: 'EMP-01', name: 'Agustín Navarro', role: 'Lead DevOps & Cloud Architect', dept: 'Ingeniería', salaryUSD: 3800, vacationDaysLeft: 12, status: 'Activo' },
  { id: 'EMP-02', name: 'Camila Villalba', role: 'Senior Frontend Engineer (React)', dept: 'Frontend', salaryUSD: 3200, vacationDaysLeft: 14, status: 'Activo' },
  { id: 'EMP-03', name: 'Facundo Morales', role: 'Machine Learning Specialist', dept: 'Inteligencia Artificial', salaryUSD: 3600, vacationDaysLeft: 8, status: 'En Vacaciones' },
  { id: 'EMP-04', name: 'Luciana Giménez', role: 'UI/UX Product Designer', dept: 'Diseño', salaryUSD: 2900, vacationDaysLeft: 15, status: 'Activo' }
];

export default function RecursosHumanosApp({ onBack }) {
  const [employees, setEmployees] = useState(INITIAL_EMPLOYEES);
  const [vacationModal, setVacationModal] = useState(false);
  const [selectedEmp, setSelectedEmp] = useState(employees[0]);
  const [requestedDays, setRequestedDays] = useState(5);
  const [vacationNotice, setVacationNotice] = useState(null);

  const handleApproveVacation = (e) => {
    e.preventDefault();
    sound.playSuccess();
    triggerConfetti();

    setEmployees(employees.map(emp => {
      if (emp.id === selectedEmp.id) {
        return {
          ...emp,
          vacationDaysLeft: Math.max(0, emp.vacationDaysLeft - requestedDays),
          status: 'Vacaciones Aprobadas'
        };
      }
      return emp;
    }));

    setVacationNotice(`¡Aprobado! Se otorgaron ${requestedDays} días de descanso a ${selectedEmp.name}.`);
    setVacationModal(false);
    setTimeout(() => setVacationNotice(null), 4000);
  };

  const totalPayrollUSD = employees.reduce((acc, e) => acc + e.salaryUSD, 0);

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
          DEMO ERP 04 &bull; PORTAL DE TALENTO &amp; RRHH
        </span>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* CABECERA & ACCIÓN */}
        <div className="bg-[#1e1e1e] rounded-2xl border border-[#444444]/50 p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-6 h-6 text-[#DA0037]" />
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                Gestión de Personal &bull; Legajos y Nómina
              </h1>
            </div>
            <p className="text-xs text-[#A1A1AA]">
              Administración de contratos, liquidación de salarios y gestión ágil de licencias con cálculo de días restantes.
            </p>
          </div>

          <button
            onClick={() => { sound.playPop(); setVacationModal(true); }}
            className="px-5 py-3 rounded-xl bg-[#DA0037] hover:bg-[#b0002c] text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-red-glow transition-all cursor-pointer shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Gestionar Licencia / Vacaciones</span>
          </button>
        </div>

        {vacationNotice && (
          <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 font-mono flex items-center justify-between">
            <span>{vacationNotice}</span>
            <button onClick={() => setVacationNotice(null)}>✕</button>
          </div>
        )}

        {/* 3 KPIS DE RRHH */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-[#1e1e1e] p-5 rounded-xl border border-[#444444]/40">
            <span className="text-[10px] font-mono text-gray-400 uppercase">Colaboradores Activos</span>
            <p className="text-2xl font-black text-white font-mono mt-1">{employees.length} Ingenieros</p>
            <span className="text-xs text-emerald-400">100% Retención de talento</span>
          </div>

          <div className="bg-[#1e1e1e] p-5 rounded-xl border border-[#444444]/40">
            <span className="text-[10px] font-mono text-gray-400 uppercase">Masa Salarial Mensual</span>
            <p className="text-2xl font-black text-[#DA0037] font-mono mt-1">${totalPayrollUSD.toLocaleString()} USD</p>
            <span className="text-xs text-gray-500">Acreditación vía transferencia</span>
          </div>

          <div className="bg-[#1e1e1e] p-5 rounded-xl border border-[#444444]/40">
            <span className="text-[10px] font-mono text-gray-400 uppercase">Clima y Satisfacción</span>
            <p className="text-2xl font-black text-white font-mono mt-1">4.9 / 5.0</p>
            <span className="text-xs text-gray-400">eNPS Sobresaliente</span>
          </div>
        </div>

        {/* TABLA DE LEGAJOS */}
        <div className="bg-[#1e1e1e] rounded-2xl border border-[#444444]/50 p-6 shadow-xl space-y-4">
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
            LISTADO DE LEGAJOS DE EQUIPO
          </span>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#171717] text-gray-400 uppercase font-mono text-[10px] border-b border-[#444444]/40">
                <tr>
                  <th className="py-3 px-4">Legajo</th>
                  <th className="py-3 px-4">Nombre y Apellido</th>
                  <th className="py-3 px-4">Posición / Puesto</th>
                  <th className="py-3 px-4">Departamento</th>
                  <th className="py-3 px-4">Salario Neto</th>
                  <th className="py-3 px-4">Días Vacaciones</th>
                  <th className="py-3 px-4">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#444444]/30">
                {employees.map((emp) => (
                  <tr key={emp.id} className="hover:bg-[#252525] transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-white">{emp.id}</td>
                    <td className="py-3.5 px-4 font-semibold text-white">{emp.name}</td>
                    <td className="py-3.5 px-4 text-gray-300">{emp.role}</td>
                    <td className="py-3.5 px-4 text-gray-400 font-mono">{emp.dept}</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-emerald-400">${emp.salaryUSD.toLocaleString()} USD</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-white">{emp.vacationDaysLeft} días hab.</td>
                    <td className="py-3.5 px-4">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-800/40">
                        {emp.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* MODAL GESTIONAR LICENCIA */}
      {vacationModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#1e1e1e] border border-[#DA0037] rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-2">Solicitar Período de Vacaciones</h3>
            <p className="text-xs text-gray-400 mb-4">Selecciona el colaborador y la cantidad de días.</p>

            <form onSubmit={handleApproveVacation} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-300 mb-1">Colaborador:</label>
                <select
                  value={selectedEmp.id}
                  onChange={(e) => setSelectedEmp(employees.find(emp => emp.id === e.target.value))}
                  className="w-full bg-[#171717] border border-[#444] rounded-lg px-3 py-2 text-white"
                >
                  {employees.map(e => (
                    <option key={e.id} value={e.id}>{e.name} ({e.vacationDaysLeft} días disponibles)</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-1">Días a solicitar: <strong>{requestedDays} días</strong></label>
                <input
                  type="range"
                  min="1"
                  max={selectedEmp.vacationDaysLeft || 14}
                  value={requestedDays}
                  onChange={(e) => setRequestedDays(Number(e.target.value))}
                  className="w-full accent-[#DA0037] cursor-pointer"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setVacationModal(false)}
                  className="px-4 py-2 rounded-lg bg-[#171717] text-gray-400 hover:text-white border border-[#444]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#DA0037] hover:bg-[#b0002c] text-white font-bold shadow-red-glow"
                >
                  Aprobar Licencia
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
