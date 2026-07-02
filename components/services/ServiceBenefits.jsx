'use client'
import React from 'react'
import { motion } from 'motion/react'

export default function ServiceBenefits({ items }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {items.map((item, index) => {
        const Icon = item.icon
        return (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
          >
            <article className="h-full flex flex-col gap-3 rounded-xl border border-border bg-muted/30 p-6">
              <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {Icon}
              </div>
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </article>
          </motion.li>
        )
      })}
    </ul>
  )
}