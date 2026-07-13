'use client';

import { motion, Variants } from 'framer-motion';
import { Target, ShieldCheck, Factory, Award, CheckCircle2, Lightbulb, Shield, Star, Handshake, Globe, Scissors, Briefcase, Users } from 'lucide-react';
import Image from 'next/image';

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
              StyleFab Private Limited
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-foreground tracking-tight leading-[1.1] mb-8">
              Redefining <span className="text-primary">Premium</span> Menswear & Womenswear Fabrics Through <span className="text-primary">Innovation</span> & Excellence.
            </h1>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8">
              {[
                'B2B Fabric Solutions',
                'Global Exports & Wholesale',
                'Domestic Brands (e.g., Park Avenue)',
                'Fashion Segments',
                'Corporate Wear Industry'
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 md:px-5 py-2 md:py-2.5 bg-card border border-border text-muted-foreground rounded-full text-sm md:text-base font-medium shadow-sm hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Vision & Future Growth */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Vision & Future Growth</h2>
            <p className="text-xl text-muted-foreground">
              Our vision is built on five core pillars that guide our growth and decision-making:
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
            {['Innovation', 'Speed', 'Quality', 'Sustainability', 'Reliability'].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background border border-border px-8 py-4 rounded-full text-lg font-bold text-foreground shadow-sm hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {pillar}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Company Overview Section */}
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
                  <h3 className="text-white text-3xl font-bold mb-2">Company Overview</h3>
                  <p className="text-white/80 font-medium">A trusted partner for high-quality woven fabrics.</p>
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
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Experience</p>
                    <p className="text-xl font-bold text-foreground">10+ Years</p>
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
                A diversified textile enterprise for the global apparel industry.
              </motion.h2>

              <motion.div variants={fadeUp} className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong>StyleFab</strong> Private Limited is dedicated to creating premium fabric solutions, built on a strong foundation of quality, innovation, and deep market understanding. With over a decade of operational excellence, we are a trusted partner for delivering high-quality woven fabrics tailored specifically for both menswear and womenswear.
                </p>
                <p>
                  The company specializes in fabric development, product innovation, sourcing, and international supply, serving fashion brands, garment manufacturers, retailers, and sourcing partners across domestic and international markets. Our core strength lies in combining traditional textile craftsmanship with modern production techniques.
                </p>
                <p>
                  Every fabric developed by <strong>StyleFab</strong> is guided by a simple philosophy — combining creativity, quality, and market intelligence to deliver products that are commercially relevant, aesthetically refined, and built for long-term value.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-start gap-4 p-6 bg-primary/5 border border-primary/10 rounded-2xl mt-4">
                <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Our Business</h4>
                  <p className="text-base text-muted-foreground font-medium">Built around the complete fabric development journey — from understanding market trends and product innovation to sourcing, manufacturing, and delivering fabrics that meet the highest standards of quality and performance.</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* The Process & Philosophy Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Our Process & Philosophy</h2>
            <p className="text-xl text-muted-foreground">
              Built on strong ethical principles and a dedication to quality, innovation, and sustainable development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Business Operations',
                icon: Briefcase,
                desc: 'We specialize in premium B2B fabric solutions, global exports, and wholesale. We purchase yarn and process it through specialized job work under strict supervision by our quality control team to achieve world-class quality. We proudly supply high-quality fabrics to major domestic brands like Park Avenue, Raymond, Arvind Mills, and Blackberrys, while also catering to international fashion segments and the corporate wear industry.'
              },
              {
                title: 'Innovation & Sustainability',
                icon: Lightbulb,
                desc: 'We combine creativity and technology to produce innovative solutions that anticipate the needs of the textile market. This approach has strengthened our market leadership globally. Our value system is highly product and market-oriented, enhanced by our desire to promote a model of sustainable and responsible development.'
              },
              {
                title: 'Ethics & Integrity',
                icon: Shield,
                desc: 'We align all our activities with ethical principles and values formally adopted by our Board of Directors. At StyleFab, we are convinced that the achievement of our business aims cannot be deemed successful without respecting these fundamental values.'
              },
              {
                title: 'Team Excellence',
                icon: Users,
                desc: 'Our dedicated team at StyleFab innovates and excels in the manufacturing of premium fabrics. We adhere to the highest quality standards to consistently satisfy and exceed our customers’ demands.'
              },
              {
                title: 'Our Ambition',
                icon: Target,
                desc: 'We are striving to create a prominent place for ourselves as a dynamic, fashion-conscious fabric producer of the new era, constantly meeting and exceeding international quality standards.'
              },
              {
                title: 'Production Scale',
                icon: Factory,
                desc: 'To meet the growing demand for our premium textiles, StyleFab is targeting the production of approximately 200,000 meters a month of high-quality fabrics specifically designed for men’s and women’s wear.'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-slate-50 dark:bg-slate-900/40 border border-border p-8 rounded-3xl group hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="bg-slate-50 dark:bg-slate-900/20 rounded-3xl p-8 lg:p-12 border border-border flex flex-col md:flex-row gap-10 items-center"
          >
            <div className="w-full md:w-1/3">
              <img src="/corporate_leader.png" alt="Mr. Rohitash Jindal" className="rounded-2xl object-cover w-full h-[400px]" />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-foreground mb-4">Founder's Vision & Expertise</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Under the leadership of <strong>Mr. Rohitash Jindal</strong>, <strong>StyleFab</strong> benefits from over <strong>25 years</strong> of extensive industry experience. His journey includes working with renowned international brands and major retail chains, giving him deep insights into global fashion trends and quality expectations.
              </p>
              <h3 className="text-xl font-bold text-foreground mb-4">His expertise spans across:</h3>
              <ul className="space-y-3 mb-6">
                {[
                  'Advanced fabric development and innovation',
                  'Efficient production management',
                  'Premium finishing techniques',
                  'Understanding global customer requirements',
                  'Aligning with the latest global fashion trends',
                  'Sustainable finishing techniques for premium luxury handfeels'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-foreground font-medium">
                With strong relationships across international markets and a proven track record of supplying to over 30 countries, his vision continues to drive StyleFab toward global leadership.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Manufacturing & Global Presence Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">End-to-End Manufacturing Excellence</h2>
              <p className="text-lg text-muted-foreground mb-8">
                At <strong>StyleFab</strong>, we follow a fully integrated approach to fabric production, ensuring complete control over quality at every stage:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  '1. Premium Yarn Selection',
                  '2. Warping Preparation',
                  '3. Advanced Weaving',
                  '4. Grey Fabric Formation',
                  '5. Processing',
                  '6. Finishing Treatments',
                  '7. Quality Inspection',
                  '8. Measuring & Rolling',
                  '9. Packing & Protection',
                  '10. Ready Finished Fabric'
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-background rounded-xl border border-border shadow-sm">
                    <Factory className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Global Presence & Who We Serve</h2>
              <p className="text-lg text-muted-foreground mb-2">
                <strong>StyleFab</strong> has built a strong international footprint by consistently delivering quality fabrics to global markets. Our export network spans key regions including the <strong>United States, United Kingdom, China, Australia, Spain, Colombia, Turkey, and several other countries</strong>, complemented by a well-established <strong>PAN India</strong> distribution network.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                By understanding the unique requirements of each customer segment, <strong>StyleFab</strong> develops fabric collections that combine quality, innovation, and commercial relevance.              </p>
              <h3 className="text-xl font-bold text-foreground mb-4">We work with:</h3>
              <div className="flex flex-wrap gap-3">
                {['Fashion Brands', 'Garment Manufacturers', 'Apparel Retailers', 'Export Houses', 'Wholesalers & Distributors', 'Sourcing Partners'].map((partner, i) => (
                  <span key={i} className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                    {partner}
                  </span>
                ))}
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Brand Portfolio Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Our Brand Portfolio</h2>
            <p className="text-xl text-muted-foreground">
              <strong>StyleFab</strong> Private Limited has developed a portfolio of premium fabric brands, each created with a distinct identity and purpose to serve different customer segments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: '/Donna_Azzura_Logo.png',
                title: 'Donna Azzura',
                subtitle: 'Affordable Luxury',
                desc: 'Created for customers who seek premium quality, refined aesthetics, and exceptional value. Designed with a contemporary approach to suiting, it offers collections combining elegant designs, dependable performance, and commercial versatility.'
              },
              {
                image: '/The_Wool_Story_logo.png',
                title: 'The Wool Story',
                subtitle: 'Premium Wool Fabrics',
                desc: 'Dedicated to timeless elegance, exceptional craftsmanship, and refined tailoring. Inspired by the heritage of fine wool fabrics, the brand offers carefully developed collections combining luxury, comfort, and performance.'
              },
              {
                image: '/The_Linen_Folk_Logo.png',
                title: 'The Linen Folk',
                subtitle: 'Premium Linen Fabrics',
                desc: 'Inspired by the beauty of natural fibres and the timeless appeal of linen. The brand brings together breathable comfort, effortless elegance, and refined craftsmanship to create versatile, contemporary, and naturally sophisticated collections.'
              },
            ].map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-card border border-border p-8 rounded-3xl text-center group hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="relative h-32 w-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Image
                    src={brand.image}
                    alt={brand.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{brand.title}</h3>
                <p className="text-primary font-bold mb-4">{brand.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{brand.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



    </div>
  );
}
