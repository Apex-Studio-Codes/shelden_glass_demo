import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm text-sage hover:text-sage-dark transition-colors mb-10"
        >
          ← Back to Home
        </Link>

        <h1 className="font-display text-4xl text-charcoal mb-2">Privacy Policy</h1>
        <p className="font-body text-sm text-charcoal/50 mb-10">Last updated: April 2025</p>

        <div className="prose prose-sm max-w-none space-y-8 font-body text-charcoal/70 text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">1. Introduction</h2>
            <p>
              [PLACEHOLDER — Privacy Policy content to be written and reviewed by a legal
              professional. This policy should cover data collection, processing, storage, and
              user rights in accordance with UK GDPR.]
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">2. Information We Collect</h2>
            <p>
              [PLACEHOLDER — Detail the types of personal data collected via the website, booking
              forms, and contact forms.]
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">3. How We Use Your Information</h2>
            <p>
              [PLACEHOLDER — Explain the lawful basis for processing and the purposes for which data
              is used.]
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">4. Cookies</h2>
            <p>
              [PLACEHOLDER — Describe cookie usage including any analytics, session, or preference
              cookies.]
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">5. Your Rights</h2>
            <p>
              [PLACEHOLDER — Outline user rights under UK GDPR: right of access, rectification,
              erasure, restriction, portability, and objection.]
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">6. Contact</h2>
            <p>
              [PLACEHOLDER — Provide contact details for privacy-related enquiries and the name of
              the data controller.]
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
