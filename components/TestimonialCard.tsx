'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  company: string
  content: string
  rating: number
  index: number
}

export default function TestimonialCard({
  name,
  company,
  content,
  rating,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="p-8 bg-card rounded-xl border border-border"
    >
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-accent text-accent" />
        ))}
      </div>

      {/* Content */}
      <p className="text-muted-foreground leading-relaxed mb-6 italic">
        &quot;{content}&quot;
      </p>

      {/* Author */}
      <div>
        <p className="font-semibold text-primary">{name}</p>
        <p className="text-sm text-muted-foreground">{company}</p>
      </div>
    </motion.div>
  )
}
