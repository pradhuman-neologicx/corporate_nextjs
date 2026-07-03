import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PrivacyPolicyContent from '@/components/PrivacyPolicyContent'

export const metadata: Metadata = {
  title: 'Privacy Policy | Stylefab Private Limited',
  description: 'Privacy Policy for Stylefab Private Limited. Learn how we collect, use, and protect your personal data.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <PrivacyPolicyContent />
      <Footer />
    </main>
  )
}
