import React from 'react'
import { useNavigate } from 'react-router-dom'
import './OfferSection.css'

function OfferSection({offers}) {
    const navigate = useNavigate()

    return (
        <div className='offer-section'>
            <div className='text-center' data-aos="fade-up">
                <h2 className='title-section'>Nos offres</h2>
            </div>
            <p className='subtitle-section text-center' data-aos="fade-up">Assurez le bien-être de vos proches au Cameroun en leur offrant nos services de soins à domicile</p>
            <div className='row'>
            {
                offers.map((offer, index) => {
                    return(
                        <div className=' col-sm-12 col-md-6 col-lg-4 p-4' key={index}>
                            <div className='offer-item p-4' data-aos="fade-up">
                                <div className='offer-header'>
                                    <h3 className='offer-title'>{offer.name}</h3>
                                    <p className='offer-price'>€{offer.price}/mois</p>
                                    <div className='offer-line'></div>
                                </div>
                                <div className='offer-body d-flex justify-content-center align-items-center flex-column'>
                                    <div className='mb-4'>
                                        {
                                            offer.composition.map((c, index) => {
                                                return <div className='d-flex align-items-center' key={index}>
                                                            <p className='check'>
                                                                <i className="fa-solid fa-check"></i>
                                                            </p>
                                                            <p>{c}</p>
                                                        </div>
                                            })
                                        }
                                    </div>
                                    <button className='button' onClick={() => {navigate('/contact-us')}}>Choisir ce forfait</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default OfferSection