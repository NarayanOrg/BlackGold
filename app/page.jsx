import Hero from "@/components/Home/Hero";
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import { Button } from "@/components/ui/button"
import ServicesGrid from "@/components/Home/ServicesGrid";
import IndustriesGrid from "@/components/Home/IndustriesGrid";
import ProcessSteps from "@/components/Home/ProcessSteps";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import ImpactShowcase from "@/components/Home/ImpactShowcase";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";


export default function Home() {
  return (
    <div>
      <Hero />
      {/* About snippet */}
      <section className="py-20 md:py-28 px-6 bg-background" aria-labelledby="about-heading">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn as="figure" className="relative aspect-4/3 w-full rounded-xl overflow-hidden order-2 lg:order-1">
            <Image
              src="/home/advisory-team.jpeg"
              alt="BlackGold Advisory consultants reviewing financial strategy with a client"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </FadeIn>

          <div className="order-1 lg:order-2">
            <FadeIn as="p" className="text-sm font-semibold uppercase tracking-widest text-primary">
              About BlackGold Advisory
            </FadeIn>

            <FadeIn as="h2" delay={100} id="about-heading" className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Building Stronger Businesses Through Financial Excellence
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mt-6 text-base md:text-lg text-muted-foreground">
                We believe every successful business begins with sound
                financial management and informed decision-making.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="mt-4 text-base md:text-lg text-muted-foreground">
                Our mission is to help businesses improve profitability,
                strengthen governance, maintain regulatory compliance, and
                unlock growth opportunities through world-class financial
                advisory services.
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="mt-4 text-base md:text-lg text-muted-foreground">
                Whether you are launching a startup, expanding an existing
                business, preparing to raise capital, or improving your
                financial systems, our experienced professionals are
                committed to supporting your journey every step of the way.
              </p>
            </FadeIn>

            <FadeIn delay={500} className="mt-8">
              <Button asChild size="lg">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* Service Grid */}
      <ServicesGrid />
      {/* Industry Grid */}
      <IndustriesGrid />
      {/* Process steps */}
      <ProcessSteps />
      {/* Why choose Us */}
      <WhyChooseUs />
      {/* Impact showcase — asymmetric layout, breaks up the grid-heavy sections before Testimonials */}
      <ImpactShowcase />
      {/* Testimonials */}
      <Testimonials />
      <CtaBanner />
    </div>
  );
}