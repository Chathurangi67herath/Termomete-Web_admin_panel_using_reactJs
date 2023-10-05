import React, { useState } from "react";
import './loginform.css';
import user_icon from '../icons/person.png';
import email_icon from '../icons/email.png';
import password_icon from '../icons/password.png';
import Navbar from "./navbar";

const LoginForm = () => {
    const [popupStyle, showPopup] = useState("hide");
    const [action, setAction] = useState("Login");

    const handleTabClick = (tabName) => {
        setAction(tabName);
    }

    return (
        <>
            <Navbar onTabClick={handleTabClick} />
            <div className="page">
                <form>
                    <div className="cover">
                        <h1>{action}</h1>
                        {action === "Sign Up" ? <div className="input"><img src={email_icon}></img>
                            <input type="email" placeholder="Email Address"></input></div> : <></>}
                        <div className="input"><img src={user_icon}></img>
                            <input type="text" placeholder="UserName"></input></div>
                        <div className="input"><img src={password_icon}></img>
                            <input type="password" placeholder="Password"></input></div>
                        {action === "Login" ? <div className="login-btn" onClick={() => { /* Handle Login Action */ }}>{action}</div> :
                            <div className="login-btn" onClick={() => { /* Handle Sign Up Action */ }}>{action}</div>}
                        <p className="text">or <span>{action}</span> using</p>
                        <div className="alt-login">
                            <div className="facebook"></div>
                            <div className="google"></div>
                        </div>
                        {action === "Login" ? <p className="">Haven't you Account? <span className="text2" onClick={() => { handleTabClick("Sign Up") }}>Sign Up</span></p> :
                            <p className="">Already Have An Account? <span className="text2" onClick={() => { handleTabClick("Login") }}>Login</span></p>}
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
