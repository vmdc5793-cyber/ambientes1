import React from 'react';
import { SLIDES_LIST } from '../data/sectorsData';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Layers,
  FileSpreadsheet,
} from 'lucide-react';

interface SlideControllerProps {
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
  onSelect: (index: number) => void;
  isAutoplay: boolean;
  onToggleAutoplay: () => void;
}

export const SlideController: React.FC<SlideControllerProps> = ({
  currentIndex,
  onNext,
  onPrev,
  onSelect,
  isAutoplay,
  onToggleAutoplay,
}) => {
  const currentSlide = SLIDES_LIST[currentIndex];

  return (
    <div className="no-print w-full bg-slate-900/95 backdrop-blur border border-slate-800 rounded-xl px-3 py-2 flex flex-wrap items-center justify-between gap-3 shadow-lg select-none">
      {/* Left: Current Slide Info */}
      <div className="flex items-center gap-3">
        <div className="bg-slate-800 text-teal-400 font-mono text-xs px-2.5 py-1 rounded-md font-bold border border-slate-700">
          {currentIndex + 1} / {SLIDES_LIST.length}
        </div>
        <div className="hidden sm:block">
          <div className="text-xs font-bold text-white tracking-tight flex items-center gap-2">
            <span>{currentSlide.title}</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">
              ({currentSlide.category})
            </span>
          </div>
        </div>
      </div>

      {/* Center: Slide dots / quick jumpers */}
      <div className="flex items-center gap-1.5">
        {SLIDES_LIST.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => onSelect(idx)}
            title={slide.title}
            className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
              idx === currentIndex
                ? 'w-6 bg-teal-400'
                : 'w-2 bg-slate-700 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>

      {/* Right: Controls (Prev, Play/Pause, Next) */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={onToggleAutoplay}
          title={isAutoplay ? 'Pausar reproducción automática' : 'Reproducir presentación continua'}
          className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-colors cursor-pointer ${
            isAutoplay
              ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
              : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
          }`}
        >
          {isAutoplay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          <span className="text-[11px] hidden md:inline">{isAutoplay ? 'Pausar' : 'Auto'}</span>
        </button>

        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          title="Diapositiva anterior (Flecha Izquierda)"
          className={`p-1.5 rounded-lg border text-xs flex items-center justify-center transition-colors cursor-pointer ${
            currentIndex === 0
              ? 'opacity-40 cursor-not-allowed bg-slate-800/40 border-slate-800 text-slate-500'
              : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={onNext}
          disabled={currentIndex === SLIDES_LIST.length - 1}
          title="Diapositiva siguiente (Flecha Derecha / Espacio)"
          className={`px-2.5 py-1.5 rounded-lg border text-xs flex items-center gap-1 font-semibold transition-colors cursor-pointer ${
            currentIndex === SLIDES_LIST.length - 1
              ? 'opacity-40 cursor-not-allowed bg-slate-800/40 border-slate-800 text-slate-500'
              : 'bg-teal-500 border-teal-400 text-slate-950 hover:bg-teal-400 shadow-sm'
          }`}
        >
          <span className="text-[11px]">Siguiente</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
