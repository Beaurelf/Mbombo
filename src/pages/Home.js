import React from 'react'
import Image from '../img/home.png'
import AboutSection from '../components/AboutSection'
import PartnerSection from '../components/PartnerSection'
import TestimonialSection from '../components/TestimonialSection'
import HeroSection from '../components/HeroSection'
import GoalSection from '../components/GoalSection'

function Home() {
  return (
    <main className='my-container'>
      <div className='grid'>
        <HeroSection 
          title='MBOMBO'
          subtitile='Entreprise'
          description="MBOMBO est une entreprise innovante et dynamique qui s'engage à transformer le paysage de la santé en Afrique grâce à une 
                      approche de soins centrée sur le patient et l'intégration de la technologie dans les services de santé à domicile. En tant 
                      qu'organisation à but non lucratif, MBOMBO a été fondée avec la vision profonde de faciliter l'accès à des soins de qualité 
                      et personnalisés, en particulier pour les personnes âgées et les familles qui bénéficient du soutien de la diaspora africaine."
          image={Image}
          imageAlt="presentation de l'entreprise"
        />
        <AboutSection/>
        <GoalSection/>
        <PartnerSection/>
        <TestimonialSection/>
      </div>
    </main>
  )
}

export default Home
