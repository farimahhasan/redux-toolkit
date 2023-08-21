import { createSlice } from "@reduxjs/toolkit";
import { increment as incrementCounter } from "../counter/counterSlice";

const initialState= {
    numberValue : 0,
}
const numberSlice = createSlice({
    name : "number" , 
    initialState ,
    reducers : {
        increment : (state) =>{
            state.numberValue++
        }, 
        decrement : (state) =>{
            state.numberValue--;
        },
    },
    // extraReducers : {
    //     ["counter/increment"] : (state) =>{
    //        state.numberValue++;
    //     }
    // }
    extraReducers : (builder)=>{
        builder.addCase(incrementCounter , (state) => {
            state.numberValue++;
        })
    }
})

export default numberSlice.reducer
export const {increment , decrement} = numberSlice.actions
export const selectNumber = store=>store.number.numberValue