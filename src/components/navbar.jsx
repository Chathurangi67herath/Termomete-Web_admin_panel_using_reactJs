import React, { useState } from 'react';
import './navbar.css';
import logo from '../img/logo.png';


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
                       
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                     <>
                        <div >Login</div>
                       

                     
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar;
