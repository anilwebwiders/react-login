import { configureStore } from "@reduxjs/toolkit";
import userRedux from "./userRedux";

const store = configureStore({
    reducer:{
        user:userRedux
    }
})

export default store;