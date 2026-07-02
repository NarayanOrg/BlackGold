import { Target, Eye } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import PageHeader from '@/components/ui/PageHeader'
import MissionVisionCards from '@/components/about/MissionVisionCards'
import CoreValuesGrid from '@/components/about/CoreValuesGrid'
import CtaBanner from '@/components/CtaBanner'
import CoreValuesEditorial from '@/components/about/CoreValuesEditorial'
import Image from 'next/image'

export const metadata = {
  title: "About BlackGold Advisory | Trusted Financial & Business Advisors",
  description:
    "Learn about BlackGold Advisory's mission, vision, values, and experienced professionals dedicated to helping businesses achieve sustainable financial growth.",
  keywords: [
    "About BlackGold Advisory",
    "Financial consultants",
    "Business advisors",
    "Corporate finance experts",
    "Accounting professionals",
  ],
  alternates: {
    canonical: "/about",
  },
};

const missionVisionItems = [
  { icon: <Target />, title: "Our Mission", description: "To empower businesses with strategic financial expertise, practical advisory solutions, and trusted partnerships that drive sustainable growth." },
  { icon: <Eye />, title: "Our Vision", description: "To become Africa's leading financial and business advisory firm recognized for excellence, innovation, integrity, and measurable impact." },
]

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About Us"
        title="Who We Are"
        description="BlackGold Advisory is a professional financial and business advisory firm committed to helping businesses improve financial performance, strengthen governance, and achieve sustainable growth."
      />

      {/* Who We Are - extended */}
      <section className="py-20 md:py-28 px-6 bg-background" aria-labelledby="who-we-are-heading">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <FadeIn as="h2" id="who-we-are-heading" className="sr-only">Who We Are</FadeIn>
            <FadeIn>
              <p className="text-base md:text-lg text-muted-foreground">
                Our advisory services combine technical accounting expertise, financial analysis, strategic planning, and regulatory compliance to support businesses through every stage of their growth journey.
              </p>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="mt-4 text-base md:text-lg text-muted-foreground">
                We work with entrepreneurs, startups, SMEs, corporations, investors, and institutions seeking practical solutions to complex business challenges.
              </p>
            </FadeIn>
          </div>

          <FadeIn as="figure" delay={100} className="relative aspect-4/3 w-full rounded-xl overflow-hidden">
            <Image
              src="/about/team-office.jpeg"
              alt="BlackGold Advisory team working together in the office"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-muted/30" aria-labelledby="mission-vision-heading">
        <div className="max-w-5xl mx-auto">
          <FadeIn as="h2" id="mission-vision-heading" className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-center">
            Mission &amp; Vision
          </FadeIn>
          <div className="mt-12">
            <MissionVisionCards items={missionVisionItems} />
          </div>
        </div>
      </section>

        {/* Core Values */}
        <section className="py-20 md:py-28 px-6 bg-background" aria-labelledby="core-values-heading">
            <div className="max-w-3xl mx-auto">
                <div className="text-center">
                <FadeIn as="p" className="text-sm font-semibold uppercase tracking-widest text-primary">What Drives Us</FadeIn>
                <FadeIn as="h2" delay={100} id="core-values-heading" className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight">
                    Our Core Values
                </FadeIn>
                </div>
                <div className="mt-16">
                <CoreValuesEditorial />
                </div>
            </div>
        </section>

      <section className="py-20 md:py-28 px-6 bg-primary" aria-labelledby="promise-heading">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn as="h2" id="promise-heading" className="text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
            Our Promise
          </FadeIn>
          <FadeIn delay={150}>
            <p className="mt-5 text-base md:text-lg text-primary-foreground/85">
              We are committed to delivering solutions that are practical, transparent, and results-driven while building lasting relationships based on trust and excellence.
            </p>
          </FadeIn>
        </div>
      </section>

      <CtaBanner />
    </main>
  )
}