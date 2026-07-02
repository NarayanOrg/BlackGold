import React from 'react'
import FadeIn from '@/components/ui/FadeIn'
import { Users, Target, BarChart3, ShieldCheck, Handshake } from 'lucide-react'

const reasons = [
  { icon: Users, title: "Experienced Professionals", description: "Our team combines technical expertise with practical business experience to deliver high-quality advisory solutions." },
  { icon: Target, title: "Client-Focused Solutions", description: "Every recommendation is tailored to your business objectives, industry, and stage of growth." },
  { icon: BarChart3, title: "Data-Driven Decision Making", description: "We transform financial data into strategic insights that support confident business decisions." },
  { icon: ShieldCheck, title: "Regulatory Excellence", description: "We help businesses maintain compliance with tax, financial reporting, and regulatory obligations." },
  { icon: Handshake, title: "Long-Term Partnership", description: "Our commitment extends beyond project delivery—we aim to become your trusted business advisor." },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 px-6 bg-muted/30" aria-labelledby="why-choose-us-heading">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn as="p" className="text-sm font-semibold uppercase tracking-widest text-primary">Our Advantage</FadeIn>
          <FadeIn as="h2" delay={100} id="why-choose-us-heading" className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Why Choose BlackGold Advisory?
          </FadeIn>
        </div>

        <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <FadeIn key={reason.title} as="li" delay={index * 100} className="h-full">
                <article className="h-full flex flex-col gap-4 rounded-xl border border-border bg-background p-6">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </article>
              </FadeIn>
            )
          })}
        </ul>
      </div>
    </section>
  )
}