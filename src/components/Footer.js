import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className=' d-flex justify-content-around p-4'>
        <div className="footer-item">
          <h5>MBOMBO</h5>
          <h6>ENTREPRISE</h6>
          <address>
            <p className='m-0'>2559C rue Everett</p>
            <a href="mailto:mbomboenterprise@gmail.com">mbomboenterprise@gmail.com</a><br/>
            <a href="tel:+1(514)605-3560">+1(514)605-3560</a>
          </address>
        </div>
        <div className="footer-item">
          <Link to=''>Acceuil</Link>
          <Link to='/services'>Offres</Link>
          <Link to='/about-us'>À propos de nous</Link>
          <Link to='/contact-us'>Contact</Link>
        </div>
        <div className="footer-item">
          <a href="https://www.facebook.com"><i className='fa-brands fa-facebook'></i>  Facebook</a>
          <a href="https://www.twitter.com"><i className='fa-brands fa-twitter'></i>  Twitter</a>
          <a href="https://www.instagram.com"><i className='fa-brands fa-instagram'></i> Instagram</a>
        </div>
        <div className="footer-item newsletter">
          <p>S'abonner à notre newsletter</p>
          <form className='row'>
            <input id="newsletter-email" className='col-10' type="email" placeholder="Email Address" />
            <button className='col-2' type="submit">OK</button>
          </form>
        </div>
      </div>
      <p className='text-center'>Copyright © 2024 –Mbombo entreprise</p>
    </footer>
  )
}

export default Footer
