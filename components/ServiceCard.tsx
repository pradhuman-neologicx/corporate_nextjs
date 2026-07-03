'use client'

import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import Link from 'next/link'

interface ServiceCardProps {
  iconName: string
  title: string
  description: string
  index: number
}

export default function ServiceCard({
  iconName,
  title,
  description,
  index,
}: ServiceCardProps) {
  const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }> | null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative p-8 bg-card rounded-[2rem] border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 cursor-pointer flex flex-col"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 flex flex-col items-start h-full w-full">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 mb-6 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
          {IconComponent && <IconComponent size={28} className="text-primary group-hover:text-white transition-colors duration-500" strokeWidth={2} />}
        </div>
        <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground leading-relaxed flex-grow">{description}</p>
        <Link href="/products" className="mt-8 inline-flex items-center text-primary font-semibold text-[15px] transition-all duration-300 overflow-hidden z-20 before:absolute before:inset-0">
          <span className="relative">
            Explore Fabric
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </span>
          <Icons.ArrowRight size={18} className="ml-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </Link>
      </div>
    </motion.div>
  )
}
