import React from 'react'
import style from './Pfcard.module.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Pfcard(props) {
  return (
    <motion.div 
    whileHover={{
      backgroundColor: "rgb(11, 145, 170)",
      transition: { duration: 0.4 },
    }}
    className={style.PfcardCntnr}>
      <div><h1>{props.title}</h1></div>
      <div>
          <Link to="/css-animation" style={{ textDecoration: 'none'}}>
          <button>
            View more
          </button>
          </Link>
      </div>
    </motion.div>
  )
}
