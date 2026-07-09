import { Metadata } from 'next'

export const baseMetadata: Metadata = {
  title: 'StyleFab Private Limited | Premium Menswear Fabrics',
  description: 'StyleFab Private Limited is a diversified textile enterprise dedicated to creating premium fabric solutions for the global apparel industry, built on a strong foundation of quality and innovation.',
  generator: 'Next.js',
  applicationName: 'StyleFab',
  keywords: [
    'premium fabrics',
    'menswear',
    'suiting fabrics',
    'textile manufacturer',
    'poly-viscose blends',
    'woven fabrics',
    'StyleFab',
  ],
  authors: [
    {
      name: 'StyleFab Private Limited',
      url: 'https://stylefab.com',
    },
  ],
  creator: 'StyleFab Private Limited',
  publisher: 'StyleFab Private Limited',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stylefab.com',
    title: 'StyleFab Private Limited | Premium Menswear Fabrics',
    description: 'StyleFab Private Limited is a diversified textile enterprise dedicated to creating premium fabric solutions for the global apparel industry.',
    images: [
      {
        url: 'https://stylefab.com/logoNew.png',
        width: 1200,
        height: 630,
        alt: 'StyleFab Private Limited',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StyleFab Private Limited',
    description: 'StyleFab Private Limited is a diversified textile enterprise dedicated to creating premium fabric solutions for the global apparel industry.',
    creator: '@stylefab',
    images: ['https://stylefab.com/logoNew.png'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://stylefab.com',
  },
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'StyleFab Private Limited',
  url: 'https://stylefab.com',
  logo: 'https://stylefab.com/logoNew.png',
  description:
    'Premium menswear fabric manufacturer serving fashion brands and garment manufacturers globally.',
  sameAs: [
    'https://www.linkedin.com/company/stylefab',
    'https://twitter.com/stylefab',
    'https://www.facebook.com/stylefab',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    telephone: '+919619808222',
    email: 'Rohitash.jindal@stylefab.Co.in',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '509, Corporate Annexe, Sonawala Road',
    addressLocality: 'Goregaon East, Mumbai',
    addressRegion: 'MH',
    postalCode: '400063',
    addressCountry: 'IN',
  },
}

export const schemaMarkup = (pageType: 'home' | 'about' | 'service') => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': pageType === 'home' ? 'WebSite' : pageType === 'about' ? 'AboutPage' : 'Service',
    name: 'StyleFab Private Limited',
    url: 'https://stylefab.com',
    creator: {
      '@type': 'Organization',
      name: 'StyleFab Private Limited',
    },
  }

  return baseSchema
}
