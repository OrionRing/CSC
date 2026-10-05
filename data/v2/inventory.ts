export interface LabItem {
  id: string;
  name: string;
  category: 'Physics & Instrumentation' | 'Biology & Biotechnology' | 'Chemistry & Nanomaterials' | 'Chemical Reagents';
  quantity?: string;
}

export const labEquipmentList: LabItem[] = [
  // Physics & Mechanics
  { id: 'p-01', name: 'Precision Measurement & Vector Set', category: 'Physics & Instrumentation' },
  { id: 'p-02', name: 'AC & DC Circuit Laboratory Kits', category: 'Physics & Instrumentation' },
  { id: 'p-03', name: 'Galvanometer & Transformer Sets', category: 'Physics & Instrumentation' },
  { id: 'p-04', name: 'Newtonian & Hooke\'s Law Harmonic Motion Kits', category: 'Physics & Instrumentation' },
  { id: 'p-05', name: 'Lorentz Force & Magnetic Field Apparatus', category: 'Physics & Instrumentation' },
  { id: 'p-06', name: 'Lenses, Mirrors & Glass Refraction Optics', category: 'Physics & Instrumentation' },
  { id: 'p-07', name: 'Fluid Mechanics Practical Apparatus', category: 'Physics & Instrumentation' },
  { id: 'p-08', name: 'Digital Precision Balance', category: 'Physics & Instrumentation' },
  { id: 'p-09', name: 'Astronomical Optical Telescope', category: 'Physics & Instrumentation' },
  { id: 'p-10', name: 'Photometric Bench & Light Meter', category: 'Physics & Instrumentation' },
  { id: 'p-11', name: 'Analog & Semi-Digital Oscilloscopes', category: 'Physics & Instrumentation' },
  { id: 'p-12', name: 'Frequency Signal Generator / Oscillator', category: 'Physics & Instrumentation' },
  { id: 'p-13', name: 'Air Compressor & High-Power Workstation', category: 'Physics & Instrumentation' },
  { id: 'p-14', name: 'Workshop Tools (Bench Drill, Hand Drill, Grinder, Bench Vise, Precision Saws)', category: 'Physics & Instrumentation' },

  // Biology & Biotechnology
  { id: 'b-01', name: 'High-Pressure Steam Autoclaves', category: 'Biology & Biotechnology', quantity: '2 Units' },
  { id: 'b-02', name: 'Laminar Air Flow Clean Bench (ROBUST)', category: 'Biology & Biotechnology', quantity: '1 Unit' },
  { id: 'b-03', name: 'Constant Temperature Microbial Incubators', category: 'Biology & Biotechnology', quantity: '2 Units' },
  { id: 'b-04', name: 'Thermostatic 6-Hole Water Bath (Innotech)', category: 'Biology & Biotechnology', quantity: '1 Unit' },
  { id: 'b-05', name: 'Benchtop Centrifuges (Corning LSE)', category: 'Biology & Biotechnology', quantity: '2 Units' },
  { id: 'b-06', name: 'Vortex Mixer & Stirring Hotplate (Corning PC-420D)', category: 'Biology & Biotechnology', quantity: '2 Units' },
  { id: 'b-07', name: 'Digital Colony Counter', category: 'Biology & Biotechnology', quantity: '1 Unit' },
  { id: 'b-08', name: '2-Door Specimen Laboratory Refrigerator', category: 'Biology & Biotechnology', quantity: '1 Unit' },
  { id: 'b-09', name: 'High-Resolution Binocular Microscopes', category: 'Biology & Biotechnology', quantity: '10 Units' },
  { id: 'b-10', name: 'Student Monocular Microscopes', category: 'Biology & Biotechnology', quantity: '33 Units' },
  { id: 'b-11', name: 'Digital Electric Microscope', category: 'Biology & Biotechnology', quantity: '1 Unit' },
  { id: 'b-12', name: 'Precision Micropipettes & Pipette Fillers', category: 'Biology & Biotechnology' },
  { id: 'b-13', name: 'Glass & Plastic Petri Dishes', category: 'Biology & Biotechnology', quantity: '230+ Units' },
  { id: 'b-14', name: 'Digital Hygrometers & Mercury Thermometers', category: 'Biology & Biotechnology', quantity: '29 Units' },
  { id: 'b-15', name: 'Permanent Botanical & Zoological Slideware', category: 'Biology & Biotechnology', quantity: '12 Sets' },

  // Chemistry & Nanomaterials
  { id: 'c-01', name: 'Analytical 4-Decimal Laboratory Balances', category: 'Chemistry & Nanomaterials', quantity: '2 Units' },
  { id: 'c-02', name: 'Ohaus Triple-Beam Balances', category: 'Chemistry & Nanomaterials', quantity: '6 Units' },
  { id: 'c-03', name: 'Magnetic Hotplate Stirrers with Retort Stands', category: 'Chemistry & Nanomaterials', quantity: '3 Units' },
  { id: 'c-04', name: 'Complete Glass Distillation Systems', category: 'Chemistry & Nanomaterials', quantity: '5 Sets' },
  { id: 'c-05', name: 'Bomb & Solution Calorimeters', category: 'Chemistry & Nanomaterials', quantity: '10 Units' },
  { id: 'c-06', name: 'Portable Electrolyte Testers', category: 'Chemistry & Nanomaterials', quantity: '24 Units' },
  { id: 'c-07', name: 'Digital pH Meters & TDS Water Quality Testers', category: 'Chemistry & Nanomaterials', quantity: '5 Units' },
  { id: 'c-08', name: 'Optical Handheld Refractometer & Hydrometers', category: 'Chemistry & Nanomaterials', quantity: '3 Units' },
  { id: 'c-09', name: 'Electric Hotplates & Bunsen Burners', category: 'Chemistry & Nanomaterials', quantity: '38 Units' },
  { id: 'c-10', name: 'Buchner & Separatory Extraction Funnels', category: 'Chemistry & Nanomaterials', quantity: '5 Sets' },
  { id: 'c-11', name: 'Erlenmeyer Flasks (50 – 500 ml)', category: 'Chemistry & Nanomaterials', quantity: '150+ Units' },
  { id: 'c-12', name: 'Borosilicate Beakers & Measuring Cylinders (5 – 1000 ml)', category: 'Chemistry & Nanomaterials', quantity: '200+ Units' },
  { id: 'c-13', name: 'Volumetric Precision Flasks (25 – 1000 ml)', category: 'Chemistry & Nanomaterials', quantity: '60+ Units' },
  { id: 'c-14', name: 'Precision Titration Burettes & Centrifuge Tubes', category: 'Chemistry & Nanomaterials', quantity: '500+ Units' },
  { id: 'c-15', name: 'Lab Fire Blankets, Fume Extraction & Safety PPE', category: 'Chemistry & Nanomaterials' },

  // Chemical Reagents & Compounds
  { id: 'r-01', name: 'Aluminium Hydroxide [Al(OH)₃] & Aluminium Sulphate', category: 'Chemical Reagents' },
  { id: 'r-02', name: 'Ammonium Salts: Chloride, Carbonate, Oxalate, Sulphate, Iron (II/III) Sulphate', category: 'Chemical Reagents' },
  { id: 'r-03', name: 'Organic & Mineral Acids: Butyric, Oxalic, Tartaric, Hydrochloric (HCl)', category: 'Chemical Reagents' },
  { id: 'r-04', name: 'Barium Compounds: Bromide, Chloride, Hydroxide, Nitrate', category: 'Chemical Reagents' },
  { id: 'r-05', name: 'Iron Salts: Ferric Chloride [FeCl₃], Ferrous Sulphate', category: 'Chemical Reagents' },
  { id: 'r-06', name: 'Potassium Salts: KBr, K₂Cr₂O₇, Ferricyanide, Ferrocyanide, KOH, KIO₃, KI, KCl, KNO₃, KMnO₄, K₂SO₄', category: 'Chemical Reagents' },
  { id: 'r-07', name: 'Sodium Salts: Na₃PO₄, NaOH, NaCl, NaH₂PO₄, Na₂S₂O₅, NaNO₃, NaNO₂, Na₂S₂O₃, NaHCO₃', category: 'Chemical Reagents' },
  { id: 'r-08', name: 'Calcium & Carbon: CaCO₃ (Granular & Powder), CaCl₂, CaO, CaSO₄, Activated Carbon', category: 'Chemical Reagents' },
  { id: 'r-09', name: 'Transition Metals & Salts: Cobalt, Chromium, Manganese, Nickel, Silver, Zinc, Tin, Copper (CuSO₄)', category: 'Chemical Reagents' },
  { id: 'r-10', name: 'Diagnostic Reagents & Indicators: Fehling A/B, Benedict, Biuret, Methyl Blue/Red, Phenolphthalein, Bromothymol Blue', category: 'Chemical Reagents' },
  { id: 'r-11', name: 'Solvents: Ethanol 96%, Isopropanol (IPA), Methanol, Acetone, Chloroform, Glycerol', category: 'Chemical Reagents' },
  { id: 'r-12', name: 'Reactive Materials: Hydrogen Peroxide (H₂O₂ 3% & 50%), Formaldehyde, Iodine/Lugol, Magnesium Ribbon', category: 'Chemical Reagents' },
];
