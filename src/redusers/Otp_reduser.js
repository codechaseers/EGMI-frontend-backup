// import { createSlice } from "@reduxjs/toolkit";


// const initialState={
//     status:""
// }



// //actions
// export const otpSlice=createSlice({
//     name:'otpsend',
//     initialState,
//     reducers:{
//         sendOtp:(state,action)=>{
//             state.status=action.payload
//         }
//     }
// })
// export const{sendOtp}=otpSlice.actions.reducers


import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    object:{},
    errror_message:{}
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // const todo = {
            //     id: nanoid(), 
            //     text: action.payload
            // }
            // state.todos.push(todo)
            state.object=action.payload
            state.errror_message=action.payload
        },
      
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice