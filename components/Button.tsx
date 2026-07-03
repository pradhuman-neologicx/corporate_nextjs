'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    'font-semibold rounded-lg transition-all duration-300 cursor-pointer'

  const variants = {
    primary:
      'bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95',
    secondary:
      'bg-secondary text-primary border border-border hover:bg-muted active:scale-95',
    outline:
      'bg-transparent border-2 border-primary text-primary hover:bg-primary/5 active:scale-95',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </motion.button>
  )
}
