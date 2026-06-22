import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'About Us',    to: '/about' },
    { label: 'Our Team',    to: '/about#team' },
    { label: 'Services',    to: '/services' },
    { label: 'Contact',     to: '/contact' },
  ],
  Properties: [
    { label: 'All Listings',  to: '/properties' },
    { label: 'For Sale',      to: '/properties?type=sale' },
    { label: 'Villas',        to: '/properties?category=Villa' },
    { label: 'Penthouses',    to: '/properties?category=Penthouse' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-900 text-cream-200">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="font-display text-2xl font-semibold text-cream-100 mb-4 inline-block"
            >
              Estat<span className="text-gold-500">oo</span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed mt-3 mb-6">
              Premium real estate services across prime London, delivered with discretion and expertise since 2006.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@estatoo.co.uk"
                className="flex items-center gap-2.5 text-stone-400 hover:text-gold-400 text-sm transition-colors duration-200"
              >
                <Mail size={14} />
                hello@estatoo.co.uk
              </a>
              <a
                href="tel:+442071234567"
                className="flex items-center gap-2.5 text-stone-400 hover:text-gold-400 text-sm transition-colors duration-200"
              >
                <Phone size={14} />
                +44 20 7123 4567
              </a>
              <span className="flex items-start gap-2.5 text-stone-400 text-sm">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                14 Berkeley Square, Mayfair, London W1J 6BS
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-cream-100 text-xs font-medium tracking-widest uppercase mb-5">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-stone-400 hover:text-gold-400 text-sm transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      {label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter column */}
          <div>
            <h4 className="text-cream-100 text-xs font-medium tracking-widest uppercase mb-5">
              Market Updates
            </h4>
            <p className="text-stone-400 text-sm leading-relaxed mb-4">
              Receive quarterly insights on London property market trends and new listings.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-charcoal-800 text-cream-200 text-sm px-4 py-3 placeholder-stone-500 border border-charcoal-700 focus:outline-none focus:border-gold-500 transition-colors duration-200 w-full"
              />
              <button className="bg-gold-500 text-charcoal-900 text-sm font-medium py-3 px-4 hover:bg-gold-400 transition-colors duration-200 w-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-charcoal-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-stone-500 text-xs">
            {year} Estatoo Limited. All rights reserved.
          </p>
          <p className="text-stone-500 text-xs">
            Authorised and regulated by the Property Ombudsman.
          </p>
        </div>
      </div>
    </footer>
  )
}
