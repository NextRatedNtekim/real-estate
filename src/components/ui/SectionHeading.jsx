import { motion } from 'framer-motion'
import { fadeUp } from '../../assets/animations'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
}) {
  const alignClass = {
    left:   'text-left',
    center: 'text-center mx-auto',
    right:  'text-right ml-auto',
  }[align]

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={`max-w-xl ${alignClass}`}
    >
      {eyebrow && (
        <p className={`text-xs font-medium tracking-widest uppercase mb-3 ${light ? 'text-gold-400' : 'text-gold-500'}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-4xl sm:text-5xl font-light leading-tight mb-4 ${
          light ? 'text-cream-100' : 'text-charcoal-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-sm leading-relaxed ${light ? 'text-stone-300' : 'text-stone-500'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
