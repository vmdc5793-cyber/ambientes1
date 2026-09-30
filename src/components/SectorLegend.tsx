import React from 'react';
import { SectorId, SectorItem } from '../types';
import { SECTORS } from '../data/sectorsData';
import {
  BookOpen,
  Palette,
  FlaskConical,
  Calculator,
  Blocks,
  Monitor,
  Globe,
  Library,
  UserCheck,
  ChevronRight,
} from 'lucide-react';

interface SectorLegendProps {
  selectedSectorId: SectorId | null;
  onSelectSector: (sector: SectorItem) => void;
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

export const SectorLegend: React.FC<SectorLegendProps> = ({
  selectedSectorId,
  onSelectSector,
}) => {
  return (
    <div className="bg-sky-50 dark:bg-slate-900 border border-sky-100 dark:border-slate-800 rounded-xl p-3.5 sm:p-4 flex flex-col h-full shadow-sm">
      <div className="border-b border-sky-200/60 dark:border-slate-800 pb-2.5 mb-2.5 flex items-center justify-between">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-sky-300 tracking-tight">
          Sectores de aprendizaje
        </h2>
        <span className="text-[11px] font-semibold text-sky-800 dark:text-sky-400 bg-sky-100 dark:bg-sky-950/60 px-2 py-0.5 rounded">
          9 Áreas
        </span>
      </div>

      <div className="space-y-1.5 overflow-y-auto pr-1 flex-1 max-h-[640px]">
        {SECTORS.map((sector) => {
          const isSelected = selectedSectorId === sector.id;

          return (
            <button
              key={sector.id}
              onClick={() => onSelectSector(sector)}
              className={`w-full text-left p-2 rounded-lg transition-all duration-150 flex items-start gap-3 cursor-pointer group border ${
                isSelected
                  ? 'bg-white dark:bg-slate-800 shadow-md border-sky-400 dark:border-sky-500 ring-1 ring-sky-400/30'
                  : 'hover:bg-white/80 dark:hover:bg-slate-800/60 border-transparent hover:border-slate-200 dark:hover:border-slate-700'
              }`}
            >
              {/* Icon Container with specific color */}
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-xs text-white"
                style={{ backgroundColor: sector.color.iconColor }}
              >
                {getIcon(sector.iconName, 'w-4 h-4')}
              </div>

              {/* Text content matching exact annex */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3
                    className="text-xs sm:text-[13px] font-bold tracking-tight truncate"
                    style={{ color: sector.color.iconColor }}
                  >
                    {sector.name}
                  </h3>
                  <ChevronRight
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-150 shrink-0 ${
                      isSelected ? 'translate-x-0.5 text-sky-500' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug line-clamp-2 mt-0.5">
                  {sector.shortDesc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="pt-2 mt-2 border-t border-sky-200/50 dark:border-slate-800/80 text-[10px] text-slate-700 dark:text-slate-400 flex items-center justify-between">
        <span>Currículo Nacional · Educación Básica</span>
        <span className="font-mono">R.M. N° 281-2016</span>
      </div>
    </div>
  );
};
