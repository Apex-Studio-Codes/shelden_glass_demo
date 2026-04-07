import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import SectionTitle from '../ui/SectionTitle'

const values = [
  { title: 'Handmade', desc: 'Every piece shaped by hand, never mass-produced.' },
  { title: 'Sustainable', desc: 'We source responsibly and minimise waste.' },
  { title: 'Personal', desc: 'Your story inspires everything we create.' },
  { title: 'Lasting', desc: 'Built to be treasured and passed on.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div
            className="w-full flex items-center justify-center"
            style={{ aspectRatio: '4/5', backgroundColor: '#e8f0ec' }}
          >
            <div className="text-center text-sage/30">
              <div className="text-6xl mb-3">◎</div>
              <p className="font-body text-xs tracking-widest uppercase text-sage/40">About Us</p>
              <p className="font-body text-xs text-sage/30 mt-1">[PLACEHOLDER — image to be added]</p>
            </div>
          </div>
          <div
            className="absolute -top-4 -left-4 w-32 h-32 border border-sage/20"
            style={{ zIndex: -1 }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel>About Us</SectionLabel>
          <SectionTitle className="mb-6">Glass That Tells a Story</SectionTitle>

          <div className="space-y-4 mb-10 font-body text-sm text-charcoal/70 leading-relaxed">
            <p>
              [PLACEHOLDER — About Us copy to be written by the Shelden Glass team. This section
              should describe the studio's origins, the founders' journey, and the philosophy behind
              the work.]
            </p>
            <p>
              Based in the heart of Sherborne and at Clarks Village in Street, Somerset, Shelden
              Glass is a boutique studio dedicated to the ancient art of glassmaking reimagined for
              the modern world. Our pieces are as individual as the people who commission them.
            </p>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="border-l-2 border-sage pl-4">
                <h4 className="font-display text-lg text-charcoal mb-1">{v.title}</h4>
                <p className="font-body text-xs text-charcoal/55">{v.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
