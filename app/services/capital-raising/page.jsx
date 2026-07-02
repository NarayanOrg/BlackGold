import React from 'react'
import { Banknote, Handshake, FileCheck2, Search } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import CtaBanner from '@/components/CtaBanner'

export const metadata = {
  title: "Capital Raising & Investment Advisory | Investor Readiness",
  description:
    "Prepare your business for investors with financial strategy, business plans, pitch decks, valuation, due diligence, and fundraising advisory.",
  keywords: [
    "Capital raising",
    "Investor readiness",
    "Pitch deck",
    "Business plan",
    "Investment advisory",
    "Funding",
    "Business financing",
    "Startup funding",
  ],
  alternates: {
    canonical: "/services/capital-raising-investment-advisory",
  },
};

const benefits = [
  { icon: <Search />, title: "Investor Readiness", description: "Get your financials, story, and structure in order before you ever step into a room with investors or lenders." },
  { icon: <Handshake />, title: "Stronger Negotiating Position", description: "Well-structured deals and clear financial due diligence give you leverage at the negotiating table." },
  { icon: <FileCheck2 />, title: "Faster Access to Capital", description: "A polished pitch deck and business plan shorten the path from first conversation to funded." },
]

const stages = [
  {
    number: "01",
    title: "Investor Readiness Assessment",
    description: "We assess where your business stands today and what investors and lenders will want to see before you approach them.",
    items: ["Investor Readiness Assessment", "Financial Due Diligence"],
  },
  {
    number: "02",
    title: "Materials & Positioning",
    description: "We build the documents that tell your story with the numbers to back it up.",
    items: ["Pitch Deck Preparation", "Business Plan Development"],
  },
  {
    number: "03",
    title: "Financing Strategy",
    description: "We help you decide how to raise, whether through equity, debt, or a blend of both.",
    items: ["Capital Raising Strategy", "Equity Financing Advisory", "Debt Financing Advisory", "Bank Loan Support"],
  },
  {
    number: "04",
    title: "Structuring & Close",
    description: "We support you through structuring the deal and getting it across the line.",
    items: ["Deal Structuring", "Investment Advisory"],
  },
]

export default function CapitalRaisingPage() {
  return (
    <main>
      <ServiceHero
        icon={<Banknote />}
        eyebrow="Capital Raising & Investment Advisory"
        title="Get Your Business Investment-Ready"
        description="Raising capital takes more than a good idea. We prepare businesses to successfully attract funding and investment, from investor readiness through deal structuring and close."
        imageSrc="/services/capital-raising.png"
        imageAlt="Business team presenting a pitch deck to investors"
      />

      <section className="py-20 md:py-28 px-6 bg-background" aria-labelledby="benefits-heading">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl text-center mx-auto">
            <FadeIn as="p" className="text-sm font-semibold uppercase tracking-widest text-primary">Why It Matters</FadeIn>
            <FadeIn as="h2" delay={100} id="benefits-heading" className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Walk Into the Room Prepared
            </FadeIn>
          </div>
          <div className="mt-12">
            <ServiceBenefits items={benefits} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-muted/30" aria-labelledby="stages-heading">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl text-center mx-auto">
            <FadeIn as="p" className="text-sm font-semibold uppercase tracking-widest text-primary">Our Process</FadeIn>
            <FadeIn as="h2" delay={100} id="stages-heading" className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight">
              From Readiness to Close
            </FadeIn>
          </div>

          <div className="mt-16 relative">
            <div className="absolute left-6 md:left-8 top-2 bottom-2 w-px bg-border" aria-hidden="true" />
            <div className="space-y-12">
              {stages.map((stage, i) => (
                <FadeIn
                  key={stage.number}
                  delay={150 + i * 100}
                  className="relative pl-16 md:pl-20"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary font-bold text-sm md:text-base">
                    {stage.number}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{stage.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{stage.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {stage.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm px-3 py-1.5 rounded-full bg-background border border-border text-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Ready to Raise With Confidence?"
        description="Talk to our team about investor readiness, pitch materials, and structuring your next round of funding."
        buttonLabel="Book a Consultation"
      />
    </main>
  )
}