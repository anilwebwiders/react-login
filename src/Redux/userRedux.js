import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name:'user',
    initialState:{
        isUserLoggedIn:false,
        userdata:{},
        isFachingUser:false
    },
    reducers:{
        loginStart:(state)=>{
            state.isFachingUser=true;
            state.isUserLoggedIn=false;
        },
        loginSuccess:(state,action)=>{
            state.isFachingUser=false;
            state.isUserLoggedIn=true;
            state.userdata=action.payload;
        },
        loginError:(state)=>{
            state.isFachingUser=false;
            state.isUserLoggedIn=false;
        },
        logout:(state)=>{
            state.isFachingUser=false;
            state.isUserLoggedIn=false;
            state.userdata ={};
        }
    }
})

export default userSlice.reducer;
export  const {loginStart, loginSuccess, loginError, logout} = userSlice.actions