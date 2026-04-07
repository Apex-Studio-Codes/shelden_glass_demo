import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import SectionTitle from '../ui/SectionTitle'

const steps = [
  {
    num: '01',
    title: 'Choose Your Visit Type',
    desc: 'Select from a studio tour, commission consultation, or workshop experience.',
  },
  {
    num: '02',
    title: 'Pick Your Date & Location',
    desc: 'We welcome visitors at our Sherborne studio and Clarks Village showroom.',
  },
  {
    num: '03',
    title: 'Confirm & Connect',
    desc: "We'll get back to you within 24 hours to confirm your booking and answer any questions.",
  },
]

interface FormState {
  firstName: string
  lastName: string
  email: string
  visitType: string
  preferredDate: string
  location: string
  message: string
}

const initial: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  visitType: '',
  preferredDate: '',
  location: '',
  message: '',
}

export default function Booking() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e: Partial<FormState> = {}
    if (!form.firstName.trim()) e.firstName = 'Required'
    if (!form.lastName.trim()) e.lastName = 'Required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Valid email required'
    if (!form.visitType) e.visitType = 'Required'
    if (!form.preferredDate) e.preferredDate = 'Required'
    if (!form.location) e.location = 'Required'
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

  const field = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const inputCls = (key: keyof FormState) =>
    `w-full font-body text-sm px-4 py-3 border transition-colors outline-none ${
      errors[key]
        ? 'border-red-400 bg-red-50'
        : 'border-sage-pale bg-white focus:border-sage'
    }`

  return (
    <section id="booking" className="py-24 px-6 bg-sage-pale">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Book a Visit</SectionLabel>
            <SectionTitle className="mb-4">Come See Us in Person</SectionTitle>
            <p className="font-body text-charcoal/60 text-sm leading-relaxed mb-12">
              We love welcoming visitors to our studios. Whether you're curious about the process,
              seeking a bespoke commission, or simply want to browse our collection — come and say hello.
            </p>

            <div className="space-y-8">
              {steps.map((s) => (
                <div key={s.num} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage flex items-center justify-center">
                    <span className="font-body text-cream text-xs font-semibold">{s.num}</span>
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-charcoal mb-1">{s.title}</h4>
                    <p className="font-body text-sm text-charcoal/60">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center text-cream text-2xl mb-6">
                  ✓
                </div>
                <h3 className="font-display text-2xl text-charcoal mb-3">Booking Request Sent!</h3>
                <p className="font-body text-sm text-charcoal/60">
                  Thanks! We'll be in touch soon to confirm your visit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs text-charcoal/60 block mb-1.5">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={(e) => field('firstName', e.target.value)}
                      className={inputCls('firstName')}
                      placeholder="Jane"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="font-body text-xs text-charcoal/60 block mb-1.5">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={(e) => field('lastName', e.target.value)}
                      className={inputCls('lastName')}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs text-charcoal/60 block mb-1.5">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => field('email', e.target.value)}
                    className={inputCls('email')}
                    placeholder="jane@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="font-body text-xs text-charcoal/60 block mb-1.5">
                    Visit Type *
                  </label>
                  <select
                    value={form.visitType}
                    onChange={(e) => field('visitType', e.target.value)}
                    className={`${inputCls('visitType')} appearance-none`}
                  >
                    <option value="">Select a visit type…</option>
                    <option>Studio Tour</option>
                    <option>Commission Consultation</option>
                    <option>Workshop Experience</option>
                    <option>Wedding Enquiry</option>
                    <option>General Browse</option>
                  </select>
                  {errors.visitType && (
                    <p className="text-red-500 text-xs mt-1">{errors.visitType}</p>
                  )}
                </div>

                <div>
                  <label className="font-body text-xs text-charcoal/60 block mb-1.5">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    value={form.preferredDate}
                    onChange={(e) => field('preferredDate', e.target.value)}
                    className={inputCls('preferredDate')}
                  />
                  {errors.preferredDate && (
                    <p className="text-red-500 text-xs mt-1">{errors.preferredDate}</p>
                  )}
                </div>

                <div>
                  <label className="font-body text-xs text-charcoal/60 block mb-1.5">
                    Preferred Location *
                  </label>
                  <select
                    value={form.location}
                    onChange={(e) => field('location', e.target.value)}
                    className={`${inputCls('location')} appearance-none`}
                  >
                    <option value="">Select a location…</option>
                    <option>Sherborne Studio</option>
                    <option>Clarks Village, Street</option>
                  </select>
                  {errors.location && (
                    <p className="text-red-500 text-xs mt-1">{errors.location}</p>
                  )}
                </div>

                <div>
                  <label className="font-body text-xs text-charcoal/60 block mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => field('message', e.target.value)}
                    className="w-full font-body text-sm px-4 py-3 border border-sage-pale bg-white focus:border-sage transition-colors outline-none resize-none"
                    placeholder="Tell us a little about what you're looking for…"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-body text-sm font-medium tracking-wide py-4 bg-sage text-cream hover:bg-sage-dark transition-colors duration-200 cursor-pointer border-0"
                >
                  Request Booking
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
