import React, {useState, useEffect} from 'react';
import './App.scss';
import Students from "./pages/students/students"; 
import Data from "./data/data"; 


function App() {
  const [studentsData, setStudentsData] = useState(""); 
  const fetchStudentData = () => {
    // placeholder just for now
    setStudentsData(Data);
  }
  Data && console.log(Data)

  useEffect(fetchStudentData, []); 

  return (
    <div className="app row">
        <div className="placeholderNavbar col-2" style = {{backgroundColor: "black", color: "white"}}>
          <p> Placeholder navbar. Replace with shared navbar component once Saagars done it. </p>
        </div>
        <div className="students col-10">
          <Students studentsData = {studentsData} />
        </div>
    </div>
  );
}

export default App;
