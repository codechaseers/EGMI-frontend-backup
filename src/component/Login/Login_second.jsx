function Login_second(props){
    return(<>
    <div className="login_popup_main second_screen">
          <div className="popup-content">
            <p className="popup_close" onClick={props.togglePopupotp}>X</p>
            <div class="otp-login-head">
              <h2>OTP <b>Verification</b></h2>
              <span>Enter the OTP sent to your Mobile Number</span>
              <p>+91- 8264310967 <a href="!#">Edit</a></p>

              <div className="otp_send">
                <div className="otp_send_mt">
                  <input type="number" placeholder="Type Here" />
                </div>

                <button> Continue</button>
                <p className="timer_end">08:32 | Enter the OTP</p>
                <p className="Confirming">By Confirming, you agree to boAt's Terms and Conditions and Privacy Policy.</p>
              </div>

            </div>
          </div>
        </div>
    
    
    </>)
}

export default Login_second