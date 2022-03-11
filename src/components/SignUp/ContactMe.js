import React from 'react'
import { doc, setDoc} from "firebase/firestore"; 
import { db } from '../Firebase/config';
import style from './Contactme.module.css'
import { motion } from 'framer-motion';
import backgroundimage from '../../img/contact/bear.jpg'


export default function ContactMe() {

  const addEmail = (event) => {
    event.preventDefault()
    const elementsArray = [...event.target.elements]

    /* use this method of uncontrolled components, where form data is handled by the DOM itself.
      This method was taken from Carmelle Codes about cloud firestore*/
    const contactForm = elementsArray.reduce((accumulator, currentValue) => {
      if(currentValue.id) {
        accumulator[currentValue.id] = currentValue.value
      }

      return accumulator
    }, {})
    
    let BUSINESS_NAME = JSON.stringify(contactForm.business_name)
    let FNAME = JSON.stringify(contactForm.fname)
    let LNAME = JSON.stringify(contactForm.lname)
    let EMAIL = JSON.stringify(contactForm.email)
    let CONTACT_NUM = Number(contactForm.Pnumber)
    let COMMENT = JSON.stringify(contactForm.comment)

    const contactForms = doc(db, `${process.env.REACT_APP_AUTOGENID}`, BUSINESS_NAME );
    setDoc(contactForms, { 
      BUSINESS_NAME: BUSINESS_NAME, 
      FIRST_NAME: FNAME, 
      LAST_NAME: LNAME, 
      CONTACT_NUM: CONTACT_NUM,
      EMAIL: EMAIL,
      COMMENT: COMMENT
    });

  }

  

  return (
    <motion.div className={style.formContainer}
      style={{backgroundImage: `url(${backgroundimage})`}}
    
    >
      <motion.form 
      onSubmit={addEmail} 
      className={style.contactform} 
      autoComplete="off"
      whileHover={{
      scale: 1.02,
      transition: { duration: 0.4 },
    }}
      >
        <div>
          <h1>Contact me</h1>
        </div>
        <input type='text' id="business_name" placeholder=' Business Name' />
        <input type='text' id="fname" placeholder=' First Name' />
        <input type='text' id="lname" placeholder=' Last Name' />
        <input type='text' id="email" placeholder=' email' />
        <input type='tel' id="Pnumber" placeholder=' Contact Number' />
        <textarea className={style.comment} id="comment" placeholder="Leave a comment"></textarea>
        <button>Send Contact</button>
      </motion.form>
    </motion.div>
  )
}
