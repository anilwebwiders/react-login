import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/userRedux';
const Header = () => {

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const {isUserLoggedIn,userdata,isFachingUser} = useSelector((state)=>state.user);
  
    console.log('isUserLoggedIn',isUserLoggedIn);
    console.log('userdata',userdata);
    console.log('isFachingUser',isFachingUser);

    const handleLogout = ()=>{
        dispatch(logout());
    
        localStorage.setItem('user_id',null);
        navigate('/sign-in');
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                { isUserLoggedIn ? (

                        <>
                        
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/edit-profile">Profile</NavLink>
                        </li>

                        <li className="nav-item">
                            <a href='javascript:;' onClick={handleLogout} className="nav-link" >Logout</a>
                        </li>
                        </>
                        
                    
                        ) : (
                        <>
                        <li className="nav-item">
                        <NavLink className="nav-link " aria-current="page" to="/sign-up">Sign Up</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/sign-in">Sign In</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/edit-profile">Profile</NavLink>
                        </li>
                        </>
                    ) }

                    
                    
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}
export default Header