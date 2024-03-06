import React, { useState, useRef } from 'react'
import './contact.css'

const Contact = () => {
    const [done, setDone] = useState(false);
    const [ndone, setNDone] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const message = e.target.message.value.trim();
        let isEmpty = false;
        if (!name || !email || !message) {
            isEmpty = true;
            setDone(false);
        }
        else {
            setDone(true);
            form.current.reset();
            setTimeout(() => setDone(false), 2000);
        }

        if (isEmpty) {
            setNDone(true);
            setTimeout(() => setNDone(false), 2000);
          }
        
      };
  return (
    <div className='cont-wrap'>
        <div className='blurBac' style={{background:'rgb(283 210 255)'}}></div>
        <div className='cont-left'>
            <span>Get in Touch</span>
            <span>Contact me</span>
        </div>
        <div className='cont-right'>
            <form ref={form} onSubmit={sendEmail} className='cont-right-form'>
                <input className='c-r-1' placeholder='Name' type="text" name="name" />
                <input className='c-r-1' placeholder='Email' type="email" name="email" />
                <input className='c-r-1' placeholder='Message' type="text" name="message" />
                <input type="submit" value="Send" className="button c-r-b"/>
                <span>{done && "Thanks for Contacting me"}</span>
                <span>{ndone && "All Fields are mandatory"}</span>
            </form>
        </div>
    </div>
  )
}

export default Contact