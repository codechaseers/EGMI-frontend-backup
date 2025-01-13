import React from 'react'
import logo from "../../assets/images/logo.svg"
import Brandlogo from "../../assets/Logo/EgmiBrandLogo2.png";
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../features/authentication/authSlice';
import CountdownTimer from '../Countdown/CountCountdownTimer';


function AuthFinalSuccessLoginPopup({togglePopupotp,user}) {
  
  const dispatch = useDispatch();
 
    if(user){
      setTimeout(() => {
        togglePopupotp()
       // console.log("auth final process");
       // console.log(user );
        dispatch( login(user))
      }, 3000);
     // console.log(user )
    }

  return (
    <div className="login_popup_main finel_screen">
          <div className="popup-content">
            <p className="popup_close" onClick={togglePopupotp}>X</p>
            <div className="otp-login-head">
              <img src={Brandlogo} className="App_logo" />
              <h2 className="Woohooo"><b>Woohooo!!!</b></h2>
              <h2><b>You are successfully logged in.</b></h2>
              <p>Sailing in <CountdownTimer time={3}/> seconds...</p>
            </div>
          </div>
        </div>
  )
}

export default AuthFinalSuccessLoginPopup
