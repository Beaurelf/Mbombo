import React from 'react'
import './HeroSection.css'
import image from '../assets/img/hero-image.png'
import africa from '../assets/img/africa.png'

function HeroSection() {
  return (
    <section className='mb-4'>
      <div className='row align-items-center justify-content-center'  data-aos="fade-up" >
        <div className='col-md-7 col-12 postion-relative slogan'>
          <img className='africa' src={africa} alt='afrique'/>
          <h2 className='title-mbombo'>
            Avec Mbombo, remettre l’humain au coeur du soin.
            C’est de ça qu’il s’agit ! 
          </h2>
          <p className='devise'>Nous sommes le gardien de votre bien-être, assurant des soins durables, respectueux de la tradition et de la vitalité de chaque Mbombo.</p>
        </div>
        <img className='col-md-5 col-12'src={image} alt='presentation' height={550} width={450}/>
      </div>
    </section>
  )
}

export default HeroSection
