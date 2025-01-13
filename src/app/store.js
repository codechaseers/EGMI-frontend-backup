import {configureStore} from "@reduxjs/toolkit";
import authReducer from '../features/authentication/authSlice'
import preAuthReducer from '../features/authentication/preAuthSlice'
import productDetailsReduser from '../features/productsdetails/ProductDetailsslice'
import selectedProductReduser from '../features/productsdetails/SelectedProductSlice'

export const store=configureStore({
    reducer:{
        authReducer:authReducer,
        preAuthReducer:preAuthReducer,
        productDetailsReduser:productDetailsReduser,
        selectedProductReduser:selectedProductReduser
    }
});