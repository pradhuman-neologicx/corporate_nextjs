import { Metadata } from 'next';
import BrandCollectionContent from '@/components/BrandCollectionContent';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const brands = {
    'donna-azzura': 'Donna Azzura',
    'the-wool-story': 'The Wool Story',
    'the-linen-folk': 'The Linen Folk',
  };

  const title = brands[params.slug as keyof typeof brands];
  
  if (!title) {
    return { title: 'Collection Not Found' };
  }

  return {
    title: `${title} | StyleFab Collections`,
    description: `Explore the exclusive ${title} fabric collection by StyleFab.`,
  };
}

export default function BrandCollectionPage({ params }: { params: { slug: string } }) {
  const validSlugs = ['donna-azzura', 'the-wool-story', 'the-linen-folk'];
  
  if (!validSlugs.includes(params.slug)) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <BrandCollectionContent slug={params.slug} />
      <Footer />
    </main>
  );
}
