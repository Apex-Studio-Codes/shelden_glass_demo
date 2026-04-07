import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Shop', href: '#shop' },
  { label: 'Weddings', href: '#weddings' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Find Us', href: '#find-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      animate={{
        backgroundColor: scrolled ? '#ffffff' : 'transparent',
        boxShadow: scrolled ? '0 1px 20px rgba(44,58,51,0.10)' : '0 0 0 rgba(0,0,0,0)',
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ paddingTop: '0' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center">
            <span className="font-display text-cream text-sm font-semibold">SG</span>
          </div>
          <span
            className={`font-display text-xl font-semibold transition-colors duration-300 ${
              scrolled ? 'text-charcoal' : 'text-cream'
            }`}
          >
            Shelden Glass
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-body text-sm tracking-wide transition-colors duration-300 hover:text-sage ${
                scrolled ? 'text-charcoal' : 'text-cream/90'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="font-body text-sm tracking-wide px-5 py-2 bg-sage text-cream border border-sage hover:bg-sage-dark hover:border-sage-dark transition-colors duration-200"
          >
            Book a Visit
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden flex flex-col gap-1.5 cursor-pointer transition-colors duration-300 ${
            scrolled ? 'text-charcoal' : 'text-cream'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            } ${scrolled ? 'bg-charcoal' : 'bg-cream'}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            } ${scrolled ? 'bg-charcoal' : 'bg-cream'}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            } ${scrolled ? 'bg-charcoal' : 'bg-cream'}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-sage-pale px-6 py-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-sm text-charcoal hover:text-sage transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="font-body text-sm px-5 py-2 bg-sage text-cream text-center hover:bg-sage-dark transition-colors"
          >
            Book a Visit
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}
