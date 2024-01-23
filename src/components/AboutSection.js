import React from 'react'
import { useNavigate } from 'react-router-dom'
import aboutImage from '../img/nous.png'

const services = [
    'Visites à domicile par des assistants personnels à différentes fréquences afin de les accompagner dans leur suivi de santé et leur garantir un environnement propre et sain ',
    'Organisation et participation à campagnes médicales avec des médecins venant de l’étranger',
    'Aide aux protocoles d’évacuation vers les installations médicales mieux équipées dans le monde entier en cas de besoin.'
]

function AboutSection() {
    const navigate = useNavigate();
    return (
        <div className='about-section row p-3 mb-4'>
            <div className="about-text col-sm-12 col-md-7 p-4">
                <h2 className='mb-4'>Qui nous sommes ?</h2>
                <p>
                    MBOMBO est une entreprise qui offre à ses souscripteurs un service composé de : 
                </p>
                <ul className='mb-5'>
                    {
                        services.map((service, index) => {
                            return(
                                <li key={index}>
                                    <i className="fa-regular fa-hand-point-right"></i>
                                    <span>{service}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className="button" onClick={() => {navigate('/about-us')}}>Plus de details</button>
            </div>
            <div className="about-image col-sm-12 col-md-5 p-2">
                <img src={aboutImage} alt="Staff médical" />
            </div>
        </div>
    )
}

export default AboutSection
