import CollectionsPageContent from '@/components/CollectionsPageContent';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Our Collections | StyleFab',
  description: 'Explore our premium fabric collections including Donna Azzura, The Wool Story, and The Linen Folk.',
};

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <CollectionsPageContent />
      <Footer />
    </main>
  );
}
