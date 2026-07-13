import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import SectionWrapper from '@/components/SectionWrapper'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import FaqSection from '@/components/FaqSection'
import CtaSection from '@/components/CtaSection'
import AboutSection from '@/components/AboutSection'
import BenefitsSection from '@/components/BenefitsSection'
import Footer from '@/components/Footer'
import { Trophy, Headphones, Package, ArrowUpRight, Lightbulb, Users, BarChart3, Plus, Play, CheckCircle2, TrendingUp, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'STYLEFAB PRIVATE LIMITED | Premium Menswear Fabrics',
  description: 'StyleFab Private Limited is a diversified textile enterprise dedicated to creating premium fabric solutions for the global apparel industry.',
  openGraph: {
    title: 'STYLEFAB PRIVATE LIMITED | Premium Menswear Fabrics',
    description: 'StyleFab Private Limited is a diversified textile enterprise dedicated to creating premium fabric solutions for the global apparel industry.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STYLEFAB PRIVATE LIMITED | Premium Menswear Fabrics',
    description: 'StyleFab Private Limited is a diversified textile enterprise dedicated to creating premium fabric solutions for the global apparel industry.',
  },
}

export default function Home() {
  const products = [
    {
      iconName: 'Layers',
      title: 'Wool & Wool Blends',
      description:
        'Premium wool and wool-blended fabrics offering superior warmth, durability, and a sophisticated drape for formal wear.',
    },
    {
      iconName: 'Wind',
      title: '100% Pure Linen',
      description:
        'Natural, highly breathable pure linen fabrics that provide exceptional comfort and a distinctively elegant texture.',
    },
    {
      iconName: 'Activity',
      title: 'P/V Lycra Blends',
      description:
        'Premium stretch fabrics offering durability, comfort, fit and complete freedom of movement.',
    },
    {
      iconName: 'Droplets',
      title: 'Poly-Viscose (T/R) Blends',
      description:
        'A versatile 65/35 mix delivering improved comfort, high durability, colour fastness and easy care.',
    },
    {
      iconName: 'ShieldCheck',
      title: 'Performance Finishes',
      description:
        'Advanced treatments including Teflon® water repellent finishes and anti-odour Nano technology.',
    },
    {
      iconName: 'Palette',
      title: 'Fibre Dyed Fabrics',
      description:
        'Fabrics dyed at the fibre stage for excellent continuity, deep penetration and high colour fastness.',
    },
  ]




  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AboutSection />
      <SectionWrapper
        title="Our Products"
        subtitle="High-quality fabrics designed for modern corporate wear and uniforms"
        className="bg-background"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ServiceCard
              key={index}
              iconName={product.iconName}
              title={product.title}
              description={product.description}
              index={index}
            />
          ))}
        </div>
      </SectionWrapper>

      <BenefitsSection />

      <FaqSection />

      <CtaSection />

      <Footer />
    </main>
  )
}
