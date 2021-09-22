import React,{useEffect, useState}  from 'react'
import StudentsTopNav from "./studentstopnav/studentstopnav"
import StudentsList from "./studentlist/studentlist";
import "./students.scss"; 
import Data from "../../data/data"; 

const Students = () => {
    const [studentsData, setStudentsData] = useState([]); 
    const fetchStudentData = () => {
      // placeholder just for now
        setStudentsData(Data);
    }
    useEffect(fetchStudentData, []); 
    
    return (
        <div className="students">
            <StudentsTopNav className="students__topNav"/>
            <StudentsList className="students__list" studentsData={studentsData} />
        </div>
    )
}

export default Students
