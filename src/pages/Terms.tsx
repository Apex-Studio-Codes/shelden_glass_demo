import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm text-sage hover:text-sage-dark transition-colors mb-10"
        >
          ← Back to Home
        </Link>

        <h1 className="font-display text-4xl text-charcoal mb-2">Terms & Conditions</h1>
        <p className="font-body text-sm text-charcoal/50 mb-10">Last updated: April 2025</p>

        <div className="space-y-8 font-body text-charcoal/70 text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">1. Acceptance of Terms</h2>
            <p>
              [PLACEHOLDER — State that use of the website constitutes acceptance of these terms
              and conditions.]
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">2. Products & Services</h2>
            <p>
              [PLACEHOLDER — Describe the nature of products sold, including handmade variability,
              colour accuracy of photographs, and bespoke commission process.]
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">3. Orders & Payment</h2>
            <p>
              [PLACEHOLDER — Explain the order confirmation process, accepted payment methods,
              pricing, and currency.]
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">4. Shipping & Delivery</h2>
            <p>
              [PLACEHOLDER — Detail delivery timeframes, shipping carriers used, international
              shipping availability, and liability for lost or delayed parcels.]
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">5. Intellectual Property</h2>
            <p>
              [PLACEHOLDER — Clarify that all designs, images, and content on this website are the
              property of Shelden Glass and may not be reproduced without written permission.]
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">6. Limitation of Liability</h2>
            <p>
              [PLACEHOLDER — Standard limitation of liability clause to be reviewed by a legal
              professional.]
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">7. Governing Law</h2>
            <p>
              [PLACEHOLDER — State that these terms are governed by the laws of England and Wales,
              and any disputes shall be subject to the exclusive jurisdiction of English courts.]
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
