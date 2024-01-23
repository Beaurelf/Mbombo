import React from 'react'

function ContactForm() {

  return (
    <section className='card contact-form shadow-lg mb-3 p-5'>
        <form className='form'>
            <h2>Nous Contactez</h2>
            <div className="form-floating mb-3">
                <input type="text" class="form-control" id="name" placeholder="mot de passe"/>
                <label for="name">Nom</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" class="form-control" id="email" placeholder="nom@exemple.com"/>
                <label for="email">Adresse e-mail</label>
            </div>
            <div className="form-floating mb-3">
                <textarea class="form-control" placeholder="votre message" id="message" style={{height: 200}}></textarea>
                <label for="message">Votre message</label>
            </div>
            <button className='form-btn button'>Soumettre</button>
        </form>
    </section>
  )
}

export default ContactForm
