'use client';

import { motion } from 'framer-motion';
import { Trophy, Headphones, Package, ArrowUpRight, Lightbulb, Users, BarChart3, Plus, CheckCircle2, TrendingUp, Phone, Factory, Globe } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import Link from 'next/link';

export default function AboutSection() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <>
      <SectionWrapper className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-6">
          {/* Card 1 */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUpVariants}
            className="group bg-card hover:bg-primary transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 rounded-[2rem] p-8 lg:p-10 border border-border"
          >
            <Trophy className="w-12 h-12 text-primary group-hover:text-primary-foreground transition-colors duration-500 ease-out mb-8 stroke-[1.5]" />
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary-foreground transition-colors duration-500 ease-out mb-4">10+ Years of Excellence</h3>
            <p className="text-muted-foreground group-hover:text-gray-100 transition-colors duration-500 ease-out leading-relaxed">
              With over a decade of operational excellence, we have established ourselves as a trusted partner for premium woven fabrics.
            </p>
          </motion.div>

          {/* Text Block */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUpVariants}
            className="flex flex-col justify-center p-4 lg:p-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-dashed border-primary/30 text-primary font-bold text-xs tracking-[0.2em] uppercase mb-6 self-start">
              <Package className="w-4 h-4" />
              End-to-End Excellence
            </div>
            <h2 className="text-4xl lg:text-5xl leading-[1.1] font-bold text-foreground mb-8">
              Premium Solutions Built for <br />Global Apparel.
            </h2>
            <Link href="/about" className="self-start inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20">
              Learn More
              <span className="bg-primary-foreground/20 rounded-full p-1">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUpVariants}
            className="group bg-card hover:bg-primary transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 rounded-[2rem] p-8 lg:p-10 border border-border"
          >
            <Globe className="w-12 h-12 text-primary group-hover:text-primary-foreground transition-colors duration-500 ease-out mb-8 stroke-[1.5]" />
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary-foreground transition-colors duration-500 ease-out mb-4">30+ Countries Presence</h3>
            <p className="text-muted-foreground group-hover:text-gray-100 transition-colors duration-500 ease-out leading-relaxed">
              Export network spanning key regions including the US, UK, China, Australia, Europe and a well-established PAN India distribution.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUpVariants}
            className="group bg-card hover:bg-primary transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 rounded-[2rem] p-8 lg:p-10 border border-border"
          >
            <Factory className="w-12 h-12 text-primary group-hover:text-primary-foreground transition-colors duration-500 ease-out mb-8 stroke-[1.5]" />
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary-foreground transition-colors duration-500 ease-out mb-4">State-of-the-Art Manufacturing</h3>
            <p className="text-muted-foreground group-hover:text-gray-100 transition-colors duration-500 ease-out leading-relaxed">
              Fully integrated approach ensuring complete quality control from premium yarn selection to finishing treatments and packing.
            </p>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUpVariants}
            className="group bg-card hover:bg-primary transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 rounded-[2rem] p-8 lg:p-10 border border-border"
          >
            <Users className="w-12 h-12 text-primary group-hover:text-primary-foreground transition-colors duration-500 ease-out mb-8 stroke-[1.5]" />
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary-foreground transition-colors duration-500 ease-out mb-4">Customer-Centric Approach</h3>
            <p className="text-muted-foreground group-hover:text-gray-100 transition-colors duration-500 ease-out leading-relaxed">
              Serving fashion brands, garment manufacturers, retailers, and sourcing partners with collections combining quality, innovation, and relevance.
            </p>
          </motion.div>

          {/* Card 6 (Image) */}
          <motion.div
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUpVariants}
            className="relative rounded-[2rem] overflow-hidden min-h-[320px] flex flex-col justify-between p-8 lg:p-10 bg-slate-900 group"
          >
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                alt="Business Growth"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
            </div>
            <div className="relative z-10 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <BarChart3 className="w-7 h-7 text-primary-foreground stroke-[1.5]" />
            </div>
            <div className="relative z-10 mt-auto">
              <p className="text-primary-foreground font-medium mb-1">Decades of Expertise</p>
              <h3 className="text-6xl font-bold text-white tracking-tight">25+</h3>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* About Company */}
      <SectionWrapper className="bg-background pt-12 pb-24">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col gap-8 lg:gap-10"
          >
            {/* Bottom Left: Image Block */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/4.5] bg-slate-900 group shadow-xl">
              <img
                src="/corporate_leader.png"
                alt="Company Leadership"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="flex items-center -space-x-3 mb-4">
                  {['photo-1534528741775-53994a69daeb', 'photo-1506794778202-cad84cf45f1d', 'photo-1494790108377-be9c29b29330'].map((id, i) => (
                    <img key={i} src={`https://images.unsplash.com/${id}?q=80&w=100&auto=format&fit=crop`} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-[3px] border-[#223938] object-cover" alt="Customer avatar" />
                  ))}
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground border-[3px] border-[#223938] z-10 relative">
                    <Plus className="w-4 h-4 lg:w-5 lg:h-5 stroke-[3]" />
                  </div>
                </div>
                <p className="text-white font-bold text-lg lg:text-xl leading-snug">Global partnerships<br />across 30+ countries.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 lg:gap-10">
            {/* Top Right: Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-foreground leading-[1.25] tracking-tight"
            >
              Built on a strong foundation of quality, innovation, and deep market understanding.
            </motion.h2>

            {/* Middle Right: Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                className="bg-card rounded-3xl p-6 lg:p-8 border border-border shadow-sm hover:-translate-y-1 transition-transform duration-300"
              >
                <TrendingUp className="w-8 h-8 text-primary mb-5 stroke-[1.5]" />
                <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-3 tracking-tight">200K+</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Meters of fabric produced monthly to empower global brands.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
                className="bg-card rounded-3xl p-6 lg:p-8 border border-border shadow-sm hover:-translate-y-1 transition-transform duration-300"
              >
                <CheckCircle2 className="w-8 h-8 text-primary mb-5 stroke-[1.5]" />
                <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-3 tracking-tight">3</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Premium in-house fabric brands delivering distinct identity and purpose.</p>
              </motion.div>
            </div>

            {/* Bottom Right: Text & Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
              className="mt-2"
            >
              <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                Every fabric developed by StyleFab is guided by a simple philosophy — combining creativity, quality, and market intelligence to deliver products that are commercially relevant, aesthetically refined, and built for long-term value.
              </p>

              <div className="flex flex-wrap items-center gap-6 lg:gap-8">
                <Link href="/about" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 lg:px-7 rounded-full font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20">
                  Know more about us
                  <span className="bg-primary-foreground/20 rounded-full p-1 ml-1">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link href="/contact" className="group inline-flex items-center gap-2 border-2 border-primary/20 text-foreground px-6 py-3 lg:py-3.5 lg:px-7 rounded-full font-semibold hover:bg-primary/5 hover:border-primary/40 transition-all">
                  Contact Us
                  <span className="bg-primary/10 text-primary rounded-full p-1 ml-1 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

