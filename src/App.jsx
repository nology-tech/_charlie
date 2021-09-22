import React from 'react';
import './App.scss';
import Students from "./pages/students/students"; 



function App() {

  return (
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
  );
}

export default App;
