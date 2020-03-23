
import React, { useState, createContext } from 'react';
import './ShowFoodDetail.css'
import fakeData from '../../fakeData/fakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


const ShowFoodDetail = () => {
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    const link = window.location.pathname;
    const arr = link.split('');
    arr.shift(); arr.shift(); arr.shift(); arr.shift(); arr.shift(); arr.shift();
    const key = arr.join('');

    const foodData = fakeData.find(obj => obj.key == key);
    const {title, price, image} = foodData;
    const newPrice = parseFloat(price);

    const [quantity, setQuantity] = useState(1);
    const [foodPrice, setFoodPrice] = useState(quantity * newPrice);

    const plusHandler = () => {
        const x = quantity + 1;
        setQuantity(x);
        const y = formatNumber(x * newPrice);
        setFoodPrice(y);
    }

    const minusHandler = () => {
        if(quantity != 0){
            const x = quantity - 1;
            setQuantity(x);
            const y = formatNumber(x * newPrice);
            setFoodPrice(y);
        }
    }

    return (
        <div className="hidden">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12 marginStyle">
                        <h1 className="display-4">{title}</h1>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatum officiis. Nulla iusto voluptas tempora id, ex accusantium officia consectetur magnam architecto? Neque, doloribus possimus.</p>
                        <h3 className="text-dark">${foodPrice}</h3>
                        <h4>
                            <button className="btn btn-light" onClick={minusHandler}>-</button>
                            <input className="btn btn-light" type="button" value={quantity} />
                            <button className="btn btn-light" onClick={plusHandler}>+</button> <br />
                        </h4>
                        <Link to="/Login">
                            <button className="btn-crimson">
                                <FontAwesomeIcon icon={faShoppingCart} className="right" /> Add Cart
                            </button>
                        </Link>
                    </div>
                    <div className="col-md-6 col-12 marginStyle">
                        <img src={image} alt="" className="adjust-img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowFoodDetail;