'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const products = [
  {
    title: 'Wool Suiting Fabric',
    description: 'High-quality wool fabrics designed for premium corporate and institutional uniforms. Our wool suiting fabrics offer unmatched durability, breathability, and an impeccable drape, making them the preferred choice for executive wear.',
    features: ['100% Pure & Blended Wool', 'Exceptional Drape', 'All-weather Comfort'],
    image: '/prod_wool.png',
  },
  {
    title: 'Polyester Viscose',
    description: 'Durable and comfortable poly-viscose blends perfect for everyday corporate wear. This versatile fabric combines the strength of polyester with the smooth texture of viscose, ensuring your team looks professional throughout the day with minimal maintenance.',
    features: ['Wrinkle Resistant', 'Easy Care', 'Cost-Effective Durability'],
    image: '/prod_poly_viscose.png',
  },
  {
    title: 'Polyester Wool',
    description: 'The perfect balance of luxury and practicality. Our poly-wool blends provide the elegant finish of wool with the enhanced durability of polyester, ideal for high-end uniforms and tailored suits that stand the test of time.',
    features: ['Premium Finish', 'High Durability', 'Shape Retention'],
    image: '/prod_wool.png',
  },
  {
    title: 'Viscose Elastane',
    description: 'Designed for the modern professional requiring maximum mobility. By incorporating elastane, this fabric provides a comfortable stretch that adapts to body movements while retaining the softness and breathability of viscose.',
    features: ['Comfort Stretch', 'Superior Softness', 'Flattering Fit'],
    image: '/prod_poly_viscose.png',
  },
];

export default function ProductsPageContent() {
  return (
    <div className="w-full pt-32 pb-24 bg-background">

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-20 lg:mb-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight leading-[1.1] mb-6">
            Our Premium <span className="text-primary">Fabrics</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover our extensive range of high-quality fabrics, meticulously crafted to meet international standards for corporate, school, and institutional wear.
          </p>
        </motion.div>
      </div>

      {/* Products List */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-24 lg:space-y-32">
        {products.map((product, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={index} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative rounded-[2rem] overflow-hidden aspect-[4/3] lg:aspect-[1/1] shadow-2xl group ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Content Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
              >
                {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-[0.1em] uppercase mb-6 self-start">
                  Product 0{index + 1}
                </div> */}

                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {product.title}
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {product.description}
                </p>

                <ul className="space-y-4 mb-10">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-foreground font-medium">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="self-start group inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  Request Sample
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
