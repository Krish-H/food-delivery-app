import React, {  useContext, useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'


const Loginpopup = ({setShowLogin}) => {
   const{url,setToken}=useContext(StoreContext)
    const [currState,serCurrState]=useState('Sign up')
    const [userData,setUserData]=useState({
      name:"",
      email:"",
      password:""
    })
    const onChangeHandler=(event)=>{
        const name=event.target.name
        const value =event.target.value
        setUserData(prev=>({...prev,[name]:value}))
    }
    const onLogin=async(event)=>{
       event.preventDefault()
       let newUrl=url
       if(currState ==='Login'){
         newUrl+='/api/user/login'
       }
       else{
         newUrl+='/api/user/register'
       }
        const response = await axios.post(newUrl,userData)
     
        if(response.data.success){
           setToken(response.data.token)
           localStorage.setItem("token",response.data.token)
           setShowLogin(false)
        }
        else{
         alert(response.data.message)
        }
    }
  
    
  return (
    <div className='login-popup'>
       <form  className="login-popup-container" onSubmit={onLogin}>
           <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon}/>
           </div>
           <div className="login-popup-input">
            {currState === 'Login'? <></> :  <input  onChange={onChangeHandler} value={userData.name} name='name' type='text' placeholder='Your name' required />}
           
            <input onChange={onChangeHandler} value={userData.email} name='email' type='email' placeholder='Your email' required />
            <input  onChange={onChangeHandler} value={userData.password} name='password' type='password' placeholder='Password' required />
           </div>
           
        <button type='submit' >{currState === 'Sign up' ? "Create account" : "Login"}</button>
         <div className="login-popup-condition">
            <input type='checkbox' required />
            <p>By continuing ,i agree to the terms of use & privacy policy.</p>
         </div>
         {currState === 'Login'
         ? 
         <p onClick={()=> serCurrState('Sign up')}>Create a new account? <span>Click here</span></p>
         :
         <p onClick={()=> serCurrState('Login')}>Already have an account? <span>Login here</span></p>
        }
         
       

       </form>
    </div>
  )
}

export default Loginpopup