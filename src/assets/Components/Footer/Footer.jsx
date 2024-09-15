import React from 'react'
import './FooterStyle.css'

const Footer = () => {
  return (
    <>
        <div className="container Footer">
            <h2>To contact with me :</h2>
            <ul className='social'>
                <li><a href="https://www.facebook.com/sedra.alsheikhessa?mibextid=ZbWKwL" target='_blank' className='face'><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="https://t.me/Sedra_sh2310"><i class="fa-brands fa-telegram"></i></a></li>
                <li><a href="https://www.instagram.com/sedraalsheikhessa?igsh=MTVlczkybThxdDdpMQ=="><i class="fa-brands fa-square-instagram"></i></a></li>
                <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
                <li><a href="https://github.com/Sedra-Sheikh-Essa"><i class="fa-brands fa-github"></i></a></li>
            </ul>
        </div>
    </>
  )
}

export default Footer