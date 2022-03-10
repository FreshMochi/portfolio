import React from 'react'
import { doc, setDoc} from "firebase/firestore"; 
import { db } from '../components/Firebase/config';


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

    const contactForms = doc(db, `${process.env.REACT_APP_AUTOGENID}`, BUSINESS_NAME );
    setDoc(contactForms, { 
      BUSINESS_NAME: BUSINESS_NAME, 
      FIRST_NAME: FNAME, 
      LAST_NAME: LNAME, 
      CONTACT_NUM: CONTACT_NUM,
      EMAIL: EMAIL
    });
    console.log(contactForm)

  }

  

  return (
    <div>
      <form onSubmit={addEmail}>
        <input type='text' id="business_name" placeholder='Business Name' />
        <input type='text' id="fname" placeholder='first name' />
        <input type='text' id="lname" placeholder='last name' />
        <input type='text' id="email" placeholder='email' />
        <input type='number' id="Pnumber" placeholder='contact number' />
        <button>Add to Firebase</button>
      </form>
    </div>
  )
}
