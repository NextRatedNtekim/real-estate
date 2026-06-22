import { motion } from 'framer-motion'
import { Home, KeyRound, TrendingUp, BarChart3, Search, MapPin } from 'lucide-react'
import { staggerContainer, staggerItem } from '../../assets/animations'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { services } from '../../data/services'

const iconMap = { Home, KeyRound, TrendingUp, BarChart3, Search, MapPin }

export default function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal-900">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="What We Offer"
            title={
              <>
                Our<br />
                <em className="not-italic text-gold-400">Services</em>
              </>
            }
            light
          />
          <Button to="/services" variant="light" arrow>
            All Services
          </Button>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal-800"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                variants={staggerItem}
                className="bg-charcoal-900 p-8 group hover:bg-charcoal-800 transition-colors duration-300 cursor-pointer"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-charcoal-700 mb-6 group-hover:border-gold-500 group-hover:text-gold-500 text-stone-400 transition-all duration-300">
                  {Icon && <Icon size={18} />}
                </div>
                <h3 className="font-display text-xl font-light text-cream-100 mb-3 group-hover:text-gold-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
