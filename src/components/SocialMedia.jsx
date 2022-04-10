import React from 'react'
import {BsInstagram, BsTwitter} from 'react-icons/bs'
import {FaFacebookF , FaGithub , FaYoutube} from 'react-icons/fa'


const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div >
          <a href="https://github.com/ritikranjan12" target='_blank'>
            <FaGithub />
            </a>
            </div>
            <div>
              <a href="/" >
              <BsInstagram />
              </a>
            </div>
            <div>
       <a href="/">
            <BsTwitter />
            </a>
            </div>
            <div>
              <a href="/" >
             
            <FaFacebookF />
            </a>
            </div>
            <div>
              <a href="https://www.youtube.com/channel/UC7cy_g1gB1h9tV0iYyBdBoQ/videos" target='_blank'>
            <FaYoutube />
            </a>
      </div>
      
    </div>
  )
}

export default SocialMedia
