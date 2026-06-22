import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../assets/animations'

export default function StatsRow({ stats, light = false }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="grid grid-cols-2 sm:grid-cols-4 gap-8"
    >
      {stats.map(({ value, label }) => (
        <motion.div
          key={label}
          variants={staggerItem}
          className={`text-center sm:text-left border-l-2 pl-5 ${
            light ? 'border-gold-500' : 'border-gold-500'
          }`}
        >
          <p
            className={`font-display text-4xl font-light mb-1 ${
              light ? 'text-cream-100' : 'text-charcoal-900'
            }`}
          >
            {value}
          </p>
          <p className={`text-xs tracking-wide ${light ? 'text-stone-300' : 'text-stone-500'}`}>
            {label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}
