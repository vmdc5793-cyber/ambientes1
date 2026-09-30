import React from 'react';
import { SectorItem } from '../types';
import {
  X,
  CheckCircle2,
  Package,
  Target,
  Sparkles,
  Volume2,
  MapPin,
  Shield,
  BookOpen,
  Palette,
  FlaskConical,
  Calculator,
  Blocks,
  Monitor,
  Globe,
  Library,
  UserCheck,
} from 'lucide-react';

interface SectorModalProps {
  sector: SectorItem | null;
  onClose: () => void;
}

const getIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case 'BookOpen':
      return <BookOpen className={className} />;
    case 'Palette':
      return <Palette className={className} />;
    case 'FlaskConical':
      return <FlaskConical className={className} />;
    case 'Calculator':
      return <Calculator className={className} />;
    case 'Blocks':
      return <Blocks className={className} />;
    case 'Monitor':
      return <Monitor className={className} />;
    case 'Globe':
      return <Globe className={className} />;
    case 'Library':
      return <Library className={className} />;
    case 'UserCheck':
      return <UserCheck className={className} />;
    default:
      return <BookOpen className={className} />;
  }
};

export const SectorModal: React.FC<SectorModalProps> = ({ sector, onClose }) => {
  if (!sector) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          className="p-4 sm:p-5 flex items-center justify-between text-white"
          style={{
            background: `linear-gradient(135deg, ${sector.color.iconColor}, #0f172a)`,
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-white shadow-inner">
              {getIcon(sector.iconName, 'w-6 h-6')}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold tracking-tight">{sector.name}</h2>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/20 text-white">
                  {sector.noiseLevel === 'silencioso'
                    ? 'Zona Silenciosa'
                    : sector.noiseLevel === 'moderado'
                    ? 'Zona Moderada'
                    : 'Zona Dinámica'}
                </span>
              </div>
              <p className="text-xs text-white/80 mt-0.5">{sector.shortDesc}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-slate-200 text-xs sm:text-sm">
          {/* Photo & Quick Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-slate-700 h-44 bg-slate-950 relative">
              <img
                src={sector.image}
                alt={sector.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur px-2 py-1 rounded text-[10px] text-slate-300 font-mono">
                Implementación Física en Aula 6×4m
              </div>
            </div>

            <div className="space-y-2.5 bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/60">
              <h3 className="font-semibold text-slate-100 flex items-center gap-1.5 text-xs text-sky-400">
                <Target className="w-3.5 h-3.5" />
                Propósito Pedagógico
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                {sector.pedagogicalObjective}
              </p>

              <div className="pt-2 border-t border-slate-700/60 flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-[11px] leading-snug">{sector.ergonomics}</span>
              </div>
            </div>
          </div>

          {/* Competencias Desarrolladas */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              Competencias del Currículo
            </h4>
            <div className="space-y-1.5">
              {sector.competencies.map((comp, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 bg-slate-800/40 p-2 rounded-lg border border-slate-800"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inventario de Materiales & Mobiliario */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Package className="w-3.5 h-3.5 text-sky-400" />
              Materiales y Mobiliario Sugerido
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sector.materials.map((mat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-slate-300 bg-slate-800/30 p-2 rounded-md border border-slate-800/60"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0"></span>
                  <span>{mat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Mobiliario con bordes redondeados y pinturas atóxicas</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Cerrar Ficha
          </button>
        </div>
      </div>
    </div>
  );
};
