import React from 'react'
import {
  Wheat, Sprout, Cpu, Wifi, HeartPulse, GraduationCap, Factory, HardHat,
  Building2, ShoppingCart, Briefcase, HandHeart, Palmtree, Truck, Zap, Landmark,
} from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import PageHeader from '@/components/ui/PageHeader'
import IndustryGroup from '@/components/industries/IndustryGroup'
import CtaBanner from '@/components/CtaBanner'

export const metadata = {
  title: "Industries We Serve | Financial Advisory Across Multiple Sectors",
  description:
    "BlackGold Advisory serves agriculture, technology, healthcare, education, manufacturing, construction, real estate, NGOs, logistics, hospitality, and financial services.",
  keywords: [
    "Industry consulting",
    "Business consulting Ghana",
    "Financial advisory industries",
    "SME consulting",
    "Startup advisory",
  ],
  alternates: {
    canonical: "/industries",
  },
};

const industryGroups = [
  {
    groupTitle: "Production & Industry",
    industries: [
      { icon: <Wheat />, name: "Agriculture", description: "Financial planning and compliance support for farms and agricultural operations." },
      { icon: <Sprout />, name: "Agribusiness", description: "Advisory for processing, distribution, and value-chain businesses in agriculture." },
      { icon: <Factory />, name: "Manufacturing", description: "Cost management, financial modeling, and compliance for production businesses." },
      { icon: <HardHat />, name: "Construction", description: "Project-based financial oversight and reporting for construction firms." },
      { icon: <Building2 />, name: "Real Estate", description: "Financial structuring and advisory for property development and management." },
      { icon: <Zap />, name: "Energy", description: "Financial and regulatory advisory for energy sector businesses." },
    ],
  },
  {
    groupTitle: "Technology & Services",
    industries: [
      { icon: <Cpu />, name: "Technology", description: "Financial systems and investment readiness for technology-driven businesses." },
      { icon: <Wifi />, name: "FinTech", description: "Regulatory compliance and financial advisory tailored to fintech operations." },
      { icon: <Briefcase />, name: "Professional Services", description: "Accounting and advisory support for firms delivering professional expertise." },
      { icon: <Landmark />, name: "Financial Services", description: "Compliance and financial reporting support for financial institutions." },
    ],
  },
  {
    groupTitle: "People & Community",
    industries: [
      { icon: <HeartPulse />, name: "Healthcare", description: "Financial management and compliance support for healthcare providers." },
      { icon: <GraduationCap />, name: "Education", description: "Financial planning and reporting for schools and educational institutions." },
      { icon: <HandHeart />, name: "NGOs", description: "Financial governance and reporting for non-profit and development organizations." },
      { icon: <Palmtree />, name: "Hospitality", description: "Financial oversight and advisory for hotels, tourism, and hospitality businesses." },
    ],
  },
  {
    groupTitle: "Trade & Distribution",
    industries: [
      { icon: <ShoppingCart />, name: "Retail", description: "Bookkeeping, inventory finance, and compliance support for retail businesses." },
      { icon: <Truck />, name: "Logistics", description: "Financial advisory and reporting for transportation and logistics operations." },
    ],
  },
]

export default function IndustriesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Industries"
        title="Industries We Serve"
        description="BlackGold Advisory proudly serves clients across diverse sectors, bringing the same rigor and practical insight to every engagement."
      />

      <section className="py-20 md:py-28 px-6 bg-background" aria-labelledby="industries-detail-heading">
        <div className="max-w-3xl mx-auto">
          <FadeIn as="h2" id="industries-detail-heading" className="sr-only">Industries we work with</FadeIn>
          <div className="space-y-16">
            {industryGroups.map((group, index) => (
              <IndustryGroup key={group.groupTitle} groupTitle={group.groupTitle} industries={group.industries} groupIndex={index} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Don't See Your Industry?"
        description="Our advisory approach adapts to your business, whatever sector you operate in. Get in touch to discuss your specific needs."
        buttonLabel="Book a Consultation"
      />
    </main>
  )
}