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
    description: 'A complete visual identity that positions your business as a credible, memorable brand — from logo and color system to full brand guidelines.',
    price: 'Starting at $1,800',
    timeline: '2–3 weeks',
    features: [
      'Custom logo & wordmark',
      'Color palette & typography system',
      'Brand guidelines document (PDF)',
      'Business stationery templates',
      'Social media profile kit',
      'Source files (AI, EPS, PNG, SVG)',
    ],
  },
  {
    id: 'illustration',
    title: 'Custom Illustration',
    description: 'Tailored illustrations for campaigns, editorial, packaging, and digital products — designed to communicate your message with originality and impact.',
    price: 'Starting at $600',
    timeline: '1–2 weeks',
    features: [
      'Custom art direction & style exploration',
      '2 rounds of revisions included',
      'High-resolution raster & vector formats',
      'Full commercial usage rights',
      'Source files delivered',
      'Scalable for multi-asset campaigns',
    ],
  },
  {
    id: 'visual-design',
    title: 'Visual Design',
    description: 'Polished marketing collateral — ad creatives, social media assets, packaging, and presentations — that maintain brand consistency across every touchpoint.',
    price: 'Starting at $900',
    timeline: '1–2 weeks',
    features: [
      'Campaign visual system & templates',
      'Social media asset packs (8–12 pieces)',
      'Print-ready files (CMYK + bleed)',
      'Presentation deck design',
      'Multi-format delivery',
      'Style guide for future consistency',
    ],
  },
];
