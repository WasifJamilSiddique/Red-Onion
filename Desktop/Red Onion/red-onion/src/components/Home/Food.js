
import React, {useState} from 'react';
import fakeData from '../../fakeData/fakeData';
import ShowFood from './ShowFood';

const Food = () => {
    const [foodState, setFoodState] = useState({
        breakfast: true,
        lunch: false,
        dinner: false,
    })
    const [btnState, setBtnState] = useState({isDisabled: true})
    const handleBreakfast = () => {
        const newState = {breakfast: true, lunch: false, dinner: false,}
        setFoodState(newState);
    }
    const handleLunch = () => {
        const newState = { breakfast: false, lunch: true, dinner: false, }
        setFoodState(newState);
    }
    const handleDinner = () => {
        const newState = { breakfast: false, lunch: false, dinner: true, }
        setFoodState(newState);
    }
    return (
        <div className="food">
            <div className="text-center my-4">
                <button className="btn mx-1" onClick={handleBreakfast}>Breakfast</button>
                <button className="btn mx-1" onClick={handleLunch}>Lunch</button>
                <button className="btn mx-1" onClick={handleDinner}>Dinner</button>
            </div>
            <div className="showImages">
                <div className="row">
                {
                    foodState.breakfast && fakeData.map(obj => {
                        if (obj.category === 'breakfast') {
                            return <div className="col-md-4">
                                <ShowFood foodData={obj}></ShowFood>
                            </div>
                        }
                    })
                }
                {
                    foodState.lunch && fakeData.map(obj => {
                        if (obj.category === 'lunch') {
                            return <div className="col-md-4">
                                <ShowFood foodData={obj}></ShowFood>
                            </div>
                        }
                    })
                }
                {
                    foodState.dinner && fakeData.map(obj => {
                        if (obj.category === 'dinner') {
                            return <div className="col-md-4">
                                <ShowFood foodData={obj}></ShowFood>
                            </div>
                        }
                    })
                }
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button disabled={btnState.isDisabled} style={{
                    backgroundColor: "black",
                    color: "white",
                    width: "300px",
                    marginBottom: "200px"

                }} className="btn btn-lg">Checkout Your Food</button>
            </div>
        </div>
    );
};

export default Food;