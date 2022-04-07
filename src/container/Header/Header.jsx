import React from 'react'
import './Header.scss'
import {motion} from 'framer-motion'

import {image} from '../../constants';


const Header = () => {
  
  return (
    <div id='home' className='app__header app__flex' >
        <motion.div
          whileInView={{x:[-100,0], opacity:[0,1]}}
          transition={{duration:0.5}}
          className='app__header-info'

        >

          <div className="app__header-badge ">
            <div className="badge-cmp app__flex">
              <span><i className="fa-regular fa-face-smile"></i></span>
              <div style={{marginLeft:20}}>
                <p className="p-text">Hello, I am</p>
                <h1 className="head-text">Ritik Ranjan</h1>
              </div> 
            </div>
            <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Competetive Programmer</p>
            <p className="p-text">Youtube</p>
            <p className="p-text">Future Android Developer</p>

            </div>
          </div>

        </motion.div>

        <motion.div
        whileInView={{opacity:[0,1]}}
        transition={{duration:0.5, delayChildren:0.5}}
        className='app__header-img'
        >

        <img className='profile-pic' src={image.profile} alt="profile_bg" />
        </motion.div>
    </div>
  )
}

export default Header
