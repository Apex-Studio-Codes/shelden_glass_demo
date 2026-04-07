import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import SectionTitle from '../ui/SectionTitle'

const ETSY = 'https://www.etsy.com/shop/SheldenGlassUK'

const categories = [
  {
    title: 'Jewellery',
    description:
      'Wearable glass art — rings, pendants, earrings and brooches formed in flame and light.',
    icon: '◇',
  },
  {
    title: 'Home & Décor',
    description:
      'Sculptural pieces, sun-catchers and decorative vessels to bring colour and life to any space.',
    icon: '⌂',
  },
  {
    title: 'Memorial Glass',
    description:
      'Tender, lasting tributes crafted from ashes, flowers or personal mementos, beautifully preserved.',
    icon: '✦',
  },
  {
    title: 'Manorial & Heirloom',
    description:
      'Heraldic crests, family motifs and ancestral pieces created to be passed down through generations.',
    icon: '⚜',
  },
]

export default function ShopCategories() {
  return (
    <section id="shop" className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel>Our Collections</SectionLabel>
          <SectionTitle>Crafted for Every Occasion</SectionTitle>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.title}
              href={ETSY}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group block bg-white border border-sage-pale p-8 transition-shadow duration-300 hover:shadow-lg cursor-pointer"
              style={{ textDecoration: 'none' }}
            >
              <div className="w-12 h-12 rounded-full bg-sage-pale flex items-center justify-center text-sage text-xl mb-6 group-hover:bg-sage group-hover:text-cream transition-colors duration-300">
                {cat.icon}
              </div>
              <h3 className="font-display text-xl text-charcoal mb-3 group-hover:text-sage transition-colors duration-300">
                {cat.title}
              </h3>
              <p className="font-body text-sm text-charcoal/60 leading-relaxed">{cat.description}</p>
              <div className="mt-6 flex items-center gap-1.5 text-sage text-xs font-body tracking-wide font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Shop now
                <span>→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
