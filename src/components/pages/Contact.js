import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
       <div className="contact-info">
              <div className="contact-text">
                <h2>Kontakt</h2>
                <p>
                    Har du en krockskadad bil ? Skall du bygga om/renovera?
                  Då kan vi hjälpa dig gällande ditt nästa projekt.
                  Kontakta oss idag via vårt kontaktformulär så återkopplar vi så fort
                  vi kan. Välkommen!
                </p>
                <p>+46 762696401</p>
                <p>robertkondel@hotmail.com</p>
              </div>
              <div className="contact-form">
                <form
                  action="https://formsubmit.co/robertkondel@hotmail.com"
                  method="POST"
                >
                  <input type="email" name="email" required placeholder="Email" />
                  <input type="text" name="name" required placeholder="Ditt namn" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Ditt tel. nr."
                  />
                  <textarea
                    type="text"
                    name="message"
                    rows="10"
                    required
                    placeholder="Meddelande"
                  ></textarea>
                  <button type="submit" className='btn'>Skicka</button>
                </form>
              </div>
            </div>
            <div className="contact-map">
                <iframe title='Drive directory' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2253.7397603605!2d13.033081016030957!3d55.606542710730125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a370f1b6db3b%3A0x541119ff45d7ce2c!2sRK%20Bilskadecenter%20AB!5e0!3m2!1ssv!2sse!4v1660403507344!5m2!1ssv!2sse" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
    </div>
  )
}

export default Contact
