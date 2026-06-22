import { motion } from 'framer-motion'
import { BedDouble, Bath, Maximize2, MapPin } from 'lucide-react'
import { staggerItem } from '../../assets/animations'

function formatPrice(price) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(price)
}

export default function PropertyCard({ property }) {
  const { title, address, city, price, type, category, beds, baths, area, image } = property

  return (
    <motion.article
      variants={staggerItem}
      className="group bg-cream-50 overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-expo-out group-hover:scale-105"
        />
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-charcoal-900 text-cream-100 text-xs font-medium px-3 py-1 tracking-wide">
            {type}
          </span>
          <span className="bg-gold-500 text-charcoal-900 text-xs font-medium px-3 py-1 tracking-wide">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 border border-t-0 border-cream-300">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-stone-400 text-xs mb-2">
          <MapPin size={11} />
          <span>{address}, {city}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-medium text-charcoal-900 mb-3 leading-snug group-hover:text-gold-500 transition-colors duration-300">
          {title}
        </h3>

        {/* Specs */}
        <div className="flex items-center gap-4 text-stone-500 text-xs mb-4 pb-4 border-b border-cream-300">
          <span className="flex items-center gap-1.5">
            <BedDouble size={13} />
            {beds} Beds
          </span>
          <span className="flex items-center gap-1.5">
            <Bath size={13} />
            {baths} Baths
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize2 size={13} />
            {area.toLocaleString()} sq ft
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <p className="font-display text-2xl font-medium text-charcoal-900">
            {formatPrice(price)}
          </p>
          <span className="text-xs font-medium text-gold-500 border border-gold-500 px-3 py-1 group-hover:bg-gold-500 group-hover:text-charcoal-900 transition-all duration-300">
            View
          </span>
        </div>
      </div>
    </motion.article>
  )
}
