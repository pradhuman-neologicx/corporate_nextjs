'use client';

import { motion, Variants } from 'framer-motion';
import { Target, ShieldCheck, Factory, Award, CheckCircle2, Lightbulb, Shield, Star, Handshake } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutPageContent() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 overflow-hidden bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-[0.2em] uppercase mb-8">
              <Award className="w-4 h-4" />
              About Stylefab
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-foreground tracking-tight leading-[1.1] mb-8">
              Weighing <span className="text-primary">Quality</span> and <span className="text-primary">Passion</span> in Every Thread.
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-medium">
              Keeping user experience at the focal point. We at Stylefab Private Limited offer the widest range of high quality fabrics. With the OEKO-TEX Quality Certification series of quality standard, we have been able to continually meet with the ever shifting needs of our consumers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two Column Story Section */}
      <section className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-900/20 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  src="/about_fabric_production.png"
                  alt="Fabric Production"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-white text-3xl font-bold mb-2">Passion & Research</h3>
                  <p className="text-white/80 font-medium">An amalgamation of dedication to textile excellence.</p>
                </div>
              </div>

              {/* Floating Stat */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -right-8 top-20 bg-card p-6 rounded-3xl shadow-xl border border-border hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Certified</p>
                    <p className="text-xl font-bold text-foreground">OEKO-TEX</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col gap-8"
            >
              <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-bold text-foreground leading-[1.2] tracking-tight">
                Striving to create a special place in a new era of fashion.
              </motion.h2>

              <motion.div variants={fadeUp} className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Stylefab Private Limited is striving to create a special place for itself as a dynamic and fashion-conscious fabric producer of the new era, to meet the quality of international standards for Suitings, School, Corporate & Institutional Uniforms.
                </p>
                <p>
                  Each product at Stylefab Private Limited is an amalgamation of passion and research. We are dedicated to providing fabrics that not only look good but perform exceptionally in demanding environments.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-start gap-4 p-6 bg-primary/5 border border-primary/10 rounded-2xl mt-4">
                <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Our Motto</h4>
                  <p className="text-lg text-primary font-semibold">Customers satisfaction is our motto.</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
      {/* Core Values Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that drive our passion and ensure international standards of excellence.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lightbulb, title: 'Innovation', desc: 'Constantly pushing the boundaries of fabric production and new era fashion.' },
              { icon: Shield, title: 'Integrity', desc: 'Committed to maintaining OEKO-TEX and international standards transparently.' },
              { icon: Star, title: 'Excellence', desc: 'Delivering superior quality across every thread of Suitings and Uniforms.' },
              { icon: Handshake, title: 'Partnership', desc: 'Building dynamic relationships and placing customer satisfaction above all.' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-background border border-border p-8 rounded-3xl group hover:-translate-y-2 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Production Stats Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-1/2 h-full bg-primary/5 skew-x-[-15deg] translate-x-1/4 rounded-3xl pointer-events-none hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Massive Scale, Unmatched Quality.</h2>
            <p className="text-xl text-muted-foreground">
              Stylefab Private Limited is supplying about <span className="font-bold text-foreground">200,000 meters a month</span> of poly-viscose, poly-wool & speciality blends.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Factory, title: '200,000 Meters', subtitle: 'Supplied Monthly' },
              { icon: ShieldCheck, title: 'Fibre Dyed', subtitle: 'Predominantly used for durability' },
              { icon: CheckCircle2, title: 'Versatile Use', subtitle: 'Corporate, Uniforms & Menswear' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-card border border-border p-8 rounded-3xl text-center group hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                  <stat.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{stat.title}</h3>
                <p className="text-muted-foreground font-medium">{stat.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
