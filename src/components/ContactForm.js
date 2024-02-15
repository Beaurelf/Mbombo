import React from 'react'
import './ContactForm.css'

function ContactForm() {

  return (
    <section className='contact-form mb-3 p-5'>
        <form className='form' data-aos="fade-up">
            <div className="mb-3">
                <label className='form-label' htmlFor="name">Nom et prenom</label>
                <input type="text" className="my-form-control" id="name" placeholder="mot de passe"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email">Adresse e-mail</label>
                <input type="email" className="my-form-control" id="email" placeholder="nom@exemple.com"/>
            </div>
            <div className="mb-3">
                <label htmlFor="message">Votre message</label>
                <textarea className="my-form-control" placeholder="votre message" id="message" style={{height: 200}}></textarea>
            </div>
            <button className='form-btn button'>Soumettre</button>
        </form>
    </section>
  )
}

export default ContactForm
