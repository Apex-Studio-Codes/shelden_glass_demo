import { Link } from 'react-router-dom'

export default function LegalBar() {
  return (
    <div className="bg-charcoal py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-body text-xs text-cream/40">
          © {new Date().getFullYear()} Shelden Glass. All rights reserved.
        </p>
        <div className="flex gap-6">
          {[
            { label: 'Privacy Policy', to: '/privacy' },
            { label: 'Refund Policy', to: '/refunds' },
            { label: 'Terms & Conditions', to: '/terms' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-body text-xs text-cream/40 hover:text-cream/70 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
