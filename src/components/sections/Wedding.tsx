import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'

const features = [
  'Bespoke wedding favours for every guest',
  'Personalised rings, pendants & keepsakes',
  'Table centrepieces & venue décor',
  'Wedding party gifts crafted from your flowers',
  'Commemorative memorial pieces',
  'Same-day consultation available',
]

export default function Wedding() {
  return (
    <section id="weddings" className="py-24 px-6" style={{ backgroundColor: '#3a6352' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel light>Wedding & Events</SectionLabel>
          <SectionTitle light className="mb-6">
            Your Day, Captured in Glass
          </SectionTitle>
          <p className="font-body text-cream/70 text-base leading-relaxed mb-8">
            Make your special day truly unforgettable with handcrafted glass art tailored to your
            wedding vision. From delicate favours to statement centrepieces, we work closely with
            couples across Dorset and Somerset to create pieces as unique as your love story.
          </p>

          <ul className="space-y-3 mb-10">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-sage-light flex-shrink-0" />
                <span className="font-body text-sm text-cream/80">{f}</span>
              </li>
            ))}
          </ul>

          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Enquire About Your Wedding
          </Button>
        </motion.div>

        {/* Image placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative pb-4 pr-4"
        >
          <div
            className="relative z-10 w-full rounded-sm overflow-hidden flex items-center justify-center"
            style={{ aspectRatio: '4/5', backgroundColor: '#4a7c65' }}
          >
            <div className="text-center text-cream/30">
              <div className="text-5xl mb-3">◇</div>
              <p className="font-body text-xs tracking-widest uppercase">Wedding Gallery</p>
              <p className="font-body text-xs text-cream/20 mt-1">[PLACEHOLDER — image to be added]</p>
            </div>
          </div>
          {/* Decorative offset border */}
          <div
            className="absolute bottom-0 right-0 border border-sage-light/30 rounded-sm"
            style={{ width: 'calc(100% - 1rem)', height: 'calc(100% - 1rem)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
