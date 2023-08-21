import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import numberReducer from "../features/number/numberSlice";

const store = configureStore ({
    reducer : {counter : counterReducer , number : numberReducer}
})


export default store;