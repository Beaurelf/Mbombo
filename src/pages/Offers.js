import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import Image from '../img/service.png'
import OfferSection from '../components/OfferSection'
import TestimonialSection from '../components/TestimonialSection'
import PartnerSection from '../components/PartnerSection'

const offers = [
  {
    'category' : 'health',
    'name' : 'Mbombo lite',
    'price':29.99,
    'description' : 'Anticipez et découvrez les soins essentiels de vos proches.',
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
    'description' : "Donnez accès à votre proche aux meilleurs soins partout dans le monde, y compris l'évacuation sanitaire d'urgence.",
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
    'description' : 'Offrez une qualité de soins supérieure à votre famille auprès des meilleurs prestataires de santé.',
    'composition':[
      '',
    ]
  }
]

function Offers() {
  const [listOffers, setlistOffers] = useState(offers)
  const [Index, setIndex] = useState(0)

  const filterListOffers = (category) => {
    let list = offers.filter(offer => offer.category === category)
    setlistOffers(list)
  }

  const deleteFilter = () => setlistOffers(offers)

  return (
    <div className='my-container'>
      <div className='grid'>
        <HeroSection
          title='Nos offres'
          description="Bienvenue sur notre page d'offres ! Chez Mbombo, nous sommes dédiés à vous fournir des solutions pour répondre à tous vos besoins professionnels. 
                        Notre équipe d'experts est prête à vous guider à travers notre gamme complète de services et produits. Découvrez ce que Mbombo peut faire pour 
                        vous et n'hésitez pas à nous contacter pour plus d'informations sur nous offres ou tout autres questions. Plongez dans l'univers Mbombo et vous serez sastifaits."
          image={Image}
          imageAlt='Contactez nous'
        />
        <div className='mt-3'>
          <button className={Index === 0 ? 'button' : 'button2'} onClick={() => {
            deleteFilter()
            setIndex(0)}
          }>
              Toutes les offres
          </button>
          <button className={Index === 1 ? 'button' : 'button2'} onClick={() => { 
            filterListOffers('health') 
            setIndex(1)}
          }>
            Mbombo santé
          </button>
          <button className={Index === 2 ? 'button' : 'button2'} onClick={() => { 
            filterListOffers('insurance') 
            setIndex(2)}
          }>
            Mbombo Assurance
          </button>
          <OfferSection offers={listOffers}/>
        </div>
        <PartnerSection/>
        <TestimonialSection/>
      </div>
    </div>
  )
}

export default Offers