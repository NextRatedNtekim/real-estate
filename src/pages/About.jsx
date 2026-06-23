import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, fadeUp, slideInLeft, slideInRight } from '../assets/animations'
import PageHero from '../components/ui/PageHero'
import CtaBanner from '../components/sections/CtaBanner'
import { team, testimonials } from '../data/services'
import { stats } from '../data/properties'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="About Estatx"
        subtitle="An independent firm with a singular focus: exceptional real estate counsel across prime Lagos."
        image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1400&q=80"
      />

      {/* Story section */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-4">
                Founded 2006
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-light text-charcoal-900 leading-tight mb-6">
                Built on principle,<br />
                <em className="not-italic text-gold-500">not on volume.</em>
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed mb-4">
                Estatx was founded by Eleanor Whitfield in 2006 following a decade at one of Lagos's largest estate agencies. She left with a clear conviction: that the best real estate advice comes from advisors who are not incentivised to close deals quickly, but to close the right deals for their clients.
              </p>
              <p className="text-stone-500 text-sm leading-relaxed mb-4">
                The firm began as a buyer representation service — a relatively uncommon offering in the Lagos market at the time. That focus on representing clients' interests, rather than those of the market, remains at the core of everything we do.
              </p>
              <p className="text-stone-500 text-sm leading-relaxed">
                Today, Estatx advises buyers, sellers, landlords, and investors across prime central Lagos. Our team of twelve advisors holds an average of fourteen years of Lagos market experience. We do not operate branches. We do not outsource. We are a single team, working from a single base, focused entirely on doing excellent work for a manageable number of clients each year.
              </p>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="space-y-6"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Estatx office"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-px bg-cream-300">
                {stats.map(({ value, label }) => (
                  <div key={label} className="bg-cream-200 p-6">
                    <p className="font-display text-4xl font-light text-charcoal-900 mb-1">{value}</p>
                    <p className="text-stone-400 text-xs tracking-wide">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gold-400 text-xs font-medium tracking-widest uppercase mb-4"
          >
            Our Values
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-light text-cream-100 mb-14 max-w-xl leading-tight"
          >
            What we believe about this work.
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-charcoal-800"
          >
            {[
              {
                label: 'Transparency',
                desc: 'We tell clients what they need to hear, not what they want to hear. Our advice is only valuable if it is honest.',
              },
              {
                label: 'Restraint',
                desc: 'We limit the number of clients we work with each year. Fewer clients means more time, more care, and better outcomes.',
              },
              {
                label: 'Expertise',
                desc: 'Our advisors are specialists, not generalists. Every member of our team has a specific area of the market they know deeply.',
              },
            ].map(({ label, desc }) => (
              <motion.div key={label} variants={staggerItem} className="bg-charcoal-900 p-8">
                <div className="h-px w-8 bg-gold-500 mb-6" />
                <h3 className="font-display text-2xl font-light text-cream-100 mb-3">{label}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-4"
          >
            The Team
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-light text-charcoal-900 mb-14 max-w-xl leading-tight"
          >
            The people behind the advice.
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member) => (
              <motion.div key={member.id} variants={staggerItem} className="group">
                <div className="aspect-[3/4] overflow-hidden mb-4 bg-cream-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-xl font-medium text-charcoal-900 mb-0.5">
                  {member.name}
                </h3>
                <p className="text-gold-500 text-xs font-medium tracking-wide uppercase mb-3">
                  {member.role}
                </p>
                <p className="text-stone-500 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
