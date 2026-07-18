'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function CollectionsPageContent() {
  const brands = [
    {
      id: 'donna-azzura',
      image: '/Donna_Azzura_Logo.png',
      title: 'Donna Azzura',
      subtitle: 'Affordable Luxury',
      desc: 'Created for customers who seek premium quality, refined aesthetics, and exceptional value. Designed with a contemporary approach to suiting, it offers collections combining elegant designs, dependable performance, and commercial versatility.'
    },
    {
      id: 'the-wool-story',
      image: '/The_Wool_Story_logo.png',
      title: 'The Wool Story',
      subtitle: 'Premium Wool Fabrics',
      desc: 'Dedicated to timeless elegance, exceptional craftsmanship, and refined tailoring. Inspired by the heritage of fine wool fabrics, the brand offers carefully developed collections combining luxury, comfort, and performance.'
    },
    {
      id: 'the-linen-folk',
      image: '/The_Linen_Folk_Logo.png',
      title: 'The Linen Folk',
      subtitle: 'Premium Linen Fabrics',
      desc: 'Inspired by the beauty of natural fibres and the timeless appeal of linen. The brand brings together breathable comfort, effortless elegance, and refined craftsmanship to create versatile, contemporary, and naturally sophisticated collections.'
    },
  ];

  return (
    <div className="w-full pt-32 pb-24 bg-background min-h-screen">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">Our <span className="text-primary">Collections</span></h1>
            <p className="text-xl text-muted-foreground">
              Explore our premium fabric brands, each created with a distinct identity and purpose to serve different customer segments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <Link href={`/collections/${brand.id}`} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="bg-card border border-border p-8 rounded-3xl text-center group hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col"
                >
                  <div className="relative h-32 w-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src={brand.image}
                      alt={brand.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{brand.title}</h3>
                  <p className="text-primary font-bold mb-4">{brand.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{brand.desc}</p>
                  
                  <div className="mt-6 pt-6 border-t border-border flex justify-center items-center text-primary font-semibold text-sm group-hover:underline underline-offset-4">
                    View Collection &rarr;
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
