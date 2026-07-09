'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="relative py-24  overflow-hidden mx-4 md:mx-8 lg:mx-12 rounded-[3rem] my-16 border border-border/10 shadow-2xl">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cta_background.png"
          alt="Premium Fabric Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 dark:bg-[#051412]/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent dark:from-[#081a17]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15]">
          Ready to Source <br className="hidden sm:block" /> Premium Fabrics?
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Partner with Stylefab to elevate your corporate uniform and textile needs. Experience unmatched quality, competitive pricing, and 24/7 dedicated support.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all hover:shadow-xl hover:shadow-white/20 w-full sm:w-auto"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="tel:+919619808222"
            className="flex items-center justify-center gap-3 bg-transparent text-white px-8 py-4 rounded-full font-bold border-2 border-white/30 hover:bg-white/10 transition-all w-full sm:w-auto"
          >
            Call Us Directly
          </a>
        </div>
      </div>
    </section>
  );
}
