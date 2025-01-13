import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedInStatus: false,
    userData: null,
    loginPop:false,
    emiPopup:false
}


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.loginPop = false;
            state.loggedInStatus = true;
            state.userData = action.payload;
        },
        logout: (state, action) => {
            state.loginPop = false;
            state.loggedInStatus = false;
            state.userData = null;
        },
          loginPopup: (state, action) => {
            state.loginPop = action.payload;
           
        },
        emiPopup: (state, action) => {
            state.emiPopup = action.payload;
           
        }
    }

})

export const { login, logout,loginPopup,emiPopup } = authSlice.actions;

export default authSlice.reducer;