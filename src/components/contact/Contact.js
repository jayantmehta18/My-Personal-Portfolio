import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiTwitterLine,RiSendPlane2Line} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = (props) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(props.service_id, props.template_id, form.current, props.public_key)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
    };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
      <div className="contact__options">
        <article className='contact__option'>
        <MdOutlineEmail className='contact__option-icon'/>
        <h4>E-mail</h4>
        <h5>jayantmehta99.jm@gmail.com</h5>
        <a href="mailto:jayantmehta99.jm@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
        </article>

        <article className='contact__option'>
        <RiTwitterLine className='contact__option-icon'/>
        <h4>Twitter</h4>
        <h5>@JayantM21548025</h5>
        <a href="https://twitter.com/messages/compose?recipient_id=JayantM21548025&text=" target='_blank' rel="noreferrer">Send a message</a>
        </article>

        <article className='contact__option'>
        <BsWhatsapp className='contact__option-icon'/>
        <h4>Whatsapp</h4>
        <h5>+91 xxxxxxx751</h5>
        
        <a href="" target='_blank' rel="noreferrer">Send a message</a>
        </article>
      </div>
      {/* END OF CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail}>
      <input type="text" name='name' placeholder='Your Full Name' required/>
      <input type="email" name='email' placeholder='Your Email' required/>
      <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
      <button type='submit' className='btn btn-primary'> <strong>SEND MESSAGE &nbsp;<RiSendPlane2Line className='submit__button-icon'/></strong></button>
      </form>
      </div>
    </section>
  )
}

export default Contact