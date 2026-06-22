import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home',       to: '/' },
  { label: 'Properties', to: '/properties' },
  { label: 'Services',   to: '/services' },
  { label: 'About',      to: '/about' },
  { label: 'Contact',    to: '/contact' },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream-100/95 backdrop-blur-sm border-b border-cream-300 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-8xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Wordmark */}
          <Link
            to="/"
            className="font-display text-2xl font-semibold tracking-tight text-charcoal-900"
          >
            Estat<span className="text-gold-500">oo</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `relative font-body text-sm font-medium tracking-wide transition-colors duration-200 group ${
                    isActive ? 'text-charcoal-900' : 'text-stone-500 hover:text-charcoal-900'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-gold-500 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-charcoal-900 text-cream-100 text-sm font-medium px-5 py-2.5 transition-all duration-300 hover:bg-gold-500 hover:text-charcoal-900"
          >
            Book a Valuation
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden text-charcoal-900 p-1"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-cream-100 flex flex-col pt-24 px-8 pb-12 md:hidden"
          >
            <nav className="flex flex-col gap-1 flex-1">
              {navLinks.map(({ label, to }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `block font-display text-4xl font-light py-3 border-b border-cream-300 transition-colors duration-200 ${
                        isActive ? 'text-gold-500' : 'text-charcoal-900'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <Link
              to="/contact"
              className="mt-8 bg-charcoal-900 text-cream-100 text-sm font-medium text-center py-4 tracking-wide"
            >
              Book a Valuation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
