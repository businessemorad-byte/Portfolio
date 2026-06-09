export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  timeline: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    description: 'A complete visual identity that positions your business as a credible, memorable brand — logo, color system, typography, and full brand guidelines.',
    price: '$199',
    timeline: '3–5 days',
    features: [
      'Custom logo & wordmark',
      'Color palette & typography system',
      'Brand guidelines document (PDF)',
      'Business stationery templates',
      'Social media profile kit',
      'Source files (AI, EPS, PNG, SVG)',
      '1 full revision cycle',
      'Fast delivery — ready in days, not weeks',
    ],
  },
  {
    id: 'illustration',
    title: 'Custom Illustration',
    description: 'Custom illustrations for campaigns, editorial, packaging, and digital products — designed to make your message stand out with originality and impact.',
    price: '$99',
    timeline: '2–4 days',
    features: [
      'Custom art direction & style exploration',
      '2 rounds of revisions included',
      'High-resolution raster & vector formats',
      'Full commercial usage rights',
      'Source files delivered',
      'Scalable for multi-asset campaigns',
      'Commercial license included',
    ],
  },
  {
    id: 'visual-design',
    title: 'Visual Design',
    description: 'Polished marketing collateral — ad creatives, social media assets, packaging, and presentations — consistent across every touchpoint.',
    price: '$79',
    timeline: '1–3 days',
    features: [
      'Campaign visual system & templates',
      'Social media asset packs (8–12 pieces)',
      'Print-ready files (CMYK + bleed)',
      'Presentation deck design',
      'Multi-format delivery',
      'Style guide for future consistency',
      'Source files included',
    ],
  },
];
