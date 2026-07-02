import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import { Button } from "@/components/ui/button"

export default function ImpactShowcase() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-foreground text-background overflow-hidden" aria-labelledby="impact-heading">
      <div className="max-w-6xl mx-auto relative">

        {/* Offset image bleeding right, breaking the grid rhythm */}
        <FadeIn
          as="figure"
          className="relative w-full lg:w-[55%] lg:ml-auto aspect-5/4 rounded-xl overflow-hidden"
        >
          <Image
            src="/home/impact-consultation.jpg"
            alt="BlackGold Advisory team presenting a growth strategy to business leaders"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 55vw, 100vw"
          />
        </FadeIn>

        {/* Copy block pulled left, overlapping the image on large screens */}
        <div className="relative lg:absolute lg:top-1/2 lg:left-0 lg:-translate-y-1/2 lg:w-[52%] lg:bg-foreground lg:pr-10 -mt-10 lg:mt-0 pt-10 lg:pt-0">
          <FadeIn as="p" className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Commitment
          </FadeIn>

          <FadeIn as="h2" delay={100} id="impact-heading" className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
            Results-Driven Advisory, Built on Trust
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mt-6 text-base md:text-lg text-background/80">
              We are committed to delivering solutions that are practical,
              transparent, and results-driven while building lasting
              relationships based on trust and excellence.
            </p>
          </FadeIn>

          {/* Staggered stat callouts, not a grid — offset baseline and spacing */}
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
            <FadeIn delay={300}>
              <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
              <div className="mt-1 text-sm text-background/70">Compliance-Focused Delivery</div>
            </FadeIn>

            <FadeIn delay={400} className="mt-3 md:mt-6">
              <div className="text-3xl md:text-4xl font-bold text-primary">360°</div>
              <div className="mt-1 text-sm text-background/70">Financial &amp; Strategic Support</div>
            </FadeIn>

            <FadeIn delay={500}>
              <div className="text-3xl md:text-4xl font-bold text-primary">Africa</div>
              <div className="mt-1 text-sm text-background/70">Wide Advisory Ambition</div>
            </FadeIn>
          </div>

          <FadeIn delay={600} className="mt-10">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}