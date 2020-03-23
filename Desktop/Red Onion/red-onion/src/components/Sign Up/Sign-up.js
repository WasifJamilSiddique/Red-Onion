
import React from 'react';
import logo from '../../fakeData/logo2.png';
import './Sign-up.css';

const SignUp = () => {
    return (
        <div className="container d-flex justify-content-center" id="container">
            <form style={{ marginTop: "100px" }}>
                <div className="form-group">
                    <img src={logo} className="logo" alt="" />
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp"></input>
                </div>
                <div class="form-group">
                    <input placeholder="Password" type="password" class="form-control" id="exampleInputPassword1"></input>
                </div>
                <button type="submit" class="btn-crimson">Sign In</button>
            </form>
        </div>

    );
};

export default SignUp;