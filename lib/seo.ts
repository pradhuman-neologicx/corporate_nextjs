import { Metadata } from 'next'

export const baseMetadata: Metadata = {
  title: 'Premium Corporate Solutions | Enterprise Services',
  description: 'Transform your business with innovative enterprise solutions designed for modern companies. 500+ clients trust our expertise.',
  generator: 'Next.js',
  applicationName: 'Premium Solutions',
  keywords: [
    'enterprise solutions',
    'digital transformation',
    'business consulting',
    'corporate services',
    'enterprise technology',
  ],
  authors: [
    {
      name: 'Premium Solutions',
      url: 'https://premium-solutions.com',
    },
  ],
  creator: 'Premium Solutions',
  publisher: 'Premium Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://premium-solutions.com',
    title: 'Premium Corporate Solutions | Enterprise Services',
    description: 'Transform your business with innovative enterprise solutions designed for modern companies.',
    images: [
      {
        url: 'https://premium-solutions.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Corporate Solutions',
    description: 'Transform your business with innovative enterprise solutions',
    creator: '@premiumbrand',
    images: ['https://premium-solutions.com/twitter-image.jpg'],
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
    canonical: 'https://premium-solutions.com',
  },
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Premium Solutions',
  url: 'https://premium-solutions.com',
  logo: 'https://premium-solutions.com/logo.png',
  description:
    'Enterprise solutions provider specializing in digital transformation and business consulting.',
  sameAs: [
    'https://www.linkedin.com/company/premium-solutions',
    'https://twitter.com/premiumbrand',
    'https://www.facebook.com/premiumbrand',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    telephone: '+1-234-567-890',
    email: 'info@premium-solutions.com',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Business Ave',
    addressLocality: 'Tech City',
    addressRegion: 'TC',
    postalCode: '12345',
    addressCountry: 'US',
  },
}

export const schemaMarkup = (pageType: 'home' | 'about' | 'service') => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': pageType === 'home' ? 'WebSite' : pageType === 'about' ? 'AboutPage' : 'Service',
    name: 'Premium Solutions',
    url: 'https://premium-solutions.com',
    creator: {
      '@type': 'Organization',
      name: 'Premium Solutions',
    },
  }

  return baseSchema
}
