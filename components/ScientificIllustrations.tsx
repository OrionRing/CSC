'use client';

import React from 'react';

// Illustration for Home Page: Botanical Extraction (Daun Jarak / Jatropha)
export function BotanicalExtractionIllustration() {
  return (
    <div className="w-full h-full min-h-[220px] bg-[#FFFFFF] border border-[#E8E8E4] rounded flex items-center justify-center p-6 relative overflow-hidden group">
      <svg
        className="w-full h-full max-h-[220px]"
        viewBox="0 0 360 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Jatropha Extraction and Antimicrobial Assay"
      >
        <defs>
          <pattern id="gridBio" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#F4F4F1" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="360" height="180" fill="url(#gridBio)" />

        {/* Flask / Maceration Stage */}
        <path
          d="M 60 50 L 70 80 L 45 130 C 42 136, 46 142, 53 142 L 107 142 C 114 142, 118 136, 115 130 L 90 80 L 100 50 Z"
          fill="#FFFFFF"
          stroke="#111111"
          strokeWidth="1.5"
        />
        {/* Liquid level */}
        <path
          d="M 52 116 Q 80 120 108 116 L 114 130 C 117 136, 113 142, 106 142 L 54 142 C 47 142, 43 136, 46 130 Z"
          fill="#D83933"
          fillOpacity="0.12"
          stroke="#D83933"
          strokeWidth="1"
        />
        <text x="50" y="156" fill="#111111" fontSize="7.5" fontFamily="monospace" fontWeight="bold">MACERATION</text>
        <text x="54" y="42" fill="#606060" fontSize="7" fontFamily="monospace">J. CURCAS</text>

        {/* Process Arrow 1 */}
        <path d="M 125 95 L 160 95" stroke="#111111" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="163,95 157,91 157,99" fill="#111111" />
        <text x="130" y="86" fill="#D83933" fontSize="7" fontFamily="monospace" fontWeight="bold">FILTER</text>

        {/* Rotary Extraction / Concentration Node */}
        <rect x="170" y="55" width="60" height="80" rx="4" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
        <circle cx="200" cy="90" r="16" stroke="#D83933" strokeWidth="1.5" strokeDasharray="2 2" />
        <circle cx="200" cy="90" r="4" fill="#D83933" />
        <text x="175" y="125" fill="#111111" fontSize="7" fontFamily="monospace" fontWeight="bold">EVAPORATION</text>
        <text x="178" y="45" fill="#606060" fontSize="7" fontFamily="monospace">EXTRACT</text>

        {/* Process Arrow 2 */}
        <path d="M 238 95 L 268 95" stroke="#111111" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="271,95 265,91 265,99" fill="#111111" />

        {/* Petri Dish Disc Assay */}
        <circle cx="305" cy="95" r="38" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
        <circle cx="305" cy="95" r="22" fill="#D83933" fillOpacity="0.15" stroke="#D83933" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="305" cy="95" r="6" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
        <text x="299" y="98" fill="#D83933" fontSize="8" fontFamily="monospace" fontWeight="bold">DJ</text>
        <text x="282" y="156" fill="#D83933" fontSize="7.5" fontFamily="monospace" fontWeight="bold">ZONE: 24.2mm</text>
      </svg>
    </div>
  );
}

// Illustration for About Page: Laboratory Equipment & Instrumentation
export function LabApparatusIllustration() {
  return (
    <div className="w-full h-full min-h-[180px] bg-[#F4F4F1] border border-[#E8E8E4] rounded flex items-center justify-center p-6 relative overflow-hidden group">
      <svg
        className="w-full h-full max-h-[180px]"
        viewBox="0 0 360 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Laboratory Apparatus Blueprint"
      >
        <defs>
          <pattern id="gridLab" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E8E8E4" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="360" height="160" fill="url(#gridLab)" />

        {/* Galvanometer / Power Supply Unit */}
        <rect x="30" y="35" width="85" height="90" rx="3" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
        <rect x="38" y="45" width="69" height="35" rx="2" fill="#111111" />
        <line x1="72" y1="72" x2="88" y2="52" stroke="#D83933" strokeWidth="2" strokeLinecap="round" />
        <circle cx="72" cy="72" r="3" fill="#FFFFFF" />
        <text x="42" y="58" fill="#FFFFFF" fontSize="6.5" fontFamily="monospace">AC/DC BENCH</text>
        <circle cx="48" cy="98" r="4" fill="#D83933" />
        <circle cx="68" cy="98" r="4" fill="#111111" />
        <circle cx="88" cy="98" r="4" fill="#606060" />
        <text x="35" y="140" fill="#606060" fontSize="7" fontFamily="monospace" fontWeight="bold">PRECISION BENCH</text>

        {/* Optical Bench with Lenses */}
        <line x1="135" y1="110" x2="235" y2="110" stroke="#111111" strokeWidth="2" />
        <line x1="140" y1="105" x2="140" y2="115" stroke="#111111" strokeWidth="1.5" />
        <line x1="185" y1="105" x2="185" y2="115" stroke="#111111" strokeWidth="1.5" />
        <line x1="230" y1="105" x2="230" y2="115" stroke="#111111" strokeWidth="1.5" />

        {/* Light Source */}
        <rect x="135" y="55" width="16" height="35" rx="2" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
        <circle cx="143" cy="72" r="4" fill="#D83933" />

        {/* Convex Lens */}
        <ellipse cx="185" cy="72" rx="4" ry="25" fill="#FFFFFF" stroke="#D83933" strokeWidth="1.5" />
        
        {/* Ray Lines */}
        <line x1="151" y1="72" x2="181" y2="72" stroke="#D83933" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="189" y1="72" x2="225" y2="72" stroke="#D83933" strokeWidth="1" strokeDasharray="2 2" />

        {/* Detector Sensor */}
        <rect x="225" y="58" width="10" height="30" fill="#111111" />
        <text x="145" y="140" fill="#606060" fontSize="7" fontFamily="monospace" fontWeight="bold">OPTICAL RAIL</text>

        {/* Spectrophotometer Cuvette Chamber */}
        <rect x="255" y="35" width="75" height="90" rx="3" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
        <rect x="270" y="50" width="45" height="50" rx="2" fill="#F4F4F1" stroke="#E8E8E4" />
        <rect x="282" y="60" width="20" height="30" fill="#D83933" fillOpacity="0.2" stroke="#D83933" strokeWidth="1" />
        <text x="286" y="80" fill="#D83933" fontSize="8" fontFamily="monospace" fontWeight="bold">752N</text>
        <text x="258" y="140" fill="#606060" fontSize="7" fontFamily="monospace" fontWeight="bold">SPECTROPHOTOMETER</text>
      </svg>
    </div>
  );
}

// Illustration for About Page: Weekly Session Rhythm
export function WeeklyRhythmIllustration() {
  return (
    <div className="w-full h-full min-h-[160px] bg-[#111111] border border-white/10 rounded flex items-center justify-center p-6 relative overflow-hidden group">
      <svg
        className="w-full h-full max-h-[160px]"
        viewBox="0 0 360 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Weekly Lab Rhythm Schematic"
      >
        {/* Wednesday Node */}
        <rect x="35" y="30" width="125" height="75" rx="4" fill="#1A1A1A" stroke="#D83933" strokeWidth="1.5" />
        <rect x="35" y="30" width="125" height="20" rx="4" fill="#D83933" />
        <text x="45" y="44" fill="#FFFFFF" fontSize="8.5" fontFamily="monospace" fontWeight="bold">WEDNESDAY // 15:00</text>
        <text x="45" y="68" fill="#FFFFFF" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Bench Experimentation</text>
        <text x="45" y="84" fill="#AAAAAA" fontSize="7.5" fontFamily="monospace">Synthesis & Extractions</text>

        {/* Flow Connector */}
        <path d="M 165 67 L 195 67" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="198,67 192,63 192,71" fill="#FFFFFF" />

        {/* Friday Node */}
        <rect x="200" y="30" width="125" height="75" rx="4" fill="#1A1A1A" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" />
        <rect x="200" y="30" width="125" height="20" rx="4" fill="#333333" />
        <text x="210" y="44" fill="#FFFFFF" fontSize="8.5" fontFamily="monospace" fontWeight="bold">FRIDAY // 15:00</text>
        <text x="210" y="68" fill="#FFFFFF" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Data & Analysis</text>
        <text x="210" y="84" fill="#AAAAAA" fontSize="7.5" fontFamily="monospace">Writeup & Competition Prep</text>
      </svg>
    </div>
  );
}
