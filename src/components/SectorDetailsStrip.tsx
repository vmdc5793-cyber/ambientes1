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
  ExternalLink,
} from 'lucide-react';

interface SectorDetailsStripProps {
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

export const SectorDetailsStrip: React.FC<SectorDetailsStripProps> = ({
  selectedSectorId,
  onSelectSector,
}) => {
  return (
    <div className="w-full bg-slate-900/90 border border-slate-800 rounded-xl p-3 shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-2 px-1">
        <div className="flex items-center gap-2">
          <span className="bg-sky-500/10 border border-sky-500/30 text-sky-400 px-2.5 py-0.5 rounded text-xs font-bold tracking-wide">
            Detalles de los sectores
          </span>
          <span className="text-[11px] text-slate-400 hidden sm:inline">
            Evidencia visual e implementación real del mobiliario y recursos
          </span>
        </div>
        <span className="text-[11px] text-slate-400">9 áreas equipadas</span>
      </div>

      {/* 9 Photographic Cards Grid / Carousel */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
        {SECTORS.map((sector) => {
          const isSelected = selectedSectorId === sector.id;

          return (
            <button
              key={sector.id}
              onClick={() => onSelectSector(sector)}
              className={`group flex flex-col rounded-lg overflow-hidden border transition-all duration-200 text-left bg-slate-800 cursor-pointer ${
                isSelected
                  ? 'border-sky-400 ring-2 ring-sky-400/40 shadow-lg scale-[1.02]'
                  : 'border-slate-700 hover:border-slate-500 hover:shadow-md'
              }`}
            >
              {/* Image thumbnail with fallback styling */}
              <div className="relative h-24 sm:h-26 w-full bg-slate-800 overflow-hidden">
                <img
                  src={sector.image}
                  alt={`Sector ${sector.name}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized SVG background if image fails
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
                {/* Fallback graphic container if image not rendered */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Inspect badge on hover */}
                <div className="absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/80 p-1 rounded text-white shadow">
                  <ExternalLink className="w-3 h-3 text-sky-300" />
                </div>
              </div>

              {/* Bottom Label Bar (matches annex badge style) */}
              <div
                className="py-1.5 px-2 flex items-center justify-center gap-1.5 text-white font-bold text-[11px] leading-tight text-center"
                style={{ backgroundColor: sector.color.iconColor }}
              >
                {getIcon(sector.iconName, 'w-3 h-3 shrink-0')}
                <span className="truncate">{sector.name}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
