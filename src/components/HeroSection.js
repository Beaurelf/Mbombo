import React from 'react'
import { useNavigate } from 'react-router-dom'

function HeroSection({title, subtitile, description, hasButton=true, image, imageAlt}) {
  const navigate = useNavigate()
  return (
    <div className='mb-4'>
        <div className='hero-section d-flex justify-content-between '>
            <div className='hero-presentation'>
              <h1>{title}</h1>
              <h6 style={{margin: 0}}>{subtitile}</h6>
              <p>{description}</p>
              {hasButton && <button className='button2 mb-2' onClick={() => navigate('/contact-us')}>Contactez nous</button>}
            </div>
            <img src={image} alt={imageAlt}/>
        </div> 
    </div>
  )
}

export default HeroSection
