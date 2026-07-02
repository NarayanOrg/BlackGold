'use client'
import React from 'react'
import { motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'

export default function ServiceFeatureList({ items }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: (index % 6) * 0.06, ease: "easeOut" }}
          className="flex items-start gap-3 rounded-lg border border-border bg-background px-4 py-3"
        >
          <CheckCircle2 className="size-5 shrink-0 text-primary mt-0.5" aria-hidden="true" />
          <span className="text-sm md:text-base text-foreground">{item}</span>
        </motion.li>
      ))}
    </ul>
  )
}