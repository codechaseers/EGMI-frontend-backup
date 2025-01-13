// import { useEffect, useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// import { Loginuserinput } from "../../redusers/Login_reduser"
// // import {app} from '../../context/Firebase';
// import { auth } from '../../context/Firebase';
// import { RecaptchaVerifier, signInWithPhoneNumber } from "@firebase/auth";
// // import { sendOtp} from "../../redusers/Otp_reduser";
// // import { addTodo} from "../../redusers/Otp_reduser";
// import {CgSpinner} from "react-icons/cg"


// function Login_1st({ togglePopupotp, setOpen }) {
//   // const [mob_no ,setMob_no]=useState()
//   // const dispatch = useDispatch();
//   let   [phone, setPhone] = useState("");
//   const [otp,setOtp]=useState("");
//   const [err, setErr] = useState("");
//   const [confirmObj, setConfirmObj] = useState()
//   const [showOtp,setShowotp]=useState(false);
//   const [loading,setLoading]=useState(false)
//   let response
//   //otpsend function

//   //   const sendOtp=()=>{

//   //     dispatch(addTodo("hii"))
//   //  // console.log("otpsend")
//   // }
//   // async function sendOtp(e) {
//   //   e.preventDefault();
//   //   phone = `+91${phone}`
//   //  // console.log(phone);
//   //   if (phone == "" || phone == null || phone.length < 13) {

//   //     alert("invalid phone no");
//   //     return;
//   //   }
//   //   try {
//   //        response = await setUpCaptcha(phone);
//   //       //  if(response&&){
//   //       //   SetOtp(true)
//   //       // }

//   //     //// console.log(response);
//   //     //  setConfirmObj(response)
//   //     // // console.log(response)
//   //     // // console.log(confirmObj);
//   //      return setConfirmObj(response)
//   //     //  dispatch(addTodo(response.verificationId))
//   //     } catch (error) {
//   //      // console.log(error)
//   //       return setErr(error)
//   //     }

//   // }
//   function onCaptchaVerify() {
//     if (!window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
//         'size': 'invisible',
//         'callback': (response) => {
//           // reCAPTCHA solved, allow signInWithPhoneNumber.
//           // ...
//           sendOtp()
//         },
//         'expired-callback': () => {
//           // Response expired. Ask user to solve reCAPTCHA again.
//           // ...
          
//         }
//       });
//     }
//   }

//   function sendOtp() {
//     setLoading(true);
//     onCaptchaVerify();
//     const appVerifier = window.recaptchaVerifier;
//     phone = `+91${phone}`;
//     signInWithPhoneNumber(auth, phone, appVerifier)
//       .then((confirmationResult) => {
//         // SMS sent. Prompt user to type the code from the message, then sign the
//         // user in with confirmationResult.confirm(code).
//         window.confirmationResult = confirmationResult;
//         setLoading(false)
//         setShowotp(true)

//         // ...
//       }).catch((error) => {
//         // Error; SMS not sent
//         // ...
//         //// console.log(error)
//         setLoading(false);
//       });
//   }
//   //// console.log(confirmObj)
//   // dispatch(addTodo(confirmObj))
//   // setConfirmObj(sendOtp())

//   // useEffect(()=>{

//   // },[sendOtp])
//   function verifyOtp(){
//    // console.log("clicked")
//     confirmationResult.confirm(otp).then((result) => {
//       // User signed in successfully.
//       const user = result.user;
//       // ...
//      // console.log(user)
//       setOpen(2)
//     }).catch((error) => {
//       // User couldn't sign in (bad verification code?)
//       // ...
//     });
//   }
//   return (
//     <>
//     {!showOtp?
//       <div className="login_popup_main first_screen">
//       <div className="popup-content">
//         <p className="popup_close" onClick={togglePopupotp}>X</p>
//         <div class="otp-login-head">
//           <h2>Get<b>started</b></h2>
//           <span>Please enter your Mobile Number to continue</span>

//           <div className="otp_send">
//             <label>Enter Mobile Number</label>
//             <div className="otp_send_mt">
//               <input type="text" value={phone} placeholder="Type Here" onChange={(e) => setPhone(e.target.value)} />
//               <span>+91</span>
//             </div>
//             <div id='recaptcha-container' className="mt-2"></div>
//             <button onClick={(e) => sendOtp(e)}>{loading && <CgSpinner size={20} className=""/>} <span>SEND OTP</span></button>
//             <p className="Confirming">By Confirming, you agree to boAt's Terms and Conditions and Privacy Policy.</p>
//           </div>

//         </div>
//       </div>
//     </div>
//     :
//     <div className="login_popup_main second_screen">
//            <div className="popup-content">
//              <p className="popup_close" onClick={togglePopupotp}>X</p>
//              <div class="otp-login-head">
//                <h2>OTP <b>Verification</b></h2>
//                <span>Enter the OTP sent to your Mobile Number</span>
//                <p>+91- 8264310967 <a href="!#">Edit</a></p>

//                <div className="otp_send">
//                  <div className="otp_send_mt">
//                    <input type="number" value={otp}  placeholder="Type Here" onChange={(e) => setOtp(e.target.value)} />
//                  </div>

//                  <button onClick={verifyOtp}> Continue</button>
//                  <p className="timer_end">08:32 | Enter the OTP</p>
//                  <p className="Confirming">By Confirming, you agree to boAt's Terms and Conditions and Privacy Policy.</p>
//                </div>

//              </div>
//            </div>
//          </div>
//     }
    
    

//   </>)
// }

// export default Login_1st