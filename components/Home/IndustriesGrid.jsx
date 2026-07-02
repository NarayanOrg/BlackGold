import React from 'react'
import FadeIn from '@/components/ui/FadeIn'
import {
  Wheat,
  Cpu,
  Factory,
  Building2,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Briefcase,
  Truck,
  Landmark,
} from 'lucide-react'

const industries = [
  { icon: Wheat, name: "Agriculture & Agribusiness" },
  { icon: Cpu, name: "Technology & Startups" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Building2, name: "Real Estate & Construction" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: GraduationCap, name: "Education" },
  { icon: ShoppingCart, name: "Retail & Wholesale" },
  { icon: Briefcase, name: "Professional Services" },
  { icon: Truck, name: "Logistics & Transportation" },
  { icon: Landmark, name: "Financial Services" },
]

export default function IndustriesGrid() {
  return (
    <section className="py-20 md:py-28 px-6 bg-background" aria-labelledby="industries-heading">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn as="p" className="text-sm font-semibold uppercase tracking-widest text-primary">
            Who We Serve
          </FadeIn>
          <FadeIn as="h2" delay={100} id="industries-heading" className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Industries We Serve
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Our expertise spans multiple sectors, including:
            </p>
          </FadeIn>
        </div>

        <ul className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <FadeIn key={industry.name} as="li" delay={index * 60}>
                <article className="flex h-full flex-col items-center gap-3 rounded-xl border border-border bg-muted/30 px-4 py-8 text-center transition-colors hover:border-primary hover:bg-primary/5">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {industry.name}
                  </h3>
                </article>
              </FadeIn>
            )
          })}
        </ul>
      </div>
    </section>
  )
}