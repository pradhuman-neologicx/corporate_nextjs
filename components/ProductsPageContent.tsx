'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const swatches = [
  '/products/0T1A3819.jpg.jpeg',
  '/products/U2R (26).jpg.jpeg',
  '/products/U2R (27).jpg.jpeg',
  '/products/W1050_-_Web_03.jpg.jpeg',
  '/products/W1100_3.jpg.jpeg',
  '/products/W1128_SECOND.jpg.jpeg',
  '/products/W1147_SECOND.jpg.jpeg',
  '/products/W1156_2.jpg.jpeg',
  '/products/W1169_2.jpg.jpeg',
  '/products/W1333(1) (1).jpg.jpeg',
  '/products/W1333(1).jpg.jpeg',
  '/products/Wool 1.jpg.jpeg',
  '/products/Wool 2.jpg.jpeg',
  '/products/Wool 3.jpg.jpeg',
  '/products/Wool 4.jpg.jpeg',
  '/products/Wool 5.jpg.jpeg',
  '/products/Wool 6.jpg.jpeg',
  '/products/Wool 7.jpg.jpeg',
];

const products = [
  {
    title: 'Poly-Viscose (T/R) Blends',
    description: 'StyleFab manufactures fabrics with spun yarns having an intimate blending of polyester and viscose staple fibres. In a 65% polyester / 35% viscose mix, this versatile combination creates a wide range of applications — delivering improved comfort, durability, colour fastness and easy care.',
    features: ['Improved Comfort', 'High Durability', 'Easy Care'],
    image: '/poly_viscose_blends.png',
  },
  {
    title: 'P/V Linen Blends',
    description: 'Linen enjoys a privileged position in the fashion industry. StyleFab has developed a blend of linen with poly-viscose that makes the fabric machine washable and easy-care, while retaining linen\'s natural comfort.',
    features: ['Natural Comfort', 'Machine Washable', 'Easy-care'],
    image: '/pv_linen_blends.png',
  },
  {
    title: 'P/V Lycra (Spandex) Blends',
    description: 'Stretch fabrics are becoming synonymous with comfort. Poly-viscose fabrics blended with INVESTA Lycra® offer durability and easy care alongside style, comfort, fit and freedom of movement. Perfect for casual, formal and semi-formal segments.',
    features: ['Stretch & Flexibility', 'Shape Retention', 'Casual & Formal Wear'],
    image: '/pv_lycra_blends.png',
  },
  {
    title: 'Poly-Bamboo Blends',
    description: 'Bamboo fibre is made from bamboo timber matured in the forest for at least four years. The hollowness of the fibre contributes to very high absorbency and enables it to hold dyes effectively. Being naturally anti-bacterial, this blend offers long-lasting bacterial resistance.',
    features: ['High Absorbency', 'Anti-bacterial', 'Eco-friendly'],
    image: '/poly_bamboo_blends.png',
  },
  {
    title: 'Performance Finishes',
    description: 'We offer advanced nano-technology treatments including Teflon® Water, Oil & Stain Repellent Finish by Huntsman USA, which forms an invisible molecular shield around the fibres without affecting breathability. Other finishes include anti-bacterial, anti-fungal, UV protection, and moisture management.',
    features: ['Stain Repellent', 'UV Protection', 'Odour Control'],
    image: '/performance_finishes.png',
  },
  {
    title: 'Fibre Dyed Fabrics',
    description: 'Fibre dyeing matches and dyes the required colour at the fibre stage itself, producing pre-dyed fabrics with a large dye-lot size (10 to 30 km). This ensures excellent continuity, deep penetration of dye, and superior colour fastness compared to piece-dyed fabrics.',
    features: ['High Colour Fastness', 'Melange Shades', 'Large Dye-lots'],
    image: '/fibre_dyed_fabrics.png',
  },
];

export default function ProductsPageContent() {
  return (
    <div className="w-full pt-32 pb-24 bg-background">
      {/* Brand Images */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Premium Fabric Gallery
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore our curated selection of signature fabric swatches, showcasing a diverse range of meticulously crafted suiting textures, weaves, and premium patterns.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-3  gap-4 lg:gap-6"
        >
          {swatches.map((swatch, idx) => (
            <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-border group">
              <Image
                src={swatch}
                alt={`Fabric Swatch ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-20 lg:mt-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight leading-[1.1] mb-6">
            Explore Our <span className="text-primary">Products</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            All qualities are available in a wide range of constructions — plain, gabardine, drill, venetian, herringbone, hopsack, and combinations thereof — with dobby patterns and fancy effects.
          </p>
        </motion.div>
      </div>

      {/* Products List */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-24 lg:space-y-32 mb-24 lg:mb-32">
        {products.map((product, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={index} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative rounded-[2rem] overflow-hidden aspect-[4/3] lg:aspect-[1/1] shadow-2xl group ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Content Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {product.title}
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {product.description}
                </p>

                <ul className="space-y-4 mb-10">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-foreground font-medium">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="self-start group inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  Request Sample
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

            </div>
          );
        })}
      </div>


    </div>
  );
}
