import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Parallax background image */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1800&q=85"
          alt="Luxury London property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-900/40" />
      </motion.div>

      {/* Editorial overlay panel */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 flex items-end pb-16 lg:pb-24"
      >
        <div className="max-w-8xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-gold-400 text-xs font-medium tracking-widest uppercase mb-5"
            >
              Prime London Real Estate
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-cream-100 leading-none mb-6"
            >
              Property,<br />
              <em className="text-gold-400 not-italic">precisely</em>{' '}
              placed.
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-cream-200/80 text-sm leading-relaxed max-w-md mb-8"
            >
              Eighteen years of discreet, expert real estate counsel across prime central London. We connect the right people to the right properties.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/properties"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 text-charcoal-900 text-sm font-medium px-7 py-3.5 hover:bg-gold-400 transition-colors duration-300"
              >
                Browse Properties
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-cream-100/10 backdrop-blur-sm text-cream-100 text-sm font-medium px-7 py-3.5 border border-cream-100/30 hover:bg-cream-100/20 transition-all duration-300"
              >
                Book a Valuation
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 right-6 lg:right-12 flex flex-col items-center gap-2"
      >
        <span className="text-cream-200/60 text-xs tracking-widest uppercase rotate-90 mb-4 origin-center">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-gold-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
