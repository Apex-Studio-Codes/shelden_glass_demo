import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import SectionTitle from '../ui/SectionTitle'

const tiles = [
  { wide: true,  label: 'Jewellery Collection' },
  { wide: false, label: 'Flameworked Pendant' },
  { wide: false, label: 'Memorial Orb' },
  { wide: true,  label: 'Wedding Centrepiece' },
  { wide: false, label: 'Heirloom Crest' },
  { wide: true,  label: 'Home Sculpture' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel>Our Work</SectionLabel>
          <SectionTitle>The Gallery</SectionTitle>
          <p className="font-body text-sm text-charcoal/50 mt-2 italic">
            [PLACEHOLDER — images to be added later]
          </p>
        </motion.div>

        {/* Mobile: 2-column simple grid. Desktop: 3-column masonry-style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" style={{ gridAutoRows: '180px' }}>
          {tiles.map((tile, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group relative overflow-hidden cursor-pointer"
              style={{
                gridColumn: tile.wide ? 'span 2' : 'span 1',
                backgroundColor: '#e8f0ec',
              }}
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-3xl text-sage/30 mb-2">◇</div>
                <p className="font-body text-xs tracking-wide text-sage/40 text-center px-2">{tile.label}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-sage-dark/0 group-hover:bg-sage-dark/70 transition-all duration-300 flex items-center justify-center">
                <span className="font-body text-cream text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
