import React, { Children} from 'react'
import './SkillsStyle.css'
import SwiperComponent from './../SwiperComponent/Swiper'

const Skills = () => {
  return (
    <>
        <div className="container Skills" id='Skills'>
            <h1>Skills</h1>
            <div className="swipper">
            <SwiperComponent>
              {Children}
            </SwiperComponent>

            </div>
        </div>
    </>
  )
}

export default Skills