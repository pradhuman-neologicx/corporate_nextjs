'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Box, Star } from 'lucide-react'

export default function Hero() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.23, 1, 0.320, 1] as [number, number, number, number],
      },
    }),
  }

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-background">
      {/* Background Image with Gradient Mask */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="w-full lg:w-[60%] h-full relative">
           <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10 lg:w-[40%]" />
           {/* Diagonal slash decoration like screenshot */}
           <div className="absolute top-0 bottom-0 left-0 w-[150px] bg-primary/90 transform -skew-x-12 -translate-x-1/2 z-10 hidden lg:block" />
           <div className="absolute top-0 bottom-0 left-10 w-[50px] bg-secondary/80 transform -skew-x-12 -translate-x-1/2 z-10 hidden lg:block" />
           <img 
             src="/hero-bg.png" 
             alt="Corporate Professional" 
             className="w-full h-full object-cover object-center"
           />
        </div>
      </div>
      
      {/* Mobile background overlay */}
      <div className="absolute inset-0 bg-background/90 z-0 lg:hidden" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10">
        <div className="max-w-2xl">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2 mb-6"
          >
            <Box className="w-5 h-5 text-primary" strokeWidth={2.5} />
            <span className="text-primary font-bold text-sm tracking-widest uppercase">
              Renowned Growth Company
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-[80px] font-bold text-slate-900 leading-[1.1] tracking-tight"
          >
            Leading Future for Corporate Business.
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 text-lg text-slate-600 max-w-lg leading-relaxed font-medium"
          >
            Committed to delivering innovative solutions that elevate your brand and accelerate enterprise growth across all sectors.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-8"
          >
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 rounded-full bg-primary py-3 pl-8 pr-3 text-[15px] font-bold text-white transition-all hover:bg-primary/90"
            >
              Get Started
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A3C38] transition-transform group-hover:-translate-y-[2px] group-hover:translate-x-[2px]">
                <ArrowUpRight className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
            </motion.button>
            
            {/* Trust Indicator */}
            <div className="flex items-center gap-4">
               <div className="flex -space-x-3">
                  <img src="https://i.pravatar.cc/100?img=33" alt="Client" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                  <img src="https://i.pravatar.cc/100?img=47" alt="Client" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                  <img src="https://i.pravatar.cc/100?img=12" alt="Client" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-primary text-white font-bold flex items-center justify-center z-10 text-sm">
                     +500
                  </div>
               </div>
               <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-amber-500">
                     <Star className="w-4 h-4 fill-current" />
                     <Star className="w-4 h-4 fill-current" />
                     <Star className="w-4 h-4 fill-current" />
                     <Star className="w-4 h-4 fill-current" />
                     <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 mt-1">Trusted by Clients</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
