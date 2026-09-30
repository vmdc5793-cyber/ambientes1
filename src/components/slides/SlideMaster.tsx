import React, { useState } from 'react';
import { SectorId, SectorItem } from '../../types';
import { PlanCanvas } from '../PlanCanvas';
import { SectorLegend } from '../SectorLegend';
import { SectorDetailsStrip } from '../SectorDetailsStrip';
import { SectorModal } from '../SectorModal';

export const SlideMaster: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<SectorItem | null>(null);
  const [modalSector, setModalSector] = useState<SectorItem | null>(null);
  const [activeLayer, setActiveLayer] = useState<'standard' | 'acoustic' | 'circulation' | 'dimensions'>('standard');

  const handleSelectSector = (sector: SectorItem) => {
    setSelectedSector(sector);
    setModalSector(sector);
  };

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Main Grid: Left Plan (approx 68%) + Right Legend (approx 32%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
        {/* Left Column: Plan Canvas */}
        <div className="lg:col-span-8 flex flex-col">
          <PlanCanvas
            selectedSectorId={selectedSector?.id || null}
            onSelectSector={handleSelectSector}
            activeLayer={activeLayer}
            onChangeLayer={setActiveLayer}
          />
        </div>

        {/* Right Column: Sectores de Aprendizaje Legend */}
        <div className="lg:col-span-4 flex flex-col">
          <SectorLegend
            selectedSectorId={selectedSector?.id || null}
            onSelectSector={handleSelectSector}
          />
        </div>
      </div>

      {/* Bottom Row: Detalles de los sectores Strip */}
      <div className="w-full">
        <SectorDetailsStrip
          selectedSectorId={selectedSector?.id || null}
          onSelectSector={handleSelectSector}
        />
      </div>

      {/* Deep-Dive Modal when a sector is clicked */}
      <SectorModal
        sector={modalSector}
        onClose={() => setModalSector(null)}
      />
    </div>
  );
};
