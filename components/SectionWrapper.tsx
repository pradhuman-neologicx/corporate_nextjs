'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  title?: string
  subtitle?: string
  centered?: boolean
}

export default function SectionWrapper({
  children,
  className = '',
  title,
  subtitle,
  centered = true,
}: SectionWrapperProps) {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={centered ? 'text-center mb-16' : 'mb-16'}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className={`text-lg text-muted-foreground ${centered ? 'max-w-2xl mx-auto' : ''}`}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
