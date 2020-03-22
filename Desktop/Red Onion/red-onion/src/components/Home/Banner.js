import React from 'react';
import './Home.css'

const Banner = () => {
    return (
        <div className="top-banner">
            <div className="d-flex align-items-middle justify-content-center">
                <div className="" style={{marginTop: "200px"}}>
                    <input type="text" className="form-control" placeholder="Search"/>
                    <input type="button" className="btn btn-outline-danger mt-1" value="Search"/>
                </div>
            </div>
        </div>
    );
};

export default Banner;