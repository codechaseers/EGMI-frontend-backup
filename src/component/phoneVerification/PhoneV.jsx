import React, { useState } from 'react'
import './phone.css';
import app from '../../context/Firebase';
import { auth,setUpCaptcha } from '../../context/Firebase';

function PhoneV() {
    const [phone,setPhone]=useState("");
    const [otp,SetOtp]=useState("");
    const [err,setErr]=useState("");
    const [confirmObj,setConfirmObj]=useState("")

    function handlePhoneChange(e){
       setPhone(e.target.value)
    }
    function handleOtpChange(e){
       SetOtp(e.target.value)
    }
    async function handleSubmit(e){
       e.preventDefault();
       if(otp===""||otp===null){
        alert("otp can not be empty");
        return;
       }
       try {
        await confirmObj.confirm(otp)
        alert('success')
       } catch (error) {
       // console.log(error)
        alert("password is incorrect")
       }
    }

    async function sendOtp(e){
       e.preventDefault();
       if(phone==""||phone==null||phone.length<13){
        alert("invalid phone no");
        return;
       }
       try {
        const response=await setUpCaptcha(phone);
        setConfirmObj(response)
       } catch (error) {
        setErr(error)
       // console.log(error)
       }
       

    }
    return (
        <div>
            <div>
                <label htmlFor='phone'></label>
                <input type='text' id='phone' value={phone} onChange={(e)=>handlePhoneChange(e)} />
                <button onClick={(e)=>sendOtp(e)}>Get Otp</button>
            </div>
            <div>
                <label htmlFor='otp'></label>
                <input type='text' id='otp' value={otp} onChange={(e)=>handleOtpChange(e)} />
            </div>
            <div id='recaptcha-container'></div>
            <div>
                <button type='button' onClick={(e)=>handleSubmit(e)}>Submit</button>
            </div>

        </div>
    )
}

export default PhoneV
