import React from 'react';
import './App.scss';
import Students from "./pages/students/students"; 
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import StudentDetails from './pages/studentdetails/studentdetails';

function App() {

  return (
    <Router>
    <Switch>
          <Route path="/studentdetails">
            <StudentDetails/>
          </Route>
          <Route path="/">
            <div className="app row">
                <div className="placeholderNavbar col-2 d-flex align-items-center justify-content-center">
                <p> _nology </p>
                </div>
                <div className="main col-10 d-flex justify-content-space-between">
                <div className="main__white-space"></div>
                <Students/>
                <div className="main__white-space"></div>
                </div>
            </div>
          </Route>
    </Switch>
  </Router>
  );
}

export default App;
