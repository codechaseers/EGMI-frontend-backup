import React, { useState,useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import CountdownTimer from '../Countdown/CountCountdownTimer';
// import axios from "axios"

function AuthSecondEnterOtpPopup({ togglePopupotp, setOpen, err, setErr, loading, setLoading, verifyOtp,phoneno ,sendOtp}) {
  const [otp, setOtp] = useState("")
  const [timer, setTimer] = useState(30);

  const handleVerification = async (e) => {
    e.preventDefault();
    setLoading(true)
   // console.log("clicked");
    if (otp == "" || otp == null) {
      setErr("Fill the Otp")
      setLoading(false)
      return;
    }
    verifyOtp(otp,phoneno);
  }
  const resendOtp=()=>{
    sendOtp(phoneno)
    console.log("resend otp");
    setTimer(30)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {  
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);
  return (
    <>
  
    <div className="login_popup_main second_screen">
      <div className="popup-content">
        <p className="popup_close" onClick={togglePopupotp}>X</p>
        <div className="otp-login-head">
          <h2>OTP <b>Verification</b></h2>
          <span>Enter the OTP sent to your Mobile Number</span>
          <p>+91- {phoneno} <a className="editPhone" onClick={() => setOpen(1)}>Edit</a></p>

          <div className="otp_send">
            <form onSubmit={handleVerification}>

              <div className="otp_send_mt">
                <input type="number" value={otp} placeholder="Type Here" onChange={(e) => setOtp(e.target.value)} />
              </div>
              {err && <div className='error'>{err}</div>}
              {err?setLoading(false):""}

              {loading ?
                < ClipLoader
                  loading={loading}
                  size={35}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />:<>
                <button className={otp.length>=6?'tenNumget':""}> Continue</button>
                </>
                
              }
              
            </form>
            {
              // console.log(<CountdownTimer time ={6}/>)
            }
            {/* {<CountdownTimer time ={6}/>==0?"hii":"hello"} */}
            <p className="timer_end">
              {timer > 0 ? (
                <>

                <CountdownTimer time={timer} />| Enter the OTP
                <p style={{ color: 'green',fontWeight:'600'  }}>OTP SENT</p>
                </>
              ) : (
                  <a className="editPhone" onClick={ resendOtp}>Resend OTP</a>
              )}  
            </p>
              {/* <p> </p> */}
            <p className="Confirming">By Confirming, you agree to boAt's Terms and Conditions and Privacy Policy.</p>
          </div>

        </div>
      </div>
    </div>
    <style>
          {
            `
            
            button.tenNumget {
              background: #000;
              color: #fff;
          }
            `
          }
        </style>
    </>
  )
}

export default AuthSecondEnterOtpPopup
