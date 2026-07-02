'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Button } from "@/components/ui/button"

const heroImages = [
  { src: "/home/hero/boardroom.jpg", alt: "Advisory team reviewing financial reports in a boardroom" },
  { src: "/home/hero/skyline.jpg", alt: "City skyline representing business growth and opportunity" },
  { src: "/home/hero/handshake.jpg", alt: "Business partners shaking hands after a successful agreement" },
]

const SLIDE_DURATION = 6000

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      {/* Background image crossfade */}
      <div className="absolute inset-0" aria-hidden="true">
        <AnimatePresence initial={false}>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[activeIndex].src}
              alt=""
              fill
              priority={activeIndex === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-background/10" />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 py-28 md:py-36 lg:py-44 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Financial & Business Advisory
        </p>

        <h1 id="hero-heading" className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
          Financial Clarity. Strategic Growth.{" "}
          <span className="text-primary">Sustainable Success.</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl font-medium text-foreground/90">
          Empowering Businesses Through Expert Financial &amp; Business Advisory
        </p>

        <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground">
          BlackGold Advisory is a leading financial and business advisory
          firm dedicated to helping startups, SMEs, growing businesses, and
          institutions make informed financial decisions, remain compliant,
          access funding, and achieve sustainable growth.
        </p>

        <p className="mt-3 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground">
          We combine accounting expertise, financial analysis, strategic
          advisory, and regulatory compliance to deliver practical solutions
          that create measurable business value.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Book a Consultation</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="relative pb-8 flex items-center justify-center gap-2">
        {heroImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show background image ${index + 1} of ${heroImages.length}`}
            aria-current={index === activeIndex}
            className={`h-1.5 rounded-full transition-all ${
              index === activeIndex ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  )
}