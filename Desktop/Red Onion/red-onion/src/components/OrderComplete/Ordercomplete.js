
import React, { useState, useEffect } from 'react';
import './ordercomplete.css'
import image from '../../fakeData/ordercomplete.png';
import logo from '../../fakeData/Image/Group 1151.png';

const Ordercomplete = () => {
    return (
        <div id="container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 margin">
                        <img src={image}></img>
                    </div>
                    <div className="col-md-6 margin">
                        <div className="box">
                            <div className="img ml-3 mt-2">
                                <img src={logo} alt="" style={{ height: "80px", width: "80px" }} />
                            </div>
                            <div className="white-box">
                                <ul>
                                    <li>Your Location</li>
                                    <small>107 rd no 8</small>
                                    <br/> <br/> 
                                    <li>Shop Address</li>
                                    <small>Gulshan Plaza Restaura GPR</small>
                                </ul>
                            </div>
                            <div className="stopwatch ml-3 mt-1">
                                <h4>09 : 30</h4>
                                <h5>Estimated delivery Time</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ordercomplete;