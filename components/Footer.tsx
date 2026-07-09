'use client'

import Link from 'next/link'
import { Box, Facebook, Instagram, Twitter, Linkedin, Clock, ArrowUp, Award } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

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
            <Link href="/" className="flex items-center mb-6">
              <img src="/darklogo.png" alt="Stylefab Logo" className="h-20 w-auto object-contain" />
            </Link>
            <p className="text-slate-400 text-[15px] leading-relaxed mb-8 pr-4">
              Developing personalize our customer journeys to increase satisfaction & loyalty of our expansion recognized by industry leaders.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-8">
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
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-5 lg:ml-8">
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-[15px]">
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-400 hover:text-white transition-colors">Terms & Condition</Link></li>
            </ul>
          </div>

          {/* Our Office */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-6">Our Office</h4>
            <p className="text-white text-[15px] leading-relaxed mb-4">
              <span className="font-bold">A:</span> 509, Corporate Annexe, Sonawala Road, Near Udyog Bhavan, Goregaon East, Mumbai – 400 063, Maharashtra, India
            </p>
            <div className="space-y-2 mb-6">
              <p className="text-white text-[15px]"><span className="font-bold">P:</span> +91 96198 08222</p>
              <p className="text-white text-[15px]"><span className="font-bold">M:</span> Rohitash.jindal@stylefab.Co.in</p>
            </div>

          </div>
        </div>

      </div>

      {/* Marquee Section */}
      {/* <div className="border-y border-white/10 py-6 mb-8 mt-4 overflow-hidden flex whitespace-nowrap bg-[#0B1716]">
        <motion.div
          className="flex items-center font-bold text-6xl md:text-8xl lg:text-[110px] text-transparent tracking-widest uppercase"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
        
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 shrink-0 pr-10">
              <span>Enterprise</span>
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=200&h=120&fit=crop" alt="Marquee img" className="w-[200px] h-[120px] rounded-full object-cover grayscale opacity-60" />
              <span>Growth</span>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&h=120&fit=crop" alt="Marquee img" className="w-[200px] h-[120px] rounded-full object-cover grayscale opacity-60" />
            </div>
          ))}
        </motion.div>
      </div> */}

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">

          <p className="text-slate-400 text-sm">
            &copy; {currentYear} <span className="text-white font-semibold">Stylefab PVT LTD</span> All right reserved
          </p>

          <div className="flex items-center gap-3 text-sm text-slate-400">
            <span>Powered by</span>
            <img src="/neo_logo.png" alt="Neologicx Logo" className="h-6 object-contain opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </footer>
  )
}
