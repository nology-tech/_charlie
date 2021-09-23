import React,{useEffect, useState}  from 'react'
import StudentsTopNav from "./studentstopnav/studentstopnav"
import StudentList from "./studentlist/studentlist";
import StudentSearchBar from './studentsearchbar/studentsearchbar';
import PageNavigator from './pagenavigator/pagenavigator';
import "./students.scss"; 
import Data from "../../data/data"; 

const Students = () => {
    const [numberOfPages, setNumberOfPages] =useState([]);
    const [studentsData, setStudentsData] = useState([]); 
    const [pageData, setPageData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);  
    const [numberOfRows, setNumberOfRows] = useState(9); 
    const [totalNumberStudents, setTotalNumberStudents] = useState(studentsData.length)
    
    
    
    const firstNumber= numberOfRows*pageNumber-9;
    const secondNumber= numberOfRows*pageNumber;

    const fetchStudentData = () => {
      // placeholder just for now
        setStudentsData(Data);
    }

    const displayStudents = (pageNumber) => {
        const firstNumber= numberOfRows*pageNumber-9;
        const secondNumber= numberOfRows*pageNumber;
        setPageData(studentsData.slice((firstNumber), (secondNumber)));
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
        if(e.target.value){
            
        }
        setStudentsData(Data.filter(student=> student.studentName.includes(e.target.value)))
    }


    useEffect(fetchStudentData, []); 
    useEffect(()=> {displayStudents(pageNumber)}, [studentsData]); 
    // useEffect(switchToNextPage, []);
    
    return (
        <div className="students">
            <StudentsTopNav className="students__topNav"/>
            <StudentSearchBar generateSearchResults={generateSearchResults}/>
            <StudentList className="students__list d-flex justify-content-start" studentsData={studentsData} pageData={pageData} />
            <PageNavigator totalNumberStudents={totalNumberStudents} 
            numberOfPages={numberOfPages} 
            firstNumber={firstNumber}
            secondNumber={secondNumber}
            switchToPreviousPage={switchToPreviousPage} 
            switchToNextPage={switchToNextPage}/>
        </div>
    )
}

export default Students
