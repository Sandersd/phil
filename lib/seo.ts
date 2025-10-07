export const siteConfig = {
  name: 'PhilsPhabulousPhinds',
  description: 'Trusted appraisals and remarkable antique finds. Expert valuations for estates, insurance, and collectors.',
  url: 'https://philsphabulousphinds.com',
  ogImage: '/og-image.jpg',
  links: {
    instagram: 'https://instagram.com/philsphabulousphinds',
    facebook: 'https://facebook.com/philsphabulousphinds',
  },
}

export const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'PhilsPhabulousPhinds',
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: '555-0123',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  priceRange: '$$',
  servesCuisine: 'Antiques & Appraisals',
  openingHours: 'Mo-Fr 09:00-18:00',
  image: siteConfig.ogImage,
}