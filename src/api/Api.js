import Instance from "./instance";

import FormData from 'form-data';
import { loginError, loginStart, loginSuccess } from "../Redux/userRedux";

var data = new FormData();

export const login = async (dispatch, user) => {
    data.append('email', user.email);
    data.append('password', user.password);
    dispatch(loginStart());
    try{
        const responce = await Instance.post('login',data);
        //console.log(responce.data);

        if(responce.data.status==1){
            dispatch(loginSuccess(responce.data.data))

            localStorage.setItem('user_id',responce.data.data.id);

        } else {
            dispatch(loginError());
        }

        return responce.data;

    } catch (err){
        dispatch(loginError());
        console.log(err);
        const returns = {
            status:0,
            message:'Something went wrong'
        }
        return returns;
    }
    
}

export const checkLoginExist = async (dispatch) => {
    const user_id = localStorage.getItem('user_id');
    if(user_id){

        try{
            const responce = await Instance.get(`GetUserProfile/${user_id}`);
            //console.log(responce.data);
    
            if(responce.data.status==1){
                dispatch(loginSuccess(responce.data.data))
    
                localStorage.setItem('user_id',responce.data.data.id);
    
            } else {
                dispatch(loginError());
            }
    
            return responce.data;
    
        } catch (err){
            dispatch(loginError());
            console.log(err);
            const returns = {
                status:0,
                message:'Something went wrong'
            }
            return returns;
        }

    } else {
        dispatch(loginError());
    }

    
    
}