import { motion } from 'framer-motion'
import Button from '../ui/Button'
import Divider from '../ui/Divider'

const ETSY = 'https://www.etsy.com/shop/SheldenGlassUK'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#3a6352' }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #6a9c85 0%, transparent 60%), radial-gradient(circle at 80% 20%, #4a7c65 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center">
        {/* Logo badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <img
            src="/logo.png"
            alt="Shelden Glass"
            className="w-40 h-40 rounded-full object-cover shadow-2xl"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-body text-xs tracking-widest uppercase text-sage-pale/70 mb-4"
        >
          Handcrafted Glass Art
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="font-display text-5xl md:text-7xl font-light text-cream leading-tight mb-4"
        >
          Where Light Becomes
          <br />
          <em>Art</em>
        </motion.h1>

        <Divider light className="w-32 mx-auto" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="font-body text-base text-cream/70 leading-relaxed mb-10 max-w-lg"
        >
          Bespoke glass art lovingly crafted in Sherborne & Clarks Village, Somerset. Jewellery, home décor, memorial pieces and heirloom commissions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button href={ETSY} variant="outline" size="lg">
            Explore the Shop
          </Button>
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Visit
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs tracking-widest uppercase text-cream/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-cream/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
