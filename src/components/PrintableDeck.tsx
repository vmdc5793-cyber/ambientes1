import React from 'react';
import { SlideMaster } from './slides/SlideMaster';
import { SlideOverview } from './slides/SlideOverview';
import { SlideSectorDeepDive } from './slides/SlideSectorDeepDive';
import { SlideSpatialAnalysis } from './slides/SlideSpatialAnalysis';
import { SlideImplementationGuide } from './slides/SlideImplementationGuide';

interface PrintableDeckProps {
  currentSlideOnly?: boolean;
  currentSlideIndex?: number;
}

export const PrintableDeck: React.FC<PrintableDeckProps> = ({
  currentSlideOnly = false,
  currentSlideIndex = 0,
}) => {
  return (
    <div id="printable-deck" className="w-full text-slate-900 bg-white">
      {/* Slide 1: Plano Principal (Vista en planta 6x4m) */}
      {(!currentSlideOnly || currentSlideIndex === 0) && (
        <section
          id="export-slide-0"
          className="print-page w-full p-6 mb-8 border-b-2 border-slate-300 bg-slate-950 text-white rounded-xl shadow-sm"
          style={{ minHeight: '620px' }}
        >
          <div className="mb-3 flex items-center justify-between border-b border-slate-800 pb-2">
            <div>
              <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wider font-mono">
                Diapositiva 01 / 05 · Plano Principal
              </span>
              <h1 className="text-xl font-extrabold text-white">
                Vista en Planta (6 m × 4 m) — Sectores de Aprendizaje
              </h1>
            </div>
            <div className="text-right text-[11px] text-slate-400">
              <div className="font-semibold text-teal-300">Creador: Ing. Victor Manuel Dominguez Castillo</div>
              <div>Superficie: 24.0 m² · Aforo: 12-18 alumnos</div>
            </div>
          </div>
          <SlideMaster />
        </section>
      )}

      {/* Slide 2: Fundamentación Pedagógica */}
      {(!currentSlideOnly || currentSlideIndex === 1) && (
        <section
          id="export-slide-1"
          className="print-page w-full p-6 mb-8 border-b-2 border-slate-300 bg-slate-950 text-white rounded-xl shadow-sm"
          style={{ minHeight: '620px' }}
        >
          <div className="mb-3 flex items-center justify-between border-b border-slate-800 pb-2">
            <div>
              <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wider font-mono">
                Diapositiva 02 / 05 · Fundamentos
              </span>
              <h1 className="text-xl font-extrabold text-white">
                Fundamentación Pedagógica y Ficha Técnica
              </h1>
            </div>
            <div className="text-right text-[11px] text-slate-400">
              <span>Modelo de Aprendizaje Activo</span>
            </div>
          </div>
          <SlideOverview onGoToPlan={() => {}} />
        </section>
      )}

      {/* Slide 3: Catálogo Integral de los 9 Sectores */}
      {(!currentSlideOnly || currentSlideIndex === 2) && (
        <section
          id="export-slide-2"
          className="print-page w-full p-6 mb-8 border-b-2 border-slate-300 bg-slate-950 text-white rounded-xl shadow-sm"
          style={{ minHeight: '620px' }}
        >
          <div className="mb-3 flex items-center justify-between border-b border-slate-800 pb-2">
            <div>
              <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wider font-mono">
                Diapositiva 03 / 05 · Catálogo
              </span>
              <h1 className="text-xl font-extrabold text-white">
                Catálogo Integral de los 9 Sectores de Aprendizaje
              </h1>
            </div>
            <div className="text-right text-[11px] text-slate-400">
              <span>Competencias & Mobiliario Detallado</span>
            </div>
          </div>
          <SlideSectorDeepDive />
        </section>
      )}

      {/* Slide 4: Zonificación Acústica y Circulación */}
      {(!currentSlideOnly || currentSlideIndex === 3) && (
        <section
          id="export-slide-3"
          className="print-page w-full p-6 mb-8 border-b-2 border-slate-300 bg-slate-950 text-white rounded-xl shadow-sm"
          style={{ minHeight: '620px' }}
        >
          <div className="mb-3 flex items-center justify-between border-b border-slate-800 pb-2">
            <div>
              <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wider font-mono">
                Diapositiva 04 / 05 · Arquitectura y Seguridad
              </span>
              <h1 className="text-xl font-extrabold text-white">
                Zonificación Acústica, Flujos y Normativa de Evacuación
              </h1>
            </div>
            <div className="text-right text-[11px] text-slate-400">
              <span>Evacuación 12s · Pasillos 1.10 m</span>
            </div>
          </div>
          <SlideSpatialAnalysis />
        </section>
      )}

      {/* Slide 5: Guía Docente y Rutina Diaria */}
      {(!currentSlideOnly || currentSlideIndex === 4) && (
        <section
          id="export-slide-4"
          className="print-page w-full p-6 mb-8 border-b-2 border-slate-300 bg-slate-950 text-white rounded-xl shadow-sm"
          style={{ minHeight: '620px' }}
        >
          <div className="mb-3 flex items-center justify-between border-b border-slate-800 pb-2">
            <div>
              <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wider font-mono">
                Diapositiva 05 / 05 · Gestión Pedagógica
              </span>
              <h1 className="text-xl font-extrabold text-white">
                Guía de Operación Diaria y Checklist de Habilitación
              </h1>
            </div>
            <div className="text-right text-[11px] text-slate-400">
              <span>4 Momentos · 60 min diarios</span>
            </div>
          </div>
          <SlideImplementationGuide />
        </section>
      )}
    </div>
  );
};
