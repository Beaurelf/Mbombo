import React from 'react'
import ServiceItem from './ServiceItem'
import './ServiceSection.css'
import campagne from '../assets/img/campagne.jpg'
import evacuation from '../assets/img/evacuation.jpg'
import application from '../assets/img/application.png'
import appel from '../assets/img/appel.png'
import assistant from '../assets/img/assistant_perso.png'
import assurance from '../assets/img/assurance.png'


const services = [
    {
        name : 'Assistant personnel',
        description : 'Visites à domicile par des assistants personnels à différentes fréquences',
        image : assistant
    },
    {
        name : 'Campagne de santé',
        description : 'Organisation et participation à campagnes médicales avec des médecins venant de l’étranger',
        image : campagne
    },
    {
        name : "Évacuation à l'étranger",
        description : 'Aide aux protocoles d’évacuation vers les installations médicales mieux équipées dans le monde',
        image : evacuation
    },
    {
        name : 'Assurance',
        description : "Mbombo Assurance couvre vos frais médicaux et assure l'évacuation en cas de besoin",
        image : assurance
    },
    {
        name : 'Mbombo mobile',
        description : 'Gérez les visites et restez connecté à la santé de vos proches, tout au creux de votre main.',
        image : application
    },
    {
        name : 'Mbombo appel',
        description : 'Un service téléphonique Mbombo accessible qui est là pour répondre à vos besoins. ',
        image : appel
    },
]

function ServiceSection() {
    return (
        <section className='my-container'>
            <div className='grid service'>
                <svg className='background-3' viewBox="0 0 1728 725" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-57.0339 41.4915C83.2673 -45.3541 389.116 207.187 760.109 145.632C1081.44 92.2977 1112.13 5.7672 1362.8 0.345717C1545.94 
                    -3.63541 1736.53 47.0992 1829.77 145.632C1932.59 254.271 1869.59 371.995 1852.63 400.634C1776.79 529.078 1601.86 602.564 1540.27 627.742C1286.52
                     731.415 1021.55 726.393 894.426 724.019C416.925 715.015 -68.1019 544.702 -57.0341 336.666C-55.6307 309.432 -120.367 80.7079 -57.0339 41.4915Z" 
                     fill="url(#paint0_linear_109_1959)"/>
                    <defs>
                    <linearGradient id="paint0_linear_109_1959" x1="1274.64" y1="-162.701" x2="1141.01" y2="744.75" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#E3F4FF"/>
                        <stop offset="1" stopColor="#E9F1F6"/>
                    </linearGradient>
                    </defs>
                </svg>
                <div className='text-center' data-aos="fade-up">
                    <h2 className='title-section'>Nos services</h2>
                </div>
                <div className='d-flex justify-content-center align-items-center' data-aos="fade-up">
                    <p className='subtitle-section'>Assurez le bien-être de vos proches au Cameroun en leur offrant nos services de soins à domicile</p>
                </div>
                <div className='row p-2 pt-0 mb-5'>
                    {
                        services.map((service, index) => {
                            return( 
                                <ServiceItem
                                key={index}
                                title={service.name}
                                text={service.description}
                                image={service.image}
                                lg={4}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ServiceSection
