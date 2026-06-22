import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp } from '../assets/animations'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream-100 flex items-center justify-center px-6">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-center max-w-md"
      >
        <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-4">
          Page Not Found
        </p>
        <h1 className="font-display text-8xl font-light text-charcoal-900 mb-4">404</h1>
        <p className="text-stone-500 text-sm leading-relaxed mb-8">
          The page you are looking for does not exist or has been moved. Return to our homepage to continue.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-charcoal-900 text-cream-100 text-sm font-medium px-6 py-3 hover:bg-gold-500 hover:text-charcoal-900 transition-all duration-300"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}
