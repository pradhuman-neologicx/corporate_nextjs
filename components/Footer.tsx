'use client'

import Link from 'next/link'
import { Box, Facebook, Instagram, Twitter, Linkedin, Clock, ArrowUp, Award } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0B1716] text-white pt-20 pb-6 relative overflow-hidden">
      {/* Background Patterns */}
      <img src="https://bexon-react.vercel.app/images/shape/pattern-2.svg" alt="" className="absolute top-0 left-0 pointer-events-none opacity-60" />
      <img src="https://bexon-react.vercel.app/images/shape/pattern-2.svg" alt="" className="absolute bottom-0 right-0 pointer-events-none opacity-60 rotate-180" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Top Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 font-semibold mb-6">
              <Box className="h-8 w-8 text-primary" strokeWidth={2.5} />
              <span className="text-3xl font-bold tracking-tight">
                Bexon
              </span>
            </Link>
            <p className="text-slate-400 text-[15px] leading-relaxed mb-8 pr-4">
              Developing personalize our customer journeys to increase satisfaction & loyalty of our expansion recognized by industry leaders.
            </p>

            {/* Awards */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-slate-300" strokeWidth={1} />
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-none">18</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest leading-tight mt-1">Clutch<br />Awards</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-slate-300" strokeWidth={1} />
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-none">5</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest leading-tight mt-1">Awwwards</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 lg:ml-8">
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-[15px]">
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Customer Experience</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Training Programs</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Business Strategy</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Training Program</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">ESG Consulting</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Development Hub</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-4 text-[15px]">
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Contact us</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Team Member</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Recognitions</Link></li>
              <li className="flex items-center gap-2">
                <Link href="#" className="text-primary hover:text-white transition-colors">Careers</Link>
                <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">New</span>
              </li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">News</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Feedback</Link></li>
            </ul>
          </div>

          {/* Our Office */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-6">Our Office</h4>
            <p className="text-slate-400 text-[15px] leading-relaxed mb-6">
              993 Renner Burg, West Rand,<br />
              MT 94251-030, USA.
            </p>
            <div className="space-y-2 mb-6">
              <p className="text-white text-[15px]"><span className="font-bold">P:</span> +1 (009) 544-7818</p>
              <p className="text-white text-[15px]"><span className="font-bold">M:</span> support@bexon.com</p>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-[15px]">
              <Clock className="w-4 h-4 text-primary" strokeWidth={2.5} />
              Mon-Fri 10am-10pm
            </div>
          </div>
        </div>

      </div>

      {/* Marquee Section */}
      <div className="border-y border-white/10 py-6 mb-8 mt-4 overflow-hidden flex whitespace-nowrap bg-[#0B1716]">
        <motion.div
          className="flex items-center font-bold text-6xl md:text-8xl lg:text-[110px] text-transparent tracking-widest uppercase"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {/* Duplicate content for seamless infinite scroll */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 shrink-0 pr-10">
              <span>Enterprise</span>
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=200&h=120&fit=crop" alt="Marquee img" className="w-[200px] h-[120px] rounded-full object-cover grayscale opacity-60" />
              <span>Growth</span>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&h=120&fit=crop" alt="Marquee img" className="w-[200px] h-[120px] rounded-full object-cover grayscale opacity-60" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative">

          <p className="text-sm text-slate-400">
            &copy; {currentYear} <span className="text-white font-semibold">Bexon</span> All right reserved
          </p>

          <div className="flex items-center gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-400">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms & Condition</Link>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="absolute right-0 -top-16 lg:static lg:ml-4 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors shadow-lg z-10"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-slate-900 stroke-[3]" />
          </button>

        </div>
      </div>
    </footer>
  )
}
