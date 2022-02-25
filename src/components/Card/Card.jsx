import React from 'react'
import style from './Card.module.css'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import gura from '../../img/contents/gura.jpg'

/* Initial setup before animation */
const beforeAnimate = {
  y: -100,
  opacity: 0
}

export default function Card(props) {
  
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
    animate={animation} ref={ref} > {/* Ref will reference to inview */}
      <div><h1>{props.headline}</h1></div>
      <div className={style.imgcntnr}>
        <img src={gura} alt='' />
      </div>
      <div className={style.cardcntnt}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </motion.div>
  )
}
