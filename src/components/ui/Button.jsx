import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  arrow = false,
  className = '',
  type = 'button',
}) {
  const base =
    'inline-flex items-center gap-2 text-sm font-medium tracking-wide transition-all duration-300 '

  const variants = {
    primary:   'bg-charcoal-900 text-cream-100 px-6 py-3 hover:bg-gold-500 hover:text-charcoal-900',
    secondary: 'bg-transparent text-charcoal-900 px-6 py-3 border border-charcoal-900 hover:bg-charcoal-900 hover:text-cream-100',
    gold:      'bg-gold-500 text-charcoal-900 px-6 py-3 hover:bg-gold-400',
    ghost:     'text-charcoal-900 px-0 py-0 underline underline-offset-4 decoration-gold-500 hover:text-gold-500',
    light:     'bg-cream-100 text-charcoal-900 px-6 py-3 hover:bg-gold-500 hover:text-charcoal-900',
  }

  const cls = `${base}${variants[variant]} ${className}`

  const content = (
    <>
      {children}
      {arrow && <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={`group ${cls}`}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={`group ${cls}`} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={`group ${cls}`}>
      {content}
    </button>
  )
}
