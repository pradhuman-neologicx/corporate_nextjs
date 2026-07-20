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
      { image: `/Fabric Collection/Donna Azzura/(A)76% Polyester, 22% Viscose, 2% Lycra.jpg`, name: `(A)76% Polyester, 22% Viscose, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(AA)80% Cotton, 18% Polyester, 2% Lycra.jpg`, name: `(AA)80% Cotton, 18% Polyester, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(B)76% Polyester, 22% Viscose, 2% Lycra.jpg`, name: `(B)76% Polyester, 22% Viscose, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(BB)80% Cotton, 18% Polyester, 2% Lycra.jpg`, name: `(BB)80% Cotton, 18% Polyester, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(C)76% Polyester, 22% Viscose, 2% Lycra.jpg`, name: `(C)76% Polyester, 22% Viscose, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(CC)80% Cotton, 18% Polyester, 2% Lycra.jpg`, name: `(CC)80% Cotton, 18% Polyester, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(D)97% Cotton, 3% Lycra.jpg`, name: `(D)97% Cotton, 3% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(DD)61% Polyester, 30% Viscose, 8% Linen, 1% Lycra.jpg`, name: `(DD)61% Polyester, 30% Viscose, 8% Linen, 1% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(E)64% Polyester, 34% Viscose, 2% Lycra.jpg`, name: `(E)64% Polyester, 34% Viscose, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(EE)61% Polyester, 30% Viscose, 8% Linen, 1% Lycra.jpg`, name: `(EE)61% Polyester, 30% Viscose, 8% Linen, 1% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(F)62% Polyester, 33% Viscose, 5% Lycra.jpg`, name: `(F)62% Polyester, 33% Viscose, 5% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(FF)61% Polyester, 30% Viscose, 8% Linen, 1% Lycra.jpg`, name: `(FF)61% Polyester, 30% Viscose, 8% Linen, 1% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(G)62% Polyester, 33% Viscose, 5% Lycra.jpg`, name: `(G)62% Polyester, 33% Viscose, 5% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(GG)64% Polyester, 34% Viscose, 2% Lycra.jpg`, name: `(GG)64% Polyester, 34% Viscose, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(H)62% Polyester, 33% Viscose, 5% Lycra.jpg`, name: `(H)62% Polyester, 33% Viscose, 5% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(HH)65% Cotton, 17% Polyester, 9% Viscose, 8% Linen, 1% Lycra.jpg`, name: `(HH)65% Cotton, 17% Polyester, 9% Viscose, 8% Linen, 1% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(I)64% Polyester, 34% Viscose, 2% Lycra.jpg`, name: `(I)64% Polyester, 34% Viscose, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(II)65% Cotton, 17% Polyester, 9% Viscose, 8% Linen, 1% Lycra.jpg`, name: `(II)65% Cotton, 17% Polyester, 9% Viscose, 8% Linen, 1% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(J)62% Polyester, 33% Viscose, 5% Lycra.jpg`, name: `(J)62% Polyester, 33% Viscose, 5% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(JJ)64% Polyester, 34% Viscose, 2% Lycra.jpg`, name: `(JJ)64% Polyester, 34% Viscose, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(K)64% Polyester, 34% Viscose, 2% Lycra.jpg`, name: `(K)64% Polyester, 34% Viscose, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(KK)64% Polyester, 34% Viscose, 2% Lycra.jpg`, name: `(KK)64% Polyester, 34% Viscose, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(L)62% Polyester, 33% Viscose, 5% Lycra.jpg`, name: `(L)62% Polyester, 33% Viscose, 5% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(LL)64% Polyester, 34% Viscose, 2% Lycra.jpg`, name: `(LL)64% Polyester, 34% Viscose, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(M)62% Polyester, 33% Viscose, 5% Lycra.jpg`, name: `(M)62% Polyester, 33% Viscose, 5% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(MM)54% Polyester, 29% Viscose, 15% Linen, 2% Lycra.jpg`, name: `(MM)54% Polyester, 29% Viscose, 15% Linen, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(N)71% Polyester, 26% Viscose, 3% Lycra.jpg`, name: `(N)71% Polyester, 26% Viscose, 3% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(NN)64% Polyester, 34% Viscose, 2% Lycra.jpg`, name: `(NN)64% Polyester, 34% Viscose, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(O)71% Polyester, 26% Viscose, 3% Lycra.jpg`, name: `(O)71% Polyester, 26% Viscose, 3% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(OO)64% Polyester, 34% Viscose, 2% Lycra.jpg`, name: `(OO)64% Polyester, 34% Viscose, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(P)64% Polyester, 34% Viscose, 2% Lycra.jpg`, name: `(P)64% Polyester, 34% Viscose, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(PP)64% Polyester, 34% Viscose, 2% Lycra.jpg`, name: `(PP)64% Polyester, 34% Viscose, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(Q)64% Polyester, 34% Viscose, 2% Lycra.jpg`, name: `(Q)64% Polyester, 34% Viscose, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(QQ)84% Virgin Super Fine Merino Wool, 16% Mohair Wool.jpg`, name: `(QQ)84% Virgin Super Fine Merino Wool, 16% Mohair Wool` },
      { image: `/Fabric Collection/Donna Azzura/(R)64% Polyester, 34% Viscose, 2% Lycra - Copy.jpg`, name: `(R)64% Polyester, 34% Viscose, 2% Lycra - Copy` },
      { image: `/Fabric Collection/Donna Azzura/(RR)86% VIRGIN WOOL 10% POLYAMIDE 4% ELASTAINE.jpg`, name: `(RR)86% VIRGIN WOOL 10% POLYAMIDE 4% ELASTAINE` },
      { image: `/Fabric Collection/Donna Azzura/(S)65% Polyester, 35% Viscose.jpg`, name: `(S)65% Polyester, 35% Viscose` },
      { image: `/Fabric Collection/Donna Azzura/(SS)46% Virgin Wool, 54% Belgian Linen.jpg`, name: `(SS)46% Virgin Wool, 54% Belgian Linen` },
      { image: `/Fabric Collection/Donna Azzura/(T)64% Polyester, 34% Viscose, 2% Lycra.jpg`, name: `(T)64% Polyester, 34% Viscose, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(TT)28% Terylene, 24% Acrylic, 38% Cotton, 10% Polyamide.jpg`, name: `(TT)28% Terylene, 24% Acrylic, 38% Cotton, 10% Polyamide` },
      { image: `/Fabric Collection/Donna Azzura/(U)58% Wool, 40% Polyester, 2% Lycra.jpg`, name: `(U)58% Wool, 40% Polyester, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(UU)64% Terylene, 34% Rayon, 2% Lycra.jpg`, name: `(UU)64% Terylene, 34% Rayon, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(V)61% Polyester, 26% Viscose, 9% Wool, 4% Lycra.jpg`, name: `(V)61% Polyester, 26% Viscose, 9% Wool, 4% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(VV)33% Terylene, 46% Cotton, 18% Rayon, 3% Lycra.jpg`, name: `(VV)33% Terylene, 46% Cotton, 18% Rayon, 3% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(W)90% Virgin Wool, 10% Silk.jpg`, name: `(W)90% Virgin Wool, 10% Silk` },
      { image: `/Fabric Collection/Donna Azzura/(X)62% Polyster, 33% Viscose, 5% Lycra.jpg`, name: `(X)62% Polyster, 33% Viscose, 5% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(XX)64% Terylene, 34% Rayon, 2% Lycra.jpg`, name: `(XX)64% Terylene, 34% Rayon, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(Y)62% Polyster, 33% Viscose, 5% Lycra.jpg`, name: `(Y)62% Polyster, 33% Viscose, 5% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(YY)64% Polyester, 34% Wool, 2% Lycra.jpg`, name: `(YY)64% Polyester, 34% Wool, 2% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(Z)62% Polyster, 33% Viscose, 5% Lycra.jpg`, name: `(Z)62% Polyster, 33% Viscose, 5% Lycra` },
      { image: `/Fabric Collection/Donna Azzura/(ZZ)86% Virgin Wool, 10% Polyamide, 4% Lycra.jpg`, name: `(ZZ)86% Virgin Wool, 10% Polyamide, 4% Lycra` }
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
      { image: `/Fabric Collection/The Wool Story/100% Virgin Super Fine Merino Wool (10).jpg`, name: `100% Virgin Super Fine Merino Wool (10)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Super Fine Merino Wool (11).jpg`, name: `100% Virgin Super Fine Merino Wool (11)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Super Fine Merino Wool (12).jpg`, name: `100% Virgin Super Fine Merino Wool (12)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Super Fine Merino Wool (13).jpg`, name: `100% Virgin Super Fine Merino Wool (13)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Super Fine Merino Wool (14).jpg`, name: `100% Virgin Super Fine Merino Wool (14)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Super Fine Merino Wool (15).jpg`, name: `100% Virgin Super Fine Merino Wool (15)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Super Fine Merino Wool (16).jpg`, name: `100% Virgin Super Fine Merino Wool (16)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Super Fine Merino Wool (17).jpg`, name: `100% Virgin Super Fine Merino Wool (17)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Super Fine Merino Wool (2).jpg`, name: `100% Virgin Super Fine Merino Wool (2)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Super Fine Merino Wool (3).jpg`, name: `100% Virgin Super Fine Merino Wool (3)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Super Fine Merino Wool (4).jpg`, name: `100% Virgin Super Fine Merino Wool (4)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Super Fine Merino Wool (5).jpg`, name: `100% Virgin Super Fine Merino Wool (5)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Super Fine Merino Wool (6).jpg`, name: `100% Virgin Super Fine Merino Wool (6)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Super Fine Merino Wool (7).jpg`, name: `100% Virgin Super Fine Merino Wool (7)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Super Fine Merino Wool (8).jpg`, name: `100% Virgin Super Fine Merino Wool (8)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Super Fine Merino Wool (9).jpg`, name: `100% Virgin Super Fine Merino Wool (9)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Super Fine Merino Wool.jpg`, name: `100% Virgin Super Fine Merino Wool` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Wool (10).jpg`, name: `100% Virgin Wool (10)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Wool (11).jpg`, name: `100% Virgin Wool (11)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Wool (2).jpg`, name: `100% Virgin Wool (2)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Wool (3).jpg`, name: `100% Virgin Wool (3)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Wool (4).jpg`, name: `100% Virgin Wool (4)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Wool (5).jpg`, name: `100% Virgin Wool (5)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Wool (6).jpg`, name: `100% Virgin Wool (6)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Wool (7).jpg`, name: `100% Virgin Wool (7)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Wool (8).jpg`, name: `100% Virgin Wool (8)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Wool (9).jpg`, name: `100% Virgin Wool (9)` },
      { image: `/Fabric Collection/The Wool Story/100% Virgin Wool.jpg`, name: `100% Virgin Wool` }
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
      { image: `/Fabric Collection/The Linen Folk/100% Linen (10).jpg`, name: `100% Linen (10)` },
      { image: `/Fabric Collection/The Linen Folk/100% Linen (11).jpg`, name: `100% Linen (11)` },
      { image: `/Fabric Collection/The Linen Folk/100% Linen (12).jpg`, name: `100% Linen (12)` },
      { image: `/Fabric Collection/The Linen Folk/100% Linen (13).jpg`, name: `100% Linen (13)` },
      { image: `/Fabric Collection/The Linen Folk/100% Linen (14).jpg`, name: `100% Linen (14)` },
      { image: `/Fabric Collection/The Linen Folk/100% Linen (15).jpg`, name: `100% Linen (15)` },
      { image: `/Fabric Collection/The Linen Folk/100% Linen (16).jpg`, name: `100% Linen (16)` },
      { image: `/Fabric Collection/The Linen Folk/100% Linen (17).jpg`, name: `100% Linen (17)` },
      { image: `/Fabric Collection/The Linen Folk/100% Linen (18).jpg`, name: `100% Linen (18)` },
      { image: `/Fabric Collection/The Linen Folk/100% Linen (19).jpg`, name: `100% Linen (19)` },
      { image: `/Fabric Collection/The Linen Folk/100% Linen (2).jpg`, name: `100% Linen (2)` },
      { image: `/Fabric Collection/The Linen Folk/100% Linen (20).jpg`, name: `100% Linen (20)` },
      { image: `/Fabric Collection/The Linen Folk/100% Linen (21).jpg`, name: `100% Linen (21)` },
      { image: `/Fabric Collection/The Linen Folk/100% Linen (22).jpg`, name: `100% Linen (22)` },
      { image: `/Fabric Collection/The Linen Folk/100% Linen (3).jpg`, name: `100% Linen (3)` },
      { image: `/Fabric Collection/The Linen Folk/100% Linen (4).jpg`, name: `100% Linen (4)` },
      { image: `/Fabric Collection/The Linen Folk/100% Linen (5).jpg`, name: `100% Linen (5)` },
      { image: `/Fabric Collection/The Linen Folk/100% Linen (6).jpg`, name: `100% Linen (6)` },
      { image: `/Fabric Collection/The Linen Folk/100% Linen (7).jpg`, name: `100% Linen (7)` },
      { image: `/Fabric Collection/The Linen Folk/100% Linen (8).jpg`, name: `100% Linen (8)` },
      { image: `/Fabric Collection/The Linen Folk/100% Linen (9).jpg`, name: `100% Linen (9)` },
      { image: `/Fabric Collection/The Linen Folk/100% Linen.jpg`, name: `100% Linen` },
      { image: `/Fabric Collection/The Linen Folk/100%linen.jpg`, name: `100%linen` },
      { image: `/Fabric Collection/The Linen Folk/45% Polyester, 25% Viscose, 30% Linen (2).jpg`, name: `45% Polyester, 25% Viscose, 30% Linen (2)` },
      { image: `/Fabric Collection/The Linen Folk/45% Polyester, 25% Viscose, 30% Linen (3).jpg`, name: `45% Polyester, 25% Viscose, 30% Linen (3)` },
      { image: `/Fabric Collection/The Linen Folk/45% Polyester, 25% Viscose, 30% Linen.jpg`, name: `45% Polyester, 25% Viscose, 30% Linen` },
      { image: `/Fabric Collection/The Linen Folk/56% Polyester, 30% Viscose, 14% Linen (2).jpg`, name: `56% Polyester, 30% Viscose, 14% Linen (2)` },
      { image: `/Fabric Collection/The Linen Folk/56% Polyester, 30% Viscose, 14% Linen (3).jpg`, name: `56% Polyester, 30% Viscose, 14% Linen (3)` },
      { image: `/Fabric Collection/The Linen Folk/56% Polyester, 30% Viscose, 14% Linen (4).jpg`, name: `56% Polyester, 30% Viscose, 14% Linen (4)` },
      { image: `/Fabric Collection/The Linen Folk/56% Polyester, 30% Viscose, 14% Linen (5).jpg`, name: `56% Polyester, 30% Viscose, 14% Linen (5)` },
      { image: `/Fabric Collection/The Linen Folk/56% Polyester, 30% Viscose, 14% Linen (6).jpg`, name: `56% Polyester, 30% Viscose, 14% Linen (6)` },
      { image: `/Fabric Collection/The Linen Folk/56% Polyester, 30% Viscose, 14% Linen (7).jpg`, name: `56% Polyester, 30% Viscose, 14% Linen (7)` },
      { image: `/Fabric Collection/The Linen Folk/56% Polyester, 30% Viscose, 14% Linen (8).jpg`, name: `56% Polyester, 30% Viscose, 14% Linen (8)` },
      { image: `/Fabric Collection/The Linen Folk/56% Polyester, 30% Viscose, 14% Linen (9).jpg`, name: `56% Polyester, 30% Viscose, 14% Linen (9)` },
      { image: `/Fabric Collection/The Linen Folk/56% Polyester, 30% Viscose, 14% Linen.jpg`, name: `56% Polyester, 30% Viscose, 14% Linen` },
      { image: `/Fabric Collection/The Linen Folk/58% Polyester, 31% Viscose, 11% Linen (2).jpg`, name: `58% Polyester, 31% Viscose, 11% Linen (2)` },
      { image: `/Fabric Collection/The Linen Folk/58% Polyester, 31% Viscose, 11% Linen.jpg`, name: `58% Polyester, 31% Viscose, 11% Linen` }
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
