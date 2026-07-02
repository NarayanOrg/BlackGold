import React from 'react'
import { LineChart, Target, Gauge, Layers } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceFeatureList from '@/components/services/ServiceFeatureList'
import CtaBanner from '@/components/CtaBanner'

export const metadata = {
  title: "Financial Modeling & Analysis | Forecasting & Business Valuation",
  description:
    "Develop investor-ready financial models, business valuations, forecasting models, budgeting, scenario analysis, and feasibility studies.",
  keywords: [
    "Financial modeling",
    "Business valuation",
    "Financial forecasting",
    "Budgeting",
    "Investment analysis",
    "Scenario analysis",
    "Feasibility study",
    "Financial dashboard",
  ],
  alternates: {
    canonical: "/services/financial-modeling-analysis",
  },
};

const modelingServices = [
  "Three-Statement Financial Models",
  "Financial Forecasting",
  "Revenue Forecasting",
  "Cost Forecasting",
  "Budgeting",
  "Financial Dashboard Development",
]

const valuationServices = [
  "Business Valuation",
  "Scenario Analysis",
  "Sensitivity Analysis",
  "Investment Appraisal",
  "Project Feasibility Studies",
]

const stats = [
  { icon: <Layers />, value: "3-Statement", label: "Fully Linked Models", description: "Income statement, balance sheet, and cash flow built to move together." },
  { icon: <Target />, value: "Scenario-Ready", label: "Built-In Flexibility", description: "Stress-test assumptions and see the impact before you commit capital." },
  { icon: <Gauge />, value: "Decision-Grade", label: "Investor & Bank Ready", description: "Models built to withstand scrutiny from investors, lenders, and boards." },
]

export default function FinancialModelingPage() {
  return (
    <main>
      <ServiceHero
        icon={<LineChart />}
        eyebrow="Financial Modeling & Analysis"
        title="Numbers You Can Actually Plan Around"
        description="We develop robust financial models that support strategic planning and investment decisions. From forecasting to valuation, our models give you a clear, defensible view of where your business is headed."
        imageSrc="/services/financial-modeling.jpg"
        imageAlt="Financial analyst building a financial model on a laptop"
      />

      <section className="py-20 md:py-28 px-6 bg-background" aria-labelledby="stats-heading">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <FadeIn as="p" className="text-sm font-semibold uppercase tracking-widest text-primary">Why It Matters</FadeIn>
            <FadeIn as="h2" delay={100} id="stats-heading" className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Models Built for Real Decisions
            </FadeIn>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {stats.map((stat, i) => (
              <FadeIn
                key={stat.label}
                delay={150 + i * 100}
                className="bg-background p-8 md:p-10 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3 text-primary [&_svg]:w-6 [&_svg]:h-6">
                  {stat.icon}
                  <span className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground">{stat.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-muted/30" aria-labelledby="services-list-heading">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl text-center mx-auto">
            <FadeIn as="p" className="text-sm font-semibold uppercase tracking-widest text-primary">What&apos;s Included</FadeIn>
            <FadeIn as="h2" delay={100} id="services-list-heading" className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Our Financial Modeling &amp; Analysis Services
            </FadeIn>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <FadeIn delay={150}>
              <h3 className="text-lg font-semibold text-foreground mb-5">Modeling &amp; Forecasting</h3>
              <ServiceFeatureList items={modelingServices} />
            </FadeIn>
            <FadeIn delay={250}>
              <h3 className="text-lg font-semibold text-foreground mb-5">Valuation &amp; Decision Support</h3>
              <ServiceFeatureList items={valuationServices} />
            </FadeIn>
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Ready to Build a Model You Can Trust?"
        description="Talk to our team about forecasting, valuation, and the financial models that back your next big decision."
        buttonLabel="Book a Consultation"
      />
    </main>
  )
}