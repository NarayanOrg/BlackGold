'use client'
import React from 'react'
import { motion } from 'motion/react'

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="bg-muted/30 border-b border-border" aria-labelledby="page-header-heading">
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-sm font-semibold uppercase tracking-widest text-primary"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          id="page-header-heading"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-3 text-3xl md:text-5xl font-bold text-foreground leading-tight"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}