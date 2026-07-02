'use client'
import React from 'react'
import { motion } from 'motion/react'
import { ShieldCheck, Award, Briefcase, Lightbulb, Users, Target } from 'lucide-react'

const iconMap = {
  Integrity: ShieldCheck,
  Excellence: Award,
  Professionalism: Briefcase,
  Innovation: Lightbulb,
  Collaboration: Users,
  Impact: Target,
}

const values = [
  { title: "Integrity", description: "We uphold the highest ethical and professional standards." },
  { title: "Excellence", description: "We strive for exceptional quality in every engagement." },
  { title: "Professionalism", description: "We deliver objective, accurate, and reliable advisory services." },
  { title: "Innovation", description: "We embrace technology and modern financial solutions." },
  { title: "Collaboration", description: "We work closely with clients to achieve shared success." },
  { title: "Impact", description: "Our success is measured by the value we create for our clients." },
]

export default function CoreValuesGrid() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {values.map((value, index) => {
        const Icon = iconMap[value.title]
        return (
          <motion.li
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
          >
            <article className="h-full flex flex-col gap-3 rounded-xl border border-border bg-muted/30 p-6">
              <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </article>
          </motion.li>
        )
      })}
    </ul>
  )
}