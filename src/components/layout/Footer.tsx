const ETSY = 'https://www.etsy.com/shop/SheldenGlassUK'
const FACEBOOK = 'https://www.facebook.com/SheldenGlass'
const INSTAGRAM =
  'https://www.instagram.com/invites/contact/?i=1hxu9czk2cicf&utm_content=l7839e6'
const YOUTUBE = 'https://youtube.com/@sheldenglass'

const socialLinks = [
  { label: 'Facebook', href: FACEBOOK, icon: 'f' },
  { label: 'Instagram', href: INSTAGRAM, icon: 'in' },
  { label: 'YouTube', href: YOUTUBE, icon: 'yt' },
  { label: 'Etsy', href: ETSY, icon: 'e' },
]

const shopLinks = [
  { label: 'Jewellery', href: ETSY },
  { label: 'Home & Décor', href: ETSY },
  { label: 'Memorial Glass', href: ETSY },
  { label: 'Manorial & Heirloom', href: ETSY },
  { label: 'Gift Cards', href: '#gift-cards' },
]

const visitLinks = [
  { label: 'Book a Visit', href: '#booking' },
  { label: 'Sherborne Studio', href: '#find-us' },
  { label: 'Clarks Village', href: '#find-us' },
  { label: 'Wedding Commissions', href: '#weddings' },
]

const infoLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Artists', href: '#artists' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center">
                <span className="font-display text-cream text-sm font-semibold">SG</span>
              </div>
              <span className="font-display text-xl text-cream font-semibold">Shelden Glass</span>
            </div>
            <p className="font-body text-sm text-cream/50 leading-relaxed">
              Handcrafted glass art created with love in Sherborne & Clarks Village, Somerset/Dorset.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-widest uppercase text-sage mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {shopLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="font-body text-sm text-cream/50 hover:text-cream/80 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-widest uppercase text-sage mb-4">
              Visit
            </h4>
            <ul className="space-y-2.5">
              {visitLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-body text-sm text-cream/50 hover:text-cream/80 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-widest uppercase text-sage mb-4">
              Info
            </h4>
            <ul className="space-y-2.5">
              {infoLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-body text-sm text-cream/50 hover:text-cream/80 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social row */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-cream/30 italic">
            Made by hand, made with heart.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-cream/50 hover:text-cream hover:border-sage hover:bg-sage/20 transition-all text-xs font-medium font-body"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
