import FadeIn from '@/components/ui/FadeIn'

export const metadata = {
  title: "Terms & Conditions | BlackGold Advisory",
  description: "The terms governing your use of the BlackGold Advisory website and services.",
}

const LAST_UPDATED = "July 2, 2026"

export default function TermsAndConditions() {
  return (
    <div className="bg-background">
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn as="h1" className="text-3xl md:text-4xl font-bold text-foreground">
            Terms &amp; Conditions
          </FadeIn>

          <FadeIn delay={100}>
            <p className="mt-3 text-sm text-muted-foreground">
              Last updated: {LAST_UPDATED}
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mt-10 space-y-10 text-base text-muted-foreground leading-relaxed">

              <div>
                <p>
                  These Terms & Conditions (&quot;Terms&quot;) govern your use of the
                  BlackGold Advisory website and any services described on
                  it. By accessing this website or engaging our services,
                  you agree to these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  1. Use of This Website
                </h2>
                <p>
                  This website is provided for informational purposes about
                  BlackGold Advisory&apos;s services. You agree to use it
                  lawfully and not to misuse, disrupt, or attempt
                  unauthorized access to any part of the site.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  2. No Financial or Legal Advice Online
                </h2>
                <p>
                  Content on this website is general in nature and does not
                  constitute financial, tax, legal, or investment advice.
                  Formal advisory services are only provided through a
                  direct engagement with BlackGold Advisory.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  3. Consultations and Engagements
                </h2>
                <p>
                  Booking a consultation through this website does not, by
                  itself, create a client relationship or contractual
                  obligation. Formal engagements are governed by separate
                  signed agreements between BlackGold Advisory and the
                  client.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  4. Intellectual Property
                </h2>
                <p>
                  All content on this website, including text, graphics,
                  and branding, is the property of BlackGold Advisory
                  unless otherwise stated, and may not be copied or
                  reproduced without permission.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  5. Limitation of Liability
                </h2>
                <p>
                  BlackGold Advisory is not liable for any loss or damage
                  arising from reliance on general information provided on
                  this website. We make reasonable efforts to keep this
                  site accurate and up to date but do not guarantee it is
                  free of errors.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  6. Changes to These Terms
                </h2>
                <p>
                  We may update these Terms from time to time. Continued
                  use of this website after changes are posted constitutes
                  acceptance of the updated Terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  7. Contact Us
                </h2>
                <p>
                  If you have questions about these Terms, please contact
                  us at{" "}
                  <a href="mailto:info@blackgoldadvisory.com" className="text-primary underline underline-offset-2">
                    info@blackgoldadvisory.com
                  </a>.
                </p>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}