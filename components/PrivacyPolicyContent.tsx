'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Database, Server, Mail, Clock } from 'lucide-react';
import { Variants } from 'framer-motion';

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
  { id: 'introduction', title: '1. Introduction', icon: FileText },
  { id: 'data-collection', title: '2. Data Collection', icon: Database },
  { id: 'data-usage', title: '3. Data Usage', icon: Eye },
  { id: 'data-security', title: '4. Data Security', icon: Lock },
  { id: 'your-rights', title: '5. Your Rights', icon: Shield },
  { id: 'contact', title: '6. Contact Us', icon: Mail },
];

export default function PrivacyPolicyContent() {
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
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We value your privacy and are committed to protecting your personal data. Here is everything you need to know about how we handle your information.
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm font-medium text-muted-foreground">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> Last Updated: July 3, 2026</span>
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
            <motion.section variants={fadeUp} id="introduction" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <FileText className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-foreground tracking-tight">1. Introduction</h2>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                <p className="lead text-xl text-foreground font-medium mb-6">
                  Welcome to Stylefab Private Limited. We respect your privacy and are committed to protecting your personal data.
                </p>
                <p>
                  This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you. This Privacy Policy is provided in a layered format so you can click through to the specific areas set out below.
                </p>
              </div>
            </motion.section>

            <motion.section variants={fadeUp} id="data-collection" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Database className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-foreground tracking-tight">2. The Data We Collect</h2>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                <p>
                  Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
                </p>
                <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  <div className="bg-card border border-border p-6 rounded-2xl">
                    <h4 className="text-foreground font-bold flex items-center gap-2 mb-3"><Eye className="w-4 h-4 text-primary" /> Identity Data</h4>
                    <p className="text-sm">Includes first name, last name, username or similar identifier, title, and company name.</p>
                  </div>
                  <div className="bg-card border border-border p-6 rounded-2xl">
                    <h4 className="text-foreground font-bold flex items-center gap-2 mb-3"><Mail className="w-4 h-4 text-primary" /> Contact Data</h4>
                    <p className="text-sm">Includes billing address, delivery address, email address and telephone numbers.</p>
                  </div>
                  <div className="bg-card border border-border p-6 rounded-2xl">
                    <h4 className="text-foreground font-bold flex items-center gap-2 mb-3"><Server className="w-4 h-4 text-primary" /> Technical Data</h4>
                    <p className="text-sm">Includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</p>
                  </div>
                  <div className="bg-card border border-border p-6 rounded-2xl">
                    <h4 className="text-foreground font-bold flex items-center gap-2 mb-3"><FileText className="w-4 h-4 text-primary" /> Usage Data</h4>
                    <p className="text-sm">Includes information about how you use our website, products and services.</p>
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeUp} id="data-usage" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-foreground tracking-tight">3. How We Use Your Data</h2>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                <p>
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="bg-card border border-border p-8 rounded-3xl mt-6 space-y-4 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Where we need to perform the contract we are about to enter into or have entered into with you.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Where we need to comply with a legal or regulatory obligation.</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            <motion.section variants={fadeUp} id="data-security" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Lock className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-foreground tracking-tight">4. Data Security</h2>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                <p>
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                </p>
                <p>
                  They will only process your personal data on our instructions and they are subject to a duty of confidentiality. We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
                </p>
              </div>
            </motion.section>

            <motion.section variants={fadeUp} id="contact" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-foreground tracking-tight">5. Contact Details</h2>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                <p>
                  If you have any questions about this privacy policy or our privacy practices, please contact our data privacy manager in the following ways:
                </p>
                <div className="mt-8 p-8 bg-card border border-border rounded-3xl grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-foreground font-bold mb-2">Email Address</h4>
                    <a href="mailto:Rohitash.jindal@stylefab.Co.in" className="text-primary hover:underline font-medium text-lg">Rohitash.jindal@stylefab.Co.in</a>
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-2">Telephone Number</h4>
                    <p className="text-lg">+91 96198 08222</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-foreground font-bold mb-2">Postal Address</h4>
                    <p className="text-lg">509, Corporate Annexe, Sonawala Road, Goregaon East, Mumbai – 400063</p>
                  </div>
                </div>
              </div>
            </motion.section>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
