import React from 'react'
import { Calculator, ShieldCheck, Clock, TrendingUp } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceFeatureList from '@/components/services/ServiceFeatureList'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import CtaBanner from '@/components/CtaBanner'

export const metadata = {
  title: "Accounting & Tax Services | Bookkeeping, Payroll & Tax Compliance",
  description:
    "Professional accounting and tax services including bookkeeping, payroll, tax planning, tax filing, financial reporting, SSNIT administration, and GRA compliance.",
  keywords: [
    "Accounting services",
    "Bookkeeping",
    "Payroll",
    "Tax planning",
    "Tax filing",
    "Financial reporting",
    "GRA compliance",
    "SSNIT",
    "Business accounting Ghana",
  ],
  alternates: {
    canonical: "/services/accounting-tax",
  },
};

const services = [
  "Bookkeeping", "Financial Statement Preparation", "Management Accounts",
  "Tax Planning", "Tax Computation", "Tax Filing", "GRA Compliance",
  "Payroll Management", "SSNIT & Pension Administration",
  "Financial Reporting", "Accounting System Setup",
]

const benefits = [
  { icon: <ShieldCheck />, title: "Stay Compliant", description: "Meet GRA and statutory obligations with confidence, avoiding penalties and interruptions to your business." },
  { icon: <Clock />, title: "Save Time", description: "Free up hours spent on manual bookkeeping and let our team keep your records accurate and current." },
  { icon: <TrendingUp />, title: "Make Informed Decisions", description: "Reliable financial statements give you a clear view of performance to guide every business decision." },
]

export default function AccountingAndTaxPage() {
  return (
    <main>
      <ServiceHero
        icon={<Calculator />}
        eyebrow="Accounting & Tax Services"
        title="Accurate Financial Management, Built to Last"
        description="Accurate financial management forms the foundation of every successful business. Our accounting professionals help organizations maintain reliable financial records while ensuring complete compliance with statutory obligations."
        imageSrc="/services/accounting-and-tax.png"
        imageAlt="Accountant reviewing financial statements and tax documents"
      />

      <section className="py-20 md:py-28 px-6 bg-background" aria-labelledby="benefits-heading">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl text-center mx-auto">
            <FadeIn as="p" className="text-sm font-semibold uppercase tracking-widest text-primary">Why It Matters</FadeIn>
            <FadeIn as="h2" delay={100} id="benefits-heading" className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight">
              A Solid Financial Foundation
            </FadeIn>
          </div>
          <div className="mt-12">
            <ServiceBenefits items={benefits} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-muted/30" aria-labelledby="services-list-heading">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl text-center mx-auto">
            <FadeIn as="p" className="text-sm font-semibold uppercase tracking-widest text-primary">What&apos;s Included</FadeIn>
            <FadeIn as="h2" delay={100} id="services-list-heading" className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Our Accounting &amp; Tax Services
            </FadeIn>
          </div>
          <div className="mt-12">
            <ServiceFeatureList items={services} />
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Ready to Get Your Books in Order?"
        description="Talk to our team about bookkeeping, tax compliance, and financial reporting tailored to your business."
        buttonLabel="Book a Consultation"
      />
    </main>
  )
}