'use client';

import { motion, Variants } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight, Clock, Globe } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function ContactPageContent() {
  return (
    <div className="w-full pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-3xl mb-20 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-[0.1em] uppercase mb-6">
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight leading-[1.1] mb-6">
            Let's Start a <span className="text-primary">Conversation</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Whether you have a question about our premium fabrics, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 mb-16 lg:mb-24"
        >
          {/* Office Card */}
          <motion.div variants={fadeUp} className="bg-card border border-border p-8 rounded-[2rem] flex flex-col items-center text-center group hover:border-primary/30 hover:shadow-xl transition-all duration-500">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:-translate-y-2 transition-all duration-300">
              <MapPin className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-4">Our Office</h4>
            <p className="text-muted-foreground leading-relaxed">
              509, Corporate Annexe, Sonawala Road,<br />
              Goregaon East, Mumbai – 400063
            </p>
          </motion.div>

          {/* Phone Card */}
          <motion.div variants={fadeUp} className="bg-card border border-border p-8 rounded-[2rem] flex flex-col items-center text-center group hover:border-primary/30 hover:shadow-xl transition-all duration-500">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:-translate-y-2 transition-all duration-300">
              <Phone className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-4">Call Us</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Support: <a href="tel:+919619808222" className="hover:text-primary transition-colors font-medium">+91 96198 08222</a></p>

            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div variants={fadeUp} className="bg-card border border-border p-8 rounded-[2rem] flex flex-col items-center text-center group hover:border-primary/30 hover:shadow-xl transition-all duration-500">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:-translate-y-2 transition-all duration-300">
              <Mail className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-4">Email Us</h4>
            <p className="text-muted-foreground leading-relaxed">
              <a href="mailto:Rohitash.jindal@stylefab.Co.in" className="hover:text-primary transition-colors font-medium">Rohitash.jindal@stylefab.Co.in</a><br />
              <span className="text-sm opacity-80 mt-2 block">We typically reply within 24 hours</span>
            </p>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16 lg:mb-24">
          {/* Map Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="rounded-[2.5rem] overflow-hidden border border-border shadow-2xl bg-card h-[400px] lg:h-auto flex"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.7739691755983!2d72.8508856!3d19.1613689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7869277e78b%3A0xa700c910695f5956!2sStylefab%20Private%20Limited!5e0!3m2!1sen!2sin!4v1783573947823!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="bg-card border border-border p-8 md:p-10 lg:p-12 rounded-[2.5rem] shadow-2xl h-full"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-3">Send us a message</h3>
              <p className="text-muted-foreground">Please fill out the form below and our team will get back to you shortly.</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-foreground">Subject <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-foreground">Message <span className="text-red-500">*</span></label>
                  <textarea rows={4} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" />
                </div>
              </div>

              <div className="pt-4 pb-2 border-t border-border">
                <h4 className="font-bold text-foreground text-lg">Personal Information</h4>
              </div>

              <div className="grid md:grid-cols-2 gap-x-4 gap-y-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-foreground">Name <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-foreground">Email <span className="text-red-500">*</span></label>
                  <input type="email" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-foreground">Company</label>
                  <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-foreground">Phone <span className="text-red-500">*</span></label>
                  <input type="tel" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground">Business Details</label>
                  <textarea rows={2} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" />
                </div>
              </div>

              <button
                type="button"
                className="w-full mt-6 group inline-flex items-center justify-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-xl font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Submit Request
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
