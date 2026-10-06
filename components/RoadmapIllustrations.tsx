'use client';

import React from 'react';

// Illustration 1: Archive Centralization & Data Pipeline
export function ArchivePipelineIllustration() {
  return (
    <div className="w-full h-full min-h-[220px] bg-[#F9F9F8] border border-[#E8E8E4] rounded flex items-center justify-center p-6 relative overflow-hidden group">
      {/* Background blueprint grid */}
      <svg
        className="w-full h-full max-h-[240px]"
        viewBox="0 0 360 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Archive Pipeline Schematic"
      >
        {/* Subtle grid lines */}
        <defs>
          <pattern id="grid1" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E8E8E4" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="360" height="200" fill="url(#grid1)" />

        {/* Input Node: Raw Drive Files */}
        <rect x="25" y="45" width="80" height="110" rx="4" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
        <line x1="37" y1="65" x2="93" y2="65" stroke="#111111" strokeWidth="2" />
        <line x1="37" y1="80" x2="85" y2="80" stroke="#B8B8B8" strokeWidth="1.5" />
        <line x1="37" y1="95" x2="90" y2="95" stroke="#B8B8B8" strokeWidth="1.5" />
        <line x1="37" y1="110" x2="75" y2="110" stroke="#B8B8B8" strokeWidth="1.5" />
        <rect x="37" y="125" width="35" height="14" rx="2" fill="#F4F4F1" />
        <text x="42" y="135" fill="#606060" fontSize="7" fontFamily="monospace" fontWeight="bold">RAW.PDF</text>
        <text x="32" y="32" fill="#606060" fontSize="8" fontFamily="monospace" fontWeight="600">INPUT SOURCE</text>

        {/* Pipeline Arrow */}
        <path d="M 115 100 L 155 100" stroke="#D83933" strokeWidth="2" strokeDasharray="3 3" />
        <polygon points="158,100 152,96 152,104" fill="#D83933" />

        {/* Central Ingestion & Standardization Core */}
        <circle cx="180" cy="100" r="22" fill="#FFFFFF" stroke="#D83933" strokeWidth="2" />
        <circle cx="180" cy="100" r="14" fill="#D83933" fillOpacity="0.1" />
        <path d="M 173 100 L 187 100 M 180 93 L 180 107" stroke="#D83933" strokeWidth="2" strokeLinecap="round" />
        <text x="156" y="136" fill="#D83933" fontSize="8" fontFamily="monospace" fontWeight="bold">STANDARDIZE</text>

        {/* Pipeline Arrow 2 */}
        <path d="M 205 100 L 245 100" stroke="#111111" strokeWidth="1.5" />
        <polygon points="248,100 242,96 242,104" fill="#111111" />

        {/* Output Node: Centralized Web Repository */}
        <rect x="255" y="45" width="80" height="110" rx="4" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
        <rect x="265" y="58" width="60" height="20" rx="2" fill="#111111" />
        <text x="272" y="71" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace" fontWeight="bold">CSC HUB // 16</text>
        
        <circle cx="275" cy="95" r="4" fill="#D83933" />
        <text x="285" y="98" fill="#111111" fontSize="7.5" fontFamily="sans-serif" fontWeight="600">Biomedical</text>
        
        <circle cx="275" cy="112" r="4" fill="#111111" />
        <text x="285" y="115" fill="#111111" fontSize="7.5" fontFamily="sans-serif" fontWeight="600">Biofuels</text>
        
        <circle cx="275" cy="129" r="4" fill="#111111" />
        <text x="285" y="132" fill="#111111" fontSize="7.5" fontFamily="sans-serif" fontWeight="600">Optics/UV</text>

        <text x="258" y="32" fill="#111111" fontSize="8" fontFamily="monospace" fontWeight="600">STRUCTURED ELN</text>
      </svg>
    </div>
  );
}

// Illustration 2: Bench Testing & Disc Diffusion Assay
export function BenchAssayIllustration() {
  return (
    <div className="w-full h-full min-h-[220px] bg-[#F9F9F8] border border-[#E8E8E4] rounded flex items-center justify-center p-6 relative overflow-hidden group">
      <svg
        className="w-full h-full max-h-[240px]"
        viewBox="0 0 360 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Petri Dish Antimicrobial Assay Schematic"
      >
        <defs>
          <pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E8E8E4" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="360" height="200" fill="url(#grid2)" />

        {/* Petri Dish (Outer circle) */}
        <circle cx="140" cy="100" r="72" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
        <circle cx="140" cy="100" r="66" fill="#F4F4F1" stroke="#E8E8E4" strokeWidth="1" strokeDasharray="2 2" />

        {/* Inhibition Zone 1 (Daun Jarak Extract) */}
        <circle cx="115" cy="80" r="28" fill="#D83933" fillOpacity="0.12" stroke="#D83933" strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="115" cy="80" r="7" fill="#FFFFFF" stroke="#D83933" strokeWidth="2" />
        <text x="108" y="83" fill="#D83933" fontSize="8" fontFamily="monospace" fontWeight="bold">DJ</text>

        {/* Inhibition Zone 2 (Control) */}
        <circle cx="165" cy="120" r="14" fill="#B8B8B8" fillOpacity="0.15" stroke="#B8B8B8" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="165" cy="120" r="6" fill="#FFFFFF" stroke="#606060" strokeWidth="1.5" />
        <text x="159" y="123" fill="#606060" fontSize="7" fontFamily="monospace" fontWeight="bold">CTRL</text>

        {/* Measurement Callout */}
        <line x1="115" y1="80" x2="143" y2="80" stroke="#D83933" strokeWidth="1.5" />
        <circle cx="143" cy="80" r="2.5" fill="#D83933" />
        <line x1="129" y1="75" x2="129" y2="85" stroke="#D83933" strokeWidth="1" />

        {/* Technical Annotation Card */}
        <rect x="235" y="45" width="105" height="110" rx="4" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
        <rect x="235" y="45" width="105" height="22" rx="4" fill="#111111" />
        <text x="245" y="60" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold">ZONE ANALYSIS</text>

        <text x="245" y="82" fill="#606060" fontSize="7.5" fontFamily="monospace">SAMPLE: JATROPHA</text>
        <text x="245" y="96" fill="#D83933" fontSize="9" fontFamily="monospace" fontWeight="bold">DIAM: 24.2 mm</text>
        <text x="245" y="112" fill="#606060" fontSize="7.5" fontFamily="monospace">STATUS: ACTIVE</text>

        <rect x="245" y="124" width="85" height="18" rx="2" fill="#F4F4F1" stroke="#E8E8E4" />
        <text x="250" y="136" fill="#111111" fontSize="7.5" fontFamily="monospace" fontWeight="bold">OPSI PIPELINE</text>
      </svg>
    </div>
  );
}

// Illustration 3: Junior Apprenticeship & Peer Knowledge Loop
export function ApprenticeshipLoopIllustration() {
  return (
    <div className="w-full h-full min-h-[220px] bg-[#F9F9F8] border border-[#E8E8E4] rounded flex items-center justify-center p-6 relative overflow-hidden group">
      <svg
        className="w-full h-full max-h-[240px]"
        viewBox="0 0 360 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Apprenticeship Mentorship Loop Schematic"
      >
        <defs>
          <pattern id="grid3" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E8E8E4" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="360" height="200" fill="url(#grid3)" />

        {/* Senior Node (Grade 11/12) */}
        <rect x="40" y="55" width="100" height="90" rx="4" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
        <rect x="40" y="55" width="100" height="20" rx="4" fill="#111111" />
        <text x="50" y="69" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold">SENIOR LEAD</text>
        <text x="50" y="92" fill="#111111" fontSize="8.5" fontFamily="sans-serif" fontWeight="700">Grade 11 / 12</text>
        <text x="50" y="108" fill="#606060" fontSize="7.5" fontFamily="monospace">Paper Author</text>
        <text x="50" y="122" fill="#D83933" fontSize="7.5" fontFamily="monospace">Apparatus Mentor</text>

        {/* Handover Arc Top (10-min practical demo) */}
        <path d="M 145 80 C 180 60, 200 60, 225 80" stroke="#D83933" strokeWidth="2" strokeDasharray="3 3" fill="none" />
        <polygon points="228,82 220,78 222,86" fill="#D83933" />
        <text x="146" y="50" fill="#D83933" fontSize="7.5" fontFamily="monospace" fontWeight="bold">10-MIN DEMO</text>

        {/* Junior Node (Grade 10) */}
        <rect x="230" y="55" width="100" height="90" rx="4" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
        <rect x="230" y="55" width="100" height="20" rx="4" fill="#D83933" />
        <text x="240" y="69" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold">APPRENTICE</text>
        <text x="240" y="92" fill="#111111" fontSize="8.5" fontFamily="sans-serif" fontWeight="700">Grade 10 Entry</text>
        <text x="240" y="108" fill="#606060" fontSize="7.5" fontFamily="monospace">Co-Author Role</text>
        <text x="240" y="122" fill="#111111" fontSize="7.5" fontFamily="monospace">Hands-on Lab</text>

        {/* Return Arc Bottom (Succession & Continuity) */}
        <path d="M 230 125 C 200 145, 175 145, 145 125" stroke="#111111" strokeWidth="1.5" fill="none" />
        <polygon points="142,123 150,127 148,119" fill="#111111" />
        <text x="150" y="160" fill="#111111" fontSize="7.5" fontFamily="monospace" fontWeight="bold">SUCCESSION</text>
      </svg>
    </div>
  );
}

// Illustration 4: Circular Sourcing & Low-Cost Feedstocks
export function CircularSourcingIllustration() {
  return (
    <div className="w-full h-full min-h-[220px] bg-[#F9F9F8] border border-[#E8E8E4] rounded flex items-center justify-center p-6 relative overflow-hidden group">
      <svg
        className="w-full h-full max-h-[240px]"
        viewBox="0 0 360 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Circular Resource Closed Loop Schematic"
      >
        <defs>
          <pattern id="grid4" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E8E8E4" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="360" height="200" fill="url(#grid4)" />

        {/* Left: School Canteen Waste */}
        <circle cx="80" cy="100" r="35" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
        <circle cx="80" cy="100" r="28" fill="#F4F4F1" />
        <text x="61" y="96" fill="#111111" fontSize="7.5" fontFamily="monospace" fontWeight="bold">CANTEEN</text>
        <text x="54" y="108" fill="#606060" fontSize="7" fontFamily="monospace">COOKING OIL</text>

        {/* Center: Lab Reactor */}
        <rect x="150" y="65" width="70" height="70" rx="4" fill="#FFFFFF" stroke="#D83933" strokeWidth="2" />
        <path d="M 160 110 C 170 100, 190 120, 210 105" stroke="#D83933" strokeWidth="2" fill="none" />
        <text x="162" y="85" fill="#D83933" fontSize="8" fontFamily="monospace" fontWeight="bold">NaOH CAT</text>
        <text x="157" y="125" fill="#606060" fontSize="6.5" fontFamily="monospace">TRANSESTER.</text>

        {/* Connectors */}
        <path d="M 115 100 L 145 100" stroke="#111111" strokeWidth="1.5" />
        <polygon points="148,100 142,96 142,104" fill="#111111" />

        <path d="M 225 100 L 255 100" stroke="#D83933" strokeWidth="2" />
        <polygon points="258,100 252,96 252,104" fill="#D83933" />

        {/* Right: Clean Biodiesel + Alumni Check */}
        <circle cx="290" cy="100" r="35" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
        <circle cx="290" cy="100" r="28" fill="#D83933" fillOpacity="0.1" />
        <text x="268" y="96" fill="#D83933" fontSize="8" fontFamily="monospace" fontWeight="bold">BIODIESEL</text>
        <text x="272" y="108" fill="#111111" fontSize="7" fontFamily="monospace">ZERO COST</text>

        {/* Top Tag */}
        <rect x="110" y="25" width="140" height="20" rx="3" fill="#FFFFFF" stroke="#E8E8E4" />
        <text x="122" y="38" fill="#606060" fontSize="7.5" fontFamily="monospace" fontWeight="600">FEEDSTOCK: 100% RECYCLED</text>
      </svg>
    </div>
  );
}

// Illustration 5: CC Campus Science Demo Booth
export function CampusShowcaseIllustration() {
  return (
    <div className="w-full h-full min-h-[220px] bg-[#F9F9F8] border border-[#E8E8E4] rounded flex items-center justify-center p-6 relative overflow-hidden group">
      <svg
        className="w-full h-full max-h-[240px]"
        viewBox="0 0 360 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="CC Day Science Showcase Blueprint"
      >
        <defs>
          <pattern id="grid5" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E8E8E4" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="360" height="200" fill="url(#grid5)" />

        {/* Booth Frame */}
        <rect x="40" y="40" width="280" height="125" rx="6" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
        
        {/* Banner */}
        <rect x="40" y="40" width="280" height="26" rx="6" fill="#111111" />
        <text x="55" y="57" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">CANISIUS SCIENCE CLUB // CC DAY DEMO</text>
        <circle cx="305" cy="53" r="3" fill="#D83933" />

        {/* Station 1: Stirling Engine */}
        <rect x="55" y="80" width="75" height="70" rx="3" fill="#F4F4F1" stroke="#E8E8E4" />
        <circle cx="92" cy="105" r="14" stroke="#111111" strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="92" cy="105" r="5" fill="#D83933" />
        <text x="63" y="138" fill="#111111" fontSize="7.5" fontFamily="monospace" fontWeight="bold">STIRLING DEMO</text>

        {/* Station 2: UV Quantum Dots */}
        <rect x="142" y="80" width="75" height="70" rx="3" fill="#F4F4F1" stroke="#E8E8E4" />
        <rect x="160" y="93" width="40" height="22" rx="2" fill="#D83933" fillOpacity="0.2" stroke="#D83933" strokeWidth="1.5" />
        <text x="150" y="138" fill="#D83933" fontSize="7.5" fontFamily="monospace" fontWeight="bold">UV SHIELDING</text>

        {/* Station 3: Daun Jarak Gel Tester */}
        <rect x="230" y="80" width="75" height="70" rx="3" fill="#F4F4F1" stroke="#E8E8E4" />
        <circle cx="267" cy="105" r="12" fill="#FFFFFF" stroke="#111111" strokeWidth="1" />
        <circle cx="267" cy="105" r="4" fill="#606060" />
        <text x="242" y="138" fill="#111111" fontSize="7.5" fontFamily="monospace" fontWeight="bold">HERBAL GELS</text>
      </svg>
    </div>
  );
}

// Illustration 6: University Lab & External Network
export function UniversityNetworkIllustration() {
  return (
    <div className="w-full h-full min-h-[220px] bg-[#F9F9F8] border border-[#E8E8E4] rounded flex items-center justify-center p-6 relative overflow-hidden group">
      <svg
        className="w-full h-full max-h-[240px]"
        viewBox="0 0 360 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="University Network Schematic"
      >
        <defs>
          <pattern id="grid6" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E8E8E4" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="360" height="200" fill="url(#grid6)" />

        {/* Central Hub: CC Lab */}
        <circle cx="110" cy="100" r="45" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
        <circle cx="110" cy="100" r="38" fill="#111111" />
        <text x="82" y="97" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">CANISIUS</text>
        <text x="88" y="111" fill="#D83933" fontSize="8" fontFamily="monospace" fontWeight="bold">LAB HUB</text>

        {/* Radial Connection 1: University Characterization (UI / ITB) */}
        <line x1="155" y1="85" x2="235" y2="60" stroke="#D83933" strokeWidth="1.5" strokeDasharray="3 3" />
        <rect x="235" y="40" width="95" height="42" rx="4" fill="#FFFFFF" stroke="#D83933" strokeWidth="1.5" />
        <text x="243" y="56" fill="#D83933" fontSize="8" fontFamily="monospace" fontWeight="bold">UNIVERSITY LABS</text>
        <text x="243" y="70" fill="#606060" fontSize="7" fontFamily="sans-serif">SEM / UV Spectroscopy</text>

        {/* Radial Connection 2: Field Testbeds (Ciliwung River) */}
        <line x1="155" y1="115" x2="235" y2="140" stroke="#111111" strokeWidth="1.5" />
        <rect x="235" y="120" width="95" height="42" rx="4" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
        <text x="243" y="136" fill="#111111" fontSize="8" fontFamily="monospace" fontWeight="bold">FIELD SITES</text>
        <text x="243" y="150" fill="#606060" fontSize="7" fontFamily="sans-serif">River Biofilter Testing</text>
      </svg>
    </div>
  );
}
