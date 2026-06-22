import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../../data/services'

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((i) => (i + 1) % testimonials.length)

  return (
    <section className="py-20 lg:py-28 bg-cream-200">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: decorative image */}
          <div className="relative hidden lg:block">
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80"
                alt="Luxury property interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/20 to-transparent" />
          </div>

          {/* Right: testimonial carousel */}
          <div>
            <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-8">
              Client Testimonials
            </p>

            <div className="relative min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Quote size={36} className="text-gold-400 mb-5 opacity-60" />
                  <blockquote className="font-display text-2xl sm:text-3xl font-light text-charcoal-900 leading-snug mb-6">
                    {testimonials[active].quote}
                  </blockquote>
                  <div>
                    <p className="text-charcoal-900 text-sm font-medium">
                      {testimonials[active].author}
                    </p>
                    <p className="text-stone-400 text-xs mt-0.5">
                      {testimonials[active].context}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 border border-charcoal-900 flex items-center justify-center hover:bg-charcoal-900 hover:text-cream-100 transition-all duration-200"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 border border-charcoal-900 flex items-center justify-center hover:bg-charcoal-900 hover:text-cream-100 transition-all duration-200"
              >
                <ChevronRight size={16} />
              </button>
              <div className="flex gap-2 ml-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-px transition-all duration-300 ${
                      i === active ? 'w-8 bg-gold-500' : 'w-4 bg-stone-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
