import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a2lhh4i', 'template_dyfsl11', form.current, 'zZ0OKC49OlcpC6hX_')
    e.target.reset()
  }
  return (
    <section id='contact'>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>johnny.adejumo6@gmail.com</h5>
            <a href="mailto:johnny.adejumo6@gmial.com">Send a message </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Click for facebook</h5>
            <a href="https://m.me/adejumo.john">Send a message </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+2348101889366</h5>
            <a href="https://api.whatsapp.com/send?phone=+2348101889366">Send a message </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name'placeholder='Full Name' required/>
          <input type="email" name='email' placeholder='Enter Email' required/>
          <textarea name="message"  rows="7" placeholder = "Enter message" required></textarea>
          <button type='submit' className='btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
