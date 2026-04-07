import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import SectionTitle from '../ui/SectionTitle'

const FACEBOOK = 'https://www.facebook.com/SheldenGlass'
const INSTAGRAM =
  'https://www.instagram.com/invites/contact/?i=1hxu9czk2cicf&utm_content=l7839e6'
const ETSY = 'https://www.etsy.com/shop/SheldenGlassUK'
const YOUTUBE = 'https://youtube.com/@sheldenglass'

const socials = [
  { label: 'Facebook', href: FACEBOOK, icon: 'f', desc: 'Follow us on Facebook' },
  { label: 'Instagram', href: INSTAGRAM, icon: 'in', desc: 'Follow us on Instagram' },
  { label: 'Etsy', href: ETSY, icon: 'e', desc: 'Shop on Etsy' },
  { label: 'YouTube', href: YOUTUBE, icon: 'yt', desc: 'Watch us on YouTube' },
]

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const emptyForm: ContactForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(emptyForm)
  const [errors, setErrors] = useState<Partial<ContactForm>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e: Partial<ContactForm> = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Valid email required'
    if (!form.subject.trim()) e.subject = 'Required'
    if (!form.message.trim()) e.message = 'Required'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  const field = (key: keyof ContactForm, value: string) => {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const inputCls = (key: keyof ContactForm) =>
    `w-full font-body text-sm px-4 py-3 border transition-colors outline-none ${
      errors[key]
        ? 'border-red-400 bg-red-50'
        : 'border-sage-pale bg-white focus:border-sage'
    }`

  return (
    <section id="contact" className="py-24 px-6 bg-sage-pale">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel>Get in Touch</SectionLabel>
          <SectionTitle>We'd Love to Hear From You</SectionTitle>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center text-cream text-2xl mb-6">
                  ✓
                </div>
                <h3 className="font-display text-2xl text-charcoal mb-3">Message Sent!</h3>
                <p className="font-body text-sm text-charcoal/60">
                  Thanks! We'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label className="font-body text-xs text-charcoal/60 block mb-1.5">Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => field('name', e.target.value)}
                    className={inputCls('name')}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="font-body text-xs text-charcoal/60 block mb-1.5">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => field('email', e.target.value)}
                    className={inputCls('email')}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="font-body text-xs text-charcoal/60 block mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => field('subject', e.target.value)}
                    className={inputCls('subject')}
                    placeholder="What's on your mind?"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="font-body text-xs text-charcoal/60 block mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => field('message', e.target.value)}
                    className={`${inputCls('message')} resize-none`}
                    placeholder="Your message…"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full font-body text-sm font-medium tracking-wide py-4 bg-sage text-cream hover:bg-sage-dark transition-colors duration-200 cursor-pointer border-0"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="font-display text-2xl text-charcoal mb-3">Connect With Us</h3>
              <p className="font-body text-sm text-charcoal/60 leading-relaxed">
                Follow us on social media for behind-the-scenes glimpses of our studio, new arrivals,
                and the stories behind each piece we create.
              </p>
            </div>

            <div className="space-y-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border border-sage-pale hover:border-sage hover:shadow-sm transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-full bg-sage-pale flex items-center justify-center text-sage text-xs font-body font-semibold group-hover:bg-sage group-hover:text-cream transition-colors duration-200">
                    {s.icon}
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-charcoal group-hover:text-sage transition-colors">
                      {s.label}
                    </p>
                    <p className="font-body text-xs text-charcoal/50">{s.desc}</p>
                  </div>
                  <span className="ml-auto text-charcoal/20 group-hover:text-sage transition-colors">
                    →
                  </span>
                </a>
              ))}
            </div>

            <div className="border-t border-sage-pale pt-6">
              <p className="font-body text-xs text-charcoal/40 leading-relaxed">
                Prefer email? Reach us at{' '}
                <span className="text-sage">[PLACEHOLDER — email address]</span>.
                We aim to respond within one working day.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
