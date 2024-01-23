import React from 'react'
import banniere from '../img/qui-sommes-nous-0.png'
import TestimonialSection from '../components/TestimonialSection'
import Box from '../components/Box'
import TeamSection from '../components/TeamSection'
import HeroSection from '../components/HeroSection'


function About() {
  return (
    <div className='my-container'>
      <div className='grid'>
        <HeroSection 
          title='Qui sommes nous ?'
          subtitile=''
          description="MBOMBO est une équipe de professionnels passionnés, de technologues et d'assistants personnels engagés à 
                      améliorer la qualité de vie des patients. Leur approche unique combine la chaleur humaine et l'efficacité technologique, i
                      ncarnant ainsi l'esprit d'entreprise et d'innovation africains."
          image={banniere}
          imageAlt="presentation de l'entreprise"
          />
        <div className='row mb-5'>
          <Box
            title="Notre mission"
            text="La mission de MBOMBO est de révolutionner les soins de santé en Afrique en rendant les services médicaux plus
                  accessibles et personnalisés. Ils aspirent à fournir des soins complets qui sont à la fois abordables et de haute qualité, 
                  en s'appuyant sur des professionnels de la santé qualifiés et compassionnels."
            lg={6}
          />
          <Box
            title="Notre vision"
            text="Notre vision est de devenir leader en matière d'innovation dans les soins de santé à domicile en Afrique. 
                  À moyen terme, ils visent à établir la première base de données orientée patient en Afrique sub-saharienne, 
                  qui sera régulièrement mise à jour pour assurer des soins adaptés et efficaces."
            lg={6}
          />
        </div>
        <TeamSection/>
        <TestimonialSection/>
      </div>
    </div>
  )
}

export default About
