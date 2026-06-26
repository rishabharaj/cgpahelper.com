/**
 * Grading systems data for CGPA Helper
 * Covers standard and common grading scales for college students.
 */

export const gradingSystems = {
  'us-4-0': {
    name: 'U.S. and International Grading Systems (Standard 4.0 Scale)',
    shortName: 'U.S. / International (4.0)',
    country: 'United States',
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
  'cbse-ugc-india': {
    name: 'UGC India / VIT / SRM / Mumbai University (Standard 10-point Scale)',
    shortName: 'UGC / Indian Unis (10.0)',
    country: 'India',
    maxGPA: 10,
    grades: [
      { letter: 'O / S',  point: 10,  range: '90–100' },
      { letter: 'A+',     point: 9,   range: '80–89'  },
      { letter: 'A',      point: 8,   range: '70–79'  },
      { letter: 'B+',     point: 7,   range: '60–69'  },
      { letter: 'B',      point: 6,   range: '50–59'  },
      { letter: 'C',      point: 5,   range: '45–49'  },
      { letter: 'D / P',  point: 4,   range: '40–44'  },
      { letter: 'F',      point: 0,   range: '0–39'   },
    ],
  },
  'icse-board': {
    name: 'ICSE / ISC Board 9-Point Scale',
    shortName: 'ICSE Board (10.0)',
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
  'pk-bd-unis': {
    name: 'HEC PK / UGC BD (NUST, LUMS, BRACU, NSU) (4.0 Scale)',
    shortName: 'HEC PK / UGC BD (4.0)',
    country: 'Pakistan / Bangladesh',
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
    shortName: 'Standard 5.0 (5.0)',
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
    shortName: 'RGPV MP (10.0)',
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
  'aus-7-0': {
    name: 'Standard 7.0 GPA Scale (Common for Australia)',
    shortName: 'Australia (7.0)',
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
    shortName: 'Canada (4.33)',
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
    shortName: 'East Asia (4.5)',
    country: 'East Asia',
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
  'ects': {
    name: 'European ECTS / Nigeria 5.0 GPA Scale',
    shortName: 'ECTS / Nigeria (5.0)',
    country: 'Europe / Nigeria',
    maxGPA: 5,
    grades: [
      { letter: 'A', point: 5.0, range: '90–100' },
      { letter: 'B', point: 4.0, range: '80–89'  },
      { letter: 'C', point: 3.0, range: '70–79'  },
      { letter: 'D', point: 2.0, range: '60–69'  },
      { letter: 'E', point: 1.0, range: '50–59'  },
      { letter: 'F', point: 0.0, range: '0–49'   },
    ],
  },
  'uk-honours': {
    name: 'United Kingdom & South Africa Honours Degree / Class Classification',
    shortName: 'UK & SA Honours (4.0)',
    country: 'United Kingdom / South Africa',
    maxGPA: 4,
    grades: [
      { letter: 'First Class (1st)', point: 4.0, range: '70–100' },
      { letter: 'Upper Second / Second Class Div 1 (2:1)', point: 3.0, range: '60–69'  },
      { letter: 'Lower Second / Second Class Div 2 (2:2)', point: 2.0, range: '50–59'  },
      { letter: 'Third Class / Pass (3rd)', point: 1.0, range: '40–49'  },
      { letter: 'Fail', point: 0.0, range: '0–34'   },
    ],
  },
  'sg-5-0': {
    name: 'Singapore & Saudi Arabia 5.0 GPA Scale',
    shortName: 'Singapore / Saudi (5.0)',
    country: 'Singapore / Saudi Arabia',
    maxGPA: 5,
    grades: [
      { letter: 'A+ / A', point: 5.0, range: '80–100' },
      { letter: 'A-',     point: 4.5, range: '75–79'  },
      { letter: 'B+',     point: 4.0, range: '70–74'  },
      { letter: 'B',      point: 3.5, range: '65–69'  },
      { letter: 'B-',     point: 3.0, range: '60–64'  },
      { letter: 'C+',     point: 2.5, range: '55–59'  },
      { letter: 'C',      point: 2.0, range: '50–54'  },
      { letter: 'D+',     point: 1.5, range: '45–49'  },
      { letter: 'D',      point: 1.0, range: '40–44'  },
      { letter: 'F',      point: 0.0, range: '0–39'   },
    ],
  },
  'nz-9-0': {
    name: 'New Zealand 9.0 GPA Scale',
    shortName: 'New Zealand (9.0)',
    country: 'New Zealand',
    maxGPA: 9,
    grades: [
      { letter: 'A+', point: 9.0, range: '85–100' },
      { letter: 'A',  point: 8.0, range: '80–84'  },
      { letter: 'A-', point: 7.0, range: '75–79'  },
      { letter: 'B+', point: 6.0, range: '70–74'  },
      { letter: 'B',  point: 5.0, range: '65–69'  },
      { letter: 'B-', point: 4.0, range: '60–64'  },
      { letter: 'C+', point: 3.0, range: '55–59'  },
      { letter: 'C',  point: 2.0, range: '50–54'  },
      { letter: 'C-', point: 1.0, range: '40–49'  },
      { letter: 'D / E / F', point: 0.0, range: '0–39' },
    ],
  },
  'my-4-0': {
    name: 'Nepal & Malaysia 4.0 GPA Scale',
    shortName: 'Nepal / Malaysia (4.0)',
    country: 'Nepal / Malaysia',
    maxGPA: 4,
    grades: [
      { letter: 'A',  point: 4.00, range: '80–100' },
      { letter: 'A-', point: 3.67, range: '75–79'  },
      { letter: 'B+', point: 3.33, range: '70–74'  },
      { letter: 'B',  point: 3.00, range: '65–69'  },
      { letter: 'B-', point: 2.67, range: '60–64'  },
      { letter: 'C+', point: 2.33, range: '55–59'  },
      { letter: 'C',  point: 2.00, range: '50–54'  },
      { letter: 'C-', point: 1.67, range: '45–49'  },
      { letter: 'D+', point: 1.33, range: '40–44'  },
      { letter: 'D',  point: 1.00, range: '35–39'  },
      { letter: 'F',  point: 0.00, range: '0–34'   },
    ],
  },

};

/* ─────────────────────────────────────────────
 * Conversion rules for CGPA ↔ Percentage
 * ───────────────────────────────────────────── */
export const conversionRules = {
  'us-4-0': {
    name: 'U.S. and International Grading Systems (Standard 4.0 Scale)',
    shortName: 'U.S. and International Grading Systems',
    maxGPA: 4,
    type: 'multiply',
    factor: 25,
    formula: 'Percentage = CGPA × 25',
    reverseFormula: 'CGPA = Percentage ÷ 25',
    note: 'Standard 4.0 scale conversion.',
  },
  'cbse-ugc-india': {
    name: 'UGC India',
    shortName: 'UGC India',
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

/** Get percentage midpoint for a grade */
export function getGradePercent(rangeStr, point, maxGPA) {
  if (!rangeStr) return (point / maxGPA) * 100;
  const clean = rangeStr.replace(/[–—]/g, '-').trim();
  const parts = clean.split('-');
  if (parts.length === 2) {
    const start = parseFloat(parts[0]);
    const end = parseFloat(parts[1]);
    if (!isNaN(start) && !isNaN(end)) {
      return (start + end) / 2;
    }
  }
  const singleVal = parseFloat(clean);
  if (!isNaN(singleVal)) return singleVal;
  return (point / maxGPA) * 100;
}

/** Convert a course grade from one system to a target system */
export function convertGrade(sourceSystemId, sourceGradeLetter, targetSystemId) {
  const sourceSystem = gradingSystems[sourceSystemId];
  const targetSystem = gradingSystems[targetSystemId];
  if (!sourceSystem || !targetSystem) return null;

  const sourceGrade = sourceSystem.grades.find(g => g.letter === sourceGradeLetter);
  if (!sourceGrade) return null;

  const pct = getGradePercent(sourceGrade.range, sourceGrade.point, sourceSystem.maxGPA);

  const targetGradesWithStart = targetSystem.grades.map(g => {
    const rangeClean = g.range.replace(/[–—]/g, '-').trim();
    const parts = rangeClean.split('-');
    const start = parts.length > 0 ? parseFloat(parts[0]) : 0;
    return { ...g, start: isNaN(start) ? 0 : start };
  }).sort((a, b) => b.start - a.start);

  let matchedGrade = targetGradesWithStart.find(g => pct >= g.start);
  if (!matchedGrade) {
    matchedGrade = targetGradesWithStart[targetGradesWithStart.length - 1];
  }

  // If source grade is a pass (point > 0) but target maps to a fail (point == 0),
  // upgrade to the lowest passing grade in target
  if (sourceGrade.point > 0 && matchedGrade.point === 0) {
    const passingGrades = targetGradesWithStart.filter(g => g.point > 0);
    if (passingGrades.length > 0) {
      matchedGrade = passingGrades[passingGrades.length - 1];
    }
  }

  // If source grade is a fail (point == 0), ensure target is a fail
  if (sourceGrade.point === 0) {
    const failGrades = targetGradesWithStart.filter(g => g.point === 0);
    if (failGrades.length > 0) {
      matchedGrade = failGrades[0];
    }
  }

  return matchedGrade;
}
