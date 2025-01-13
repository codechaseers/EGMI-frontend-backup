// import { configureStore } from "@reduxjs/toolkit";
// import { Loginuser } from "../redusers/Login_reduser";
// import {otpSlice} from "../redusers/Otp_reduser"



// export const store =configureStore({
//     reducer:{
//         loginuser:Loginuser.reducer,
//         SendOtp:otpSlice
//     }
// })

import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../redusers/Otp_reduser';

export const store = configureStore({
    reducer: todoReducer.reducer
})