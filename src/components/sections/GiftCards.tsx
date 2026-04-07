import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import SectionTitle from '../ui/SectionTitle'

export default function GiftCards() {
  return (
    <section id="gift-cards" className="py-24 px-6 bg-sage">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <SectionLabel light>Gift Cards</SectionLabel>
          <SectionTitle light className="mb-4">
            Give the Gift of Glass
          </SectionTitle>
          <p className="font-body text-cream/70 text-base leading-relaxed mb-6">
            Know someone who would love a piece of handcrafted glass art? Our gift cards are the
            perfect present — redeemable in-studio and online. Coming soon.
          </p>
          <div className="inline-flex items-center gap-3 border border-cream/30 px-6 py-3">
            <span className="w-2 h-2 rounded-full bg-cream/40 animate-pulse" />
            <span className="font-body text-sm text-cream/70 tracking-wide">Launching soon</span>
          </div>
        </motion.div>

        {/* Card mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-shrink-0"
        >
          <div
            className="relative w-80 h-48 rounded-lg border border-cream/20 flex flex-col items-start justify-between p-6 shadow-2xl"
            style={{ backgroundColor: '#3a6352' }}
          >
            {/* Card decor */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: '#6a9c85', transform: 'translate(30%, -30%)' }} />
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: '#4a7c65', transform: 'translate(-30%, 30%)' }} />

            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-sage-light flex items-center justify-center">
                  <span className="font-display text-cream text-xs font-semibold">SG</span>
                </div>
                <span className="font-display text-cream text-sm font-medium">Shelden Glass</span>
              </div>
              <p className="font-body text-cream/50 text-xs tracking-widest uppercase">Gift Card</p>
            </div>

            <div>
              <p className="font-display text-3xl text-cream font-light">£••••</p>
              <p className="font-body text-cream/40 text-xs mt-1">Handcrafted Glass Art • Somerset</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
