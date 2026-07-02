import React from 'react'
import FadeIn from '@/components/ui/FadeIn'

export default function CareerValues({ items = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, i) => (
        <FadeIn
          key={item.title}
          delay={150 + i * 100}
          className="rounded-2xl border border-border bg-background p-8 flex flex-col gap-4"
        >
          <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center [&_svg]:w-5 [&_svg]:h-5">
            {item.icon}
          </div>
          <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
        </FadeIn>
      ))}
    </div>
  )
}