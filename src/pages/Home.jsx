import HeroSection from '../components/sections/HeroSection'
import FeaturedProperties from '../components/sections/FeaturedProperties'
import AboutIntro from '../components/sections/AboutIntro'
import ServicesPreview from '../components/sections/ServicesPreview'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import CtaBanner from '../components/sections/CtaBanner'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <AboutIntro />
      <ServicesPreview />
      <TestimonialsSection />
      <CtaBanner />
    </>
  )
}
