import React from 'react'
import ContactForm from '../components/ContactForm'
import contact from '../assets/img/assistant-perso-2.png'
import './contact.css'

function Contact() {
  return (
    <main>        
      <svg className='background-1'viewBox="0 0 1728 1032" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0L36 57.3333C72 114.667 144 229.333 216 229.333C288 229.333 360 114.667 432 133.778C504 
        152.889 576 305.778 648 477.778C720 649.778 812 610.168 884 686.613C956 763.057 1029.5 743.946 1101.5 686.613C1173.5 629.28 1224 764.444 1296 
        668.889C1368 573.333 1440 458.667 1512 420.444C1584 382.222 1656 420.444 1692 439.556L1728 458.667V1032H1692C1656 1032 1584 1032 1512 1032C1440 
        1032 1368 1032 1296 1032C1224 1032 1152 1032 1080 1032C1008 1032 936 1032 864 1032C792 1032 720 1032 648 1032C576 1032 504 1032 432 1032C360 1032 
        288 1032 216 1032C144 1032 72 1032 36 1032H0V0Z" fill="url(#paint0_linear_111_77)"/>
        <defs>
        <linearGradient id="paint0_linear_111_77" x1="864" y1="0" x2="864" y2="1032" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FCDEEA" stopOpacity="0.98"/>
        <stop offset="0.726" stopColor="#F3F7FF" stopOpacity="0.99452"/>
        <stop offset="1" stopColor="#FFFAF8"/>
        </linearGradient>
        </defs>
      </svg>
      <div className='my-container'>
        <div className='grid row contact-slogan mb-4' data-aos="fade-up">
          <div className='col-md-6'>
            <h3>Contactez nous en un <span>Click!</span></h3>
            <p className='mb-5'> Vous avez une question ou besoin d'assistance ? Contactez-nous par e-mail, téléphone ou via le formulaire de contact ci-dessous. 
            Nous sommes impatients de vous aider</p>
            <img src={contact} alt='assistant personel'/>
          </div>
          <div className='col-md-6'>
            <ContactForm/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
