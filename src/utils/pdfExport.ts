import jsPDF from 'jspdf';
import { toJpeg } from 'html-to-image';

export interface ExportProgressCallback {
  (current: number, total: number, message: string): void;
}

export async function exportAllSlidesToPdf(
  slideElements: HTMLElement[],
  onProgress?: ExportProgressCallback
): Promise<void> {
  if (!slideElements.length) {
    throw new Error('No slide elements found to export.');
  }

  // Portrait A4: 210mm x 297mm (Vertical)
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pdfWidth = 210;
  const pdfHeight = 297;
  const margin = 8; // 8mm margin for crisp page borders

  for (let i = 0; i < slideElements.length; i++) {
    const el = slideElements[i];
    if (onProgress) {
      onProgress(i + 1, slideElements.length, `Procesando diapositiva vertical ${i + 1} de ${slideElements.length}...`);
    }

    // Capture each slide to high-res image using html-to-image (supports OKLCH & modern CSS)
    const imgData = await toJpeg(el, {
      quality: 0.95,
      backgroundColor: '#020617', // slate-950
      pixelRatio: 1.5,
      skipFonts: true,
      filter: (node) => {
        if (node instanceof HTMLElement && node.classList.contains('no-print')) {
          return false;
        }
        return true;
      },
    });

    if (i > 0) {
      pdf.addPage('a4', 'portrait');
    }

    // Measure image dimensions
    const img = new Image();
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = imgData;
    });

    const imgWidth = img.naturalWidth || img.width || 800;
    const imgHeight = img.naturalHeight || img.height || 1130;

    // Fit cleanly to vertical A4 page preserving aspect ratio
    const maxContentWidth = pdfWidth - margin * 2;
    const maxContentHeight = pdfHeight - margin * 2;
    const imgAspect = imgWidth / imgHeight;

    let renderWidth = maxContentWidth;
    let renderHeight = renderWidth / imgAspect;

    if (renderHeight > maxContentHeight) {
      renderHeight = maxContentHeight;
      renderWidth = renderHeight * imgAspect;
    }

    const xOffset = margin + (maxContentWidth - renderWidth) / 2;
    const yOffset = margin + (maxContentHeight - renderHeight) / 2;

    pdf.addImage(imgData, 'JPEG', xOffset, yOffset, renderWidth, renderHeight, undefined, 'FAST');
  }

  if (onProgress) {
    onProgress(slideElements.length, slideElements.length, 'Descargando archivo PDF...');
  }

  pdf.save('Aula_Modelo_6x4m_Sectores_Aprendizaje.pdf');
}

