import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactPageContent from '@/components/ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact Us | Stylefab Private Limited',
  description: 'Get in touch with Stylefab Private Limited. We are ready to answer your questions about our premium fabrics, pricing, and more.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <ContactPageContent />
      <Footer />
    </main>
  )
}
