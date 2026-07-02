import React from 'react'
import FadeIn from '@/components/ui/FadeIn'
import { Star } from 'lucide-react'

const testimonials = [
  { quote: "BlackGold Advisory transformed our financial reporting and helped us prepare for investor discussions with confidence.", rating: 5 },
  { quote: "Their financial models gave us the clarity we needed to make strategic investment decisions.", rating: 5 },
  { quote: "Professional, responsive, and knowledgeable. They became a valuable extension of our management team.", rating: 5 },
]

export default function Testimonials({
  items = testimonials,
  eyebrow = "Testimonials",
  heading = "Client Testimonials",
}) {
  return (
    <section className="py-20 md:py-28 px-6 bg-muted/30" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn as="p" className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</FadeIn>
          <FadeIn as="h2" delay={100} id="testimonials-heading" className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight">
            {heading}
          </FadeIn>
        </div>

        <ul className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.map((testimonial, index) => (
            <FadeIn key={index} as="li" delay={index * 120} className="h-full">
              <figure className="h-full flex flex-col gap-4 rounded-xl border border-border bg-background p-6">
                <div className="flex items-center gap-1 text-primary" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="size-4" aria-hidden="true" fill={starIndex < testimonial.rating ? "currentColor" : "none"} />
                  ))}
                </div>

                <blockquote className="flex-1 text-sm md:text-base text-foreground">
                  <p>&ldquo;{testimonial.quote}&rdquo;</p>
                </blockquote>

                {(testimonial.author || testimonial.role) && (
                  <figcaption className="text-sm text-muted-foreground">
                    {testimonial.author && <span className="font-semibold text-foreground">{testimonial.author}</span>}
                    {testimonial.author && testimonial.role && ", "}
                    {testimonial.role}
                  </figcaption>
                )}
              </figure>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  )
}