import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import numberReducer from "../features/number/numberSlice";
import usersReducer from "../features/users/usersSlice";
import logger from "redux-logger";
const store = configureStore ({
    reducer : {counter : counterReducer , number : numberReducer , users:usersReducer},
    middleware: getDefaultMiddleware =>getDefaultMiddleware().concat(logger)
})


export default store;