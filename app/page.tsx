import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import SectionWrapper from '@/components/SectionWrapper'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import FaqSection from '@/components/FaqSection'
import CtaSection from '@/components/CtaSection'
import AboutSection from '@/components/AboutSection'
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
      iconName: 'Scissors',
      title: 'Wool Suiting Fabric',
      description:
        'High-quality wool fabrics designed for premium corporate and institutional uniforms.',
    },
    {
      iconName: 'Droplets',
      title: 'Polyester Viscose',
      description:
        'Durable and comfortable poly-viscose blends perfect for everyday corporate wear.',
    },
    {
      iconName: 'Award',
      title: 'Polyester Wool',
      description:
        'Specialty blends combining the durability of polyester with the luxury of wool.',
    },
    {
      iconName: 'Activity',
      title: 'Viscose Elastane',
      description:
        'Flexible and comfortable fabrics crafted for dynamic, fashion-conscious producers.',
    },
    {
      iconName: 'Feather',
      title: 'Wool Elastane',
      description:
        'Premium stretchable wool fabrics designed to meet international standards.',
    },
    {
      iconName: 'Layers',
      title: 'Man Made & Blended Fabrics',
      description:
        'A wide range of pre-dominantly fibre dyed blended fabrics for men’s and women’s wear.',
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

      <FaqSection />

      <CtaSection />

      <Footer />
    </main>
  )
}
