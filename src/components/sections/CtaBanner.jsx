import { motion } from 'framer-motion'
import { fadeUp } from '../../assets/animations'
import Button from '../ui/Button'

export default function CtaBanner() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1400&q=80"
          alt="London property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-900/75" />
      </div>

      <div className="relative max-w-8xl mx-auto px-6 lg:px-12 text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gold-400 text-xs font-medium tracking-widest uppercase mb-5"
        >
          Get Started
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-cream-100 leading-tight mb-6 max-w-2xl mx-auto"
        >
          Ready to find your next property?
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-cream-200/70 text-sm leading-relaxed max-w-md mx-auto mb-10"
        >
          Speak with one of our advisors today. No obligation, no pressure — simply expert guidance on your next move.
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button to="/contact" variant="gold">
            Book a Valuation
          </Button>
          <Button to="/properties" variant="light">
            Browse Listings
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
