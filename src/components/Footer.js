import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Logo from '../assets/img/logo.png'
import './Footer.css'

function Footer() {
  const navigate = useNavigate()
  return (
    <footer className="footer">
      <div className=' d-flex justify-content-around p-4'>
        <div className="footer-item">
          <img className='logo-footer-phone' data-aos="fade-up" src={Logo} alt='Logo Mbombo'onClick={() => navigate('/')}/>
          <h5 data-aos="fade-up">MBOMBO</h5>
          <address data-aos="fade-up">
            <p className='m-0'>167 rue Saint Gilles, 76890 val de Saane</p>
            <a href="mailto:mbomboenterprise@gmail.com">mbomboenterprise@gmail.com</a><br/>
            <a href="tel:+33649121434">+33649121434</a>
            <a href="tel:+1(514)605-3560">+1(514)605-3560</a>
            <a href="tel:+237695637366">+237695637366</a>
          </address>
          <img className='logo-footer' src={Logo} alt='Logo Mbombo'onClick={() => navigate('/')}/>
        </div>
        <div className="footer-item">
          <Link data-aos="fade-up" to=''>Accueil</Link>
          <Link data-aos="fade-up" to='/services'>Offres</Link>
          <Link data-aos="fade-up" to='/about-us'>À propos de nous</Link>
          <Link data-aos="fade-up" to='/contact-us'>Contact</Link>
        </div>
        <div className="footer-item">
          <a href="https://www.facebook.com" data-aos="fade-up"><i className='fa-brands fa-facebook me-2'></i> Facebook</a>
          <a href="https://www.twitter.com" data-aos="fade-up"><i className='fa-brands fa-twitter me-2'></i> Twitter</a>
          <a href="https://www.instagram.com" data-aos="fade-up"><i className='fa-brands fa-instagram me-2'></i> Instagram</a>
        </div>
        <div className="footer-item newsletter">
          <p data-aos="fade-up">S'abonner à notre newsletter</p>
          <form className='row' data-aos="fade-up">
            <input id="newsletter-email" className='col-10' type="email" placeholder="Email Address" />
            <button className='col-2' type="submit">OK</button>
          </form>
        </div>
      </div>
      <p className='text-center'>Copyright © 2024 –Mbombo</p>
    </footer>
  )
}

export default Footer
