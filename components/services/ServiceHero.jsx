'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

export default function ServiceHero({ icon: Icon, eyebrow, title, description, imageSrc, imageAlt }) {
  return (
    <section className="bg-muted/30 border-b border-border" aria-labelledby="service-hero-heading">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary"
          >
            {Icon}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-5 text-sm font-semibold uppercase tracking-widest text-primary"
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            id="service-hero-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-5 text-base md:text-lg text-muted-foreground"
          >
            {description}
          </motion.p>
        </div>

        <motion.figure
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative aspect-4/3 w-full rounded-xl overflow-hidden"
        >
          <Image src={imageSrc} alt={imageAlt} fill priority className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
        </motion.figure>
      </div>
    </section>
  )
}