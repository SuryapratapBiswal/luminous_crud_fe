import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Users/userSlice";

const store = configureStore({
    reducer: {
        users: userSlice
    }
})

export default store