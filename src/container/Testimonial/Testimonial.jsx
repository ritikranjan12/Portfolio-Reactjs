import React, {useState, useEffect} from 'react'

import {HiChevronLeft , HiChevronRight} from 'react-icons/hi';

import {AppWrap} from '../../wrapper';
import {urlFor, client} from '../../client';

import './Testimonial.scss'

const Testimonial = () => {
  const handleClick = (index) => {
    setcurrIdx(index)

  }
  const [brands,setBrands] = useState([]);
  const [testimonial,setTestimonial] = useState([]);
  const [curridx,setcurrIdx] = useState(0);

  useEffect(()=>{
    
    const testQuery = `*[_type == "testimonials"]`;

    

    client.fetch(testQuery)
    .then((data) =>{
      setTestimonial(data);      
    })
  },[])

  const test = testimonial[curridx];
  return (
   <>
   {testimonial.length && (
     <>
     <div className="app__testimonial-item app__flex">
       <img src={urlFor(test.imgurl)} alt={testimonial} />
       <div className="app__testimonial-content">
         <p className="p-text">{test.feedback}</p>
         <div>
           <h4 className="bold-text">{test.name}</h4>
           <h5 className="p-text">{test.company}</h5>
         </div>
       </div>
     </div>
     <div className="app__testimonial-btns app__flex">
       <div className='app__flex'  onClick={() => handleClick(curridx===0 ? testimonial.length -1 : curridx-1 )}>
       <HiChevronLeft />
       </div>
       <div className='app__flex' onClick={() => handleClick(curridx===testimonial.length -1 ? 0 : curridx+1 )}>
         <HiChevronRight />
       </div>
     </div>
     </>
   )}
   </>
  )
}

export default AppWrap(Testimonial,'testimonials');
