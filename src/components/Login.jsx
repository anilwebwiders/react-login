import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Header from './include/Header';
import {login} from '../api/Api'
import { useDispatch, useSelector } from 'react-redux';
const Login = () => {

    const dispatch = useDispatch();

    const {isUserLoggedIn} = useSelector((state)=>state.user);
    let navigate = useNavigate();
    useEffect(()=>{

        
        if(isUserLoggedIn===true){
            console.log('sdfsfsdf...');
        
            navigate('/edit-profile');
         
        }
    },[isUserLoggedIn])

    

    document.title = 'Sign In';
     const [user,setUser] = useState({
         email:'',
         password:''
     });

     const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name,value)

        setUser({
            ...user,
            [name]:value
        })
     }

     const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        const resp = await login(dispatch, user);
        console.log(resp);
     }


    return (
        <>
        
        <Header/>
        <div className="main">
        <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src="images/signin-image.jpg" alt="sing up "/></figure>
                        <NavLink to="/sign-up" className="signup-image-link">Create an account</NavLink>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign In</h2>
                        <form onSubmit={handleSubmit} method="POST" className="register-form" id="login-form">
                            <div className="form-group">
                                <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="email" name="email" value={user.email} onChange={handleInput} id="email" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" value={user.password} onChange={handleInput} id="password" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" required name="remember-me" id="remember-me" className="agree-term" />
                                <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>


        </div>
        </>
    )
}
export default Login