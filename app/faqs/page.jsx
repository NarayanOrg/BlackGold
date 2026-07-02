import React from 'react'
import FadeIn from '@/components/ui/FadeIn'
import FaqHero from '@/components/faq/FaqHero'
import FaqAccordion from '@/components/faq/FaqAccordion'
import CtaBanner from '@/components/CtaBanner'

export const metadata = {
  title: "FAQs | BlackGold Advisory",
  description: "Answers to common questions about who we work with, our services for startups and investors, ongoing advisory support, and working with clients across Africa and internationally.",
}


export default function FaqsPage() {
  return (
    <main>
      <FaqHero
        eyebrow="FAQs"
        title="Questions, Answered"
        description="Everything you need to know about working with BlackGold Advisory. Can't find what you're looking for? Reach out and we'll get back to you."
      />

      <section className="pb-20 md:pb-28 px-6 bg-background" aria-labelledby="faq-list-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-list-heading" className="sr-only">Frequently Asked Questions</h2>
          <FaqAccordion />
        </div>
      </section>

      <section className="pb-20 md:pb-28 px-6 bg-muted/30 pt-16" aria-labelledby="more-questions-heading">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <h2 id="more-questions-heading" className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our team is happy to walk you through how we can support your business, whatever stage you&apos;re at.
          </p>
        </FadeIn>
      </section>

      <CtaBanner
        heading="Let's Talk About Your Business"
        description="Book a consultation and get answers tailored to your specific situation."
        buttonLabel="Book a Consultation"
      />
    </main>
  )
}