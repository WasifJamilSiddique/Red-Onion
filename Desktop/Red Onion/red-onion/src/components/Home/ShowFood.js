
import React from 'react';
import fakeData from '../../fakeData/fakeData';
import { Link } from 'react-router-dom';

const ShowFood = (props) => {
    const {key, title, body, price, image} = props.foodData;
    return (
        <div className="showFood">
            <Link to={`/Food/${key}`} className="none">
                <div className="card text-center" style={{ width: "22rem", border: "none" }}>
                    <img src={image} className="card-img-top" alt=""></img>
                    <h4 className="card-title">{title}</h4>
                    <div className="card-body">
                        <p className="lead">{body}</p>
                        <h4>${price}</h4>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ShowFood;