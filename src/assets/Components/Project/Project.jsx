import React from 'react'
import './ProjectStyle.css'
import { project } from '../../../data'

const Project = () => {
  return (
  <>
  <div className="container project" id='Projects'>
    <h1>Projects</h1>

    <swiper-container class="mySwiper" loop= "true" speed="3000"autoplay-delay="3000"
      pagination="true" effect="coverflow" grab-cursor="true" centered-slides="true"
      slides-per-view="auto" coverflow-effect-rotate="0" coverflow-effect-stretch="80" coverflow-effect-depth="200"
      coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true">

{                
      project.map((el ,index) => (
        <swiper-slide key={index}>
          <div className="Card">
              <img src={el.img} alt="" />
              <h3>{el.title}</h3>
              <p>{el.desc}</p>
              <p className='skills'><span>Skills: </span>{el.skill}</p>
              <div className="conbtn">
                <a href={el.demo}>
                  <button>Live Demo</button>
                </a>
                <a href={el.git}>
                  <button>Go To Github</button>
                </a>
              </div>
          </div>
        </swiper-slide>
    ))
    }
  </swiper-container>

      </div>
    </>
  )
}

export default Project