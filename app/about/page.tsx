import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AboutPageContent from '@/components/AboutPageContent'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: 'About Stylefab | Quality and Passion',
  description: 'Stylefab Private Limited offers the widest range of high quality fabrics, supplying 200,000 meters a month for corporate wear and uniforms.',
  openGraph: {
    title: 'About Stylefab Private Limited',
    description: 'Weighing Quality and Passion in Every Thread',
    type: 'website',
  },
}

export default function About() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <AboutPageContent />
      <CtaSection />
      <Footer />
    </main>
  )
}
