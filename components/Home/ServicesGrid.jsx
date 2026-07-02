import Link from 'next/link'
import React from 'react'
import FadeIn from '@/components/ui/FadeIn'
import {
  Calculator,
  LineChart,
  Landmark,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Calculator,
    title: "Accounting & Tax Services",
    description:
      "Helping businesses maintain accurate financial records while ensuring complete compliance with statutory obligations.",
    url: "/services/accounting-and-tax",
  },
  {
    icon: LineChart,
    title: "Financial Modeling & Analysis",
    description:
      "Providing advanced financial models and analytical tools that support planning, valuation, forecasting, and investment decisions.",
    url: "/services/financial-modeling",
  },
  {
    icon: Landmark,
    title: "Capital Raising & Investment Advisory",
    description:
      "Preparing businesses for funding through investment readiness, financial strategy, and fundraising support.",
    url: "/services/capital-raising",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Regulatory Support",
    description:
      "Helping businesses comply with regulatory requirements while minimizing operational and financial risk.",
    url: "/services/compliance",
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-28 px-6 bg-muted/30" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn as="p" className="text-sm font-semibold uppercase tracking-widest text-primary">
            What We Do
          </FadeIn>
          <FadeIn as="h2" delay={100} id="services-heading" className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Our Core Services
          </FadeIn>
        </div>

        <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <FadeIn key={service.title} as="li" delay={index * 100} className="h-full">
                <article className="group h-full flex flex-col rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground flex-1">
                    {service.description}
                  </p>

                  <Link
                    href={service.url}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    Learn More
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </article>
              </FadeIn>
            )
          })}
        </ul>
      </div>
    </section>
  )
}