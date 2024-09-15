import React from 'react'
import './HeroStyle.css'
import heroImg from './../../images/hero-final.png'

const Hero = () => {
  return (
    <>
        <div className="container flex-between-c hero" id='Home'>
        <div className="conImg">
                <img src={heroImg} alt="" className='heroImg' />
            </div>
            <div className="conInfo">
              <h1 className='hi'>HEY! </h1>
                <h2 className='h2'>I’m  <span className='name'>Sedra Sheikh Essa</span> , <br />Front-end Developer Ready to help you
                </h2>
                <p className='details'>I can help you to create amazing websites for your business and make all your dreams come true.</p>
                <a href="#Contact">
                <button className='contact'>Contact Me</button>
                </a>
            </div>
        </div>
    </>
  )
}

export default Hero