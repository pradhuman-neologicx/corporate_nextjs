'use client';

import { motion, Variants } from 'framer-motion';
import { ShieldCheck, Activity, Settings, HeartHandshake } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'High Quality Control and Standards',
    description: 'Before fabric is dispatched to the customer, every batch undergoes a thorough quality control process. Shades are carefully assessed and durability is tested to optimise pilling performance and extend garment life. The Quality Assurance Head reports directly to the Marketing Directors.'
  },
  {
    icon: Activity,
    title: 'Flexibility',
    description: 'A variety of loom types and deep textile expertise mean StyleFab can always find a solution to a customer\'s fabric requirements.'
  },
  {
    icon: Settings,
    title: 'Tailoring to Your Needs',
    description: 'Fabrics can be woven to individual specification and finished to suit the end-use — whether a simple Teflon coating, a rainwear-proof finish, or an anti-bacterial, anti-UV, anti-odour treatment.'
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
    </SectionWrapper>
  );
}
