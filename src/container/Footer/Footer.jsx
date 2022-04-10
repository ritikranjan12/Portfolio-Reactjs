import React, {useState} from 'react'

import {image} from '../../constants';
import {AppWrap} from '../../wrapper';
import {client} from '../../client';
import './Footer.scss'



const Footer = () => {

  const handleSubmit = async () => {
   
    setLoading(true);

    const contact = {
      _type : 'contact',
      name:name,
      email:email,
      message:message
    }

    client.create(contact)
    .then(() => {
      setLoading(false);
      setFormsubmitted(true);
    })

    
    let msg = new SpeechSynthesisUtterance();
    msg.text = "Thank you for getting in touch";
    window.speechSynthesis.speak(msg);

  }
  const handleonchange = (e) => {
    const {name, value} = e.target;

    setFormdata({...formdata, [name]:value});

  }

  const [formdata,setFormdata] = useState({name : "" , email:'',message:''})
  const [formsubmitted,setFormsubmitted] = useState(false);
  const [loading,setLoading] = useState(false);
  const {name,email,message} = formdata;
  

  return (
    <>
    
    <h2 className="head-text">Take Rest and chat with me</h2>

    <div className="app__footer-cards">
      <div className="app__footer-card">
        <img src={image.email} alt="email" />
        <a href="mailto:ritikranjan539@gmail.com" className='p-text'>ritikranjan539@gmail.com</a>
      
      </div>
      <div className="app__footer-card">
        <img src={image.mobile} alt="mobile" />
        <a href="tel: +91 7564970990" className='p-text'>+91 7564970990</a>
      
      </div>
    </div>

    {!formsubmitted ? 
    <div className='app__footer-form app__flex'>
      <div className="app__flex">
        <input type="text" placeholder='Your Name' name='name' value={name} onChange={handleonchange} className="p-text" />
      </div>
      <div className="app__flex">
        <input type="email" placeholder='Your Email' name='email' value={email} onChange={handleonchange} className="p-text" />
      </div>

      <div>
        <textarea className='p-text' placeholder='Your Message' name="message" onChange={handleonchange} id="" cols="30" rows="10"></textarea>
        <button className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
      </div>

    </div>

     : <div>
       <h3 className="head-text">Thank you for getting in touch !</h3>
     </div>
     
     }
    
    </>
  )
}

export default AppWrap(Footer,'contact');
