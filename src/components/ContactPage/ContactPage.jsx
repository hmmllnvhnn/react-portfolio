import React, { useRef } from 'react'
import './ContactPage.css'

const ContactPage = () => {
    const form = useRef()

    const sendEmail = () => { };
    return (
        <div>
            <body id='contact' className='contact'>
                <h1 className='contactTxt'>contact</h1>
                <form ref={form} onSubmit={sendEmail} className='contactForm'>
                    <label htmlFor="">Name</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Phone Number</label>
                    <input type="tel" name="" id="" />
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" />
                    <label htmlFor="">Subject</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <div>
                        <button className='button'>Send Message</button>
                    </div>
                </form>
            </body>
        </div>
    )
}

export default ContactPage