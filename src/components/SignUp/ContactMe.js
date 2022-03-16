import React, { useState } from 'react'
import { doc, setDoc} from "firebase/firestore"; 
import { db } from '../Firebase/config';
import style from './Contactme.module.css'
import { useEffect } from 'react';


export default function ContactMe() {

  const[sent, setSent] = useState(false)

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

    setSent(true)
    console.log(sent)
  }

  useEffect(() =>{
    console.log(sent)
  })

  return (
    <div className={style.formContainer}
    
    >
      <div>
        
      </div>
      <form 
      onSubmit={addEmail} 
      className={style.contactform} 
      autoComplete="off"
      >
      <span className={sent ? `${style.thankyou}`: `${style.welcome}`}>
        <p className={sent ? `${style.thankyou01}`: ''}>Thank You!</p>
      </span>
        <div>
          <h1>Contact me</h1>
        </div>
        <input required type='text' id="business_name" placeholder=' Business Name' />
        <input type='text' id="fname" placeholder=' First Name' />
        <input type='text' id="lname" placeholder=' Last Name' />
        <input required type='text' id="email" placeholder=' email' />
        <input type='tel' id="Pnumber" placeholder=' Contact Number' />
        <textarea className={style.comment}  id="comment" placeholder="Leave a comment"></textarea>
        <button>Send Contact</button>
      </form>
    </div>
  )
}
