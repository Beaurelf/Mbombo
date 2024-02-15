import React from 'react'
import universityZtf from '../assets/img/logo-university-ztf.png'
import hopeClinic from '../assets/img/logo-hope-clinic.png'
import './PartnerSection.css'

const logoPartners = [
    universityZtf,
    hopeClinic
]

function PartnerSection() {
    return (
        <div className='partner-section mb-4' data-aos="fade-up">
            <div className='text-center'>
                <h2 className='title-section'>Nos partenaires</h2>
            </div>
            <div>
                {
                    logoPartners.map((logo, index) => {
                        return(
                            <div key={index}>
                                <img src={logo} alt='logo' height={200} width={200}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PartnerSection
