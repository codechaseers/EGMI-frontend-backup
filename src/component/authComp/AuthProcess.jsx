import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/authentication/authSlice";

import { Loginuserinput } from "../../redusers/Login_reduser";
// import {app} from '../../context/Firebase';
import { auth } from "../../context/Firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "@firebase/auth";
// import { sendOtp} from "../../redusers/Otp_reduser";
// import { addTodo} from "../../redusers/Otp_reduser";

import AuthFirstEnterNoPopup from "./AuthFirstEnterNoPopup";
import AuthSecondEnterOtpPopup from "./AuthSecondEnterOtpPopup";
import AuthThirdSignupDetailsPopup from "./AuthThirdSignupDetailsPopup";
import AuthFinalSuccessLoginPopup from "./AuthFinalSuccessLoginPopup";
import { Cookies } from "react-cookie";
import ProfilePage from "../profile/viewProfile";

function AuthProcess({ togglePopupotp }) {
  let userStatus = useSelector((state) => state.authReducer.loggedInStatus);
  const cookies = new Cookies();
  const dispatch = useDispatch();

  const [err, setErr] = useState("");
  const [open, setOpen] = useState(userStatus ? 5 : 1);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
 // console.log(userStatus);
  //   let response
  //otpsend function

  //   const sendOtp=()=>{

  //     dispatch(addTodo("hii"))
  //  // console.log("otpsend")
  // }
  // async function sendOtp(e) {
  //   e.preventDefault();
  //   phone = `+91${phone}`
  //  // console.log(phone);
  //   if (phone == "" || phone == null || phone.length < 13) {

  //     alert("invalid phone no");
  //     return;
  //   }
  //   try {
  //        response = await setUpCaptcha(phone);
  //       //  if(response&&){
  //       //   SetOtp(true)
  //       // }

  //     //// console.log(response);
  //     //  setConfirmObj(response)
  //     // // console.log(response)
  //     // // console.log(confirmObj);
  //      return setConfirmObj(response)
  //     //  dispatch(addTodo(response.verificationId))
  //     } catch (error) {
  //      // console.log(error)
  //       return setErr(error)
  //     }

  // // }
  // function onCaptchaVerify() {
  //   if (!window.recaptchaVerifier) {
  //     window.recaptchaVerifier = new RecaptchaVerifier(
  //       auth,
  //       "recaptcha-container",
  //       {
  //         size: "invisible",
  //         callback: (response) => {
  //           // reCAPTCHA solved, allow signInWithPhoneNumber.
  //           // ...
  //           sendOtp(phone);
  //         },
  //         "expired-callback": () => {
  //           // Response expired. Ask user to solve reCAPTCHA again.
  //           // ...
  //         },
  //       }
  //     );
  //   }
  // }

  async function sendOtp(phone) {
    setErr("");
    setLoading(true);
    // onCaptchaVerify();
    // const appVerifier = window.recaptchaVerifier;
    // window.recaptchaVerifier = undefined;
    const mobNo = `+91${phone}`;
    const sendOtpResponse=await axios.post(`${import.meta.env.VITE_BASE_URL}/sendotp`,{phoneNo:mobNo});
    if(sendOtpResponse.status==200){
      setLoading(false);
        setOpen(2);
    }else{
      setLoading(false);
      setErr("some error happen please try again later")
    }
    // signInWithPhoneNumber(auth, mobNo, appVerifier)
    //   .then((confirmationResult) => {
    //     // SMS sent. Prompt user to type the code from the message, then sign the
    //     // user in with confirmationResult.confirm(code).
    //     window.confirmationResult = confirmationResult;
    //     setLoading(false);
    //     setOpen(2);
    //     window.recaptchaVerifier = undefined;
    //   })
    //   .catch((error) => {
    //     // Error; SMS not sent
    //     setLoading(false);
    //     window.recaptchaVerifier = undefined;
    //     setErr("Too many attempts please try again later");
    //   });
  }
  const phoneforCheckExists = localStorage.getItem("user_no_future_ref");


 async function verifyOtp(otp,phoneNo) {
  // console.log(phoneNo)
    setErr("");
    const mobNo = `+91${phoneNo}`;
    const verifyOtpResponse=await axios.post(`${import.meta.env.VITE_BASE_URL}/verifyotp`,{phoneNo:mobNo,otp});
    console.log(verifyOtpResponse)
    if(verifyOtpResponse.status==200){
           try {
          const isUserExist = await axios.get(
            `${
              import.meta.env.VITE_BASE_URL
            }/user/userexist/${phoneNo}`
          );
         // console.log(isUserExist);

          if (isUserExist.status == 200) {
            const authUserToken = isUserExist.data.token;
            cookies.set(`BSE-authtoken-auto%log_in`, authUserToken,{maxAge:  604800});
           // console.log("exists");
            //// console.log(isUserExist)
            //   togglePopupotp();
            setUser(isUserExist.data.userDetails);
            setOpen(4);
            // dispatch( login(isUserExist.data.userData))
          } else if (isUserExist.status == 201) {
            setLoading(false);
            setOpen(3);
          }
          
        } catch (error) {
         // console.log(error);
         setErr("something went wrong please try again later");
        }
    }else{
      setErr("Incorrect otp or otp expired");
    }

    // setErr("");
    // confirmationResult
    //   .confirm(otp)
    //   .then(async (result) => {
    //     // User signed in successfully.

      
    //     //// console.log(phoneforCheck)
    //     try {
    //       const isUserExist = await axios.get(
    //         `${
    //           import.meta.env.VITE_BASE_URL
    //         }/user/userexist/${phoneforCheckExists}`
    //       );
    //      // console.log(isUserExist);

    //       if (isUserExist.status == 200) {
    //         const authUserToken = isUserExist.data.token;
    //         cookies.set(`BSE-authtoken-auto%log_in`, authUserToken,{maxAge:  604800});
    //        // console.log("exists");
    //         //// console.log(isUserExist)
    //         //   togglePopupotp();
    //         setUser(isUserExist.data.userDetails);
    //         setOpen(4);
    //         // dispatch( login(isUserExist.data.userData))
    //       } else if (isUserExist.status == 201) {
    //         setLoading(false);
    //         setOpen(3);
    //       }
          
    //     } catch (error) {
    //      // console.log(error);
    //     }
    //   })
    //   .catch((error) => {
    //     // User couldn't sign in (bad verification code?)
    //     // ...
    //     setErr("Incorrect otp");
    //   });
  }
 // console.log(user);
  // useEffect(()=>{

  // },[sendOtp])
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

//  // console.log(user)
  return (
    <>
      {open == 1 && (
        <AuthFirstEnterNoPopup
          togglePopupotp={togglePopupotp}
          sendOtp={sendOtp}
          err={err}
          setErr={setErr}
          loading={loading}
          setLoading={setLoading}
        />
      )}
      {open == 2 && (
        <AuthSecondEnterOtpPopup
          togglePopupotp={togglePopupotp}
          setOpen={setOpen}
          sendOtp={sendOtp}
          err={err}
          setErr={setErr}
          verifyOtp={verifyOtp}
          loading={loading}
          setLoading={setLoading}
          phoneno={phoneforCheckExists}
        />
      )}
      {open == 3 && (
        <AuthThirdSignupDetailsPopup
          togglePopupotp={togglePopupotp}
          loading={loading}
          setLoading={setLoading}
          err={err}
          setErr={setErr}
          setOpen={setOpen}
          setUser={setUser}
        />
      )}
      {open == 4 && (
        <AuthFinalSuccessLoginPopup
          togglePopupotp={togglePopupotp}
          loading={loading}
          setLoading={setLoading}
          err={err}
          setErr={setErr}
          setOpen={setOpen}
          user={user}
        />
      )}
      
    </>
  );
}

export default AuthProcess;
