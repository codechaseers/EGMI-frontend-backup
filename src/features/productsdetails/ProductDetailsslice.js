import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sucess: false,
    productDetails:null,
    imageDetails:null,
    specification:null,
    selectColorid:0,
    
}


export const productDetailsSlice = createSlice({
    name: "prodictdetails",
    initialState,
    reducers: {
        getProductdetails: (state, action) => {
            state.sucess = true;
            
            state.productDetails = action.payload;
            // state.imageDetails = action.payload.imagedata;
            // state.specification = action.payload.specification;
        } ,
        getProductImage: (state, action) => {
            state.sucess = true;
          
            state.imageDetails = action.payload;
          
        } , 
        getProductDescription: (state, action) => {
            state.sucess = true;
            
           
            state.specification = action.payload;
           
        } ,
        getColorid: (state, action) => {
            state.sucess = true;            
            state.selectColorid =  action.payload;            
            
        } 
    }

})

export const { getProductdetails,getProductImage ,getProductDescription,getColorid } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;