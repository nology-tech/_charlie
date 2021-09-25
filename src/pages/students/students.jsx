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
    const [pageNumber, setPageNumber] = useState(1);  
    const [numberOfRows, setNumberOfRows] = useState(9); 
    const [totalNumberStudents, setTotalNumberStudents] = useState(studentsData.length)

    const fetchStudentData = () => {
        setStudentsData(Data);
    }

    const changeNumberOfRows = (e) => {
        setNumberOfRows(e.target.value);
    }
    const displayStudents = () => {
        const firstIndex= numberOfRows*pageNumber-numberOfRows;
        const secondIndex= numberOfRows*pageNumber;
        setPageData(studentsData.slice((firstIndex), (secondIndex)));
        setTotalNumberStudents(studentsData.length)
    }


    const switchToNextPage = () => {
        const newPageNumber = pageNumber+1;
        if(newPageNumber-1 !== totalNumberStudents/numberOfRows){
            setPageNumber(newPageNumber);
            displayStudents(newPageNumber);
        }   
    }

    const switchToPreviousPage = () => {
        const newPageNumber= pageNumber-1;
        if(newPageNumber!==0){
            setPageNumber(newPageNumber)
            displayStudents(newPageNumber);
        }
    }

    const generateSearchResults = (e) => {
        setStudentsData(Data.filter(student=> {
            return (
            student.studentName.toLowerCase().includes(e.target.value.toLowerCase()) ||
            student.enrolledOn.toLowerCase().includes(e.target.value.toLowerCase()) ||
            student.githubAccount.toLowerCase().includes(e.target.value.toLowerCase()) ||
            student.portfolio.toLowerCase().includes(e.target.value.toLowerCase()));
        })
        )
    }
        

    useEffect(fetchStudentData, []); 
    useEffect(()=> {displayStudents(pageNumber)}, [studentsData, pageNumber, changeNumberOfRows]); 
    
    return (
        <div className="students">
            <StudentsTopNav className="students__topNav"/>
            <StudentSearchBar generateSearchResults={generateSearchResults}/>
            <StudentList className="students__list d-flex justify-content-start" studentsData={studentsData} pageData={pageData} />
            <PageNavigator totalNumberStudents={totalNumberStudents} 
            switchToPreviousPage={switchToPreviousPage} 
            switchToNextPage={switchToNextPage} changeNumberOfRows={changeNumberOfRows} numberOfRows={numberOfRows}
            pageNumber={pageNumber}/>
        </div>
    )
}

export default Students
