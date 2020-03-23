
import React, { useState, useEffect } from 'react';
import './Login.css';
import logo from '../../fakeData/logo2.png';
import Auth from './auth';

const Login = () => {
    
    const auth = Auth();
    const [user, setUser] = useState(auth.user);
    const handleSignIn = () => {
        auth.signInWithGoogle()
            .then(res => {
                window.location.pathname = '/placeorder';
            })
            .catch(err => console.log(err));
        setUser(auth.user);
    }
    console.log(user);

    return (
        <div className="container" id="container">
            <h1>Login</h1>
            {
                auth.user ? window.location.pathname = '/placeorder' : <button className="continue-gmail" onClick={handleSignIn}>Continue With Gmail</button>
            }
        </div>
    )
}

export default Login;

/* 

    <div className="container d-flex justify-content-center" id="container">
        <form style={{marginBottom: "30px"}} onSubmit={handleSubmit}>  
                <div className="form-group">
                    <img src={logo} className="logo" alt="" />
                </div>
                <div class="form-group">
                    <input type="name" name="name" className="form-control" value = {name}
                     onChange={handleChange} placeholder="Name" />
                </div>
                <div class="form-group">
                    <input type="email" name="email" className="form-control" value={email}
                        onChange={handleChange} placeholder="Email" />
                </div>
                <div class="form-group">
                    <input type="password" name="password" className="form-control" value={password}
                        onChange={handleChange} placeholder="Password" />
                </div>
                <div class="form-group">
                    <input type="password" name="passwordC" className="form-control" value={passwordC}
                        onChange={handleChange} placeholder="Confrim Password" />
                </div>
                <button onClick = {() => window.location.pathname = '/placeorder'}
                    type="submit" className="btn-crimson">Sign In</button>
                 <div>
                    <a href="/signUp">Already Have An Account ?</a>
                 </div>
                
            </form>
        </div>
        */

