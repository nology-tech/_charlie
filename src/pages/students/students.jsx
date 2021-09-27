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
    const [totalNumberStudents, setTotalNumberStudents] = useState(studentsData.length); 
    const [enrolledFilter, setEnrolledFilter] = useState("All");

    const fetchStudentData = () => {
        setStudentsData(Data);
    }

    const changeNumberOfRows = (e) => {
        setNumberOfRows(e.target.value);
    }
    const displayStudents = () => {
        const firstSliceIndex = numberOfRows*pageNumber-numberOfRows;
        const secondSliceIndex = numberOfRows*pageNumber;
        setPageData(studentsData.slice((firstSliceIndex), (secondSliceIndex)));
        setTotalNumberStudents(studentsData.length); 
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

    const filterDataByAll = (e) => {
        setEnrolledFilter("All");
        setStudentsData(Data)
        }

    const filterDataByFullTime = (e) => {
        setEnrolledFilter("Full-Time")
        setStudentsData(Data.filter(student => student.enrolledType.includes("Full-Time")))
    }

    const filterDataBySelfPaced = (e) => {
        setEnrolledFilter("Self-Paced")
        setStudentsData(Data.filter(student => student.enrolledType.includes("Self-Paced")))
    }
    const filterDataByCorporate = (e) => {
        setEnrolledFilter("Corporate");
        setStudentsData(Data.filter(student =>student.enrolledType.includes("Corporate")))
    }

    const generateSearchResults = (e) => { 
        if (e.target.value) {
            setPageNumber(1); 
        const filteredData = studentsData.filter(student=> {
            return (
            student.studentName.toLowerCase().includes(e.target.value.toLowerCase()) ||
            student.enrolledOn.toLowerCase().includes(e.target.value.toLowerCase()) ||
            student.githubAccount.toLowerCase().includes(e.target.value.toLowerCase()) ||
            student.portfolio.toLowerCase().includes(e.target.value.toLowerCase()));
        }) 
        setStudentsData(filteredData); 
    } else {
        switch(enrolledFilter) {
            case "All":
                filterDataByAll();
                break;
            case "Self-Paced":
                filterDataBySelfPaced();
                break;
            case "Full-Time":
                filterDataByFullTime();
                break;
            case "Corporate":
                filterDataByCorporate();
                break;
            default:
                filterDataByAll(); 
        }
    }
};

    useEffect(fetchStudentData, []); 
    useEffect(displayStudents, [studentsData, pageNumber, numberOfRows]); 

    // The following logic is for the row selection portion of the PageNavigator component. Placed here as PageNavigator is a presentational component. 
    const firstIndex = numberOfRows*pageNumber-numberOfRows;
    let secondIndex;
    pageData.length < numberOfRows ? secondIndex = pageData.length + firstIndex : secondIndex = numberOfRows*pageNumber;
    
    return (
        <div className="students d-flex flex-column align-items-center p-0">
            <StudentsTopNav className="students__topNav" 
            filterDataByAll={filterDataByAll}
            filterDataByFullTime={filterDataByFullTime}
            filterDataBySelfPaced={filterDataBySelfPaced}
            filterDataByCorporate={filterDataByCorporate}
            enrolledFilter={enrolledFilter}/>
            <StudentSearchBar generateSearchResults={generateSearchResults}/>
            <StudentList className="students__list d-flex justify-content-start" studentsData={studentsData} pageData={pageData} />
            <PageNavigator totalNumberStudents={totalNumberStudents} 
            switchToPreviousPage={switchToPreviousPage} 
            switchToNextPage={switchToNextPage} 
            changeNumberOfRows={changeNumberOfRows} 
            numberOfRows={numberOfRows} 
            firstIndex={firstIndex} 
            secondIndex={secondIndex}/>
        </div>
    )
}

export default Students