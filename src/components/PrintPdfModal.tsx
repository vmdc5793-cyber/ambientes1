import React, { useState } from 'react';
import {
  X,
  Printer,
  Download,
  FileText,
  Loader2,
  CheckCircle2,
  Layers,
  Sparkles,
} from 'lucide-react';
import { SLIDES_LIST } from '../data/sectorsData';

interface PrintPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadAllPdf: () => Promise<void>;
  onPrintCurrentSlide: () => void;
  onPrintAllBrowser: () => void;
  isGeneratingPdf: boolean;
  exportProgress: { current: number; total: number; message: string } | null;
}

export const PrintPdfModal: React.FC<PrintPdfModalProps> = ({
  isOpen,
  onClose,
  onDownloadAllPdf,
  onPrintCurrentSlide,
  onPrintAllBrowser,
  isGeneratingPdf,
  exportProgress,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={isGeneratingPdf ? undefined : onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-teal-900/60 to-slate-900 border-b border-slate-800 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold tracking-tight">Exportar e Imprimir Diapositiva</h2>
              <p className="text-xs text-slate-300">Descarga directa en PDF o imprime las 5 diapositivas</p>
            </div>
          </div>

          {!isGeneratingPdf && (
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 text-xs text-slate-300">
          {/* Progress Banner if generating */}
          {isGeneratingPdf && exportProgress && (
            <div className="bg-teal-950/60 border border-teal-800 p-4 rounded-xl space-y-2 text-center animate-pulse">
              <div className="flex items-center justify-center gap-2 text-teal-300 font-bold text-sm">
                <Loader2 className="w-4 h-4 animate-spin text-teal-400" />
                <span>Generando Documento PDF Completo</span>
              </div>
              <p className="text-slate-300 text-xs">{exportProgress.message}</p>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden mt-2">
                <div
                  className="bg-teal-400 h-full transition-all duration-300"
                  style={{
                    width: `${Math.round((exportProgress.current / exportProgress.total) * 100)}%`,
                  }}
                />
              </div>
              <span className="text-[10px] font-mono text-teal-300/80">
                {exportProgress.current} de {exportProgress.total} diapositivas procesadas
              </span>
            </div>
          )}

          {/* Option 1: Direct All Slides PDF Download (Primary recommended) */}
          <button
            onClick={onDownloadAllPdf}
            disabled={isGeneratingPdf}
            className={`w-full p-4 rounded-xl border text-left transition-all flex items-start gap-3.5 cursor-pointer group ${
              isGeneratingPdf
                ? 'opacity-50 pointer-events-none border-slate-800 bg-slate-900'
                : 'bg-teal-500/10 hover:bg-teal-500/20 border-teal-500/40 hover:border-teal-400 shadow-sm'
            }`}
          >
            <div className="w-9 h-9 rounded-lg bg-teal-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-105 transition-transform">
              <Download className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-teal-300 text-sm">
                  Descargar Todo en Archivo PDF (5 Páginas)
                </span>
                <span className="text-[10px] uppercase font-bold bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded border border-teal-500/30">
                  Recomendado
                </span>
              </div>
              <p className="text-slate-300 mt-1 leading-relaxed">
                Genera y descarga un único archivo PDF vertical (formato A4 Portrait) de alta calidad con el plano en planta (6×4m), los 9 sectores de aprendizaje, fundamentos pedagógicos, análisis espacial y la guía docente.
              </p>
            </div>
          </button>

          {/* Option 2: Print Dialog for All 5 Slides */}
          <button
            onClick={onPrintAllBrowser}
            disabled={isGeneratingPdf}
            className="w-full p-3.5 rounded-xl border border-slate-700/80 bg-slate-800/60 hover:bg-slate-800 text-left transition-all flex items-start gap-3.5 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-700 text-slate-200 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-slate-600 transition-colors">
              <Printer className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <span className="font-bold text-white text-sm">
                Imprimir Documento Completo (Navegador)
              </span>
              <p className="text-slate-400 mt-1 leading-relaxed">
                Abre el cuadro de diálogo de impresión del navegador formateado para imprimir las 5 diapositivas en hojas separadas o guardar mediante "Guardar como PDF".
              </p>
            </div>
          </button>

          {/* Option 3: Print Current Slide Only */}
          <button
            onClick={onPrintCurrentSlide}
            disabled={isGeneratingPdf}
            className="w-full p-3 rounded-xl border border-slate-800 bg-slate-800/30 hover:bg-slate-800/60 text-left transition-all flex items-center justify-between gap-3 cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <Layers className="w-4 h-4 text-slate-400" />
              <span className="font-semibold text-slate-300 text-xs">
                Imprimir únicamente la diapositiva actual en pantalla
              </span>
            </div>
            <span className="text-[11px] text-slate-400 underline font-medium">Imprimir</span>
          </button>
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span>Formato A4 Vertical (Portrait) / 300 DPI</span>
          <button
            onClick={onClose}
            disabled={isGeneratingPdf}
            className="px-3 py-1 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
