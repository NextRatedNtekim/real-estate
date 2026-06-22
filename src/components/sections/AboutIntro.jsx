import { motion } from 'framer-motion'
import { fadeUp, slideInLeft, slideInRight, staggerContainer, staggerItem } from '../../assets/animations'
import { stats } from '../../data/properties'
import Button from '../ui/Button'

export default function AboutIntro() {
  return (
    <section className="py-20 lg:py-28 bg-cream-200">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80"
                alt="Estatoo team at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating credential card */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 -right-4 sm:-right-8 bg-charcoal-900 text-cream-100 p-6 max-w-[200px]"
            >
              <p className="font-display text-4xl font-light text-gold-400 mb-1">18</p>
              <p className="text-xs text-stone-300 leading-relaxed">Years of prime London expertise</p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="pt-8 lg:pt-0"
          >
            <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-4">
              Who We Are
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-charcoal-900 leading-tight mb-6">
              A firm built on<br />
              <em className="not-italic text-gold-500">honest counsel.</em>
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed mb-4">
              Founded in 2006, Estatoo is an independent real estate consultancy operating exclusively across prime central London. We advise buyers, sellers, landlords, and investors — and we take that responsibility seriously.
            </p>
            <p className="text-stone-500 text-sm leading-relaxed mb-8">
              Our advisors hold an average of fourteen years of London market experience. We do not operate on volume. We operate on quality — of service, of advice, and of outcome.
            </p>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 mb-10"
            >
              {stats.map(({ value, label }) => (
                <motion.div
                  key={label}
                  variants={staggerItem}
                  className="border-l-2 border-gold-500 pl-4"
                >
                  <p className="font-display text-3xl font-light text-charcoal-900 mb-0.5">{value}</p>
                  <p className="text-xs text-stone-400 tracking-wide">{label}</p>
                </motion.div>
              ))}
            </motion.div>

            <Button to="/about" variant="primary" arrow>
              Our Story
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
