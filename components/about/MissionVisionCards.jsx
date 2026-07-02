'use client'
import React from 'react'
import { motion } from 'motion/react'

export default function MissionVisionCards({ items }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => {
        return (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
          >
            <article className="h-full rounded-xl border border-border bg-background p-8">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {item.icon}
              </div>
              <h2 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h2>
              <p className="mt-3 text-base text-muted-foreground">{item.description}</p>
            </article>
          </motion.li>
        )
      })}
    </ul>
  )
}