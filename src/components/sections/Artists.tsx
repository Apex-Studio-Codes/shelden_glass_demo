import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import SectionTitle from '../ui/SectionTitle'

const artists = [
  {
    name: 'Eleanor Shelden',
    speciality: 'Flameworking & Jewellery',
    bio: 'Eleanor founded Shelden Glass after a decade of training across the UK and Italy. Her passion lies in wearable glass art that catches the light in unexpected ways. [PLACEHOLDER bio — to be updated]',
  },
  {
    name: 'Marcus Webb',
    speciality: 'Memorial & Heirloom Glass',
    bio: 'Marcus brings a meditative, precise approach to memorial glass — transforming deeply personal mementos into lasting, luminous keepsakes. [PLACEHOLDER bio — to be updated]',
  },
  {
    name: 'Priya Rao',
    speciality: 'Home Décor & Sculpture',
    bio: 'Trained at the Royal College of Art, Priya creates bold decorative pieces that blur the line between functional and fine art. [PLACEHOLDER bio — to be updated]',
  },
]

export default function Artists() {
  return (
    <section id="artists" className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel>The Makers</SectionLabel>
          <SectionTitle>Meet Our Artists</SectionTitle>
          <p className="font-body text-sm text-charcoal/50 mt-2 italic">[PLACEHOLDER — artist profiles to be updated]</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artists.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-sage-pale p-8 text-center transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Circular photo placeholder */}
              <div className="w-28 h-28 rounded-full mx-auto mb-6 flex items-center justify-center text-sage/40 text-3xl" style={{ backgroundColor: '#e8f0ec' }}>
                ◎
              </div>
              <p className="font-body text-xs tracking-widest uppercase text-sage mb-2">
                {a.speciality}
              </p>
              <h3 className="font-display text-xl text-charcoal mb-3">{a.name}</h3>
              <p className="font-body text-sm text-charcoal/60 leading-relaxed">{a.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
