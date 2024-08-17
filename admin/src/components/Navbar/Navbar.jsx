import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='admin-logo'>
      <img className='logo' src={assets.Yumish}/>
      <p>Admin</p>
      </div>
 
    <img className='profile' src={assets.profile_image}/>
    </div>
  )
}

export default Navbar