import React, { useState } from 'react';
import { SectorItem } from '../../types';
import { SECTORS } from '../../data/sectorsData';
import { SectorModal } from '../SectorModal';
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
  Search,
  Filter,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

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

export const SlideSectorDeepDive: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'silencioso' | 'moderado' | 'dinamico'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalSector, setActiveModalSector] = useState<SectorItem | null>(null);

  const filteredSectors = SECTORS.filter((sector) => {
    const matchesFilter = selectedFilter === 'all' || sector.noiseLevel === selectedFilter;
    const matchesSearch =
      sector.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sector.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sector.materials.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="w-full space-y-4">
      {/* Filter and Search Bar */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar por material, nombre o competencia..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-500"
          />
        </div>

        {/* Filter Segmented Control */}
        <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg w-full sm:w-auto overflow-x-auto text-xs">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer whitespace-nowrap ${
              selectedFilter === 'all'
                ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Todos (9)
          </button>
          <button
            onClick={() => setSelectedFilter('silencioso')}
            className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer whitespace-nowrap ${
              selectedFilter === 'silencioso'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Silenciosos (3)
          </button>
          <button
            onClick={() => setSelectedFilter('moderado')}
            className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer whitespace-nowrap ${
              selectedFilter === 'moderado'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Moderados (5)
          </button>
          <button
            onClick={() => setSelectedFilter('dinamico')}
            className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer whitespace-nowrap ${
              selectedFilter === 'dinamico'
                ? 'bg-rose-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Dinámico (1)
          </button>
        </div>
      </div>

      {/* Grid of 9 Sectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredSectors.map((sector) => (
          <div
            key={sector.id}
            className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl overflow-hidden flex flex-col justify-between shadow-md transition-all group"
          >
            <div>
              {/* Photo Banner with Tag */}
              <div className="relative h-36 w-full bg-slate-950 overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-white text-xs font-bold shadow"
                  style={{ backgroundColor: sector.color.iconColor }}
                >
                  {getIcon(sector.iconName, 'w-3.5 h-3.5')}
                  <span>{sector.name}</span>
                </div>

                <div className="absolute bottom-2 left-2.5 right-2.5 text-[11px] text-slate-300 line-clamp-1">
                  {sector.shortDesc}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-3.5 space-y-2.5 text-xs text-slate-300">
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Objetivo Formativo
                  </h4>
                  <p className="text-slate-300 line-clamp-2 leading-relaxed">
                    {sector.pedagogicalObjective}
                  </p>
                </div>

                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Materiales Clave
                  </h4>
                  <ul className="space-y-1">
                    {sector.materials.slice(0, 3).map((mat, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-slate-400 text-[11px] truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0"></span>
                        <span className="truncate">{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="p-3 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[10px] text-slate-500 capitalize">
                Nivel: {sector.noiseLevel}
              </span>
              <button
                onClick={() => setActiveModalSector(sector)}
                className="flex items-center gap-1 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors cursor-pointer"
              >
                <span>Ficha Pedagógica</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Sector Modal */}
      <SectorModal
        sector={activeModalSector}
        onClose={() => setActiveModalSector(null)}
      />
    </div>
  );
};
