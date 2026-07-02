import React from 'react'
import { ShieldCheck, Scale, FileWarning, Landmark } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceFeatureList from '@/components/services/ServiceFeatureList'
import CtaBanner from '@/components/CtaBanner'

export const metadata = {
  title: "Compliance & Regulatory Support | Corporate Governance Services",
  description:
    "Ensure your business remains compliant with regulatory requirements through company secretarial services, audit readiness, governance, and statutory compliance.",
  keywords: [
    "Regulatory compliance",
    "Corporate governance",
    "Business registration",
    "Audit readiness",
    "Company secretary",
    "Annual returns",
    "Internal controls",
  ],
  alternates: {
    canonical: "/services/compliance-regulatory-support",
  },
};

const services = [
  "Business Registration", "Company Secretarial Support", "Annual Returns",
  "Tax Compliance", "Regulatory Documentation", "Audit Readiness",
  "Corporate Governance Advisory", "Internal Control Reviews",
]

const risks = [
  {
    icon: <FileWarning />,
    title: "Statutory Filings",
    description: "Missed registrations, annual returns, or regulatory documentation can trigger penalties, fines, or loss of good standing.",
  },
  {
    icon: <Landmark />,
    title: "Tax & Regulatory Exposure",
    description: "Falling behind on tax compliance or sector-specific regulation puts your license to operate at risk.",
  },
  {
    icon: <Scale />,
    title: "Governance & Controls",
    description: "Weak governance structures and internal controls expose the business to fraud, mismanagement, and investor distrust.",
  },
]

export default function ComplianceRegulatoryPage() {
  return (
    <main>
      <ServiceHero
        icon={<ShieldCheck />}
        eyebrow="Compliance & Regulatory Support"
        title="Operate With Confidence, Not Constant Worry"
        description="Regulatory requirements shift and multiply as businesses grow. We help you comply with statutory obligations while minimizing operational and financial risk, so compliance becomes routine, not a fire drill."
        imageSrc="/services/compliance-regulatory.png"
        imageAlt="Compliance officer reviewing regulatory documentation"
      />

      <section className="py-20 md:py-28 px-6 bg-background" aria-labelledby="risks-heading">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl">
            <FadeIn as="p" className="text-sm font-semibold uppercase tracking-widest text-primary">The Risk of Getting It Wrong</FadeIn>
            <FadeIn as="h2" delay={100} id="risks-heading" className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Where Businesses Get Exposed
            </FadeIn>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {risks.map((risk, i) => (
              <FadeIn
                key={risk.title}
                delay={150 + i * 100}
                className="rounded-2xl border border-border bg-muted/30 p-8 flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center [&_svg]:w-5 [&_svg]:h-5">
                  {risk.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{risk.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{risk.description}</p>
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
              Our Compliance &amp; Regulatory Services
            </FadeIn>
          </div>
          <div className="mt-12">
            <ServiceFeatureList items={services} />
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Ready to Get Compliant and Stay That Way?"
        description="Talk to our team about registration, statutory filings, governance, and building compliance into how you operate."
        buttonLabel="Book a Consultation"
      />
    </main>
  )
}