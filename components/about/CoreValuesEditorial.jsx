'use client'
import React from 'react'
import { motion } from 'motion/react'
import { ShieldCheck, Award, Briefcase, Lightbulb, Users, Target } from 'lucide-react'

const values = [
  { number: "01", icon: ShieldCheck, title: "Integrity", description: "We uphold the highest ethical and professional standards." },
  { number: "02", icon: Award, title: "Excellence", description: "We strive for exceptional quality in every engagement." },
  { number: "03", icon: Briefcase, title: "Professionalism", description: "We deliver objective, accurate, and reliable advisory services." },
  { number: "04", icon: Lightbulb, title: "Innovation", description: "We embrace technology and modern financial solutions." },
  { number: "05", icon: Users, title: "Collaboration", description: "We work closely with clients to achieve shared success." },
  { number: "06", icon: Target, title: "Impact", description: "Our success is measured by the value we create for our clients." },
]

export default function CoreValuesEditorial() {
  return (
    <ol className="divide-y divide-border border-t border-b border-border">
      {values.map((value, index) => {
        const Icon = value.icon
        return (
          <motion.li
            key={value.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
          >
            <article className="group grid grid-cols-[auto_1fr] md:grid-cols-[100px_auto_1fr] items-start gap-x-6 gap-y-3 py-8 md:py-10">
              <span className="hidden md:block font-serif text-4xl lg:text-5xl font-bold text-muted-foreground/25 leading-none tabular-nums" aria-hidden="true">
                {value.number}
              </span>

              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>

              <div className="md:pt-1">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  <span className="md:hidden text-muted-foreground/40 font-normal mr-2 tabular-nums">{value.number}</span>
                  {value.title}
                </h3>
                <p className="mt-2 max-w-xl text-base text-muted-foreground">{value.description}</p>
              </div>
            </article>
          </motion.li>
        )
      })}
    </ol>
  )
}