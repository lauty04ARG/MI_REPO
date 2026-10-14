import React, { useState } from 'react';
import { 
  Building, 
  DollarSign, 
  Users, 
  Activity, 
  ArrowLeft, 
  Plus, 
  Search, 
  CheckCircle, 
  Clock, 
  Download, 
  Filter, 
  TrendingUp, 
  FileText 
} from 'lucide-react';

// EDITAR AQUÍ: Lista inicial de clientes y cuentas comerciales
const INITIAL_CLIENTS = [
  { id: "FAC-1042", client: "Agropecuaria del Sur S.R.L.", service: "Mantenimiento Servidores", amount: 1250, status: "Cobrado", date: "12 Oct 2026" },
  { id: "FAC-1043", client: "Transportes La Plata Express", service: "Licencia Sistema Logística", amount: 3400, status: "Pendiente", date: "10 Oct 2026" },
  { id: "FAC-1044", client: "Estudio Jurídico Benítez & Asoc.", service: "Desarrollo Web & Correo", amount: 850, status: "Cobrado", date: "08 Oct 2026" },
  { id: "FAC-1045", client: "Distribuidora Mayorista Centro", service: "Módulo Agente IA WhatsApp", amount: 650, status: "Cobrado", date: "05 Oct 2026" },
  { id: "FAC-1046", client: "Gastronómica Palermo Café", service: "Menú Digital & RSVP Eventos", amount: 450, status: "Pendiente", date: "03 Oct 2026" }
];

export default function GestionApp({ onBack }) {
  const [invoices, setInvoices] = useState(INITIAL_CLIENTS);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('Todos');

  // Formulario nuevo comprobante
  const [newClient, setNewClient] = useState('');
  const [newService, setNewService] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleAddInvoice = (e) => {
    e.preventDefault();
    if (!newClient.trim() || !newAmount) return;

    const newInv = {
      id: `FAC-${Math.floor(1050 + Math.random() * 500)}`,
      client: newClient,
      service: newService || "Servicio Digital",
      amount: Number(newAmount),
      status: "Pendiente",
      date: "Hoy"
    };

    setInvoices([newInv, ...invoices]);
    setNewClient('');
    setNewService('');
    setNewAmount('');
    setShowModal(false);
  };

  const toggleInvoiceStatus = (id) => {
    setInvoices(invoices.map(inv => {
      if (inv.id === id) {
        return {
          ...inv,
          status: inv.status === 'Cobrado' ? 'Pendiente' : 'Cobrado'
        };
      }
      return inv;
    }));
  };

  // Cálculos dinámicos
  const totalBilled = invoices.reduce((acc, curr) => acc + curr.amount, 0);
  const totalCollected = invoices.filter(i => i.status === 'Cobrado').reduce((acc, curr) => acc + curr.amount, 0);
  const collectionRate = Math.round((totalCollected / totalBilled) * 100) || 0;

  const filteredInvoices = invoices.filter(inv => {
    const matchesSearch = inv.client.toLowerCase().includes(search.toLowerCase()) || 
                          inv.service.toLowerCase().includes(search.toLowerCase()) ||
                          inv.id.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'Todos' || inv.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

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

        <span className="text-[11px] font-mono font-bold tracking-widest text-[#DA0037] uppercase bg-[#171717] px-3 py-1.5 rounded-full border border-[#DA0037]/30">
          DEMO FUNCIONAL &bull; SISTEMA 04
        </span>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* CABECERA Y KPIS */}
        <div className="bg-[#1e1e1e] rounded-2xl border border-[#444444]/50 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Building className="w-5 h-5 text-[#DA0037]" />
                Panel Administrativo &amp; Centro ERP
              </h1>
              <p className="text-xs sm:text-sm text-[#A1A1AA] mt-0.5">
                Control centralizado de cuentas por cobrar, facturación y operaciones sin planillas dispersas.
              </p>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#DA0037] hover:bg-[#b0002c] text-white font-bold text-xs sm:text-sm shadow-red-glow transition-all cursor-pointer shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Nuevo Comprobante</span>
            </button>
          </div>

          {/* 3 METRICAS FINANCIERAS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#171717] p-4 rounded-xl border border-[#444444]/40">
              <span className="text-xs text-gray-400 uppercase font-mono">Facturación en Cartera</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl sm:text-3xl font-black text-white font-mono">${totalBilled.toLocaleString()} USD</span>
              </div>
              <span className="text-[10px] text-gray-500 font-mono">Total comprobantes emitidos</span>
            </div>

            <div className="bg-[#171717] p-4 rounded-xl border border-[#444444]/40">
              <span className="text-xs text-gray-400 uppercase font-mono">Cobrado Efectivo</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">${totalCollected.toLocaleString()} USD</span>
                <span className="text-xs text-emerald-400 font-semibold font-mono">({collectionRate}%)</span>
              </div>
              <span className="text-[10px] text-gray-500 font-mono">Acreditación automática</span>
            </div>

            <div className="bg-[#171717] p-4 rounded-xl border border-[#444444]/40">
              <span className="text-xs text-gray-400 uppercase font-mono">Velocidad Base de Datos</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl sm:text-3xl font-black text-[#DA0037] font-mono">12 ms</span>
                <span className="text-xs text-gray-400">PostgreSQL + Redis</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono">&bull; 0% cuellos de botella</span>
            </div>
          </div>
        </div>

        {/* CONTENEDOR PRINCIPAL: BUSCADOR, FILTROS Y TABLA */}
        <div className="bg-[#1e1e1e] rounded-2xl border border-[#444444]/50 p-6 shadow-xl space-y-4">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por cliente, comprobante o servicio..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#171717] border border-[#444444] rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#DA0037]"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              {["Todos", "Cobrado", "Pendiente"].map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    statusFilter === st
                      ? "bg-[#DA0037] text-white font-bold"
                      : "bg-[#171717] text-[#A1A1AA] hover:text-white border border-[#444444]/40"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* TABLA DE COMPROBANTES */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#171717] text-gray-400 uppercase font-mono text-[10px] border-b border-[#444444]/40">
                <tr>
                  <th className="py-3 px-4">Comprobante</th>
                  <th className="py-3 px-4">Cliente / Razón Social</th>
                  <th className="py-3 px-4">Servicio</th>
                  <th className="py-3 px-4">Fecha</th>
                  <th className="py-3 px-4">Monto</th>
                  <th className="py-3 px-4">Estado</th>
                  <th className="py-3 px-4 text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#444444]/30">
                {filteredInvoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-[#252525] transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-white">{inv.id}</td>
                    <td className="py-3.5 px-4 font-semibold text-[#EDEDED]">{inv.client}</td>
                    <td className="py-3.5 px-4 text-gray-400">{inv.service}</td>
                    <td className="py-3.5 px-4 text-gray-400 font-mono">{inv.date}</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#EDEDED]">${inv.amount} USD</td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${
                        inv.status === 'Cobrado'
                          ? 'bg-emerald-950/50 text-emerald-400 border-emerald-800/40'
                          : 'bg-amber-950/50 text-amber-400 border-amber-800/40'
                      }`}>
                        {inv.status === 'Cobrado' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                        {inv.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => toggleInvoiceStatus(inv.id)}
                        className="text-[11px] font-medium text-[#DA0037] hover:underline cursor-pointer"
                      >
                        Cambiar Estado
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>

      {/* MODAL NUEVO COMPROBANTE */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#1e1e1e] border border-[#DA0037] rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <h2 className="text-lg font-bold text-white mb-4">Registrar Nuevo Comprobante</h2>
            <form onSubmit={handleAddInvoice} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-300 mb-1">Cliente / Empresa *</label>
                <input
                  type="text"
                  required
                  value={newClient}
                  onChange={(e) => setNewClient(e.target.value)}
                  placeholder="Ej: Metalúrgica Quilmes S.A."
                  className="w-full bg-[#171717] border border-[#444444] rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#DA0037]"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1">Concepto o Servicio</label>
                <input
                  type="text"
                  value={newService}
                  onChange={(e) => setNewService(e.target.value)}
                  placeholder="Ej: Desarrollo de API & Servidor"
                  className="w-full bg-[#171717] border border-[#444444] rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#DA0037]"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1">Monto en USD *</label>
                <input
                  type="number"
                  required
                  value={newAmount}
                  onChange={(e) => setNewAmount(e.target.value)}
                  placeholder="Ej: 1200"
                  className="w-full bg-[#171717] border border-[#444444] rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#DA0037]"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg bg-[#171717] text-gray-400 hover:text-white border border-[#444444] cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#DA0037] hover:bg-[#b0002c] text-white font-bold shadow-red-glow cursor-pointer"
                >
                  Guardar Comprobante
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
