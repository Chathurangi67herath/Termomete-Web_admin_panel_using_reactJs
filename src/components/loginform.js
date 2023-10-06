import React, { useState } from "react";
import './loginform.css';
import email_icon from '../icons/email.png';
import password_icon from '../icons/password.png';
import Navbar from "./navbar";

const LoginForm = () => {
    const [popupStyle, showPopup] = useState("hide");

    return (
        <>
            <Navbar/>
            <div className="page">
                <form>
                    <div className="cover">
                        <h1>Login</h1>

                       
                        <div className="input"><img src={email_icon}></img>
                            <input type="email" placeholder="Email Address"></input></div>

                        <div className="input"><img src={password_icon}></img>
                            <input type="password" placeholder="Password"></input></div>


                       <div className="login-btn" onClick={() => { /* Handle Login Action */ }}>Login</div> 
                        
                        
                        <div className={popupStyle}>
                            <h3>Login Failed</h3>
                            <p>Username or password incorrect</p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginForm;
