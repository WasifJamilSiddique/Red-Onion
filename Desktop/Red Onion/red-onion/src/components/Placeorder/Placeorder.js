
import React, { useState } from 'react';
import logo from '../../fakeData/logo2.png';
import './Placeorder.css'

const Placeorder = (props) => {
    const [count, setCount] = useState(0);
    const [btnState, setBtnState] = useState({
        isDisable: true,
    })
    const handleChange = (event) => {
        if(event.target.value.length){
            setCount(count + 1);
        }
        if(count===3){
            const state = { isDisable: false }
            setBtnState(state);
        }
    } 
    const btnHandler = (event) => {
         window.location.pathname = '/ordercomplete';
    }

    return (
        <div className="row">
            <div className="col-md-6 margin">
                <div className="d-flex justify-content-center">
                    <form style={{ marginBottom: "30px" }} id="container">
                        <div className="form-group">
                            <h3>Edit Delivery Details</h3>
                            <hr/>
                        </div>
                        <div class="form-group">
                            <input onBlur={handleChange} type="text" className="form-control" id="exampleInputEmail1" placeholder="Deliver to door" aria-describedby="emailHelp" required></input>
                        </div>
                        <div class="form-group">
                            <input onBlur={handleChange} type="email" className="form-control" id="exampleInputEmail1" placeholder="107 rd no 8" aria-describedby="emailHelp"
                                required></input>
                        </div>
                        <div class="form-group">
                            <input onBlur={handleChange} placeholder="Flat, company or floor" type="text" className="form-control" id="exampleInputPassword1" required></input>
                        </div>
                        <div class="form-group">
                            <input onBlur={handleChange} placeholder="Business Name" type="text" className="form-control" id="exampleInputPassword1" required></input>
                        </div>
                        <div class="form-group">
                            <input onBlur={handleChange}  placeholder="add delivery instructor" type="text" className="form-control" id="exampleInputPassword1" required></input>
                        </div>
                        <div class="form-group">
                            <button className="btn btn-outline-danger btn-lg">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-md-6 margin">
                <h4>From Gulshan Plaza</h4>
                <h5>Arriving in 20-30 min</h5>
                <h5>107 rd no 8</h5>
                <button disabled={btnState.isDisable} onClick={btnHandler}
                 className="btn btn-dark btn-lg">Place Order</button>
            </div>
        </div>
    );
};

export default Placeorder;