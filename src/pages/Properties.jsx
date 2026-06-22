import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SlidersHorizontal } from 'lucide-react'
import { staggerContainer } from '../assets/animations'
import PropertyCard from '../components/ui/PropertyCard'
import PageHero from '../components/ui/PageHero'
import { properties, propertyTypes } from '../data/properties'

export default function Properties() {
  const [searchParams] = useSearchParams()
  const [activeType, setActiveType] = useState('All')

  // Pre-select filter from URL query
  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat && propertyTypes.includes(cat)) setActiveType(cat)
  }, [searchParams])

  const filtered =
    activeType === 'All'
      ? properties
      : properties.filter((p) => p.category === activeType)

  return (
    <>
      <PageHero
        eyebrow="Browse Listings"
        title="All Properties"
        subtitle="Exceptional homes and investment opportunities across prime central London."
        image="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&q=80"
      />

      <section className="py-16 lg:py-24 bg-cream-100">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          {/* Filter bar */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-stone-400 text-xs">
              <SlidersHorizontal size={14} />
              <span className="tracking-wide uppercase">Filter by type</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`text-xs px-4 py-2 border transition-all duration-200 ${
                    activeType === type
                      ? 'bg-charcoal-900 text-cream-100 border-charcoal-900'
                      : 'bg-transparent text-stone-500 border-cream-300 hover:border-charcoal-900 hover:text-charcoal-900'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <p className="sm:ml-auto text-stone-400 text-xs">
              {filtered.length} {filtered.length === 1 ? 'property' : 'properties'}
            </p>
          </div>

          {/* Grid */}
          <motion.div
            key={activeType}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.length > 0 ? (
              filtered.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))
            ) : (
              <p className="col-span-full text-stone-400 text-sm py-16 text-center">
                No properties match this filter.
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
