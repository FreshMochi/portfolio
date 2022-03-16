import React from 'react'
import style from './Pfcard.module.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Pfcard(props) {
  const [showDisabled, setShowError] = useState(false)

  function disabled(event) {
    event.preventDefault()
    setShowError(true)
  }
  
  return (
    <motion.div 
    whileHover={{
      backgroundColor: "rgb(11, 145, 170)",
      transition: { duration: 0.4 },
    }}
    className={style.PfcardCntnr}>
      <span className={showDisabled? `${style.covercard}`: `${style.hidemsg}`}>
        <p style={{color: 'white'}}>Sorry Currently Unavailable</p>
      </span>
      <div><h1>{props.title}</h1></div>
      <div>
          <Link 
          onClick={props.link === "blog"? (event) => disabled(event): ''} 
          to={props.link === 'portfolio'? '/portfolio' : `${props.link}`}  >
          <button>
            View more
          </button>
          </Link>
      </div>
    </motion.div>
  )
}
