'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const brandsData = {
  'donna-azzura': {
    image: '/Donna_Azzura_Logo.png',
    title: 'Donna Azzura',
    subtitle: 'Affordable Luxury',
    desc: 'Created for customers who seek premium quality, refined aesthetics, and exceptional value. Designed with a contemporary approach to suiting, it offers collections combining elegant designs, dependable performance, and commercial versatility.',
    bgClass: 'bg-slate-900',
    bgImage: '/Donna_Azzura.png',
    products: [
      { image: '/products/0T1A3819.jpg.jpeg', name: 'Premium Suiting 0T1A' },
      { image: '/products/U2R (26).jpg.jpeg', name: 'Check Suiting U2R-26' },
      { image: '/products/U2R (27).jpg.jpeg', name: 'Check Suiting U2R-27' },
      { image: '/products/W1050_-_Web_03.jpg.jpeg', name: 'Textured Weave W1050' },
      { image: '/products/W1100_3.jpg.jpeg', name: 'Classic Suiting W1100' },
      { image: '/products/W1128_SECOND.jpg.jpeg', name: 'Premium Weave W1128' },
    ]
  },
  'the-wool-story': {
    image: '/The_Wool_Story_logo.png',
    title: 'The Wool Story',
    subtitle: 'Premium Wool Fabrics',
    desc: 'Dedicated to timeless elegance, exceptional craftsmanship, and refined tailoring. Inspired by the heritage of fine wool fabrics, the brand offers carefully developed collections combining luxury, comfort, and performance.',
    bgClass: 'bg-[#1a2f23]',
    bgImage: '/wool.png',
    products: [
      { image: '/products/Wool 1.jpg.jpeg', name: 'Premium Wool Blend 1' },
      { image: '/products/Wool 2.jpg.jpeg', name: 'Premium Wool Blend 2' },
      { image: '/products/Wool 3.jpg.jpeg', name: 'Premium Wool Blend 3' },
      { image: '/products/Wool 4.jpg.jpeg', name: 'Premium Wool Blend 4' },
      { image: '/products/Wool 5.jpg.jpeg', name: 'Premium Wool Blend 5' },
      { image: '/products/Wool 6.jpg.jpeg', name: 'Premium Wool Blend 6' },
    ]
  },
  'the-linen-folk': {
    image: '/The_Linen_Folk_Logo.png',
    title: 'The Linen Folk',
    subtitle: 'Premium Linen Fabrics',
    desc: 'Inspired by the beauty of natural fibres and the timeless appeal of linen. The brand brings together breathable comfort, effortless elegance, and refined craftsmanship to create versatile, contemporary, and naturally sophisticated collections.',
    bgClass: 'bg-[#4a3f35]',
    bgImage: '/linen.png',
    products: [
      { image: '/products/Linen 1.jpg.jpeg', name: 'Pure Linen Blend 1' },
      { image: '/products/Linen 2.jpg.jpeg', name: 'Pure Linen Blend 2' },
      { image: '/products/Linen 3.jpg.jpeg', name: 'Pure Linen Blend 3' },
      { image: '/products/Linen 4.jpg.jpeg', name: 'Pure Linen Blend 4' },
      { image: '/products/Linen 5.jpg.jpeg', name: 'Pure Linen Blend 5' },
      { image: '/products/Linen 6.jpg.jpeg', name: 'Pure Linen Blend 6' },
    ]
  }
};

export default function BrandCollectionContent({ slug }: { slug: string }) {
  const brand = brandsData[slug as keyof typeof brandsData];

  if (!brand) return null;

  return (
    <div className="w-full pb-24 bg-background min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-40 pb-20 mb-16 rounded-b-[3rem] overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image src={brand.bgImage} alt={brand.title} fill className="object-cover" />
          <div className={`absolute inset-0 opacity-60 ${brand.bgClass}`} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-white">
          <Link href="/collections" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Collections
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial="hidden" animate="visible" variants={fadeUp}
              className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/20 flex-shrink-0"
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <Image src={brand.image} alt={brand.title} fill className="object-contain drop-shadow-xl" />
              </div>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 drop-shadow-lg">{brand.title}</h1>
              <p className="text-xl text-white/90 font-medium mb-6 uppercase tracking-wider drop-shadow">{brand.subtitle}</p>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl drop-shadow">{brand.desc}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground">Featured Fabrics</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6"
        >
          {brand.products.map((swatch, idx) => (
            <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-border group">
              <Image
                src={swatch.image}
                alt={swatch.name}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-12">
                <p className="text-white text-sm md:text-base font-semibold text-center truncate shadow-black drop-shadow-md">
                  {swatch.name}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
