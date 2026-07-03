'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const faqItems = [
  {
    question: 'What is your minimum order quantity?',
    answer:
      'Our minimum order quantity (MOQ) depends on the specific fabric type and customization requirements, but it typically starts at 1,000 meters for custom orders.',
  },
  {
    question: 'Do you provide custom fabric blends?',
    answer:
      'Yes, we specialize in custom Polyester Viscose, Polyester Wool, and Elastane blends tailored specifically for your corporate or institutional uniform requirements.',
  },
  {
    question: 'What quality certifications do your fabrics hold?',
    answer:
      'Our fabrics are OEKO-TEX Quality Certified, ensuring they meet rigorous international safety, environmental, and quality standards.',
  },
  {
    question: 'Can we request fabric samples before bulk ordering?',
    answer:
      'Absolutely. We provide swatch books and sample yardage so you can evaluate the look, feel, and performance of the fabric before committing to a large order.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper className="bg-background pt-16 lg:pt-24 pb-20 lg:pb-32">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative group hidden lg:block"
        >
          <div className="absolute inset-0 bg-primary/20 rounded-[2rem] transform -rotate-3 scale-105 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" />
          <img
            src="/faq_image.png"
            alt="Team discussing fabrics"
            className="relative rounded-[2rem] shadow-2xl object-cover h-[500px] lg:h-[650px] w-full"
          />
          <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-card p-6 lg:p-8 rounded-3xl shadow-xl border border-border flex flex-col gap-1 lg:gap-2 z-10">
            <span className="text-3xl lg:text-4xl font-bold text-primary">24/7</span>
            <span className="text-sm lg:text-base text-muted-foreground font-semibold">Customer Support</span>
          </div>
        </motion.div>

        {/* Right: FAQ */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h4 className="text-primary font-bold tracking-wider uppercase mb-4 text-sm lg:text-base">FAQ</h4>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-[1.15] mb-8 lg:mb-10 transition-colors">
              Got questions? <br /> We've got answers.
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
                  className={`group bg-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? 'shadow-xl border-primary/40 -translate-y-1' : 'border-border'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 lg:p-6 font-bold text-foreground text-left hover:text-primary transition-colors focus:outline-none"
                  >
                    <span className="text-base lg:text-lg pr-4">{item.question}</span>
                    <span
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm ${
                        isOpen
                          ? 'rotate-[135deg] bg-primary text-primary-foreground'
                          : 'bg-primary/10 text-primary'
                      }`}
                    >
                      <Plus className="w-5 h-5" />
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-5 lg:px-6 pb-5 lg:pb-6 text-sm lg:text-base text-muted-foreground leading-relaxed border-t border-border/50 pt-4 mt-2">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
