import React from 'react'
import { HelpCircle } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'

export default function FaqHero({ eyebrow, title, description }) {
  return (
    <section className="relative bg-background px-6 pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn className="mx-auto mb-6 w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center [&_svg]:w-6 [&_svg]:h-6">
          <HelpCircle />
        </FadeIn>
        <FadeIn as="p" delay={75} className="text-sm font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </FadeIn>
        <FadeIn as="h1" delay={150} className="mt-3 text-4xl md:text-5xl font-bold text-foreground leading-tight">
          {title}
        </FadeIn>
        <FadeIn as="p" delay={225} className="mt-5 text-lg text-muted-foreground leading-relaxed">
          {description}
        </FadeIn>
      </div>
    </section>
  )
}