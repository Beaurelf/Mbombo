import React from 'react'
import ContactForm from '../components/ContactForm'
import HeroSection from '../components/HeroSection'
import Image from '../img/contact.png'

const infors = [
  {
    icon:<i className='fa fa-solid fa-map-location-dot '></i>,
    text:'2559 C Rue Everett, Montréal, QC H2A 1R1'
  },
  {
    icon:  <i className="fa-solid fa-phone"></i>,
    text:'+1(514)605-3560'
  },
  {
    icon:<i className="fa-solid fa-envelope"></i>,
    text:'mbomboenterprise@gmail.com'
  }
]

function Contact() {
  return (
    <div className='my-container'>
      <div className='grid'>
        <HeroSection
          title='Nous sommes là pour vous'
          description="Chez MBOMBO, votre santé et votre bien-être sont notre priorité absolue.Nous comprenons l'importance d'une communication claire 
                        et ouverte, c'est pourquoi notre équipe dédiée est toujours prête à répondre à vos questions et à vous fournir l'assistance dont
                        vous avez besoin. Que vous souhaitiez en savoir plus sur nos services, prendre rendez-vous, ou discuter des options de soins à domicile
                        pour vos proches, nous sommes là pour vous aider à chaque étape."
          hasButton = {false}
          image={Image}
          imageAlt='Contactez nous'
        />
        <div className='row mb-5'>
          {infors.map((info, index) => {
            return(
              <div key={index} className='col-lg-4 col-md-6 col-sm-12 p-2'>
                <div className='contact-info-container d-flex justify-content-center align-items-center  flex-column shadow'>
                  <div className='contact-icon d-flex justify-content-center align-items-center'>
                    {info.icon}
                  </div>
                  <p className='text-center mt-2'>{info.text}</p>
                </div>
              </div>
            )
          })}
        </div>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact
