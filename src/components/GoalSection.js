import React from 'react'
import { useNavigate } from 'react-router-dom'
import goalImage from '../img/but.png'

const goals = [
    'Contribuer à l’augmentation de l’espérance de vie en Afrique',
    'Contribuer à la réduction des mortalités infantiles et des femmes enceintes',
    'Proposer des emplois de qualités et bien rémunérés pour contribuer à la réduction de la pauvreté',
    'Contribuer à la réduction des décès et autres gros dommages dus aux erreurs médicales',
	'Offrir aux personnes de la diaspora un service leur permettant de prendre soin de leurs familles ; et aussi aux locaux une assurance de santé qui répond à leurs besoins au quotidien'
]

function GoalSection() {
  const navigate = useNavigate();
    return (
        <div className='goal-section row mb-4 p-3'>
            <div className="goal-image col-sm-12 col-md-5">
                <img src={goalImage} alt="Notre but" />
            </div>
            <div className="goal-text col-sm-12 col-md-7">
                <h2 className='mb-4'>Notre but</h2>
                <p> Mbombo a pour but de :</p>
                <ul>
                    {goals.map((goal, index) => {
                        return(
                            <li key={index}>
                                <i className="fa-regular fa-hand-point-right"></i>
                                <span>{goal}</span>
                            </li>
                        )
                    })}
                </ul>
                <button className="button" onClick={() => {navigate('/services')}}>Consultez nos offres</button>
            </div>
        </div>
    )
}

export default GoalSection