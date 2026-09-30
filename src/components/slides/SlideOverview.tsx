import React from 'react';
import { CLASSROOM_SPECS } from '../../data/sectorsData';
import {
  Ruler,
  Users,
  SunMedium,
  Compass,
  Sparkles,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

interface SlideOverviewProps {
  onGoToPlan: () => void;
}

export const SlideOverview: React.FC<SlideOverviewProps> = ({ onGoToPlan }) => {
  return (
    <div className="w-full space-y-4">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-sky-950 border border-slate-700/80 rounded-2xl p-5 sm:p-6 text-white relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Modelo Arquitectónico-Pedagógico</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Distribución Eficiente de Sectores de Aprendizaje en Aula de 6 m × 4 m
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Diseño espacial optimizado para educación inicial y primaria temprana. Articula 9 rincones temáticos de trabajo simultáneo, garantizando flujos de circulación fluidos, ergonomía infantil, iluminación natural bifacial y supervisión visual docente continua.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={onGoToPlan}
              className="inline-flex items-center gap-2 px-4 py-2 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-colors cursor-pointer shadow-md"
            >
              <span>Ver Plano en Planta y Sectores</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Ambient watermark pattern */}
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 4 Metric Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Superficie Total</span>
            <Ruler className="w-4 h-4 text-sky-400" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white">24.0 m²</div>
            <p className="text-[11px] text-slate-400 mt-1">6.00 m de ancho × 4.00 m de largo</p>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Capacidad de Aforo</span>
            <Users className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white">12 - 18</div>
            <p className="text-[11px] text-slate-400 mt-1">1.60 m² a 2.00 m² netos por alumno</p>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Sectores Integrados</span>
            <BookOpen className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white">9 Áreas</div>
            <p className="text-[11px] text-slate-400 mt-1">8 rincones infantiles + 1 puesto docente</p>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Iluminación & Clima</span>
            <SunMedium className="w-4 h-4 text-yellow-400" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white">350 - 500 lx</div>
            <p className="text-[11px] text-slate-400 mt-1">Ventanas continuas norte + ventilación cruzada</p>
          </div>
        </div>
      </div>

      {/* Principles & Technical Compliance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Card 1: Fundamento Pedagógico */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Compass className="w-4 h-4 text-teal-400" />
            Metodología de Trabajo por Sectores
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            El aula organizada por sectores responde a la necesidad biológica y cognitiva infantil de interactuar de forma autónoma con materiales concretos. Cada sector está delimitado espacial y funcionalmente para propiciar:
          </p>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-start gap-2 bg-slate-800/40 p-2 rounded-lg">
              <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
              <span><strong>Juego libre y guiado:</strong> Los estudiantes eligen de forma autónoma el sector según su interés y completan metas de indagación.</span>
            </li>
            <li className="flex items-start gap-2 bg-slate-800/40 p-2 rounded-lg">
              <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
              <span><strong>Desarrollo socioemocional:</strong> Fomenta la negociación de turnos, el compartir recursos y la autorregulación.</span>
            </li>
            <li className="flex items-start gap-2 bg-slate-800/40 p-2 rounded-lg">
              <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
              <span><strong>Observación formativa:</strong> Permite al docente observar desempeños individuales sin interrumpir el ritmo del grupo.</span>
            </li>
          </ul>
        </div>

        {/* Card 2: Criterios Arquitectónicos y de Seguridad */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            Criterios de Seguridad y Confort
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            La distribución perimetral de estanterías y muebles libera la franja central para permitir pasillos de evacuación rectos de 1.10 m:
          </p>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-start gap-2 bg-slate-800/40 p-2 rounded-lg">
              <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
              <span><strong>Línea de visión total (360°):</strong> Desde el escritorio docente se tiene contacto visual ininterrumpido con la puerta y los 8 sectores infantiles.</span>
            </li>
            <li className="flex items-start gap-2 bg-slate-800/40 p-2 rounded-lg">
              <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
              <span><strong>Transición acústica:</strong> El sector de lectura y biblioteca está opuesto diametralmente al rincón de construcción ruidoso.</span>
            </li>
            <li className="flex items-start gap-2 bg-slate-800/40 p-2 rounded-lg">
              <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
              <span><strong>Ergonomía infantil:</strong> Altura de repisas no mayor a 90 cm para garantizar alcance directo y autonomía sin riesgo de volcaduras.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
