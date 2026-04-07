import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import SectionTitle from '../ui/SectionTitle'

const ETSY = 'https://www.etsy.com/shop/SheldenGlassUK'

const locations = [
  {
    name: 'Sherborne Studio',
    type: 'Main Studio',
    address: '[PLACEHOLDER — address to be confirmed]',
    hours: 'Tue–Sat: 10am–5pm',
    note: 'Visits by appointment recommended.',
    icon: '⌂',
    link: null,
  },
  {
    name: 'Clarks Village',
    type: 'Showroom',
    address: 'Clarks Village, Farm Road\nStreet, Somerset BA16 0BB',
    hours: 'Mon–Sun: 9am–6pm',
    note: 'Walk-in welcome. Extended hours in peak season.',
    icon: '◻',
    link: null,
  },
  {
    name: 'Etsy Shop',
    type: 'Online Store',
    address: 'Worldwide shipping available',
    hours: 'Open 24/7',
    note: 'Shop our full collection online.',
    icon: '◈',
    link: ETSY,
  },
]

export default function FindUs() {
  return (
    <section id="find-us" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel>Find Us</SectionLabel>
          <SectionTitle>Where to Visit</SectionTitle>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="border border-sage-pale p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-sage-pale flex items-center justify-center text-sage text-lg mb-5">
                {loc.icon}
              </div>
              <p className="font-body text-xs tracking-widest uppercase text-sage mb-1">{loc.type}</p>
              <h3 className="font-display text-xl text-charcoal mb-3">{loc.name}</h3>
              <p className="font-body text-sm text-charcoal/60 leading-relaxed whitespace-pre-line mb-3">
                {loc.address}
              </p>
              <p className="font-body text-xs font-semibold text-charcoal/70 mb-1">{loc.hours}</p>
              <p className="font-body text-xs text-charcoal/50 mb-5">{loc.note}</p>
              {loc.link && (
                <a
                  href={loc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-body text-sm text-sage hover:text-sage-dark transition-colors font-medium"
                >
                  Visit Shop →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
