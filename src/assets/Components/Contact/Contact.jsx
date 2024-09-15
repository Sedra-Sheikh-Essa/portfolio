import React from 'react'
import './ContactStyle.css'

const Contact = () => {
    return (
    <>
        <div className="container Contact"  id='Contact'>
            <h1>Contact Me</h1>
            <div className="conContact">
                <div class="left-contact">
                    <h2 className='par'>Let's discuss your project</h2>
                    <ul>
                        <li class="contact-list">
                            <h2 class="title">
                            <i class="fa-solid fa-circle-user"></i> FullName
                            </h2>
                            <p>Sedra Moneb Sheikh Essa</p>
                        </li>
                        <li class="contact-list">
                            <h2 class="title">
                            <i class="fas fa-phone"></i> Mobile Phone
                            </h2>
                            <p>+963 991464757</p>
                        </li>
                        <li class="contact-list">
                            <h2 class="title">
                            <i class="fas fa-envelope"></i> Email Address
                            </h2>
                            <p><a href="mailto:sedrasheikhessa2310@gmail.com">sedrasheikhessa2310@gmail.com</a></p>
                        </li>
                        <li class="contact-list">
                            <h2 class="title">
                            <i class="fas fa-map-marked-alt"></i> Official Address
                            </h2>
                            <p>Homs-Syria</p>
                        </li>
                    </ul>
                </div>
                <form action="https://t.me/Sedra_sh2310"  className='right-contact'>
                    <div className='conName'>
                    <input type="text" placeholder='First Name' className='FirstName' />
                    <input type="text" placeholder='Last Name' className='LastName' />
                    </div>
                    <input type="email" placeholder='Email Address' />
                    <textarea name="" id="" placeholder='Enter a description...'></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </>
    )
}

export default Contact