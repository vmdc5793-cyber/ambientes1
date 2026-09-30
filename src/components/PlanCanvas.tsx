import React, { useState } from 'react';
import { SectorId, SectorItem } from '../types';
import { SECTORS, CLASSROOM_SPECS } from '../data/sectorsData';
import { Eye, Info, Volume2, ShieldCheck, Ruler } from 'lucide-react';

interface PlanCanvasProps {
  selectedSectorId: SectorId | null;
  onSelectSector: (sector: SectorItem) => void;
  activeLayer: 'standard' | 'acoustic' | 'circulation' | 'dimensions';
  onChangeLayer: (layer: 'standard' | 'acoustic' | 'circulation' | 'dimensions') => void;
}

export const PlanCanvas: React.FC<PlanCanvasProps> = ({
  selectedSectorId,
  onSelectSector,
  activeLayer,
  onChangeLayer,
}) => {
  const [hoveredSectorId, setHoveredSectorId] = useState<SectorId | null>(null);

  const getSectorById = (id: SectorId) => SECTORS.find((s) => s.id === id)!;

  return (
    <div className="flex flex-col h-full bg-slate-950/80 rounded-xl border border-slate-800 p-2 sm:p-3 shadow-xl">
      {/* Plan Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2 px-1">
        <div className="flex items-center gap-2">
          <div className="bg-sky-500/10 border border-sky-500/30 text-sky-400 px-3 py-1 rounded-md text-xs sm:text-sm font-bold tracking-wide">
            Vista en planta (6 m × 4 m)
          </div>
          <span className="text-[11px] text-slate-400 hidden lg:inline">
            Superficie: 24 m² · Capacidad: 12-18 puestos · Circulación libre &gt; 90 cm
          </span>
        </div>

        {/* Layer Switches */}
        <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-lg text-xs">
          <button
            onClick={() => onChangeLayer('standard')}
            title="Vista idéntica al anexo"
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
              activeLayer === 'standard'
                ? 'bg-teal-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Plano Real</span>
          </button>
          <button
            onClick={() => onChangeLayer('acoustic')}
            title="Mapa de niveles sonoros por sectores"
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
              activeLayer === 'acoustic'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Acústica</span>
          </button>
          <button
            onClick={() => onChangeLayer('circulation')}
            title="Pasillos y ruta de evacuación hacia puerta"
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
              activeLayer === 'circulation'
                ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Circulación</span>
          </button>
          <button
            onClick={() => onChangeLayer('dimensions')}
            title="Cotas y medidas técnicas"
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
              activeLayer === 'dimensions'
                ? 'bg-indigo-500 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Ruler className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Cotas</span>
          </button>
        </div>
      </div>

      {/* SVG Canvas Container */}
      <div className="relative flex-1 min-h-[380px] w-full bg-[#f4ece1] rounded-lg overflow-hidden border border-slate-300 shadow-inner flex items-center justify-center p-2 select-none">
        {/* SVG Architectural Drawing */}
        <svg
          viewBox="0 0 1000 680"
          className="w-full h-full max-h-[580px] object-contain drop-shadow"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          {/* DEFINITIONS FOR FILTERS & PATTERNS */}
          <defs>
            {/* Tile Floor Grid Pattern */}
            <pattern id="floorTiles" width="30" height="30" patternUnits="userSpaceOnUse">
              <rect width="30" height="30" fill="#ede3d5" />
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#dfd4c5" strokeWidth="1" />
            </pattern>

            {/* Rug Patterns */}
            <pattern id="greenRugPattern" width="12" height="12" patternUnits="userSpaceOnUse">
              <rect width="12" height="12" fill="#52a06f" />
              <circle cx="6" cy="6" r="2" fill="#44885d" opacity="0.6" />
            </pattern>
            <pattern id="blueRugPattern" width="12" height="12" patternUnits="userSpaceOnUse">
              <rect width="12" height="12" fill="#5892c5" />
              <rect x="0" y="0" width="6" height="6" fill="#4377a7" opacity="0.5" />
            </pattern>

            {/* Shadows */}
            <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="2" dy="3" stdDeviation="3" floodOpacity="0.25" />
            </filter>
            <filter id="glowSelect" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#0284c7" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* BACKGROUND COTAS (OUTER LABELS) */}
          {/* Top Dimension: 6 m */}
          <g>
            <line x1="80" y1="28" x2="920" y2="28" stroke="#1e293b" strokeWidth="2.5" />
            <polygon points="80,28 92,23 92,33" fill="#1e293b" />
            <polygon points="920,28 908,23 908,33" fill="#1e293b" />
            <rect x="475" y="16" width="50" height="24" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <text x="500" y="32" textAnchor="middle" fill="#0f172a" fontSize="15" fontWeight="bold">
              6 m
            </text>
          </g>

          {/* Left Dimension: 4 m */}
          <g>
            <line x1="32" y1="70" x2="32" y2="610" stroke="#1e293b" strokeWidth="2.5" />
            <polygon points="32,70 27,82 37,82" fill="#1e293b" />
            <polygon points="32,610 27,598 37,598" fill="#1e293b" />
            <rect x="18" y="328" width="30" height="24" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <text x="33" y="345" textAnchor="middle" fill="#0f172a" fontSize="15" fontWeight="bold">
              4 m
            </text>
          </g>

          {/* MAIN ROOM BOUNDARY & WALLS */}
          {/* Outer Wall Shadow */}
          <rect x="80" y="70" width="840" height="540" fill="#2d3748" rx="6" />

          {/* Floor Area */}
          <rect x="96" y="86" width="808" height="508" fill="url(#floorTiles)" rx="3" />

          {/* ACOUSTIC LAYER OVERLAY (WHEN ACTIVE) */}
          {activeLayer === 'acoustic' && (
            <g opacity="0.35">
              {/* Silent Zones: Lectura, Biblioteca, Docente */}
              <rect x="96" y="86" width="180" height="150" fill="#10b981" />
              <rect x="96" y="240" width="120" height="150" fill="#10b981" />
              <rect x="360" y="470" width="220" height="124" fill="#10b981" />

              {/* Moderate Zones: Arte, Ciencias, Matemática, Personal Social, Tecnología */}
              <rect x="280" y="86" width="160" height="150" fill="#f59e0b" />
              <rect x="444" y="86" width="136" height="150" fill="#f59e0b" />
              <rect x="584" y="86" width="136" height="150" fill="#f59e0b" />
              <rect x="740" y="240" width="164" height="160" fill="#f59e0b" />
              <rect x="740" y="405" width="164" height="185" fill="#f59e0b" />

              {/* Dynamic Zone: Construcción */}
              <rect x="724" y="86" width="180" height="150" fill="#ef4444" />
            </g>
          )}

          {/* CIRCULATION & EVACUATION LAYER OVERLAY (WHEN ACTIVE) */}
          {activeLayer === 'circulation' && (
            <g>
              {/* Central corridors in green dash */}
              <path
                d="M 230 350 L 730 350"
                stroke="#059669"
                strokeWidth="12"
                strokeDasharray="8 6"
                opacity="0.4"
                strokeLinecap="round"
              />
              <path
                d="M 480 230 L 480 500"
                stroke="#059669"
                strokeWidth="12"
                strokeDasharray="8 6"
                opacity="0.4"
                strokeLinecap="round"
              />
              <path
                d="M 230 350 L 210 520 L 175 580"
                stroke="#059669"
                strokeWidth="14"
                strokeDasharray="8 6"
                opacity="0.6"
                strokeLinecap="round"
              />
              {/* Evacuation Arrows */}
              <g fill="#059669" opacity="0.85">
                <polygon points="170,588 160,565 180,565" />
                <text x="235" y="555" fontSize="13" fontWeight="bold" fill="#047857">
                  Ruta de Evacuación Principal (1.10 m libre)
                </text>
              </g>
            </g>
          )}

          {/* DIMENSION & GRID LAYER OVERLAY (WHEN ACTIVE) */}
          {activeLayer === 'dimensions' && (
            <g opacity="0.65">
              {/* 1m Grid lines (6 columns, 4 rows) */}
              {[1, 2, 3, 4, 5].map((col) => (
                <line
                  key={`grid-x-${col}`}
                  x1={96 + col * (808 / 6)}
                  y1="86"
                  x2={96 + col * (808 / 6)}
                  y2="594"
                  stroke="#64748b"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              ))}
              {[1, 2, 3].map((row) => (
                <line
                  key={`grid-y-${row}`}
                  x1="96"
                  y1={86 + row * (508 / 4)}
                  x2="904"
                  y2={86 + row * (508 / 4)}
                  stroke="#64748b"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              ))}
              <rect x="420" y="335" width="160" height="30" rx="4" fill="#0f172a" />
              <text x="500" y="355" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">
                Área Total: 24.00 m²
              </text>
            </g>
          )}

          {/* WINDOWS (NORTH WALL - TOP) */}
          <g>
            {/* Window 1 (above Arte) */}
            <rect x="250" y="68" width="180" height="16" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2" rx="2" />
            <line x1="250" y1="76" x2="430" y2="76" stroke="#0284c7" strokeWidth="1.5" />
            <line x1="310" y1="68" x2="310" y2="84" stroke="#0284c7" strokeWidth="1.5" />
            <line x1="370" y1="68" x2="370" y2="84" stroke="#0284c7" strokeWidth="1.5" />
            <text x="340" y="62" textAnchor="middle" fill="#0369a1" fontSize="12" fontWeight="bold">
              Ventanas
            </text>

            {/* Window 2 (above Matemática) */}
            <rect x="560" y="68" width="180" height="16" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2" rx="2" />
            <line x1="560" y1="76" x2="740" y2="76" stroke="#0284c7" strokeWidth="1.5" />
            <line x1="620" y1="68" x2="620" y2="84" stroke="#0284c7" strokeWidth="1.5" />
            <line x1="680" y1="68" x2="680" y2="84" stroke="#0284c7" strokeWidth="1.5" />
            <text x="650" y="62" textAnchor="middle" fill="#0369a1" fontSize="12" fontWeight="bold">
              Ventanas
            </text>
          </g>

          {/* ENTRANCE DOOR (SOUTH-WEST - BOTTOM LEFT) */}
          <g>
            {/* Door opening gap in wall */}
            <rect x="150" y="586" width="70" height="24" fill="url(#floorTiles)" />
            {/* Door swing arc */}
            <path
              d="M 152 590 A 65 65 0 0 1 217 525"
              fill="none"
              stroke="#64748b"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
            {/* Door panel open */}
            <line x1="152" y1="590" x2="152" y2="525" stroke="#92400e" strokeWidth="5" strokeLinecap="round" />
            <text x="180" y="630" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold">
              Puerta
            </text>
          </g>

          {/* ======================================================== */}
          {/* SECTOR 1: LECTURA (Top-Left corner)                      */}
          {/* ======================================================== */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectSector(getSectorById('lectura'))}
            onMouseEnter={() => setHoveredSectorId('lectura')}
            onMouseLeave={() => setHoveredSectorId(null)}
            filter={
              selectedSectorId === 'lectura'
                ? 'url(#glowSelect)'
                : hoveredSectorId === 'lectura'
                ? 'url(#softShadow)'
                : undefined
            }
          >
            {/* Green carpet */}
            <rect x="110" y="145" width="125" height="65" rx="8" fill="url(#greenRugPattern)" stroke="#377e52" strokeWidth="1.5" />
            {/* Cushions */}
            <rect x="122" y="165" width="26" height="26" rx="6" fill="#84cc16" transform="rotate(-10 135 178)" />
            <rect x="175" y="158" width="28" height="28" rx="6" fill="#06b6d4" transform="rotate(15 189 172)" />
            {/* Main Bookshelf */}
            <rect x="105" y="94" width="138" height="46" rx="4" fill="#b4743c" stroke="#844a1b" strokeWidth="1.5" />
            {/* Shelf divisions & book spines */}
            <line x1="150" y1="94" x2="150" y2="140" stroke="#844a1b" strokeWidth="1.5" />
            <line x1="195" y1="94" x2="195" y2="140" stroke="#844a1b" strokeWidth="1.5" />
            {/* Books in shelf */}
            <rect x="110" y="98" width="8" height="38" fill="#ef4444" rx="1" />
            <rect x="120" y="100" width="7" height="36" fill="#3b82f6" rx="1" />
            <rect x="129" y="96" width="8" height="40" fill="#eab308" rx="1" />
            <rect x="139" y="101" width="7" height="35" fill="#10b981" rx="1" />
            <rect x="155" y="98" width="9" height="38" fill="#ec4899" rx="1" />
            <rect x="166" y="100" width="7" height="36" fill="#8b5cf6" rx="1" />
            <rect x="175" y="97" width="8" height="39" fill="#06b6d4" rx="1" />
            <rect x="200" y="98" width="8" height="38" fill="#f97316" rx="1" />
            <rect x="210" y="102" width="7" height="34" fill="#64748b" rx="1" />
            <rect x="220" y="99" width="8" height="37" fill="#84cc16" rx="1" />

            {/* Potted Plant */}
            <circle cx="102" cy="155" r="9" fill="#b45309" />
            <circle cx="102" cy="155" r="7" fill="#15803d" />
            <circle cx="98" cy="152" r="4" fill="#22c55e" />
            <circle cx="106" cy="157" r="4" fill="#16a34a" />

            {/* Sector Label Pill */}
            <g transform="translate(120, 100)">
              <rect x="0" y="0" width="90" height="24" rx="12" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
              {/* Book Icon */}
              <path d="M 12 7 L 12 17 M 12 17 Q 16 15 20 17 L 20 7 Q 16 5 12 7 M 12 17 Q 8 15 4 17 L 4 7 Q 8 5 12 7" fill="none" stroke="#059669" strokeWidth="1.5" />
              <text x="32" y="16" fill="#047857" fontSize="12" fontWeight="bold">
                Lectura
              </text>
            </g>
          </g>

          {/* ======================================================== */}
          {/* SECTOR 2: ARTE Y CREATIVIDAD                             */}
          {/* ======================================================== */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectSector(getSectorById('arte'))}
            onMouseEnter={() => setHoveredSectorId('arte')}
            onMouseLeave={() => setHoveredSectorId(null)}
            filter={
              selectedSectorId === 'arte'
                ? 'url(#glowSelect)'
                : hoveredSectorId === 'arte'
                ? 'url(#softShadow)'
                : undefined
            }
          >
            {/* Shelf with materials */}
            <rect x="268" y="94" width="130" height="42" rx="4" fill="#d97706" stroke="#92400e" strokeWidth="1.5" />
            {/* Pots / Jars on shelf */}
            <circle cx="282" cy="108" r="7" fill="#ef4444" />
            <circle cx="300" cy="108" r="7" fill="#3b82f6" />
            <circle cx="318" cy="108" r="7" fill="#eab308" />
            <circle cx="336" cy="108" r="7" fill="#10b981" />
            <circle cx="354" cy="108" r="7" fill="#8b5cf6" />
            <circle cx="372" cy="108" r="7" fill="#f97316" />

            {/* Art Table */}
            <rect x="275" y="152" width="116" height="48" rx="5" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
            {/* Papers / drawings on table */}
            <rect x="285" y="158" width="22" height="18" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
            <circle cx="296" cy="167" r="4" fill="#f43f5e" />
            <rect x="315" y="160" width="26" height="20" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
            <polygon points="328,164 322,175 334,175" fill="#3b82f6" />
            <rect x="350" y="157" width="24" height="22" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />

            {/* Stools (Yellow, Blue, Orange) */}
            <rect x="282" y="204" width="16" height="16" rx="4" fill="#f97316" stroke="#ea580c" />
            <rect x="306" y="204" width="16" height="16" rx="4" fill="#3b82f6" stroke="#2563eb" />
            <rect x="330" y="204" width="16" height="16" rx="4" fill="#06b6d4" stroke="#0891b2" />
            <rect x="354" y="204" width="16" height="16" rx="4" fill="#eab308" stroke="#ca8a04" />

            {/* Label Pill */}
            <g transform="translate(268, 100)">
              <rect x="0" y="0" width="130" height="24" rx="12" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
              {/* Palette Icon */}
              <circle cx="14" cy="12" r="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
              <circle cx="12" cy="10" r="1.5" fill="#ef4444" />
              <circle cx="16" cy="11" r="1.5" fill="#3b82f6" />
              <circle cx="13" cy="14" r="1.5" fill="#10b981" />
              <text x="27" y="16" fill="#b45309" fontSize="11" fontWeight="bold">
                Arte y creatividad
              </text>
            </g>
          </g>

          {/* ======================================================== */}
          {/* SECTOR 3: CIENCIAS                                       */}
          {/* ======================================================== */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectSector(getSectorById('ciencias'))}
            onMouseEnter={() => setHoveredSectorId('ciencias')}
            onMouseLeave={() => setHoveredSectorId(null)}
            filter={
              selectedSectorId === 'ciencias'
                ? 'url(#glowSelect)'
                : hoveredSectorId === 'ciencias'
                ? 'url(#softShadow)'
                : undefined
            }
          >
            {/* Shelf with scientific elements */}
            <rect x="424" y="94" width="112" height="106" rx="4" fill="#0f766e" stroke="#115e59" strokeWidth="1.5" />
            {/* Shelf dividing lines */}
            <line x1="424" y1="130" x2="536" y2="130" stroke="#134e4a" strokeWidth="1.5" />
            <line x1="424" y1="165" x2="536" y2="165" stroke="#134e4a" strokeWidth="1.5" />

            {/* Globe on top shelf */}
            <circle cx="452" cy="112" r="10" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
            <path d="M 445 112 Q 452 108 459 112 Q 452 116 445 112" fill="none" stroke="#22c55e" strokeWidth="1.5" />
            <path d="M 452 122 L 452 126 M 447 126 L 457 126" stroke="#475569" strokeWidth="1.5" />

            {/* Plant in pot */}
            <circle cx="508" cy="114" r="9" fill="#15803d" />
            <circle cx="504" cy="111" r="5" fill="#4ade80" />
            <rect x="503" y="121" width="10" height="7" fill="#b45309" rx="1" />

            {/* Trays & test tubes */}
            <rect x="435" y="140" width="26" height="18" fill="#67e8f9" rx="2" />
            <rect x="475" y="140" width="26" height="18" fill="#a7f3d0" rx="2" />
            <rect x="440" y="174" width="40" height="20" fill="#38bdf8" rx="2" />
            <rect x="488" y="174" width="38" height="20" fill="#fde047" rx="2" />

            {/* Label Pill */}
            <g transform="translate(435, 100)">
              <rect x="0" y="0" width="90" height="24" rx="12" fill="#ffffff" stroke="#0d9488" strokeWidth="2" />
              {/* Flask Icon */}
              <path d="M 12 7 L 16 7 M 14 7 L 14 11 L 10 18 L 18 18 L 14 11" fill="none" stroke="#0d9488" strokeWidth="1.5" />
              <text x="26" y="16" fill="#0f766e" fontSize="12" fontWeight="bold">
                Ciencias
              </text>
            </g>
          </g>

          {/* ======================================================== */}
          {/* SECTOR 4: MATEMÁTICA                                     */}
          {/* ======================================================== */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectSector(getSectorById('matematica'))}
            onMouseEnter={() => setHoveredSectorId('matematica')}
            onMouseLeave={() => setHoveredSectorId(null)}
            filter={
              selectedSectorId === 'matematica'
                ? 'url(#glowSelect)'
                : hoveredSectorId === 'matematica'
                ? 'url(#softShadow)'
                : undefined
            }
          >
            {/* Shelf */}
            <rect x="560" y="94" width="112" height="106" rx="4" fill="#4338ca" stroke="#3730a3" strokeWidth="1.5" />
            <line x1="560" y1="130" x2="672" y2="130" stroke="#312e81" strokeWidth="1.5" />
            <line x1="560" y1="165" x2="672" y2="165" stroke="#312e81" strokeWidth="1.5" />

            {/* Numbers & Abacus */}
            <text x="580" y="122" fill="#fde047" fontSize="14" fontWeight="bold">1</text>
            <text x="605" y="122" fill="#38bdf8" fontSize="14" fontWeight="bold">2</text>
            <text x="630" y="122" fill="#f43f5e" fontSize="14" fontWeight="bold">3</text>

            {/* Math trays & blocks */}
            <rect x="572" y="138" width="22" height="20" fill="#facc15" rx="2" />
            <rect x="600" y="138" width="22" height="20" fill="#38bdf8" rx="2" />
            <rect x="628" y="138" width="22" height="20" fill="#f43f5e" rx="2" />

            {/* Lower shelf: Cuisenaire rods & counting aids */}
            <rect x="570" y="174" width="42" height="18" rx="2" fill="#e0e7ff" stroke="#818cf8" />
            <rect x="620" y="174" width="42" height="18" rx="2" fill="#fbcfe8" stroke="#f472b6" />

            {/* Label Pill */}
            <g transform="translate(562, 100)">
              <rect x="0" y="0" width="108" height="24" rx="12" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
              {/* Math Icon ++ */}
              <text x="10" y="16" fill="#4f46e5" fontSize="11" fontWeight="bold">
                + -
              </text>
              <text x="32" y="16" fill="#4338ca" fontSize="12" fontWeight="bold">
                Matemática
              </text>
            </g>
          </g>

          {/* ======================================================== */}
          {/* SECTOR 5: CONSTRUCCIÓN (Top-Right corner)                */}
          {/* ======================================================== */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectSector(getSectorById('construccion'))}
            onMouseEnter={() => setHoveredSectorId('construccion')}
            onMouseLeave={() => setHoveredSectorId(null)}
            filter={
              selectedSectorId === 'construccion'
                ? 'url(#glowSelect)'
                : hoveredSectorId === 'construccion'
                ? 'url(#softShadow)'
                : undefined
            }
          >
            {/* Shelf with block bins */}
            <rect x="696" y="94" width="102" height="52" rx="4" fill="#b91c1c" stroke="#991b1b" strokeWidth="1.5" />
            <rect x="704" y="102" width="24" height="36" fill="#fbbf24" rx="2" />
            <rect x="734" y="102" width="24" height="36" fill="#38bdf8" rx="2" />
            <rect x="764" y="102" width="24" height="36" fill="#34d399" rx="2" />

            {/* Blue Play Carpet / Floor Mat */}
            <rect x="692" y="152" width="106" height="66" rx="8" fill="url(#blueRugPattern)" stroke="#2563eb" strokeWidth="1.5" />
            {/* Loose building blocks on the rug */}
            <rect x="704" y="162" width="18" height="18" fill="#ef4444" rx="2" />
            <polygon points="730,162 720,178 740,178" fill="#eab308" />
            <rect x="746" y="165" width="24" height="14" fill="#10b981" rx="2" />
            <rect x="726" y="186" width="30" height="20" fill="#38bdf8" rx="3" />

            {/* Potted Plant in corner */}
            <circle cx="810" cy="180" r="10" fill="#166534" />
            <circle cx="810" cy="180" r="7" fill="#22c55e" />

            {/* Label Pill */}
            <g transform="translate(692, 100)">
              <rect x="0" y="0" width="112" height="24" rx="12" fill="#ffffff" stroke="#e11d48" strokeWidth="2" />
              {/* Blocks Icon */}
              <rect x="10" y="7" width="5" height="5" fill="#e11d48" />
              <rect x="16" y="7" width="5" height="5" fill="#e11d48" />
              <rect x="13" y="13" width="5" height="5" fill="#e11d48" />
              <text x="28" y="16" fill="#be123c" fontSize="11" fontWeight="bold">
                Construcción
              </text>
            </g>
          </g>

          {/* ======================================================== */}
          {/* SECTOR 6: TECNOLOGÍA (East Wall - Upper Right)           */}
          {/* ======================================================== */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectSector(getSectorById('tecnologia'))}
            onMouseEnter={() => setHoveredSectorId('tecnologia')}
            onMouseLeave={() => setHoveredSectorId(null)}
            filter={
              selectedSectorId === 'tecnologia'
                ? 'url(#glowSelect)'
                : hoveredSectorId === 'tecnologia'
                ? 'url(#softShadow)'
                : undefined
            }
          >
            {/* Tech Desk */}
            <rect x="735" y="240" width="80" height="88" rx="4" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
            {/* 2 Laptops / monitors */}
            {/* Laptop 1 */}
            <rect x="745" y="248" width="28" height="20" rx="2" fill="#1e293b" />
            <rect x="747" y="250" width="24" height="15" rx="1" fill="#38bdf8" />
            {/* Laptop 2 */}
            <rect x="745" y="286" width="28" height="20" rx="2" fill="#1e293b" />
            <rect x="747" y="288" width="24" height="15" rx="1" fill="#38bdf8" />

            {/* Chairs */}
            <rect x="715" y="248" width="16" height="20" rx="3" fill="#1d4ed8" stroke="#1e40af" />
            <rect x="715" y="286" width="16" height="20" rx="3" fill="#1d4ed8" stroke="#1e40af" />

            {/* Label Pill */}
            <g transform="translate(718, 222)">
              <rect x="0" y="0" width="98" height="24" rx="12" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
              {/* Monitor Icon */}
              <rect x="9" y="8" width="10" height="7" fill="none" stroke="#0284c7" strokeWidth="1.5" rx="1" />
              <line x1="14" y1="15" x2="14" y2="18" stroke="#0284c7" strokeWidth="1.5" />
              <text x="24" y="16" fill="#0369a1" fontSize="11" fontWeight="bold">
                Tecnología
              </text>
            </g>
          </g>

          {/* ======================================================== */}
          {/* SECTOR 7: PERSONAL SOCIAL (East Wall - Lower Right)       */}
          {/* ======================================================== */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectSector(getSectorById('personal_social'))}
            onMouseEnter={() => setHoveredSectorId('personal_social')}
            onMouseLeave={() => setHoveredSectorId(null)}
            filter={
              selectedSectorId === 'personal_social'
                ? 'url(#glowSelect)'
                : hoveredSectorId === 'personal_social'
                ? 'url(#softShadow)'
                : undefined
            }
          >
            {/* Shelving unit */}
            <rect x="724" y="380" width="92" height="100" rx="4" fill="#d97706" stroke="#b45309" strokeWidth="1.5" />
            <line x1="724" y1="428" x2="816" y2="428" stroke="#92400e" strokeWidth="1.5" />

            {/* Globe & Community props */}
            <circle cx="748" cy="406" r="11" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
            <circle cx="788" cy="404" r="8" fill="#16a34a" />

            {/* Lower cubbies with community boxes */}
            <rect x="734" y="440" width="22" height="24" fill="#fde047" rx="2" />
            <rect x="760" y="440" width="22" height="24" fill="#fb923c" rx="2" />
            <rect x="786" y="440" width="22" height="24" fill="#38bdf8" rx="2" />

            {/* Plant beside shelf */}
            <circle cx="806" cy="495" r="10" fill="#15803d" />
            <circle cx="806" cy="495" r="7" fill="#4ade80" />

            {/* Label Pill */}
            <g transform="translate(714, 360)">
              <rect x="0" y="0" width="112" height="24" rx="12" fill="#ffffff" stroke="#ea580c" strokeWidth="2" />
              {/* Globe Icon */}
              <circle cx="12" cy="12" r="6" fill="none" stroke="#ea580c" strokeWidth="1.5" />
              <text x="24" y="16" fill="#c2410c" fontSize="10.5" fontWeight="bold">
                Personal Social
              </text>
            </g>
          </g>

          {/* ======================================================== */}
          {/* SECTOR 8: BIBLIOTECA (West Wall - Middle)                 */}
          {/* ======================================================== */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectSector(getSectorById('biblioteca'))}
            onMouseEnter={() => setHoveredSectorId('biblioteca')}
            onMouseLeave={() => setHoveredSectorId(null)}
            filter={
              selectedSectorId === 'biblioteca'
                ? 'url(#glowSelect)'
                : hoveredSectorId === 'biblioteca'
                ? 'url(#softShadow)'
                : undefined
            }
          >
            {/* Tall Vertical Bookshelf */}
            <rect x="105" y="248" width="55" height="115" rx="4" fill="#b45309" stroke="#78350f" strokeWidth="1.5" />
            {/* Shelves */}
            <line x1="105" y1="285" x2="160" y2="285" stroke="#78350f" strokeWidth="1.5" />
            <line x1="105" y1="325" x2="160" y2="325" stroke="#78350f" strokeWidth="1.5" />
            {/* Books upright on vertical shelf */}
            <rect x="110" y="252" width="7" height="30" fill="#0284c7" rx="1" />
            <rect x="118" y="254" width="8" height="28" fill="#dc2626" rx="1" />
            <rect x="127" y="250" width="7" height="32" fill="#16a34a" rx="1" />
            <rect x="135" y="253" width="8" height="29" fill="#eab308" rx="1" />
            <rect x="144" y="255" width="7" height="27" fill="#8b5cf6" rx="1" />

            <rect x="110" y="290" width="8" height="31" fill="#f97316" rx="1" />
            <rect x="119" y="292" width="7" height="29" fill="#06b6d4" rx="1" />
            <rect x="128" y="288" width="8" height="33" fill="#ec4899" rx="1" />
            <rect x="137" y="291" width="7" height="30" fill="#84cc16" rx="1" />

            {/* Label Pill */}
            <g transform="translate(100, 230)">
              <rect x="0" y="0" width="94" height="24" rx="12" fill="#ffffff" stroke="#047857" strokeWidth="2" />
              {/* Library Icon */}
              <path d="M 12 7 L 12 17 M 12 17 Q 16 15 20 17 L 20 7 Q 16 5 12 7 M 12 17 Q 8 15 4 17 L 4 7 Q 8 5 12 7" fill="none" stroke="#047857" strokeWidth="1.5" />
              <text x="26" y="16" fill="#065f46" fontSize="11" fontWeight="bold">
                Biblioteca
              </text>
            </g>
          </g>

          {/* ======================================================== */}
          {/* SECTOR 9: DOCENTE (South Wall - Frontal)                  */}
          {/* ======================================================== */}
          <g
            className="cursor-pointer transition-all duration-200"
            onClick={() => onSelectSector(getSectorById('docente'))}
            onMouseEnter={() => setHoveredSectorId('docente')}
            onMouseLeave={() => setHoveredSectorId(null)}
            filter={
              selectedSectorId === 'docente'
                ? 'url(#glowSelect)'
                : hoveredSectorId === 'docente'
                ? 'url(#softShadow)'
                : undefined
            }
          >
            {/* Teacher's desk */}
            <rect x="360" y="490" width="150" height="52" rx="4" fill="#d97706" stroke="#92400e" strokeWidth="1.5" />
            {/* Teacher's chair */}
            <rect x="410" y="550" width="48" height="28" rx="6" fill="#0284c7" stroke="#0369a1" strokeWidth="1.5" />
            {/* Desk items */}
            {/* Laptop / folder */}
            <rect x="375" y="498" width="30" height="22" rx="2" fill="#334155" />
            <rect x="377" y="500" width="26" height="17" rx="1" fill="#94a3b8" />
            {/* Teacher lesson plan notebook */}
            <rect x="420" y="500" width="24" height="30" rx="2" fill="#ffffff" stroke="#cbd5e1" />
            {/* Plant on teacher desk */}
            <circle cx="478" cy="505" r="7" fill="#15803d" />
            <circle cx="478" cy="505" r="5" fill="#4ade80" />

            {/* Plants near teacher station */}
            <circle cx="348" cy="505" r="8" fill="#16a34a" />
            <circle cx="348" cy="535" r="7" fill="#15803d" />

            {/* Label Pill */}
            <g transform="translate(390, 515)">
              <rect x="0" y="0" width="86" height="24" rx="12" fill="#ffffff" stroke="#475569" strokeWidth="2" />
              {/* User Icon */}
              <circle cx="12" cy="11" r="3.5" fill="#475569" />
              <path d="M 7 19 C 7 16 17 16 17 19" fill="none" stroke="#475569" strokeWidth="1.5" />
              <text x="26" y="16" fill="#334155" fontSize="11" fontWeight="bold">
                Docente
              </text>
            </g>
          </g>

          {/* ======================================================== */}
          {/* CENTRAL STUDENT DESKS (6 double tables = 12 seats)       */}
          {/* Arranged in 3 columns x 2 rows                           */}
          {/* ======================================================== */}
          <g>
            {[
              { x: 260, y: 310, id: 'table-1' },
              { x: 420, y: 310, id: 'table-2' },
              { x: 580, y: 310, id: 'table-3' },
              { x: 260, y: 400, id: 'table-4' },
              { x: 420, y: 400, id: 'table-5' },
              { x: 580, y: 400, id: 'table-6' },
            ].map((desk) => (
              <g key={desk.id}>
                {/* Table Top (Wood finish) */}
                <rect
                  x={desk.x}
                  y={desk.y}
                  width="85"
                  height="46"
                  rx="4"
                  fill="#fcd34d"
                  stroke="#d97706"
                  strokeWidth="1.5"
                  filter="url(#softShadow)"
                />
                {/* 2 Chairs Top (Blue) */}
                <rect x={desk.x + 12} y={desk.y - 14} width="24" height="12" rx="3" fill="#1d4ed8" stroke="#1e40af" />
                <rect x={desk.x + 48} y={desk.y - 14} width="24" height="12" rx="3" fill="#1d4ed8" stroke="#1e40af" />
                {/* 2 Chairs Bottom (Blue) */}
                <rect x={desk.x + 12} y={desk.y + 48} width="24" height="12" rx="3" fill="#1d4ed8" stroke="#1e40af" />
                <rect x={desk.x + 48} y={desk.y + 48} width="24" height="12" rx="3" fill="#1d4ed8" stroke="#1e40af" />
                {/* Notebook on table */}
                <rect x={desk.x + 16} y={desk.y + 12} width="16" height="20" rx="1" fill="#ffffff" stroke="#e2e8f0" />
                <rect x={desk.x + 52} y={desk.y + 12} width="16" height="20" rx="1" fill="#ffffff" stroke="#e2e8f0" />
              </g>
            ))}
          </g>

          {/* Plant at bottom-right corner */}
          <circle cx="810" cy="570" r="10" fill="#166534" />
          <circle cx="810" cy="570" r="7" fill="#22c55e" />
        </svg>

        {/* Hover / Selected Info Tooltip */}
        {(hoveredSectorId || selectedSectorId) && (
          <div className="absolute top-3 left-3 bg-slate-900/90 text-white backdrop-blur border border-slate-700 px-3 py-1.5 rounded-lg shadow-lg text-xs pointer-events-none transition-all flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{
                backgroundColor: getSectorById(hoveredSectorId || selectedSectorId!).color.iconColor,
              }}
            ></span>
            <span className="font-bold">
              {getSectorById(hoveredSectorId || selectedSectorId!).name}
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-300 max-w-[260px] truncate">
              {getSectorById(hoveredSectorId || selectedSectorId!).shortDesc}
            </span>
          </div>
        )}
      </div>

      {/* Footer Info within Plan */}
      <div className="mt-2 flex flex-wrap items-center justify-between text-[11px] text-slate-400 px-1 gap-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Zona de Calma (Lectura/Biblioteca)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            Zona de Trabajo Cognitivo y Arte
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            Zona Dinámica (Construcción)
          </span>
        </div>
        <div className="text-slate-400 font-mono text-[10px]">
          Haz clic en cualquier sector para abrir su ficha pedagógica
        </div>
      </div>
    </div>
  );
};
