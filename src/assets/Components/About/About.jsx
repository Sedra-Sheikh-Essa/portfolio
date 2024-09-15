import React from 'react'
import './AboutStyle.css'
import imgAbout from './../../images/uscc0fqq.png'

const About = () => {
  return (
    <>
        <div className="container About" id='About'>
            <h1>About Me</h1>
            <div className="conAbout">
              <div className='conImg'>
              <img src={imgAbout} alt="" className='imgAbout' />
              </div>
                <div className="detail">
                    <p>I am a fourth-year student in the Faculty of Information Technology (IT) Engineering, specializing in Software Engineering, at Al-Baath University in Homs... I am interested in programming and problem solving, especially website development programming...I transform designs into interactive websites and applications</p>
                    <button>Download CV</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default About