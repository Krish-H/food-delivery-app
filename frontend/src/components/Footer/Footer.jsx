import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
             <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.Yumish} className='footer-logo'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dignissimos explicabo cum facere rem recusandae velit adipisci molestiae? Error dolorum consectetur veritatis fugiat quae maiores. Nobis impedit magnam quae quaerat!</p>
                    <div className="footer-social-icons">
                    <img src={assets.facebook_icon} />
                    <img src={assets.twitter_icon} />
                    <img src={assets.linkedin_icon} />
                    </div>

                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                      <h2>GET IN TOUCH</h2>
                      <ul>
                        <li>+1-233-235-7890</li>
                        <li>contact@Yumish.com</li>
                      </ul>
                </div>
             </div>
             <hr/>
             <p className='footer-copyright'>Copyright 2024 © Tomato.com - All Right Reserved. </p>
    </div>

  )
}

export default Footer