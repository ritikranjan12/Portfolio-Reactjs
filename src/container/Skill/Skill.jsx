import React, {useState, useEffect} from 'react'
import ReactTooltip from 'react-tooltip'
import {motion} from 'framer-motion';

import {AppWrap} from '../../wrapper';
import {urlFor, client} from '../../client';
import './Skill.scss'

const Skill = () => {
  useEffect(()=>{
    const query = `*[_type == "experiences"]`;
    const skillsQuery = `*[_type == "skills"]`;

    client.fetch(query)
    .then((data) =>{
      setExp(data);      
    })

    client.fetch(skillsQuery)
    .then((data) =>{
      setSkills(data);      
    })
  },[])

  const [skills,setSkills] = useState([]);
  const [exp,setExp] = useState([]);
  return (
    <>
    <h2 className="head-text">Skills and Experience</h2>

    <div className="app__skills-container">
      <motion.div className='app__skills-list'>

        {skills?.map((item) => {
            return <motion.div
            whileInView={{opacity:[0,1]}}
            transition={{duration:0.5}}
            className="app__skills-item app__flex"
            key={item.name}
            >
                <div className="app__flex" style={{backgroundColor: item.bgColor}}>
                <img src={urlFor(item.icon)} alt={item.name} />
                </div>
                <p className="p-text">{item.name}</p>
            </motion.div>
        })}
      </motion.div>
    </div>
    </>
  )
}

export default AppWrap(Skill,'skills');
