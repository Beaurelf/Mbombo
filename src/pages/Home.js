import React from 'react'
import AboutSection from '../components/ServiceSection'
import PartnerSection from '../components/PartnerSection'
import TestimonialSection from '../components/TestimonialSection'
import HeroSection from '../components/HeroSection'

function Home() {
  return (
    <main className='my-container'>
      <div className='grid'>
        <HeroSection/>
        <AboutSection/>
        <TestimonialSection/>
        <PartnerSection/>
      </div>
    </main>
  )
}

export default Home
