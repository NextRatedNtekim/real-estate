import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react'
import { fadeUp, staggerContainer, staggerItem, slideInLeft, slideInRight } from '../assets/animations'
import PageHero from '../components/ui/PageHero'

const contactDetails = [
  { icon: Phone,  label: 'Telephone',    value: '+44 20 7123 4567',                  href: 'tel:+442071234567' },
  { icon: Mail,   label: 'Email',        value: 'hello@estatoo.co.uk',               href: 'mailto:hello@estatoo.co.uk' },
  { icon: MapPin, label: 'Address',      value: '14 Berkeley Square, Mayfair, W1J 6BS', href: null },
  { icon: Clock,  label: 'Office Hours', value: 'Mon–Fri  9:00 – 18:00',             href: null },
]

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', phone: '', enquiry: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]     = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.')
      return
    }
    // In a real application this would POST to an endpoint
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Our advisors are available Monday to Friday. We aim to respond to all enquiries within one business day."
        image="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1400&q=80"
      />

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: details */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-4">
                Contact Details
              </p>
              <h2 className="font-display text-4xl font-light text-charcoal-900 mb-8 leading-tight">
                We would like to<br />hear from you.
              </h2>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6 mb-12"
              >
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <motion.div key={label} variants={staggerItem} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cream-200 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={16} className="text-gold-500" />
                    </div>
                    <div>
                      <p className="text-stone-400 text-xs tracking-wide uppercase mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-charcoal-900 text-sm hover:text-gold-500 transition-colors duration-200"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-charcoal-900 text-sm">{value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Map placeholder */}
              <div className="aspect-video bg-cream-200 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&q=80"
                  alt="Berkeley Square, Mayfair"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-charcoal-900/80 text-cream-100 text-xs px-4 py-2 tracking-wide">
                    14 Berkeley Square, Mayfair
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-4">
                Enquiry Form
              </p>
              <h2 className="font-display text-4xl font-light text-charcoal-900 mb-8 leading-tight">
                Send us a message.
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-cream-200 p-10 flex flex-col items-start gap-4"
                >
                  <CheckCircle size={32} className="text-gold-500" />
                  <h3 className="font-display text-2xl font-light text-charcoal-900">
                    Message received.
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    Thank you for reaching out. One of our advisors will be in touch within one business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-stone-500 tracking-wide mb-1.5" htmlFor="name">
                        Full Name <span className="text-gold-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Eleanor Whitfield"
                        className="w-full bg-cream-200 border border-cream-300 text-charcoal-900 text-sm px-4 py-3 placeholder-stone-300 focus:outline-none focus:border-gold-500 transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-stone-500 tracking-wide mb-1.5" htmlFor="email">
                        Email Address <span className="text-gold-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="eleanor@example.com"
                        className="w-full bg-cream-200 border border-cream-300 text-charcoal-900 text-sm px-4 py-3 placeholder-stone-300 focus:outline-none focus:border-gold-500 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-stone-500 tracking-wide mb-1.5" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+44 7700 000000"
                      className="w-full bg-cream-200 border border-cream-300 text-charcoal-900 text-sm px-4 py-3 placeholder-stone-300 focus:outline-none focus:border-gold-500 transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-stone-500 tracking-wide mb-1.5" htmlFor="enquiry">
                      Nature of Enquiry
                    </label>
                    <select
                      id="enquiry"
                      name="enquiry"
                      value={form.enquiry}
                      onChange={handleChange}
                      className="w-full bg-cream-200 border border-cream-300 text-charcoal-900 text-sm px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors duration-200 appearance-none"
                    >
                      <option value="">Select an option</option>
                      <option value="buying">Buying a property</option>
                      <option value="selling">Selling a property</option>
                      <option value="letting">Lettings management</option>
                      <option value="investment">Investment advisory</option>
                      <option value="valuation">Property valuation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-stone-500 tracking-wide mb-1.5" htmlFor="message">
                      Message <span className="text-gold-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      className="w-full bg-cream-200 border border-cream-300 text-charcoal-900 text-sm px-4 py-3 placeholder-stone-300 focus:outline-none focus:border-gold-500 transition-colors duration-200 resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-600">{error}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-charcoal-900 text-cream-100 text-sm font-medium py-4 hover:bg-gold-500 hover:text-charcoal-900 transition-all duration-300"
                  >
                    Send Enquiry
                  </button>

                  <p className="text-stone-400 text-xs">
                    Your details are held in confidence and will not be shared with third parties.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
