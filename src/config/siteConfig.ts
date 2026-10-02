// Single source of truth for brand/company information.
// Replace placeholder values with real company details before launch.
export const siteConfig = {
  companyName: 'K Rebar Service',
  tagline: 'Precision in Every Bar. Confidence in Every Project.',
  email: 'krebar.detailing@gmail.com',
  phone: '+91 9865318720',
  address: 'Salem, Tamil Nadu, India',
  linkedin: '[YOUR LINKEDIN]',
  website: '[YOUR WEBSITE URL]',
  // Full lockup (icon + wordmark) — used in the Footer.
  logo: '/images/logo.png',
  // Icon-only crop of the same logo — used in the compact Navbar slot.
  logoMark: '/images/logo-mark.png',
  primaryColor: '#111315',
  secondaryColor: '#F28C28',
  social: {
    linkedin: '[YOUR LINKEDIN]',
    instagram: '',
    facebook: '',
  },
  stats: {
    years: '[YEARS]',
    projects: '[PROJECTS]',
    countries: '[COUNTRIES]',
  },
}

export type SiteConfig = typeof siteConfig