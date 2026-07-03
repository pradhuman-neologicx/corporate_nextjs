'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, ChevronDown, Phone, ArrowUpRight, Menu, X, Search, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopPanelOpen, setIsDesktopPanelOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when desktop panel is open
  useEffect(() => {
    if (isDesktopPanelOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isDesktopPanelOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 pointer-events-none">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white px-6 py-3 shadow-md transition-all duration-300 md:px-8 pointer-events-auto border border-slate-100 ${scrolled ? 'shadow-lg bg-white/95 backdrop-blur-md' : ''
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 font-semibold flex-shrink-0 group">
          <div className="bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Box className="h-6 w-6 text-primary" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[22px] leading-[1] font-black text-slate-900 tracking-wide uppercase">
              Stylefab
            </span>
            <span className="text-[0.6rem] font-bold text-primary tracking-[0.2em] uppercase mt-1">
              Private Limited
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center justify-center gap-8 flex-1 px-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <div key={link.label} className="group relative">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1.5 text-[15px] font-semibold transition-colors hover:text-primary py-2 ${isActive ? 'text-primary' : 'text-slate-700'
                    }`}
                >
                  {link.label}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Right Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
          <a href="tel:18884521505" className="flex items-center gap-2 font-bold text-slate-800 hover:text-primary transition-colors">
            <Phone className="h-4 w-4 text-primary" strokeWidth={2.5} />
            <span className="underline decoration-slate-300 underline-offset-4 hover:decoration-primary">
              1-888-452-1505
            </span>
          </a>

          <Link
            href="/contact"
            className="group flex items-center gap-3 rounded-full bg-primary py-2 pl-6 pr-2 text-[15px] font-bold text-white transition-all hover:bg-primary/90"
          >
            Let's Talk
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A3C38] transition-transform group-hover:-translate-y-[2px] group-hover:translate-x-[2px]">
              <ArrowUpRight className="h-4 w-4 text-white" strokeWidth={2.5} />
            </div>
          </Link>

          {/* Desktop Hamburger */}
          {/* <button
            onClick={() => setIsDesktopPanelOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-200 text-slate-700 transition-colors hover:border-primary hover:text-primary ml-2"
          >
            <Menu className="h-5 w-5" strokeWidth={2.5} />
          </button> */}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-4 flex-shrink-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 hover:text-primary"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Desktop Side Panel */}
      <AnimatePresence>
        {isDesktopPanelOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDesktopPanelOpen(false)}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm pointer-events-auto hidden lg:block"
            />

            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-[400px] bg-[#112322] shadow-2xl p-10 pointer-events-auto flex flex-col hidden lg:flex overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center gap-2.5 font-semibold group">
                  <div className="bg-primary/20 p-2 rounded-xl group-hover:bg-primary/30 transition-colors">
                    <Box className="h-6 w-6 text-primary" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[24px] leading-[1] font-black text-white tracking-wide uppercase">
                      Stylefab
                    </span>
                    <span className="text-[0.65rem] font-bold text-primary tracking-[0.2em] uppercase mt-1.5">
                      Private Limited
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => setIsDesktopPanelOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" strokeWidth={1.5} />
                </button>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-[15px] leading-relaxed mb-8">
                Developing personalize our customer journeys to increase satisfaction & loyalty of our expansion recognized by industry leaders.
              </p>

              {/* Contact Info */}
              <div className="mb-8">
                <h3 className="text-white text-lg font-bold mb-6">Contact Info</h3>
                <div className="space-y-5">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Phone</p>
                    <a href="tel:+919600000022" className="text-white font-medium hover:text-primary transition-colors">
                      +91 96XXXXXX22
                    </a>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Email</p>
                    <a href="mailto:info@stylefab.com" className="text-white font-medium hover:text-primary transition-colors">
                      info@stylefab.com
                    </a>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Location</p>
                    <p className="text-white font-medium leading-relaxed">
                      509, Corporate Annexe, Sonawala Road, Goregaon East, Mumbai – 400063
                    </p>
                  </div>
                </div>
              </div>

              {/* Follow Us */}
              <div className="mt-auto">
                <h3 className="text-white text-lg font-bold mb-4">Follow Us</h3>
                <div className="flex items-center gap-3">
                  <a href="#" className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary hover:bg-primary transition-all">
                    <Facebook className="h-4 w-4" strokeWidth={2} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary hover:bg-primary transition-all">
                    <Instagram className="h-4 w-4" strokeWidth={2} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary hover:bg-primary transition-all">
                    <Twitter className="h-4 w-4" strokeWidth={2} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary hover:bg-primary transition-all">
                    <Linkedin className="h-4 w-4" strokeWidth={2} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Normal Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-4 right-4 top-[84px] overflow-hidden rounded-2xl bg-white shadow-xl border border-slate-100 lg:hidden pointer-events-auto"
          >
            <div className="flex flex-col p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between border-b border-slate-50 py-4 text-[15px] font-semibold text-slate-700 hover:text-primary"
                >
                  {link.label}

                </Link>
              ))}
              <div className="mt-6 flex flex-col gap-4">
                <a href="tel:18884521505" className="flex items-center justify-center gap-2 text-[15px] font-bold text-slate-800">
                  <Phone className="h-4 w-4 text-primary" strokeWidth={2.5} />
                  1-888-452-1505
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-[15px] font-bold text-white"
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
