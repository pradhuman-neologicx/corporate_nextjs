'use client';

import { motion, Variants } from 'framer-motion';
import { ShieldCheck, Settings, HeartHandshake, Leaf, Globe } from 'lucide-react';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';

const showcaseImages = [
  '/benefit_suit_1.png',
  '/benefit_suit_3.png',
  '/benefit_suit_5.png',
  '/benefit_suit_6.png',
  '/benefit_suit_7.png',
  '/benefit_fabric_4.png',
];

const benefits = [
  {
    icon: ShieldCheck,
    title: 'High Quality Control and Standards',
    description: 'Before fabric is dispatched to the customer, every batch undergoes a thorough quality control process. Shades are carefully assessed and durability is tested to optimise pilling performance and extend garment life. The Quality Assurance Head reports directly to the Marketing Directors.'
  },
  {
    icon: Settings,
    title: 'Flexibility & Customisation',
    description: 'A variety of loom types and deep textile expertise mean we can always find a solution to your fabric requirements. Fabrics can be woven to individual specifications and finished to suit the end-use — whether a simple Teflon coating, a rainwear-proof finish, or an anti-bacterial, anti-UV, anti-odour treatment.'
  },
  {
    icon: Leaf,
    title: 'Sustainable Fabrics',
    description: 'Committed to eco-friendly practices, we develop and supply sustainable fabrics using recycled polyester, Birla viscose, organic cotton, and non-mulesed wool, ensuring an eco-friendly approach without compromising on premium quality.'
  },
  {
    icon: HeartHandshake,
    title: 'Personalised Service',
    description: 'As a family-owned and run business, StyleFab offers a level of service unparalleled in the industry, with helpful pre- and post-sales involvement to ensure customer requirements are constantly satisfied.'
  }
];

export default function BenefitsSection() {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <SectionWrapper
      title="Benefits of Choosing StyleFab"
      subtitle="Why we are the preferred partner for premium fabric solutions worldwide."
      className="bg-slate-50 dark:bg-slate-900/20"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            className="bg-card border border-border p-8 md:p-10 rounded-[2rem] hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col sm:flex-row gap-6"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
              <benefit.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Strip Showcase */}
      <div className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-2 ">
        {showcaseImages.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="relative aspect-[1/2] md:aspect-[3/5] overflow-hidden bg-muted group shadow-sm rounded-lg"
          >
            <Image
              src={img}
              alt={`StyleFab Fabric Quality ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 25vw, 12.5vw"
              className="object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            {/* Subtle dark overlay that reveals on hover */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>
        ))}
      </div>

      {/* Global Garment Sourcing Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-24 relative overflow-hidden rounded-[2rem] bg-card border border-border p-10 md:p-14 lg:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-14 shadow-2xl hover:border-primary/50 transition-colors duration-500"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 blur-[80px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
        
        <div className="relative z-10 flex-shrink-0">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-primary/20 shadow-inner">
            <Globe className="w-10 h-10 md:w-12 md:h-12 text-primary" strokeWidth={1.5} />
          </div>
        </div>
        
        <div className="relative z-10 flex-grow text-center md:text-left">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 tracking-tight text-card-foreground">
            Full-Package Garment Solutions & Global Exports
          </h3>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-4xl font-light">
            Beyond premium fabrics, we offer complete garment manufacturing and export services from India to clients worldwide. By closely following global fashion trends and maintaining a profound understanding of colors, weaves, luxury raw materials, and textures, we expertly customize and deliver our garments to international markets across the globe.
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
