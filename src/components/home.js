import React, { useState } from "react";
import './home.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Home = () => {
    const [popupStyle, showPopup] = useState("hide");
    const [rangeValues, setRangeValues] = useState([0, 100]);
    

    const handleRangeChange = (values) => {
        setRangeValues(values);
    }

    const handleIncrement = () => {
        
        if (rangeValues[1] < 100) {
            setRangeValues([rangeValues[0], rangeValues[1] + 1]);
        }
    }

    const handleDecrement = () => {
       
        if (rangeValues[1] > rangeValues[0]) {
            setRangeValues([rangeValues[0], rangeValues[1] - 1]);
        }
    }
    return (
        <>
            <div className="page">
                <form>
                    <div className="cover" id="homecover">
                        <h1>Add New Freezer</h1>
                        
                        <div className="finput">
                            <label>Freezer Name</label><br></br>
                            <input className='subinput' type="text" ></input>
                        </div>
                        <div className="finput">
                            <label>Freezer Type</label><br></br>
                            <select className='subinput' >
                                <option>Type 1</option>
                                <option>Type 2</option>
                                <option>Type 3</option>
                                <option>Type 4</option>
                            </select>
                        </div>
                        <div className="finput">
                            <label>Temperature Range</label><br></br>
                            <div className="range-input">
                                <button id='valuebtn' onClick={handleDecrement}>-</button>
                                <Slider
                                    className='subinput'
                                    min={0}
                                    max={100}
                                    range
                                    value={rangeValues}
                                    onChange={handleRangeChange}
                                />
                                <button id='valuebtn' onClick={handleIncrement}>+</button>
                            </div>
                            <div className="selected-values">
                                <span>{rangeValues[0]} </span>  -  <span> {rangeValues[1]}</span>
                            </div>
                        </div>
                        <div className="finput">
                            <label>Items included</label><br></br>
                            <textarea className='subinput' type="text"></textarea>
                        </div>
                        <div className="addbtn">
                            <div className="login-btn">Add</div>
                        </div>
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

export default Home;
