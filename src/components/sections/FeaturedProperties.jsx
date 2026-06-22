import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { staggerContainer } from '../../assets/animations'
import SectionHeading from '../ui/SectionHeading'
import PropertyCard from '../ui/PropertyCard'
import { properties } from '../../data/properties'

const featured = properties.filter((p) => p.featured).slice(0, 3)

export default function FeaturedProperties() {
  return (
    <section className="py-20 lg:py-28 bg-cream-100">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Current Listings"
            title={
              <>
                Featured<br />
                <em className="not-italic text-gold-500">Properties</em>
              </>
            }
          />
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal-900 border-b border-gold-500 pb-0.5 hover:text-gold-500 transition-colors duration-200 group self-start sm:self-auto whitespace-nowrap"
          >
            View all listings
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
