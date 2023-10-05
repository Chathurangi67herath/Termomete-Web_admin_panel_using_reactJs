import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import user_icon from '../icons/person.png';

function Navbar({ onTabClick }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <div className='navbar'>
            <div className='logo'><img src={logo} id='lo'></img>Termomete</div>

            <div className='links'>
                {isLoggedIn ? (
                     <>
                       <Link to="/profile"><img src={user_icon} id='picon'></img></Link>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                     <>
                        <Link to="/" onClick={() => onTabClick("Login")}>Login</Link>
                        <Link to="" onClick={() => onTabClick("Sign Up")}>Sign Up</Link>

                     
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar;
