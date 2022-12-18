import React from 'react'
import TextAnim from './TextAnim';
import * as Icons  from "react-icons/fa";

function Contact() {
  return (
    <div id='contact-me'>

           <h1>
            <TextAnim text = {['<Contact Me/>', 5000, '' ]} />
          </h1>
        <div className='contact_container'>
          <ul className='contact_details'>
              <li>
                <span><Icons.FaPhone /></span>0912-761-5685
              </li>
              <li>
                <span><Icons.FaHouseUser /></span>Roguza Compound, Brgy. Bagong Silang, Balanga City, Bataan
              </li>
              <li>
                <span><Icons.FaEnvelope /></span>mrahitojr123@gmail.com
              </li>
          </ul>
        <form action="">
          <h2>Have a Question?</h2>
          <p>Please drop me a line and I will get in touch within the next 24hr.</p>
                <input type="text" name="name" id="name" placeholder='Name'/>
                <input type="text" name="email" id="email" placeholder='Email' />
                <input type="text" name="subject" id="subject" placeholder='Subject' />
                <textarea name="message" id="" cols="30" rows="5" placeholder='Message'></textarea>
                <button className='alt'><Icons.FaTelegramPlane /> Send</button>
        </form>
        </div>
    </div>
  )
}

export default Contact