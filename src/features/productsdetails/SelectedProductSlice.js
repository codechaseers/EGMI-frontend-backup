import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sucess: false,
    selectedProduct:null,
    SelectedAddress:false,
    option:2,
    address:{},
     
    
}


export const selectedProductSlice = createSlice({
    name: "selectProductSlice",
    initialState,
    reducers: {
        setSelectedProductd: (state, action) => {
            state.sucess = true;
            state.  SelectedAddress=false
            
            state.selectedProduct = action.payload;
           
        } ,
        setSelectedAddress: (state, action) => {        
         
            state.SelectedAddress = action.payload;
           
        } ,
        setOption: (state, action) => {        
         
            state.option = action.payload;
           
        } ,setUserAddress: (state, action) => {        
         
            state.address = action.payload;
           
        } ,
        
    }

})

export const { setSelectedProductd,setSelectedAddress,setOption,setUserAddress } = selectedProductSlice.actions;

export default selectedProductSlice.reducer;