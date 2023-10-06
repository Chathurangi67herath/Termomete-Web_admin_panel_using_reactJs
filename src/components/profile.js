import React, { useState } from "react";
import './home.css';
import Navbar from "./navbar";

const Profile = () => {
    

    return (
        <>
         <Navbar />
            <div className="page">
                <form>
                    <div className="cover" id="homecover">
                       
                        
                        <div className="finput">
                            <label></label><br></br>
                            <input className='subinput' type="text" ></input>
                        </div>
                      
                       
                        <div className="finput">
                            <label></label><br></br>
                            <textarea className='subinput' type="text"></textarea>
                        </div>
                        <div className="addbtn">
                            <div className="login-btn">Add</div>
                        </div>
                       
                    </div>
                </form>
            </div>
        </>
    )
}

export default Profile;
