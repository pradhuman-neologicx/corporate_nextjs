import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CtaSection from '@/components/CtaSection'
import ProductsPageContent from '@/components/ProductsPageContent'

export const metadata: Metadata = {
  title: 'Our Products | Stylefab Private Limited',
  description: 'Explore our premium range of high-quality fabrics including Wool Suiting, Polyester Viscose, and specialty blends.',
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <ProductsPageContent />
      <CtaSection />
      <Footer />
    </main>
  )
}
