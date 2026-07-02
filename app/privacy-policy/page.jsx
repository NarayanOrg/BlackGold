import FadeIn from '@/components/ui/FadeIn'

export const metadata = {
  title: "Privacy Policy | BlackGold Advisory",
  description: "How BlackGold Advisory collects, uses, and protects your information.",
}

const LAST_UPDATED = "July 2, 2026"

export default function PrivacyPolicy() {
  return (
    <div className="bg-background">
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn as="h1" className="text-3xl md:text-4xl font-bold text-foreground">
            Privacy Policy
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
                  BlackGold Advisory (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your
                  privacy and is committed to protecting the personal
                  information you share with us. This Privacy Policy
                  explains what information we collect, how we use it, and
                  the choices you have.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  1. Information We Collect
                </h2>
                <p>
                  We may collect information you provide directly to us,
                  such as your name, email address, phone number, company
                  details, and any information you share when booking a
                  consultation, submitting a contact form, or communicating
                  with our team. We may also collect limited technical
                  information, such as browser type and general usage data,
                  to help us improve our website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  2. How We Use Your Information
                </h2>
                <p>
                  We use the information we collect to respond to
                  enquiries, schedule consultations, provide our advisory
                  services, communicate updates, and improve our website
                  and service offerings. We do not sell your personal
                  information to third parties.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  3. How We Share Information
                </h2>
                <p>
                  We may share information with trusted service providers
                  who support our operations (such as scheduling or email
                  tools), or where required by law or regulatory
                  obligation. Any third party we work with is expected to
                  handle your information responsibly and confidentially.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  4. Data Security
                </h2>
                <p>
                  We take reasonable technical and organizational measures
                  to protect your information from unauthorized access,
                  loss, or misuse. However, no method of transmission over
                  the internet is completely secure, and we cannot
                  guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  5. Your Rights
                </h2>
                <p>
                  You may request access to, correction of, or deletion of
                  your personal information at any time by contacting us
                  using the details below.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  6. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page with a revised &quot;Last
                  updated&quot; date.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  7. Contact Us
                </h2>
                <p>
                  If you have questions about this Privacy Policy or how
                  we handle your information, please contact us at{" "}
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