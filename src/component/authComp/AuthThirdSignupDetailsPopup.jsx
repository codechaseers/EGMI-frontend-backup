import React, { useState } from "react";
 
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/authentication/authSlice";
import { Cookies } from "react-cookie";
import axios from "axios";
function AuthThirdSignupDetailsPopup({
  togglePopupotp,
  setOpen,
  loading,
  setLoading,
  setUser,
}) {
  const cookies = new Cookies();

  //// console.log(setOpen)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [panNo, setPanNo] = useState("");
  const dispatch = useDispatch();
  let getData = useSelector((state) => state.authReducer);
 // console.log(getData);
 // console.log("getData");
 
  const calculateCreaditLimit = () => {
    // Define the step or interval for random numbers (e.g., 1000)
    var step = 1000;
    // Calculate the number of possible steps within the range
    var numberOfSteps = Math.floor((60000 - 35000 + 1) / step);
    // Generate a random step within the range
    var randomStep = Math.floor(Math.random() * numberOfSteps);
    // Calculate the final random number
    var randomNumber = randomStep * step + 35000;
    return randomNumber
  
  };

  const processUserDetails = async (e) => {
    e.preventDefault();
    setLoading(true);
    let creditLimit=calculateCreaditLimit()
    const userDetails = {
      mobileNo: localStorage.getItem("user_no_future_ref"),
      name,
      email,
      panNo,
      creditLimit,
      availableLimit: creditLimit,
    };
   // console.log("clicked");
    try {
      const registrationResponse = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/signup`,
        userDetails
      );
     // console.log(registrationResponse);
      if (registrationResponse.status == 200) {
        const authUserToken = registrationResponse.data.token;
        // localStorage.setItem(`BSE-authtoken-auto%log_in`, authUserToken)
        cookies.set(`BSE-authtoken-auto%log_in`, authUserToken, {
          maxAge: 604800,
        });
       // console.log(registrationResponse);
       // console.log(registrationResponse.data.token);
       // console.log("auth third sign");

        setTimeout(() => {
          setUser(registrationResponse.data.userDetails);
          // togglePopupotp()
          // dispatch(login(registrationResponse.data.userDetails))
         // console.log(registrationResponse.data);

          setLoading(false);
          setOpen(4);
        }, 5000);
      }
    } catch (error) {
     // console.log(error);
     // console.log(userDetails);
    }
  };
  return (
    <div className="login_popup_main thread_screen">
      <div className="popup-content">
        <p className="popup_close" onClick={togglePopupotp}>
          X
        </p>
        <div class="otp-login-head">
          <h2>
            <b>Continue with Email ID</b>
          </h2>
          <span>Please enter your Name & Email ID to continue</span>

          <div className="otp_send">
            <form onSubmit={processUserDetails}>
              <div className="otp_send_mt">
                <label>Enter Full name</label>
                <input
                  type="text"
                  value={name}
                  placeholder="Type Here"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="otp_send_mt">
                <label>Enter Email</label>
                <input
                  type="email"
                  value={email}
                  placeholder="Type Here"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="otp_send_mt">
                <label>Enter Pan Card Number</label>
                <input
                  type="text"
                  placeholder="Type Here"
                  value={panNo}
                  required
                  onChange={(e) => setPanNo(e.target.value)}
                />
              </div>
              {loading ? (
                <ClipLoader
                  loading={loading}
                  size={35}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                <button type="submit"> Submit</button>
              )}
            </form>

            <p className="Confirming">
              By Confirming, you agree to boAt's Terms and Conditions and
              Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthThirdSignupDetailsPopup;
