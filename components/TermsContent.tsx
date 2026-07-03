'use client';

import { motion, Variants } from 'framer-motion';
import { FileText, ShieldCheck, Scale, Globe, BookOpen, Clock } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const sections = [
  { id: 'agreement', title: '1. Agreement to Terms', icon: FileText },
  { id: 'intellectual-property', title: '2. Intellectual Property', icon: ShieldCheck },
  { id: 'user-representations', title: '3. User Representations', icon: BookOpen },
  { id: 'products-services', title: '4. Products & Services', icon: Globe },
  { id: 'governing-law', title: '5. Governing Law', icon: Scale },
];

export default function TermsContent() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full bg-background relative">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Header */}
      <div className="relative pt-32 pb-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-[0.1em] uppercase mb-6">
              Legal Information
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight leading-[1.1] mb-6">
              Terms & <span className="text-primary">Conditions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Please read these terms and conditions carefully before using our website and services. They outline your rights and responsibilities.
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm font-medium text-muted-foreground">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> Effective Date: July 3, 2026</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Sidebar Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/4 flex-shrink-0"
          >
            <div className="sticky top-32 bg-card border border-border rounded-3xl p-6 shadow-xl hidden lg:block">
              <h3 className="text-lg font-bold text-foreground mb-6 px-4">Contents</h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all group"
                  >
                    <section.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Content Document */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:w-3/4 space-y-16"
          >
            <motion.section variants={fadeUp} id="agreement" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <FileText className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-foreground tracking-tight">1. Agreement to Terms</h2>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                <p className="lead text-xl text-foreground font-medium mb-6">
                  These Terms and Conditions constitute a legally binding agreement made between you and Stylefab Private Limited.
                </p>
                <p>
                  By accessing or using our website, you agree that you have read, understood, and agreed to be bound by all of these Terms and Conditions. If you do not agree with all of these Terms and Conditions, then you are expressly prohibited from using the Site and you must discontinue use immediately.
                </p>
              </div>
            </motion.section>

            <motion.section variants={fadeUp} id="intellectual-property" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-foreground tracking-tight">2. Intellectual Property Rights</h2>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                <p>
                  Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
                </p>
                <div className="bg-card border border-border p-6 rounded-2xl mt-6">
                  <p className="m-0 text-sm">
                    The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms and Conditions, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeUp} id="user-representations" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-foreground tracking-tight">3. User Representations</h2>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                <p>
                  By using the Site, you represent and warrant that:
                </p>
                <ul className="bg-card border border-border p-8 rounded-3xl mt-6 space-y-4 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>All registration information you submit will be true, accurate, current, and complete.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>You will maintain the accuracy of such information and promptly update such registration information as necessary.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>You have the legal capacity and you agree to comply with these Terms and Conditions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            <motion.section variants={fadeUp} id="products-services" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Globe className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-foreground tracking-tight">4. Products and Services</h2>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                <p>
                  All products, services, and fabric samples displayed on the Site are subject to availability. We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site.
                </p>
                <p>
                  However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors. We reserve the right to discontinue any products at any time for any reason.
                </p>
              </div>
            </motion.section>

            <motion.section variants={fadeUp} id="governing-law" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Scale className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-foreground tracking-tight">5. Governing Law</h2>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                <p>
                  These Terms shall be governed by and defined following the laws of India. Stylefab Private Limited and yourself irrevocably consent that the courts of Mumbai, Maharashtra shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                </p>
              </div>
            </motion.section>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
