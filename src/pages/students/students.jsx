import React,{useEffect, useState}  from 'react'
import StudentsTopNav from "./studentstopnav/studentstopnav"
import StudentList from "./studentlist/studentlist";
import StudentSearchBar from './studentsearchbar/studentsearchbar';
import PageNavigator from './pagenavigator/pagenavigator';
import "./students.scss"; 
import Data from "../../data/data"; 

const Students = () => {
    const [studentsData, setStudentsData] = useState([]); 
    const [pageData, setPageData] = useState([]);
    const [pageNumber, setPageNumber] = useState("");  
    const [numberOfRows, setNumberOfRows] = useState("9"); 
    const fetchStudentData = () => {
      // placeholder just for now
        setStudentsData(Data);
    }

    const displayStudents = (numberOfRows) => {
        setPageData(studentsData.slice(0,9));
    }

    const switchToNextPage = () => {
        setPageNumber(prev => prev + 1)
    }

    const switchToPreviousPage = () => {
        setPageNumber(prev => prev - 1)
    }


    useEffect(fetchStudentData, []); 
    useEffect(displayStudents, [studentsData]); 
    
    return (
        <div className="students">
            <StudentsTopNav className="students__topNav"/>
            <StudentSearchBar/>
            <StudentList className="students__list d-flex justify-content-start" studentsData={studentsData} pageData={pageData} />
            <PageNavigator/>
        </div>
    )
}

export default Students
