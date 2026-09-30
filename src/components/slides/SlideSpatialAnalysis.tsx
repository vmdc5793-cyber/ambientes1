import React from 'react';
import { CLASSROOM_SPECS } from '../../data/sectorsData';
import {
  Ruler,
  Volume2,
  Sun,
  ShieldAlert,
  ArrowRight,
  Maximize,
  Compass,
  Footprints,
} from 'lucide-react';

export const SlideSpatialAnalysis: React.FC = () => {
  return (
    <div className="w-full space-y-4">
      {/* 3-Column Comparative Architecture Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Card 1: Zonificación Acústica */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400">
            <Volume2 className="w-4 h-4" />
            <h3 className="font-bold text-sm text-white">Gradiente Acústico Inteligente</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Para evitar que el ruido interfiera en la concentración, el aula separa los sectores en 3 microclimas sonoros:
          </p>
          <div className="space-y-2 text-xs">
            <div className="bg-emerald-950/40 border border-emerald-800/60 p-2.5 rounded-lg text-emerald-200">
              <div className="font-semibold text-emerald-400 flex items-center justify-between">
                <span>Zona de Calma (≤ 45 dB)</span>
                <span className="text-[10px]">Lectura / Biblioteca</span>
              </div>
              <p className="text-[11px] text-emerald-300/80 mt-1">
                Esquina noroeste. Alfombra y cojines actúan como absorbentes acústicos.
              </p>
            </div>
            <div className="bg-amber-950/40 border border-amber-800/60 p-2.5 rounded-lg text-amber-200">
              <div className="font-semibold text-amber-400 flex items-center justify-between">
                <span>Zona Cognitiva (50-60 dB)</span>
                <span className="text-[10px]">Ciencias / Matemática / Arte</span>
              </div>
              <p className="text-[11px] text-amber-300/80 mt-1">
                Banda central norte y paredes laterales con mesas de trabajo colaborativo.
              </p>
            </div>
            <div className="bg-rose-950/40 border border-rose-800/60 p-2.5 rounded-lg text-rose-200">
              <div className="font-semibold text-rose-400 flex items-center justify-between">
                <span>Zona Dinámica (65-70 dB)</span>
                <span className="text-[10px]">Construcción</span>
              </div>
              <p className="text-[11px] text-rose-300/80 mt-1">
                Esquina noreste con tapete grueso que amortigua caída de piezas de madera.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Circulación & Evacuación */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-2 text-sky-400">
            <Footprints className="w-4 h-4" />
            <h3 className="font-bold text-sm text-white">Flujos Libres de Tránsito</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            El diseño perimetral de los sectores libera el pasillo central, eliminando cuellos de botella:
          </p>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/60">
              <div className="font-semibold text-sky-400">Pasillo Principal: 1.10 m</div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Conecta la puerta de salida directamente con el fondo del aula sin obstáculos.
              </p>
            </li>
            <li className="bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/60">
              <div className="font-semibold text-sky-400">Corredores Inter-Mesas: 0.90 m</div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Espacio suficiente para que el docente asista a los alumnos por ambos costados.
              </p>
            </li>
            <li className="bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/60">
              <div className="font-semibold text-emerald-400">Tiempo de Desalojo: 12 seg</div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Puerta con radio de giro hacia el interior sin bloquear pasos (ancho útil 1.00 m).
              </p>
            </li>
          </ul>
        </div>

        {/* Card 3: Iluminación & Bioclimatismo */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-2 text-yellow-400">
            <Sun className="w-4 h-4" />
            <h3 className="font-bold text-sm text-white">Confort Lumínico y Térmico</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Orientación estratégica de ventanas en la pared norte para asegurar luz diurna uniforme sin deslumbramiento:
          </p>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/60">
              <div className="font-semibold text-yellow-400">Luz Solar Indirecta: 400 lx</div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Favorece el trabajo de motricidad fina en Arte, Ciencias y Matemáticas sin fatiga visual.
              </p>
            </li>
            <li className="bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/60">
              <div className="font-semibold text-teal-400">Ventilación Cruzada</div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Flujo de aire continuo entre ventanas norte y apertura de puerta sur/oeste.
              </p>
            </li>
            <li className="bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/60">
              <div className="font-semibold text-indigo-400">Protección en Tecnología</div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Pared este perpendicular a ventanas para evitar reflejos solares en pantallas.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Normative Matrix Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-teal-400" />
          Ficha Técnica de Cumplimiento Normativo (Infraestructura Escolar)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-semibold text-[11px] uppercase">
                <th className="py-2 px-3">Parámetro</th>
                <th className="py-2 px-3">Valor Aula 6×4m</th>
                <th className="py-2 px-3">Estándar Recomendado</th>
                <th className="py-2 px-3">Estado de Cumplimiento</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              <tr>
                <td className="py-2 px-3 font-medium text-white">Área Neta por Alumno</td>
                <td className="py-2 px-3 font-mono text-teal-400">1.60 m² / niño (15 alumnos)</td>
                <td className="py-2 px-3">1.50 - 2.00 m² (UNESCO / MINEDU)</td>
                <td className="py-2 px-3 text-emerald-400 font-semibold">✓ Óptimo</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-medium text-white">Ancho de Pasillo de Evacuación</td>
                <td className="py-2 px-3 font-mono text-teal-400">1.10 m libres</td>
                <td className="py-2 px-3">Mínimo 0.90 m - 1.00 m</td>
                <td className="py-2 px-3 text-emerald-400 font-semibold">✓ Cumple con creces</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-medium text-white">Altura de Mobiliario Infantil</td>
                <td className="py-2 px-3 font-mono text-teal-400">0.75 m a 0.85 m</td>
                <td className="py-2 px-3">Máx. 0.90 m (alcance infantil)</td>
                <td className="py-2 px-3 text-emerald-400 font-semibold">✓ Ergonómico</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-medium text-white">Área de Ventilación e Iluminación</td>
                <td className="py-2 px-3 font-mono text-teal-400">25% de la superficie de piso</td>
                <td className="py-2 px-3">Mínimo 20% de superficie</td>
                <td className="py-2 px-3 text-emerald-400 font-semibold">✓ Alta Eficiencia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
