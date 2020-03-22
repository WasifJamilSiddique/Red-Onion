import React from 'react';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import './App.css';
import ShowFoodDetail from './components/ShowFoodDetail/ShowFoodDetail';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
       <Router>
          <Switch>
              <Route path="/Home">
                  <Home></Home>
              </Route>

            <Route exact path="/">
                  <Home></Home>
            </Route>

            <Route path="/Food/:FoodKey">
                <ShowFoodDetail></ShowFoodDetail>
            </Route>

          <Route path="/Login">
             <Login></Login>
          </Route>
              
          </Switch>
       </Router>
    </div>
  );
}

export default App;
