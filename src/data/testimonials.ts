export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Al Maktoum',
    role: 'Creative Director',
    company: 'Mirage Agency',
    content: 'We\'ve worked with dozens of freelance illustrators, and the quality of work is unmatched. Understood our brief immediately, delivered ahead of schedule, and brought a creative perspective that elevated the entire campaign. Our client was thrilled.',
  },
  {
    id: 't2',
    name: 'Omar Hassan',
    role: 'Founder',
    company: 'Noor E-Commerce',
    content: 'The rebrand transformed how our customers perceive us. We saw a measurable uplift in brand recall and engagement within weeks of launching the new visuals. The process was smooth, communicative, and completely stress-free on our end.',
  },
  {
    id: 't3',
    name: 'Layla Khoury',
    role: 'Head of Design',
    company: 'Pulse Technologies',
    content: 'From pitch deck to product illustrations, delivered a cohesive visual language that made us look far more established than our Series A stage suggested. Investors specifically complimented the quality of our materials. That\'s the kind of impact you want from a designer.',
  },
];
