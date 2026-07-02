'use client'
import React from 'react'
import { motion } from 'motion/react'

export default function IndustryGroup({ groupTitle, industries, groupIndex }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: groupIndex * 0.1, ease: "easeOut" }}
    >
      <h2 className="text-xl font-semibold uppercase tracking-widest text-primary">{groupTitle}</h2>

      <ul className="mt-6 divide-y divide-border border-t border-border">
        {industries.map((industry) => {
          return (
            <li key={industry.name} className="py-6 first:pt-0">
              <article className="flex items-start gap-5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {industry.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{industry.name}</h3>
                  <p className="mt-1 text-sm md:text-base text-muted-foreground">{industry.description}</p>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </motion.div>
  )
}