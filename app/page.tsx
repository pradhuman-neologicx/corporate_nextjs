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
  title: 'STYLEFAB PRIVATE LIMITED',
  description: 'Transform your business with innovative enterprise solutions designed for modern companies. 500+ clients trust our expertise.',
  openGraph: {
    title: 'Premium Corporate Solutions',
    description: 'Transform your business with innovative enterprise solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Corporate Solutions',
    description: 'Transform your business with innovative enterprise solutions',
  },
}

export default function Home() {
  const products = [
    {
      iconName: 'Droplets',
      title: 'Poly-Viscose Blends',
      description:
        'A versatile 65/35 mix delivering improved comfort, high durability, colour fastness and easy care.',
    },
    {
      iconName: 'Wind',
      title: 'P/V Linen Blends',
      description:
        'Machine washable and easy-care blends that retain linen\'s natural breathability and comfort.',
    },
    {
      iconName: 'Activity',
      title: 'P/V Lycra Blends',
      description:
        'Premium stretch fabrics offering durability, comfort, fit and complete freedom of movement.',
    },
    {
      iconName: 'Leaf',
      title: 'Poly-Bamboo Blends',
      description:
        'Eco-friendly blends featuring very high absorbency and natural, long-lasting bacterial resistance.',
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
