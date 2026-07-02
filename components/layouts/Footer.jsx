import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const footerNav = [
  {
    heading: "Company",
    links: [
      { label: "About", url: "/about" },
      { label: "Industries", url: "/industries" },
      // { label: "Insights", url: "/insights" },
      // { label: "Case Studies", url: "/case-studies" },
      { label: "Careers", url: "/careers" },
      { label: "Contact", url: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Accounting & Tax", url: "/services/accounting-and-tax" },
      { label: "Financial Modeling", url: "/services/financial-modeling" },
      { label: "Capital Raising", url: "/services/capital-raising" },
      { label: "Compliance", url: "/services/compliance" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "FAQs", url: "/faqs" },
      { label: "Privacy Policy", url: "/privacy-policy" },
      { label: "Terms & Conditions", url: "/terms-and-conditions" },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
          {/* Branding */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" height={44} width={44} alt="BlackGold Advisory logo" />
              <span className="text-lg font-bold flex flex-col leading-tight">
                BLACKGOLD <span className="text-primary">ADVISORY</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Accounting, tax, financial modeling, and capital advisory for
              businesses that mean to grow.
            </p>
            <address className="mt-4 not-italic text-sm text-muted-foreground space-y-1">
              <p>123 Independence Avenue, Accra, Ghana</p>
              <p>
                <a href="tel:+233000000000" className="hover:text-primary">
                  +233 00 000 0000
                </a>
              </p>
              <p>
                <a href="mailto:hello@blackgoldadvisory.com" className="hover:text-primary">
                  hello@blackgoldadvisory.com
                </a>
              </p>
            </address>
          </div>

          {/* Nav columns */}
          {footerNav.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                {group.heading}
              </h2>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.url}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {year} BlackGold Advisory. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="text-xs text-muted-foreground hover:text-primary">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}