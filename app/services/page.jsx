import React from 'react'
import { Calculator, LineChart, Landmark, ShieldCheck } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import PageHeader from '@/components/ui/PageHeader'
import ServiceOverviewCard from '@/components/services/ServiceOverviewCard'
import CtaBanner from '@/components/CtaBanner'
import Testimonials from '@/components/Testimonials'

export const metadata = {
  title: "Financial Advisory Services | BlackGold Advisory",
  description:
    "Explore our comprehensive financial advisory services including accounting, tax, financial modeling, investment advisory, and regulatory compliance.",
  keywords: [
    "Financial services Ghana",
    "Accounting services",
    "Business consulting",
    "Financial advisory",
    "Corporate finance",
  ],
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    icon: <Calculator />,
    title: "Accounting & Tax Services",
    intro: "Accurate financial management forms the foundation of every successful business. Our accounting professionals help organizations maintain reliable financial records while ensuring compliance with statutory obligations.",
    highlights: ["Bookkeeping", "Tax Planning & Filing", "Payroll Management", "GRA Compliance"],
    url: "/services/accounting-and-tax",
  },
  {
    icon: <LineChart />,
    title: "Financial Modeling & Analysis",
    intro: "We develop robust financial models that support strategic planning and investment decisions.",
    highlights: ["Three-Statement Models", "Forecasting & Budgeting", "Business Valuation", "Scenario Analysis"],
    url: "/services/financial-modeling",
  },
  {
    icon: <Landmark />,
    title: "Capital Raising & Investment Advisory",
    intro: "We prepare businesses to successfully attract funding and investment.",
    highlights: ["Capital Raising Strategy", "Investor Readiness", "Pitch Deck Preparation", "Business Plan Development"],
    url: "/services/capital-raising",
  },
  {
    icon: <ShieldCheck />,
    title: "Compliance & Regulatory Support",
    intro: "Helping businesses comply with regulatory requirements while minimizing operational and financial risk.",
    highlights: ["Regulatory Filings", "Statutory Compliance", "Risk Management", "Governance Support"],
    url: "/services/compliance",
  },
]

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="What We Do"
        title="Our Services"
        description="We combine accounting expertise, financial analysis, strategic advisory, and regulatory compliance to deliver practical solutions that create measurable business value."
      />

      <section className="py-20 md:py-28 px-6 bg-background" aria-labelledby="services-list-heading">
        <div className="max-w-6xl mx-auto">
          <FadeIn as="h2" id="services-list-heading" className="sr-only">Our core services</FadeIn>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceOverviewCard key={service.title} index={index} {...service} />
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />

      <CtaBanner
        heading="Not Sure Where to Start?"
        description="Tell us about your business and we'll help you identify the right advisory services for your stage of growth."
        buttonLabel="Book a Consultation"
      />
    </main>
  )
}