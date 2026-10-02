// ─────────────────────────────────────────────────────────────
// HOME PAGE SLIDER — edit this file to change the 3 slides.
//
// image : path inside /public/images/slides/  (e.g. '/images/slides/slide-1.jpg')
//         Replace the file, or point to a new filename.
//         Recommended: 1920×1080 or larger, landscape, JPG/WebP, under ~400 KB.
// alt   : short description of the image for accessibility/SEO.
// You can add or remove slides — the slider adapts to any number (2–6 works best).
// ─────────────────────────────────────────────────────────────
export interface HeroSlide {
  image: string
  alt: string
  eyebrow: string
  title: string
  text: string
  ctaLabel: string
  ctaTo: string
  secondaryLabel?: string
  secondaryTo?: string
}

export const HERO_AUTOPLAY_MS = 6000

export const heroSlides: HeroSlide[] = [
  {
    image: '/images/slides/Slide1.jpg',
    alt: '3D reinforcement model of a beam-column junction with colour-coded bars',
    eyebrow: 'REBAR DETAILING',
    title: 'Rebar detailing that moves construction forward.',
    text: 'Precision reinforcement detailing, 3D rebar modeling and fabrication-ready documentation for modern construction projects.',
    ctaLabel: 'Request a Quote',
    ctaTo: '/contact',
    secondaryLabel: 'Explore Our Services',
    secondaryTo: '/services',
  },
  {
    image: '/images/slides/Slide2.jpg',
    alt: 'Placeholder reinforcement drawing background',
    eyebrow: '3D REBAR MODELING & BIM',
    title: 'Coordinated 3D models, built to be constructed.',
    text: 'Reinforcement modeling with clash detection and constructability review before anything reaches the fabricator.',
    ctaLabel: 'See Our Technology',
    ctaTo: '/technology',
  },
  {
    image: '/images/slides/Slide3.jpg',
    alt: 'Placeholder reinforcement cage drawing background',
    eyebrow: 'SHOP DRAWINGS & BBS',
    title: 'Fabrication-ready drawings and bar bending schedules.',
    text: 'Clear placing drawings and schedules — bar marks, shapes, lengths, quantities and weights — ready for the shop and the site.',
    ctaLabel: 'View Our Process',
    ctaTo: '/process',
  },
]
