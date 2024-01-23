import React from 'react'
import universityZtf from '../img/logo-university-ztf.avif'
import hopeClinic from '../img/logo-hope-clinic.png'

const logoPartners = [
    universityZtf,
    hopeClinic
]

function PartnerSection() {
    return (
        <div className='partner-section mb-4'>
            <h2 className='text-center mb-3'>Nos partenaires</h2>
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
