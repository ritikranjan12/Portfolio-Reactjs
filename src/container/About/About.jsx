import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion';

import './About.scss';

import {image} from '../../constants'

import {urlFor , client} from '../../client'
import {AppWrap} from '../../wrapper'

const About = () => {
  const [abouts,setAbouts] = useState([]);

  useEffect(() => {
      const query = '*[_type == "mydata"]'
      client.fetch(query).then((data) => {
        console.log(data);
        
          setAbouts(data)

        
          // console.log("deleted");
          
        })
  },[])
  return (
    <>
    <h2 className='head-text'>Learning new <span> Technologies </span><br /> gives <span>more Opportunity!</span>
    
    </h2>

    <div className="app__profiles">
        {abouts.map((about,index) => {
          return <motion.div
          whileInView={{opacity:1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5,type:'tween'}}
          className="app__profile-item"
          key={about.title + index}
          >
          <img className='img' src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' >{about.title}</h2>
            <p className='p-text'>{about.description}</p></motion.div>

        })}
    </div>
    
    </>
  )
}

export default AppWrap(About,'about')
