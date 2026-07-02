'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export default function ServiceOverviewCard({ icon: Icon, title, intro, highlights, url, index }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
    >
      <article className="group h-full flex flex-col rounded-xl border border-border bg-background p-8 transition-colors hover:border-primary">
        <div className="flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {Icon}
        </div>

        <h2 className="mt-6 text-xl md:text-2xl font-semibold text-foreground">{title}</h2>
        <p className="mt-3 text-base text-muted-foreground">{intro}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {highlights.map((item) => (
            <li key={item} className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>

        <Link href={url} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
          View {title}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </article>
    </motion.li>
  )
}