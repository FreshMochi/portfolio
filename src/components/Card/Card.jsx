import React from 'react'
import style from './Card.module.css'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import gura from '../../img/contents/biker.jpg'
import { Link } from 'react-router-dom';

/* Initial setup before animation */
const beforeAnimate = {
  y: -100,
  opacity: 0
}

export default function Card(props) {

  const [showDisabled, setShowError] = useState(false)

  function disabled(event) {
    event.preventDefault()
    setShowError(true)
  }
  
  

//this library allows us to trigger a boolean when in view
  const {ref, inView} = useInView({
    threshold: 0.6
});

//allows us to setup animation effect outside of the inline animation style
const animation = useAnimation() 

//
  useEffect(() => {
    if(inView) {
      animation.start({
          y: 0,
          opacity: 1,
          transition: { duration: 1
          }
      })
    }
  }, [inView])

  return (
    <motion.div 
    className={style.cardcntnr}
    initial={beforeAnimate}
    animate={animation} ref={ref} 
    whileHover={{
      scale: 1.02,
      transition: { duration: 0.4 },
    }}
    > {/* ref will reference to inview */}
      <div>
        <h1 style={{
          margin: "20px 0"
          }}>{props.headline}
        </h1>
      </div>
      <div className={style.imgcntnr}>
        <img src={gura} alt='' />
      </div>
      <div className={style.cardcntnt}>
        <p>
        {props.dialog}
        </p>
      </div>
      <div className={style.btnpos}>
        <Link
          onClick={props.link === "blog"? (event) => disabled(event): ''} 
          style={{textDecoration: 'none'}}
          to={`/${props.link}`}>
          <button>
          View More
          </button>
          </Link>
      </div>
      <span className={showDisabled? `${style.covercard}`: `${style.hidemsg}`}>
        <p style={{color: 'white'}}>Sorry Currently Unavailable</p>
      </span>
    </motion.div>
  )
}


