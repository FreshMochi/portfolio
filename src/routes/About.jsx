import React from 'react'
import Banner from '../img/sunset.jpg'
import style from '../PageStyles/About.module.css'

export default function About() {
  return (
    <div>
      <div 
      className={style.Banner}
      style={{backgroundImage: `url(${Banner})`}}>
        
      </div>
      <div>
        <p>About me</p>
        <p>
          I am a self taught, aspiring Frontend developer. Every night I would code 
          or do a little research on projects I can add onto my webpage.
        
        </p>
      </div>
        <div style={{display: 'flex', justifyContent: "center", alignItems: "center", width: '100%', margin: '30px 0'}}>
          <div style={{height: "50vh", width: '80%', backgroundColor: "green"}}>
          </div>
        </div>
      <div>
        Goal: I want to become a full stack developer and be learn python.
      </div>
      <div>
        <div>
          HTML
          CSS,
          ES6,
          React,
          Github,
          Wordpress,
          Sqaurespace
        </div>
        <div>
          Experienced in Node, Express, MongoDB
        </div>
      </div>
    </div>
  )
}
