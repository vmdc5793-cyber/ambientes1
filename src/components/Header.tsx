import React from 'react';
import { Maximize2, Minimize2, Printer, Presentation, Layers } from 'lucide-react';

interface HeaderProps {
  currentSlideIndex: number;
  totalSlides: number;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onPrint: () => void;
  onSelectSlide: (index: number) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSlideIndex,
  isFullscreen,
  onToggleFullscreen,
  onPrint,
  onSelectSlide,
}) => {
  return (
    <header className="no-print h-14 bg-slate-900 border-b border-slate-800 px-4 md:px-6 flex items-center justify-between z-40 select-none">
      {/* Zone 1: Single text wordmark & Creator Tag */}
      <div className="flex items-center gap-3">
        <span className="text-base font-bold tracking-tight text-white flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
          <span className="hidden sm:inline">Aula Modelo 6×4m</span>
          <span className="sm:hidden">6×4m</span>
        </span>

        {/* Etiqueta del Creador */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-950/50 border border-teal-500/40 text-xs shadow-xs">
          <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wider bg-teal-500/20 px-1.5 py-0.5 rounded border border-teal-500/30">
            Creador
          </span>
          <span className="font-semibold text-slate-100 text-xs">
            Ing. Victor Manuel Dominguez Castillo
          </span>
        </div>
      </div>

      {/* Zone 2: Navigation Links / Slides */}
      <nav className="hidden md:flex items-center gap-5 text-xs font-medium text-slate-300">
        <button
          onClick={() => onSelectSlide(0)}
          className={`transition-colors hover:text-white pb-0.5 cursor-pointer ${
            currentSlideIndex === 0 ? 'text-teal-400 border-b-2 border-teal-400 font-semibold' : ''
          }`}
        >
          Vista en Planta
        </button>
        <button
          onClick={() => onSelectSlide(1)}
          className={`transition-colors hover:text-white pb-0.5 cursor-pointer ${
            currentSlideIndex === 1 ? 'text-teal-400 border-b-2 border-teal-400 font-semibold' : ''
          }`}
        >
          Fundamentos
        </button>
        <button
          onClick={() => onSelectSlide(2)}
          className={`transition-colors hover:text-white pb-0.5 cursor-pointer ${
            currentSlideIndex === 2 ? 'text-teal-400 border-b-2 border-teal-400 font-semibold' : ''
          }`}
        >
          9 Sectores
        </button>
        <button
          onClick={() => onSelectSlide(3)}
          className={`transition-colors hover:text-white pb-0.5 cursor-pointer ${
            currentSlideIndex === 3 ? 'text-teal-400 border-b-2 border-teal-400 font-semibold' : ''
          }`}
        >
          Zonificación
        </button>
        <button
          onClick={() => onSelectSlide(4)}
          className={`transition-colors hover:text-white pb-0.5 cursor-pointer ${
            currentSlideIndex === 4 ? 'text-teal-400 border-b-2 border-teal-400 font-semibold' : ''
          }`}
        >
          Guía Docente
        </button>
      </nav>

      {/* Zone 3: Primary Actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={onPrint}
          title="Imprimir diapositiva o guardar en PDF"
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700 cursor-pointer"
        >
          <Printer className="w-3.5 h-3.5 text-slate-300" />
          <span className="hidden sm:inline">Imprimir / PDF</span>
        </button>
        <button
          onClick={onToggleFullscreen}
          title={isFullscreen ? 'Salir de pantalla completa' : 'Modo Presentación pantalla completa'}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors cursor-pointer shadow-sm"
        >
          {isFullscreen ? (
            <>
              <Minimize2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Salir</span>
            </>
          ) : (
            <>
              <Presentation className="w-3.5 h-3.5" />
              <span>Presentar</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};
