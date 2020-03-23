
import React from 'react';
import logo from '../../fakeData/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Home.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img className="logo" src={logo} alt="" />
                </a>
                <div className="ml-auto" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="/Login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-white nav-link sign-up" href="/signUp">Sign Up</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;