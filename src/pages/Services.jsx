import { motion } from 'framer-motion'
import { Home, KeyRound, TrendingUp, BarChart3, Search, MapPin } from 'lucide-react'
import { staggerContainer, staggerItem, fadeUp } from '../assets/animations'
import PageHero from '../components/ui/PageHero'
import CtaBanner from '../components/sections/CtaBanner'
import { services } from '../data/services'

const iconMap = { Home, KeyRound, TrendingUp, BarChart3, Search, MapPin }

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Our Services"
        subtitle="A complete spectrum of real estate services, delivered by advisors who know the London market inside out."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80"
      />

      {/* Services grid */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => {
              const Icon = iconMap[service.icon]
              return (
                <motion.div
                  key={service.id}
                  variants={staggerItem}
                  className="group bg-cream-200 p-8 hover:bg-charcoal-900 transition-colors duration-500 cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-cream-300 group-hover:border-gold-500 text-gold-500 mb-6 transition-colors duration-300">
                    {Icon && <Icon size={20} />}
                  </div>
                  <h3 className="font-display text-2xl font-light text-charcoal-900 group-hover:text-cream-100 mb-3 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-stone-500 group-hover:text-stone-300 text-sm leading-relaxed mb-4 transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="h-px bg-cream-300 group-hover:bg-charcoal-700 mb-4 transition-colors duration-300" />
                  <p className="text-stone-400 group-hover:text-stone-300 text-xs leading-relaxed transition-colors duration-300">
                    {service.detail}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Process strip */}
      <section className="py-20 bg-cream-200 border-t border-cream-300">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-4 text-center"
          >
            How We Work
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-light text-charcoal-900 text-center mb-14 max-w-xl mx-auto leading-tight"
          >
            A transparent process from first call to completion.
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { step: 'Step 1', label: 'Initial Consultation', desc: 'We listen first. A 30-minute call to understand your goals, timeline, and requirements.' },
              { step: 'Step 2', label: 'Market Analysis',      desc: 'Our team prepares a bespoke report on comparable activity, pricing, and opportunity.' },
              { step: 'Step 3', label: 'Active Search',        desc: 'We present matched properties, including off-market options, and accompany every viewing.' },
              { step: 'Step 4', label: 'Negotiation',          desc: 'We negotiate on your behalf and manage the legal and financial process through to exchange.' },
            ].map(({ step, label, desc }) => (
              <motion.div key={step} variants={staggerItem} className="border-t-2 border-gold-500 pt-6">
                <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-2">{step}</p>
                <h4 className="font-display text-xl font-light text-charcoal-900 mb-3">{label}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
