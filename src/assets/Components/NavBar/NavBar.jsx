import React, { useState } from 'react'
import './NavBarStyle.css'
import menu_icon from './../../images/Menu.svg'
import close_icon from './../../images/Close.svg' 

import { useContext } from 'react'
import { ThemeContext } from './../../../context/ThemeContext'

const NavBar = ({ onClick }) => {
  const theme = useContext(ThemeContext)


  const [menu , setmenu] = useState(false)
  function changeMenu() {
    setmenu(!menu);
    console.log(menu)
} 
window.addEventListener("scroll" ,function(){
var head=document.querySelector(".nav");
head.classList.toggle("sticky" , window.scrollY > 0);
})

  return (
    <nav>
      <div className='container flex-between-c nav'>
          <div className="conlogo">
            <img src="/images/logof.png" alt="" />
          </div>
          <div className="flex-between-c navItemMode">
          <div className="nav-items flex-between-c">
            <a href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="#Skills">Skills</a>
            <a href="#Projects">Projects</a>
            <a href="#Contact">Contact</a>
          </div>
          <div className="conMode">
          <img
          className="theme-icon"
          src={`/images/${theme}.svg`}
          alt=""
          width={50}
          height={50}
          onClick={onClick}
        />         
        </div>

        </div>
          <img
          src={menu_icon}
          alt=""
          className="menu-icon"
          onClick={changeMenu}
          />
      </div>

      {menu ? (
    <div className="nav-mobile flex-col">
          <div className="nav-mobile-items flex-align-c flex-col">
            <a href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="#Skills">Skills</a>
            <a href="#Projects">Projects</a>
            <a href="#Contact">Contact</a>
          </div>
          <div className="conMode flex-center">
          <img
          className="theme-icon"
          src={`/images/${theme}.svg`}
          alt=""
          width={50}
          height={50}
          onClick={onClick}
        /> 
                </div>
          <img
          src={close_icon}
          alt=""
          className="close-icon"
          onClick={changeMenu}
          />
    </div>
    ) : (
        <></>
    )}

    </nav>
  )
}

export default NavBar