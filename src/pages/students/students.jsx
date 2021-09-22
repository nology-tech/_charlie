import React,{useEffect, useState}  from 'react'
import StudentsTopNav from "./studentstopnav/studentstopnav"
import StudentsList from "./studentlist/studentlist";
import StudentSearchBar from './studentsearchbar/studentsearchbar';
import PageNavigator from './pagenavigator/pagenavigator';
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
            <StudentSearchBar/>
            <StudentsList className="students__list d-flex justify-content-start" studentsData={studentsData} />
            <PageNavigator/>
        </div>
    )
}

export default Students
