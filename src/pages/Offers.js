import React from 'react'
import OfferSection from '../components/OfferSection'
import TestimonialSection from '../components/TestimonialSection'
import PartnerSection from '../components/PartnerSection'
import assistant1 from '../assets/img/assistant-perso-2.png'
import assistant2 from '../assets/img/assistant-perso-1.png'
import './Offers.css'

const offers = [
  {
    'category' : 'health',
    'name' : 'Mbombo lite',
    'price':29.99,
    'composition':[
      '1 visite aux 2 semaines (2 visites par mois)',
      'Prise de rendez-vous médicaux',
      ' Accompagnement au rendez-vous'
    ]
  },
  {
    'category' : 'health',
    'name' : 'Mbombo plus',
    'price':54.99,
    'composition':[
      '1 visite chaque semaine (4 visites par mois)',
       'Prise de rendez-vous médicaux',
       'Accompagnement aux rendez-vous'
    ]
  },
  {
    'category' : 'insurance',
    'name' : 'Mbombo assurance',
    'price':25.99,
    'composition':[]
  }
]

function Offers() {

  return (
    <main>
      <svg className='background-1' viewBox="0 0 1728 1032" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0L36 57.3333C72 114.667 144 229.333 216 229.333C288 229.333 360 114.667 432 133.778C504 152.889 
        576 305.778 648 477.778C720 649.778 812 610.168 884 686.613C956 763.057 1029.5 743.946 1101.5 686.613C1173.5 629.28 1224 764.444 1296 668.889C1368 573.333
        1440 458.667 1512 420.444C1584 382.222 1656 420.444 1692 439.556L1728 458.667V1032H1692C1656 1032 1584 1032 1512 1032C1440 1032 1368 1032 1296 1032C1224 
        1032 1152 1032 1080 1032C1008 1032 936 1032 864 1032C792 1032 720 1032 648 1032C576 1032 504 1032 432 1032C360 1032 288 1032 216 1032C144 1032 72 1032 36 
        1032H0V0Z" fill="url(#paint0_linear_110_74)"/>
        <defs>
        <linearGradient id="paint0_linear_110_74" x1="864" y1="0" x2="864" y2="1032" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FCDEEA" stopOpacity="0.98"/>
        <stop offset="0.726" stopColor="#F3F7FF" stopOpacity="0.99452"/>
        <stop offset="1" stopColor="#FFFAF8"/>
        </linearGradient>
        </defs>
      </svg>
      <svg className='background-2' viewBox="0 0 1723 1032" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1731.25 1032L1695.07 974.774C1658.89 917.554 1586.53 803.112 1514.53 803.337C1442.53 803.562 1370.88 918.453 1298.82 899.566C1226.76 880.68 1154.28 728.017 1081.75 556.242C1009.21 384.468 917.33 424.364 845.09 348.145C772.85 271.926 699.409 291.266 627.587 348.824C555.765 406.382 504.842 271.375 433.14 367.155C361.437 462.935 289.794 577.826 217.912 616.272C146.03 654.719 73.9096 616.722 37.8494 597.723L1.78929 578.725L-0.000320269 5.39405L36.0001 5.28168C72.0007 5.16931 144.002 4.94456 216.003 4.71982C288.004 4.49507 360.005 4.27033 432.006 4.04558C504.007 3.82084 576.008 3.59609 648.009 3.37134C720.01 3.1466 792.011 2.92185 864.012 2.69711C936.013 2.47236 1008.01 2.24762 1080.02 2.02287C1152.02 1.79813 1224.02 1.57338 1296.02 1.34863C1368.02 1.12389 1440.02 0.899143 1512.02 0.674398C1584.02 0.449652 1656.02 0.224907 1692.02 0.112534L1728.02 0.000161171L1731.25 1032Z" fill="url(#paint0_linear_110_75)"/>
        <defs>
        <linearGradient id="paint0_linear_110_75" x1="866" y1="1131" x2="864.012" y2="2.69711" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FCDEEA" stopOpacity="0.98"/>
        <stop offset="0.726" stopColor="#F3F7FF" stopOpacity="0.99452"/>
        <stop offset="1" stopColor="#FFFAF8"/>
        </linearGradient>
        </defs>
      </svg>
      <div className='text-center' data-aos="fade-up">
        <h2 className='title-section'>Assistant personnel</h2>
      </div>
      <section className='my-container'>
        <div className='row grid assistant-description' data-aos="fade-up">
          <div className='col-md-8'>
            <h3>Soin Actif Personnalisé</h3>
            <p className='mb-5'>Nos Mbombo Assistants assurent un suivi complet à chaque visite : tension, médicaments, et soutien ménager au besoin, pour le bien-être de vos proches.</p>
            <h3>Visite à domicile </h3>
            <p>Nos Mbombo Assistants se déplacent chez vous pour assurer votre confort et tranquillité d'esprit dans un environnement familier, évitant ainsi votre déplacement.</p>
          </div>
          <div  className='col-md-4'>
            <img src={assistant1} alt='assistant personel'/>
          </div>
        </div>
        <div className='row grid assistant-description' data-aos="fade-up">
          <div className='col-md-4'>
            <img src={assistant2} alt='assistant personel'/>
          </div>
          <div className='col-md-8'>
            <h3>Guidance Médicale Personnalisée</h3>
            <p className='mb-5'>Nos Mbombo Assistants accompagnent aux rendez-vous médicaux, fournissant des informations précises au médecin pour une prise en charge optimale de vos proches.</p>
            <h3>Evacuation d’urgence</h3>
            <p>En cas d'urgence, assurez une évacuation sanitaire rapide et efficace avec l’aide de nos mbombo assistant </p>
          </div>
        </div>
      </section>
      <section className=' my-container mt-5'>
        <div className='grid'>
          <OfferSection offers={offers}/>
        </div>
      </section>
      <TestimonialSection/>
      <PartnerSection/>
    </main>
  )
}

export default Offers