import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mobileNo:""
}


export const preAuthSlice = createSlice({
    name: "preAuth",
    initialState,
    reducers: {
        storeMobileNoAftercheckuserExistance: (state, action) => {
            state.mobileNo = action.payload.phone;
        }
    }

})

export const {storeMobileNoAftercheckuserExistance} = preAuthSlice.actions;

export default preAuthSlice.reducer;