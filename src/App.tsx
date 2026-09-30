import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Header } from './components/Header';
import { SlideController } from './components/SlideController';
import { SlideMaster } from './components/slides/SlideMaster';
import { SlideOverview } from './components/slides/SlideOverview';
import { SlideSectorDeepDive } from './components/slides/SlideSectorDeepDive';
import { SlideSpatialAnalysis } from './components/slides/SlideSpatialAnalysis';
import { SlideImplementationGuide } from './components/slides/SlideImplementationGuide';
import { PrintPdfModal } from './components/PrintPdfModal';
import { PrintableDeck } from './components/PrintableDeck';
import { exportAllSlidesToPdf } from './utils/pdfExport';
import { SLIDES_LIST } from './data/sectorsData';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [exportProgress, setExportProgress] = useState<{
    current: number;
    total: number;
    message: string;
  } | null>(null);

  // Hidden container ref for off-screen rendering of all slides during PDF export
  const exportContainerRef = useRef<HTMLDivElement>(null);

  // Next / Previous navigation handlers
  const handleNextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < SLIDES_LIST.length - 1 ? prev + 1 : prev));
  }, []);

  const handlePrevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  // Keyboard navigation listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        handleNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        handleToggleFullscreen();
      } else if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        setIsPrintModalOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextSlide, handlePrevSlide]);

  // Autoplay timer
  useEffect(() => {
    if (!isAutoplay) return;

    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => {
        if (prev >= SLIDES_LIST.length - 1) {
          setIsAutoplay(false);
          return prev;
        }
        return prev + 1;
      });
    }, 8000);

    return () => clearInterval(timer);
  }, [isAutoplay]);

  // Fullscreen toggle handler
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Open modal when user clicks "Imprimir / PDF"
  const handleOpenPrintModal = () => {
    setIsPrintModalOpen(true);
  };

  // 1. Download all slides as direct PDF
  const handleDownloadAllPdf = async () => {
    if (!exportContainerRef.current) return;
    try {
      setIsGeneratingPdf(true);
      setExportProgress({ current: 0, total: 5, message: 'Preparando diapositivas en alta resolución...' });

      // Grab elements from hidden export container
      const slideElements: HTMLElement[] = [];
      for (let i = 0; i < 5; i++) {
        const el = exportContainerRef.current.querySelector(`#export-slide-${i}`) as HTMLElement;
        if (el) slideElements.push(el);
      }

      await exportAllSlidesToPdf(slideElements, (current, total, message) => {
        setExportProgress({ current, total, message });
      });

      setTimeout(() => {
        setIsGeneratingPdf(false);
        setExportProgress(null);
        setIsPrintModalOpen(false);
      }, 500);
    } catch (err) {
      console.error('Error al exportar PDF:', err);
      alert('Hubo un inconveniente al generar el PDF. Puedes usar la opción de Imprimir del navegador.');
      setIsGeneratingPdf(false);
      setExportProgress(null);
    }
  };

  // 2. Print all slides via browser print dialog
  const handlePrintAllBrowser = () => {
    setIsPrintModalOpen(false);
    setTimeout(() => {
      window.print();
    }, 200);
  };

  // 3. Print current slide only
  const handlePrintCurrentSlide = () => {
    setIsPrintModalOpen(false);
    setTimeout(() => {
      window.print();
    }, 200);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Bar Header */}
      <Header
        currentSlideIndex={currentSlideIndex}
        totalSlides={SLIDES_LIST.length}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        onPrint={handleOpenPrintModal}
        onSelectSlide={setCurrentSlideIndex}
      />

      {/* Main Slide Presentation Stage (Screen View) */}
      <main className="screen-only flex-1 flex flex-col justify-between max-w-7xl w-full mx-auto p-3 sm:p-5 gap-3">
        {/* Slide Content Viewport */}
        <div className="flex-1 w-full transition-opacity duration-200">
          {currentSlideIndex === 0 && <SlideMaster />}
          {currentSlideIndex === 1 && (
            <SlideOverview onGoToPlan={() => setCurrentSlideIndex(0)} />
          )}
          {currentSlideIndex === 2 && <SlideSectorDeepDive />}
          {currentSlideIndex === 3 && <SlideSpatialAnalysis />}
          {currentSlideIndex === 4 && <SlideImplementationGuide />}
        </div>

        {/* Floating Slide Controller */}
        <SlideController
          currentIndex={currentSlideIndex}
          onNext={handleNextSlide}
          onPrev={handlePrevSlide}
          onSelect={setCurrentSlideIndex}
          isAutoplay={isAutoplay}
          onToggleAutoplay={() => setIsAutoplay((prev) => !prev)}
        />
      </main>

      {/* Hidden / Print Only Deck for Browser Printing */}
      <div className="print-only">
        <PrintableDeck />
      </div>

      {/* Dedicated Container for html-to-image to capture all 5 slides in vertical high fidelity */}
      <div
        ref={exportContainerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '920px',
          zIndex: -100,
          pointerEvents: 'none',
        }}
        className="bg-slate-950 text-white"
        aria-hidden="true"
      >
        <PrintableDeck />
      </div>

      {/* Interactive Print & PDF Modal */}
      <PrintPdfModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        onDownloadAllPdf={handleDownloadAllPdf}
        onPrintCurrentSlide={handlePrintCurrentSlide}
        onPrintAllBrowser={handlePrintAllBrowser}
        isGeneratingPdf={isGeneratingPdf}
        exportProgress={exportProgress}
      />
    </div>
  );
}
