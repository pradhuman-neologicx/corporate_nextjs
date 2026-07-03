'use client'

import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

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
  const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ size: number; className: string }> | null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group p-8 bg-card rounded-xl border border-border hover:border-accent transition-colors"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-all">
        {IconComponent && <IconComponent size={24} className="text-primary group-hover:text-accent-foreground" />}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-primary">{title}</h3>
      <p className="mt-3 text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  )
}
