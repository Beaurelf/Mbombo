import React from 'react'
import AboutSection from '../components/ServiceSection'
import PartnerSection from '../components/PartnerSection'
import TestimonialSection from '../components/TestimonialSection'
import HeroSection from '../components/HeroSection'

function Home() {
  return (
    <main>
      <HeroSection/>
      <AboutSection/>
      <TestimonialSection/>
      <PartnerSection/>
    </main>
  )
}

export default Home
