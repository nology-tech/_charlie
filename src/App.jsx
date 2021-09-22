import React from 'react';
import './App.scss';
import Students from "./pages/students/students"; 



function App() {

  return (
    <div className="app row">
        <div className="placeholderNavbar col-2">
          <p> Placeholder navbar. Replace with shared navbar component once Saagars done it. </p>
        </div>
        <div className="students col-10">
          <div className="white-space"></div>
          <Students/>
          <div className="white-space1"></div>
        </div>
    </div>
  );
}

export default App;
