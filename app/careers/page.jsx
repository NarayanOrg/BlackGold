import React from 'react'
import { Users, TrendingUp, GraduationCap, HeartHandshake } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import CareerHero from '@/components/careers/CareerHero'
import CareerValues from '@/components/careers/CareerValues'
import JobOpeningList from '@/components/careers/JobOpeningList'
import CtaBanner from '@/components/CtaBanner'

export const metadata = {
  title: "Careers | Join BlackGold Advisory",
  description:
    "Discover career opportunities at BlackGold Advisory including accounting, financial analysis, tax advisory, consulting, graduate trainee, and internship roles.",
  keywords: [
    "Finance jobs Ghana",
    "Accounting jobs",
    "Consulting careers",
    "Financial analyst jobs",
    "Graduate trainee",
  ],
  alternates: {
    canonical: "/careers",
  },
};

const stats = [
  { value: "6", label: "Open Roles" },
  { value: "12+", label: "Industries Served" },
  { value: "Remote-Friendly", label: "Flexible Engagements" },
]

const values = [
  {
    icon: <TrendingUp />,
    title: "Real Impact",
    description: "Your work directly shapes the financial decisions of the businesses we advise, not buried in process.",
  },
  {
    icon: <GraduationCap />,
    title: "Continuous Growth",
    description: "We invest in technical training and mentorship so you keep building expertise, not just billable hours.",
  },
  {
    icon: <Users />,
    title: "Collaborative Team",
    description: "You'll work alongside experienced advisors who share knowledge freely and take ownership together.",
  },
  {
    icon: <HeartHandshake />,
    title: "Client-First Culture",
    description: "We measure success by the value we create for clients, and that mindset shapes how we work internally too.",
  },
]

const jobs = [
  {
    id: "financial-analyst",
    title: "Financial Analyst",
    department: "Financial Modeling & Analysis",
    location: "Accra, Ghana",
    type: "Full-time",
    description: "Support the modeling and analysis team in building financial models, forecasts, and valuations for clients across multiple industries.",
    responsibilities: [
      "Build and maintain three-statement financial models",
      "Prepare forecasts, budgets, and scenario analyses for client engagements",
      "Support business valuation and investment appraisal work",
      "Develop financial dashboards and reporting tools",
    ],
    requirements: [
      "Degree in Finance, Accounting, Economics, or related field",
      "1–3 years of experience in financial analysis or modeling",
      "Strong Excel skills; familiarity with financial modeling best practices",
      "Sharp attention to detail and comfort working with ambiguity",
    ],
  },
  {
    id: "accountant",
    title: "Accountant",
    department: "Accounting & Tax Services",
    location: "Accra, Ghana",
    type: "Full-time",
    description: "Manage day-to-day bookkeeping, financial statement preparation, and compliance support for a portfolio of client accounts.",
    responsibilities: [
      "Maintain accurate books of accounts across multiple clients",
      "Prepare financial statements and management accounts",
      "Support tax computation, filing, and GRA compliance",
      "Assist with payroll and SSNIT & pension administration",
    ],
    requirements: [
      "Degree in Accounting or professional certification (ICAG, ACCA, or equivalent in progress)",
      "2+ years of experience in bookkeeping or accounting",
      "Working knowledge of Ghanaian tax and statutory requirements",
      "Comfortable managing multiple client accounts simultaneously",
    ],
  },
  {
    id: "business-consultant",
    title: "Business Consultant",
    department: "Advisory",
    location: "Accra, Ghana",
    type: "Full-time",
    description: "Work directly with clients on business assessments, strategy development, and implementation support across our advisory engagements.",
    responsibilities: [
      "Lead discovery and business assessment sessions with clients",
      "Develop practical financial and business strategy recommendations",
      "Support implementation and track engagement outcomes",
      "Contribute to proposals and client-facing deliverables",
    ],
    requirements: [
      "Degree in Business, Finance, or related field; MBA a plus",
      "3+ years in consulting, advisory, or a related client-facing role",
      "Strong analytical and communication skills",
      "Ability to manage multiple client engagements at once",
    ],
  },
  {
    id: "tax-associate",
    title: "Tax Associate",
    department: "Accounting & Tax Services",
    location: "Accra, Ghana",
    type: "Full-time",
    description: "Support tax planning, computation, and compliance work to help clients meet their statutory obligations accurately and on time.",
    responsibilities: [
      "Prepare tax computations and returns for review",
      "Monitor filing deadlines and GRA compliance requirements",
      "Research tax regulation changes relevant to client industries",
      "Support clients through audits and regulatory inquiries",
    ],
    requirements: [
      "Degree in Accounting, Tax, or related field",
      "1–2 years of experience in tax preparation or compliance",
      "Familiarity with Ghana Revenue Authority requirements",
      "Detail-oriented with strong organizational skills",
    ],
  },
  {
    id: "graduate-trainee",
    title: "Graduate Trainee",
    department: "Rotational Program",
    location: "Accra, Ghana",
    type: "Full-time · 12-month program",
    description: "A structured rotational program for recent graduates to gain hands-on experience across accounting, financial modeling, and advisory functions.",
    responsibilities: [
      "Rotate across accounting, financial modeling, and advisory teams",
      "Support live client engagements under senior guidance",
      "Participate in structured technical and professional training",
      "Take on increasing ownership of deliverables as the program progresses",
    ],
    requirements: [
      "Recent graduate in Finance, Accounting, Economics, or Business",
      "Strong academic record and genuine interest in advisory work",
      "Eagerness to learn and take feedback well",
      "Excellent written and verbal communication skills",
    ],
  },
  {
    id: "internships",
    title: "Internships",
    department: "Various Teams",
    location: "Accra, Ghana",
    type: "Internship · 3–6 months",
    description: "Short-term internship opportunities across our accounting, financial modeling, and advisory teams for students and recent graduates.",
    responsibilities: [
      "Assist teams with research, data entry, and analysis support",
      "Shadow client engagements and internal working sessions",
      "Complete a capstone project relevant to your placement team",
      "Present findings and takeaways at the end of the internship",
    ],
    requirements: [
      "Currently pursuing or recently completed a degree in a related field",
      "Genuine interest in finance, accounting, or business advisory",
      "Willingness to learn and contribute from day one",
      "Available for the full internship duration",
    ],
  },
]

export default function CareersPage() {
  return (
    <main>
      <CareerHero
        eyebrow="Careers at BlackGold Advisory"
        title="Build Your Career Alongside Businesses That Are Building Theirs"
        description="We're always looking for talented professionals passionate about finance, advisory, and business transformation. If you want your work to matter, you'll fit in here."
        imageSrc="/careers/team.png"
        imageAlt="BlackGold Advisory team collaborating in the office"
        stats={stats}
      />

      <section className="py-20 md:py-28 px-6 bg-muted/30" aria-labelledby="values-heading">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl text-center mx-auto">
            <FadeIn as="p" className="text-sm font-semibold uppercase tracking-widest text-primary">Why BlackGold</FadeIn>
            <FadeIn as="h2" delay={100} id="values-heading" className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight">
              A Place to Do Meaningful Work
            </FadeIn>
          </div>
          <div className="mt-12">
            <CareerValues items={values} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-background" aria-labelledby="openings-heading">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl">
            <FadeIn as="p" className="text-sm font-semibold uppercase tracking-widest text-primary">Current Opportunities</FadeIn>
            <FadeIn as="h2" delay={100} id="openings-heading" className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Open Roles
            </FadeIn>
            <FadeIn as="p" delay={150} className="mt-4 text-muted-foreground leading-relaxed">
              Don&apos;t see a fit? We still want to hear from you — reach out about future opportunities.
            </FadeIn>
          </div>

          <div className="mt-12">
            <JobOpeningList items={jobs} />
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Ready to Join the Team?"
        description="Explore our open roles above, or reach out directly to tell us how you'd like to contribute."
        buttonLabel="Apply Now"
      />
    </main>
  )
}