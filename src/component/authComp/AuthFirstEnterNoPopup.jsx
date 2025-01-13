import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function AuthFirstEnterNoPopup({
  togglePopupotp,
  sendOtp,
  err,
  setErr,
  loading,
  setLoading,
}) {
  const [phone, setPhone] = useState("");
  const handlePhoneSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (phone == "" || phone == null || phone.length != 10) {
      setErr("Mobile number is invalid");
      setLoading(false);
      return;
    }
    localStorage.setItem("user_no_future_ref", phone);
    sendOtp(phone);
  };

  return (
    <>
      <div className="login_popup_main first_screen">
        <div className="popup-content">
          <p className="popup_close" onClick={togglePopupotp}>
            X
          </p>
          <div class="otp-login-head">
            <h2>
              Get<b>started</b>
            </h2>
            <span>Please enter your Mobile Number to continue</span>

            <div className="otp_send">
              <label>Enter Mobile Number</label>
              <form onSubmit={handlePhoneSubmit}>
                <div className="otp_send_mt">
                  <input
                    type="text"
                    pattern="[789][0-9]{9}"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Type Here"
                  />
                  <span>+91</span>
                </div>
                <div id="recaptcha-container" className="mt-2"></div>
                {err && <p className="error">{err}</p>}
                {loading ? (
                  <>
                    <p></p>
                    <ClipLoader
                      loading={loading}
                      size={35}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  </>
                ) : (
                  <button
                    type="submit"
                    className={phone.length >= 10 ? "tenNumget " : ""}
                  >
                    {" "}
                    SEND OTP
                  </button>
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
      <style>
        {`
            
            button.tenNumget {
              background: #000;
              color: #fff;
          }
            `}
      </style>
    </>
  );
}

export default AuthFirstEnterNoPopup;
