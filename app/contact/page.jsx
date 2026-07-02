import React from 'react'
import PageHeader from '@/components/ui/PageHeader'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactForm from '@/components/contact/ContactForm'
import Testimonials from '@/components/Testimonials'

export const metadata = {
  title: "Contact BlackGold Advisory | Schedule a Consultation",
  description:
    "Contact BlackGold Advisory to discuss accounting, tax, financial advisory, compliance, financial modeling, or investment support for your business.",
  keywords: [
    "Contact financial advisor",
    "Business consultation",
    "Accounting consultation",
    "Financial advisory Ghana",
  ],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="Let's Build Your Business Together"
        description="We are ready to help your business improve financial performance, remain compliant, and achieve sustainable growth."
      />

      <section className="py-20 md:py-28 px-6 bg-background" aria-labelledby="contact-section-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="contact-section-heading" className="sr-only">Contact BlackGold Advisory</h2>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-14 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
      <Testimonials />
    </main>
  )
}