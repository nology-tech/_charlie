import React from 'react';
import './App.scss';
import Students from "./pages/students/students"; 



function App() {

  return (
    <div className="app row">
        <div className="placeholderNavbar col-2" style = {{backgroundColor: "black", color: "white"}}>
          <p> Placeholder navbar. Replace with shared navbar component once Saagars done it. </p>
        </div>
        <div className="students col-10">
          <Students/>
        </div>
    </div>
  );
}

export default App;
