import React from 'react'
import FadeIn from '@/components/ui/FadeIn'
import { Search, ClipboardList, Lightbulb, Rocket, Repeat } from 'lucide-react'

const steps = [
  { icon: Search, title: "Discovery", description: "We take time to understand your business, objectives, and challenges." },
  { icon: ClipboardList, title: "Business Assessment", description: "We analyze your financial position, operations, and opportunities." },
  { icon: Lightbulb, title: "Strategy Development", description: "Our experts design practical financial and business solutions." },
  { icon: Rocket, title: "Implementation", description: "We support you in executing the agreed strategy." },
  { icon: Repeat, title: "Continuous Advisory", description: "We continue providing strategic guidance as your business grows." },
]

export default function ProcessSteps() {
  return (
    <section className="py-20 md:py-28 px-6 bg-background" aria-labelledby="process-heading">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn as="p" className="text-sm font-semibold uppercase tracking-widest text-primary">How We Work</FadeIn>
          <FadeIn as="h2" delay={100} id="process-heading" className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Our Process
          </FadeIn>
        </div>

        <ol className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            const stepNumber = index + 1
            const isLast = index === steps.length - 1

            return (
              <FadeIn key={step.title} as="li" delay={index * 120} className="relative h-full">
                <div className="flex h-full flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3 w-full">
                    <div className="relative flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="size-6" aria-hidden="true" />
                      <span className="absolute -top-1.5 -right-1.5 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground" aria-hidden="true">
                        {stepNumber}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground lg:mt-1">
                      <span className="sr-only">Step {stepNumber}: </span>
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{step.description}</p>
                </div>

                {!isLast && (
                  <div className="hidden lg:flex absolute top-7 -right-6 items-center justify-center text-primary/40" aria-hidden="true">
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 8H22M22 8L16 2M22 8L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </FadeIn>
            )
          })}
        </ol>
      </div>
    </section>
  )
}