import Link from 'next/link'
import React from 'react'
import FadeIn from '@/components/ui/FadeIn'
import { Button } from "@/components/ui/button"

export default function CtaBanner({
  heading = "Ready to Build a Stronger Business?",
  description = "Whether you need financial advisory, accounting support, investment readiness, or regulatory compliance, BlackGold Advisory is ready to help.",
  buttonLabel = "Schedule a Consultation",
  buttonUrl = "/contact",
}) {
  return (
    <section className="py-20 md:py-28 px-6 bg-primary" aria-labelledby="cta-heading">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn as="h2" id="cta-heading" className="text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
          {heading}
        </FadeIn>

        <FadeIn delay={100}>
          <p className="mt-4 text-base md:text-lg text-primary-foreground/85">{description}</p>
        </FadeIn>

        <FadeIn delay={200} className="mt-8">
          <Button asChild size="lg" variant="secondary">
            <Link href={buttonUrl}>{buttonLabel}</Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}