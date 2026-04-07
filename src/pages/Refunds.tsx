import { Link } from 'react-router-dom'

export default function Refunds() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm text-sage hover:text-sage-dark transition-colors mb-10"
        >
          ← Back to Home
        </Link>

        <h1 className="font-display text-4xl text-charcoal mb-2">Refund Policy</h1>
        <p className="font-body text-sm text-charcoal/50 mb-10">Last updated: April 2025</p>

        <div className="space-y-8 font-body text-charcoal/70 text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">1. Returns & Exchanges</h2>
            <p>
              [PLACEHOLDER — Describe the returns window (e.g. 14 days), conditions for return,
              and any items that are non-returnable such as bespoke or personalised commissions.]
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">2. Damaged or Faulty Items</h2>
            <p>
              [PLACEHOLDER — Explain the process for reporting and resolving damaged or faulty goods,
              including photo evidence requirements and timescales.]
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">3. Bespoke & Commission Work</h2>
            <p>
              [PLACEHOLDER — Clarify the non-refundable nature of deposits on bespoke commissions
              once work has commenced, and any exceptions.]
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">4. Refund Processing</h2>
            <p>
              [PLACEHOLDER — State the expected timeframe for refunds to be processed and returned
              to the original payment method.]
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">5. How to Initiate a Return</h2>
            <p>
              [PLACEHOLDER — Provide step-by-step instructions for starting a return, including
              contact details and any return shipping address.]
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
