import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import TermsContent from '@/components/TermsContent'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Stylefab Private Limited',
  description: 'Terms and Conditions for Stylefab Private Limited. Read our rules and guidelines for using our services.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <TermsContent />
      <Footer />
    </main>
  )
}
