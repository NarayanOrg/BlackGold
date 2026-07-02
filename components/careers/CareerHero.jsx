'use client'

import React from 'react'
import { motion } from 'motion/react'
import FadeIn from '@/components/ui/FadeIn'

export default function CareerHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  stats = [],
}) {
  return (
    <section className="relative overflow-hidden bg-background px-6 pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <FadeIn as="p" className="text-sm font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </FadeIn>
          <FadeIn as="h1" delay={100} className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight">
            {title}
          </FadeIn>
          <FadeIn as="p" delay={200} className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
            {description}
          </FadeIn>

          {stats.length > 0 && (
            <FadeIn delay={300} className="mt-10 flex flex-wrap gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </FadeIn>
          )}
        </div>

        {imageSrc && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative aspect-4/3 rounded-3xl overflow-hidden bg-muted"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}