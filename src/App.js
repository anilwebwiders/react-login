import './App.css';
import {Routes ,Route } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile'
import { useDispatch, useSelector } from 'react-redux';
import { checkLoginExist } from './api/Api'
import { useEffect } from 'react';
function App() {

  const dispatch = useDispatch();
  const checkLogin = async () =>{
    await checkLoginExist(dispatch);
  }

  useEffect(()=>{
    checkLogin();
  },[]);

  



  

  return (
    <>
    <Routes>
      
        <Route path='/edit-profile' element={<Profile/>}/>
        <Route path='/' element={<Login />} />
        
        <Route path='/sign-in' element={<Login />} />
        
        <Route path='/sign-up' element={<Signup />} />
      
    </Routes>
    
    </>
  );
}

export default App;
