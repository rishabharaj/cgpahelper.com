/**
 * Grading systems data for CGPA Helper
 * Covers standard and common grading scales for college students.
 */

export const gradingSystems = {
  'cbse-ugc-india': {
    name: 'CBSE / UGC India (10-point Scale)',
    shortName: 'CBSE / UGC India',
    country: 'India',
    maxGPA: 10,
    grades: [
      { letter: 'O',  point: 10,  range: '91–100' },
      { letter: 'A+', point: 9,   range: '81–90'  },
      { letter: 'A',  point: 8,   range: '71–80'  },
      { letter: 'B+', point: 7,   range: '61–70'  },
      { letter: 'B',  point: 6,   range: '51–60'  },
      { letter: 'C',  point: 5,   range: '41–50'  },
      { letter: 'P',  point: 4,   range: '35–40'  },
      { letter: 'F',  point: 0,   range: '0–34'   },
    ],
  },
  'icse-board': {
    name: 'ICSE / ISC Board 9-Point Scale',
    shortName: 'ICSE Board',
    country: 'India',
    maxGPA: 10,
    grades: [
      { letter: 'Grade 1', point: 10, range: '90–100' },
      { letter: 'Grade 2', point: 9,  range: '80–89'  },
      { letter: 'Grade 3', point: 8,  range: '70–79'  },
      { letter: 'Grade 4', point: 7,  range: '60–69'  },
      { letter: 'Grade 5', point: 6,  range: '50–59'  },
      { letter: 'Grade 6', point: 5,  range: '40–49'  },
      { letter: 'Grade 7', point: 4,  range: '35–39'  },
      { letter: 'Grade 8', point: 0,  range: '30–34'  },
      { letter: 'Grade 9', point: 0,  range: '0–29'   },
    ],
  },
  'standard-10-point': {
    name: 'Standard 10-Point Scale (Common for VIT, SRM, KTU, AKTU, Anna Univ, JNTU, SPPU, GGSIPU)',
    shortName: 'Standard 10-Point Scale',
    country: 'India',
    maxGPA: 10,
    grades: [
      { letter: 'O / S',  point: 10, range: '90–100' },
      { letter: 'A+',     point: 9,  range: '80–89'  },
      { letter: 'A',      point: 8,  range: '70–79'  },
      { letter: 'B+',     point: 7,  range: '60–69'  },
      { letter: 'B',      point: 6,  range: '55–59'  },
      { letter: 'C',      point: 5,  range: '50–54'  },
      { letter: 'D / P',  point: 4,  range: '40–49'  },
      { letter: 'F',      point: 0,  range: '0–39'   },
    ],
  },
  'mumbai-university': {
    name: 'University of Mumbai (10-point Scale)',
    shortName: 'Mumbai University',
    country: 'India',
    maxGPA: 10,
    grades: [
      { letter: 'O',  point: 10, range: '80–100' },
      { letter: 'A+', point: 9,  range: '70–79'  },
      { letter: 'A',  point: 8,  range: '60–69'  },
      { letter: 'B+', point: 7,  range: '55–59'  },
      { letter: 'B',  point: 6,  range: '50–54'  },
      { letter: 'C',  point: 5,  range: '45–49'  },
      { letter: 'D',  point: 4,  range: '40–44'  },
      { letter: 'F',  point: 0,  range: '0–39'   },
    ],
  },
  'us-4-0': {
    name: 'Standard 4.0 Scale (Common for US, HEC Pakistan, UGC Bangladesh, BRACU, NSU, COMSATS)',
    shortName: 'Standard 4.0 Scale',
    country: 'International',
    maxGPA: 4,
    grades: [
      { letter: 'A+ / A', point: 4.00, range: '90–100' },
      { letter: 'A-',     point: 3.70, range: '85–89'  },
      { letter: 'B+',     point: 3.30, range: '80–84'  },
      { letter: 'B',      point: 3.00, range: '75–79'  },
      { letter: 'B-',     point: 2.70, range: '70–74'  },
      { letter: 'C+',     point: 2.30, range: '65–69'  },
      { letter: 'C',      point: 2.00, range: '60–64'  },
      { letter: 'C-',     point: 1.70, range: '57–59'  },
      { letter: 'D+',     point: 1.30, range: '55–56'  },
      { letter: 'D',      point: 1.00, range: '52–54'  },
      { letter: 'D-',     point: 0.70, range: '50–51'  },
      { letter: 'F',      point: 0.00, range: '0–49'   },
    ],
  },
  'pk-bd-unis': {
    name: 'HEC PK / UGC BD (NUST, LUMS, BRACU, NSU) (4.0 Scale)',
    shortName: 'HEC PK / UGC BD',
    country: 'International',
    maxGPA: 4,
    grades: [
      { letter: 'A',  point: 4.00, range: '85–100' },
      { letter: 'A-', point: 3.70, range: '80–84'  },
      { letter: 'B+', point: 3.30, range: '75–79'  },
      { letter: 'B',  point: 3.00, range: '70–74'  },
      { letter: 'B-', point: 2.70, range: '65–69'  },
      { letter: 'C+', point: 2.30, range: '61–64'  },
      { letter: 'C',  point: 2.00, range: '58–60'  },
      { letter: 'C-', point: 1.70, range: '55–57'  },
      { letter: 'D+', point: 1.30, range: '51–54'  },
      { letter: 'D',  point: 1.00, range: '50'     },
      { letter: 'F',  point: 0.00, range: '0–49'   },
    ],
  },
  'five-point': {
    name: 'Standard 5.0 GPA Scale',
    shortName: '5.0 Scale',
    country: 'International',
    maxGPA: 5,
    grades: [
      { letter: 'A+', point: 5.00, range: '90–100' },
      { letter: 'A',  point: 4.50, range: '85–89'  },
      { letter: 'B+', point: 4.00, range: '80–84'  },
      { letter: 'B',  point: 3.50, range: '75–79'  },
      { letter: 'B-', point: 3.00, range: '70–74'  },
      { letter: 'C+', point: 2.50, range: '65–69'  },
      { letter: 'C',  point: 2.00, range: '60–64'  },
      { letter: 'D',  point: 1.50, range: '50–59'  },
      { letter: 'F',  point: 0.00, range: '0–49'   },
    ],
  },
  'rgpv': {
    name: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV MP)',
    shortName: 'RGPV MP',
    country: 'India',
    maxGPA: 10,
    grades: [
      { letter: 'A+', point: 10, range: '91–100' },
      { letter: 'A',  point: 9,  range: '81–90'  },
      { letter: 'B+', point: 8,  range: '71–80'  },
      { letter: 'B',  point: 7,  range: '61–70'  },
      { letter: 'C+', point: 6,  range: '51–60'  },
      { letter: 'C',  point: 5,  range: '41–50'  },
      { letter: 'D',  point: 4,  range: '40'     },
      { letter: 'F',  point: 0,  range: '0–39'   },
    ],
  },
  'iet-davv': {
    name: 'IET DAVV Indore (Devi Ahilya Vishwavidyalaya)',
    shortName: 'IET DAVV Indore',
    country: 'India',
    maxGPA: 10,
    grades: [
      { letter: 'O',  point: 10, range: '90–100' },
      { letter: 'A+', point: 9,  range: '80–89'  },
      { letter: 'A',  point: 8,  range: '70–79'  },
      { letter: 'B+', point: 7,  range: '60–69'  },
      { letter: 'B',  point: 6,  range: '50–59'  },
      { letter: 'C',  point: 5,  range: '40–49'  },
      { letter: 'P',  point: 4,  range: '35–39'  },
      { letter: 'F',  point: 0,  range: '0–34'   },
    ],
  },
  'aus-7-0': {
    name: 'Standard 7.0 GPA Scale (Common for Australia)',
    shortName: 'Australian 7.0 Scale',
    country: 'Australia',
    maxGPA: 7,
    grades: [
      { letter: 'HD', point: 7.0, range: '85–100' },
      { letter: 'D',  point: 6.0, range: '75–84'  },
      { letter: 'C',  point: 5.0, range: '65–74'  },
      { letter: 'P',  point: 4.0, range: '50–64'  },
      { letter: 'F',  point: 0.0, range: '0–49'   },
    ],
  },
  'can-4-33': {
    name: 'Standard 4.33 GPA Scale (Common for Canada & SFU)',
    shortName: 'Canada 4.33 Scale',
    country: 'Canada',
    maxGPA: 4.33,
    grades: [
      { letter: 'A+', point: 4.33, range: '90–100' },
      { letter: 'A',  point: 4.00, range: '85–89'  },
      { letter: 'A-', point: 3.67, range: '80–84'  },
      { letter: 'B+', point: 3.33, range: '77–79'  },
      { letter: 'B',  point: 3.00, range: '73–76'  },
      { letter: 'B-', point: 2.67, range: '70–72'  },
      { letter: 'C+', point: 2.33, range: '67–69'  },
      { letter: 'C',  point: 2.00, range: '63–66'  },
      { letter: 'C-', point: 1.67, range: '60–62'  },
      { letter: 'D',  point: 1.00, range: '50–59'  },
      { letter: 'F',  point: 0.00, range: '0–49'   },
    ],
  },
  'asia-4-5': {
    name: 'Standard 4.5 GPA Scale (Common for South Korea, Taiwan & East Asia)',
    shortName: 'East Asia 4.5 Scale',
    country: 'International',
    maxGPA: 4.5,
    grades: [
      { letter: 'A+', point: 4.50, range: '95–100' },
      { letter: 'A0', point: 4.00, range: '90–94'  },
      { letter: 'B+', point: 3.50, range: '85–89'  },
      { letter: 'B0', point: 3.00, range: '80–84'  },
      { letter: 'C+', point: 2.50, range: '75–79'  },
      { letter: 'C0', point: 2.00, range: '70–74'  },
      { letter: 'D+', point: 1.50, range: '65–69'  },
      { letter: 'D0', point: 1.00, range: '60–64'  },
      { letter: 'F',  point: 0.00, range: '0–59'   },
    ],
  },
};

/* ─────────────────────────────────────────────
 * Conversion rules for CGPA ↔ Percentage
 * ───────────────────────────────────────────── */
export const conversionRules = {
  'cbse-ugc-india': {
    name: 'CBSE / UGC India',
    shortName: 'CBSE / UGC India',
    maxGPA: 10,
    type: 'multiply',
    factor: 9.5,
    formula: 'Percentage = CGPA × 9.5',
    reverseFormula: 'CGPA = Percentage ÷ 9.5',
    note: 'Official CBSE formula approved by UGC India.',
  },
  'icse-board': {
    name: 'ICSE Board (Class 10)',
    shortName: 'ICSE Board',
    maxGPA: 10,
    type: 'multiply',
    factor: 9.5,
    formula: 'Percentage = GPA × 9.5',
    reverseFormula: 'GPA = Percentage ÷ 9.5',
    note: 'ICSE / ISC Board percentage conversion rule.',
  },
  'standard-10-point': {
    name: 'Standard 10-Point Scale (VIT, SRM, KTU, AKTU, Anna Univ, JNTU, SPPU, GGSIPU)',
    shortName: 'Standard 10-Point Scale',
    maxGPA: 10,
    type: 'multiply',
    factor: 10,
    formula: 'Percentage = CGPA × 10',
    reverseFormula: 'CGPA = Percentage ÷ 10',
    note: 'Standard 10-point scale conversion (Percentage = CGPA × 10).',
  },
  'mumbai-university': {
    name: 'Mumbai University',
    shortName: 'Mumbai University',
    maxGPA: 10,
    type: 'linear',
    a: 7.1,
    b: 11,
    formula: 'Percentage = (7.1 × CGPA) + 11',
    reverseFormula: 'CGPA = (Percentage − 11) ÷ 7.1',
    note: 'Mumbai University official conversion formula.',
  },
  'us-4-0': {
    name: 'Standard 4.0 Scale (US, HEC Pakistan, UGC BD, BRACU, NSU, COMSATS, etc.)',
    shortName: 'Standard 4.0 Scale',
    maxGPA: 4,
    type: 'multiply',
    factor: 25,
    formula: 'Percentage = CGPA × 25',
    reverseFormula: 'CGPA = Percentage ÷ 25',
    note: 'Standard 4.0 scale conversion.',
  },
  'pk-bd-unis': {
    name: 'HEC PK / UGC BD (NUST, LUMS, BRACU, NSU)',
    shortName: 'HEC PK / UGC BD',
    maxGPA: 4,
    type: 'multiply',
    factor: 25,
    formula: 'Percentage = CGPA × 25',
    reverseFormula: 'CGPA = Percentage ÷ 25',
    note: 'Standard 4.0 scale conversion used by HEC PK & UGC BD universities.',
  },
  'five-point': {
    name: 'Standard 5.0 Scale',
    shortName: 'Standard 5.0 Scale',
    maxGPA: 5,
    type: 'multiply',
    factor: 20,
    formula: 'Percentage = CGPA × 20',
    reverseFormula: 'CGPA = Percentage ÷ 20',
    note: 'Standard 5.0 scale conversion.',
  },
  'rgpv': {
    name: 'RGPV MP',
    shortName: 'RGPV MP',
    maxGPA: 10,
    type: 'multiply',
    factor: 10,
    formula: 'Percentage = CGPA × 10',
    reverseFormula: 'CGPA = Percentage ÷ 10',
    note: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya official conversion formula.',
  },
  'iet-davv': {
    name: 'IET DAVV Indore',
    shortName: 'IET DAVV Indore',
    maxGPA: 10,
    type: 'linear',
    a: 10,
    b: -5,
    formula: 'Percentage = (CGPA − 0.5) × 10',
    reverseFormula: 'CGPA = (Percentage ÷ 10) + 0.5',
    note: 'IET DAVV Indore official conversion formula.',
  },
  'aus-7-0': {
    name: 'Australian 7.0 Scale',
    shortName: 'Australian 7.0 Scale',
    maxGPA: 7,
    type: 'multiply',
    factor: 14.28,
    formula: 'Percentage = CGPA × 14.28',
    reverseFormula: 'CGPA = Percentage ÷ 14.28',
    note: 'Standard Australian 7-point scale conversion.',
  },
  'can-4-33': {
    name: 'Canada 4.33 Scale',
    shortName: 'Canada 4.33 Scale',
    maxGPA: 4.33,
    type: 'multiply',
    factor: 23.09,
    formula: 'Percentage = CGPA × 23.09',
    reverseFormula: 'CGPA = Percentage ÷ 23.09',
    note: 'Standard 4.33 scale conversion.',
  },
  'asia-4-5': {
    name: 'East Asia 4.5 Scale',
    shortName: 'East Asia 4.5 Scale',
    maxGPA: 4.5,
    type: 'multiply',
    factor: 22.22,
    formula: 'Percentage = CGPA × 22.22',
    reverseFormula: 'CGPA = Percentage ÷ 22.22',
    note: 'Standard 4.5 scale conversion.',
  },
};

/* ─────────────────────────────────────────────
 * Helper functions
 * ───────────────────────────────────────────── */

/** Convert CGPA → Percentage using a conversion rule */
export function cgpaToPercentage(ruleId, cgpa) {
  const rule = conversionRules[ruleId];
  if (!rule) return null;

  switch (rule.type) {
    case 'multiply':
      return Math.round(cgpa * rule.factor * 100) / 100;
    case 'linear':
      return Math.round((rule.a * cgpa + rule.b) * 100) / 100;
    default:
      return Math.round(cgpa * rule.factor * 100) / 100;
  }
}

/** Convert Percentage → CGPA using a conversion rule */
export function percentageToCGPA(ruleId, percentage) {
  const rule = conversionRules[ruleId];
  if (!rule) return null;

  switch (rule.type) {
    case 'multiply':
      return Math.round((percentage / rule.factor) * 100) / 100;
    case 'linear':
      return Math.round(((percentage - rule.b) / rule.a) * 100) / 100;
    default:
      return Math.round((percentage / rule.factor) * 100) / 100;
  }
}

/** Classify a GPA result into a grade band */
export function getGradeClassification(gpa, maxGPA) {
  const ratio = gpa / maxGPA;
  if (ratio >= 0.9)  return { label: 'Outstanding', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-950', ring: '#059669' };
  if (ratio >= 0.8)  return { label: 'Excellent',    color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-950', ring: '#059669' };
  if (ratio >= 0.7)  return { label: 'Very Good',    color: 'text-sky-600 dark:text-sky-400',         bg: 'bg-sky-50 dark:bg-sky-950',         ring: '#0284c7' };
  if (ratio >= 0.6)  return { label: 'Good',         color: 'text-sky-600 dark:text-sky-400',         bg: 'bg-sky-50 dark:bg-sky-950',         ring: '#0284c7' };
  if (ratio >= 0.5)  return { label: 'Average',      color: 'text-amber-600 dark:text-amber-400',     bg: 'bg-amber-50 dark:bg-amber-950',     ring: '#d97706' };
  if (ratio >= 0.4)  return { label: 'Below Average', color: 'text-red-600 dark:text-red-400',        bg: 'bg-red-50 dark:bg-red-950',         ring: '#dc2626' };
  return              { label: 'Fail',          color: 'text-red-600 dark:text-red-400',        bg: 'bg-red-50 dark:bg-red-950',         ring: '#dc2626' };
}

/** Get grade letter for a given GPA value from a grading system */
export function getGradeLetter(systemId, gpa) {
  const system = gradingSystems[systemId];
  if (!system) return '—';
  const sorted = [...system.grades].sort((a, b) => b.point - a.point);
  for (const g of sorted) {
    if (gpa >= g.point) return g.letter;
  }
  return 'F';
}
