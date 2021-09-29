import React,{useEffect, useState}  from 'react'
import StudentsTopNav from "./studentstopnav/studentstopnav"
import StudentTable from "./student-table/student-table";
import StudentSearchBar from './studentsearchbar/studentsearchbar';
import PageNavigator from './pagenavigator/pagenavigator';
import "./students.scss"; 
import Data from "../../../data/data.js"; 

const Students = () => {
    const [studentsData, setStudentsData] = useState([]); 
    const [pageData, setPageData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);  
    const [numberOfRows, setNumberOfRows] = useState(8); 
    const [totalNumberStudents, setTotalNumberStudents] = useState(studentsData.length); 
    const [enrolledFilter, setEnrolledFilter] = useState("All");
    const [toggleView, setToggleView] = useState(false); 
    const [enrollmentData, setEnrollmentData] = useState(Data); 
    const [sortedSelector, setSortedSelector] = useState(1);

    const fetchStudentData = () => {
        setStudentsData(Data);
    }
    const changeToGridView =() => {
        setToggleView(true);
        setPageNumber(1);
    }
    const changeToBurgerView = () => {
        setToggleView(false);
        setPageNumber(1);
    }
    const changeNumberOfRows = (e) => {
        setPageNumber(1);
        setNumberOfRows(e.target.value);
    }
    const displayStudents = () => {
        const firstSliceIndex = numberOfRows*pageNumber-numberOfRows;
        const secondSliceIndex = numberOfRows*pageNumber;
        // const sortedData = studentsData.sort((a, b)=> a.studentName.localeCompare(b.studentName));
        setPageData(studentsData.slice((firstSliceIndex), (secondSliceIndex)));
        setTotalNumberStudents(studentsData.length); 
    }
    const switchToNextPage = () => {
        let newPageNumber = pageNumber+1;
        if(newPageNumber-1 !== Math.ceil(totalNumberStudents/numberOfRows)){
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
    const filterDataByAll = () => {
        setPageNumber(1);
        setEnrolledFilter("All");
        fetchStudentData();
        setEnrollmentData(Data);  
        }
    const filterDataByFullTime = () => {
        setPageNumber(1);
        setEnrolledFilter("Full-Time");
        setStudentsData(Data.filter(student => student.enrolledType.includes("Full-Time")));
        setEnrollmentData(Data.filter(student => student.enrolledType.includes("Full-Time")));
    }
    const filterDataBySelfPaced = () => {
        setPageNumber(1);
        setEnrolledFilter("Self-Paced");
        setStudentsData(Data.filter(student => student.enrolledType.includes("Self-Paced")));
        setEnrollmentData(Data.filter(student => student.enrolledType.includes("Self-Paced")));
    }
    const filterDataByCorporate = () => {
        setEnrolledFilter("Corporate");
        setPageNumber(1);
        setStudentsData(Data.filter(student =>student.enrolledType.includes("Corporate")));
        setEnrollmentData(Data.filter(student =>student.enrolledType.includes("Corporate")));
    }
    const generateSearchResults = (e) => { 
        if (e.target.value){
            setPageNumber(1); 
        const filteredData = enrollmentData.filter(student=> {
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
    const sortFunction = () => {
        if(sortedSelector == 1){
            return studentsData;
        }else if(sortedSelector == 2){
            setStudentsData(studentsData.sort((a, b)=> a.studentName.localeCompare(b.studentName)));
        }else if(sortedSelector == 3){
            setStudentsData(studentsData.sort((b, a)=> a.studentName.localeCompare(b.studentName))); 
        }else if(sortedSelector == 4){
            
        }
    }
    // Sorting logic 
    const sortNameAlphabetically = (e) => {
        setSortedSelector(e.target.value);
        if(sortedSelector == 1){
            return studentsData;
        }else if(sortedSelector == 2){
            setStudentsData(studentsData.sort((a, b)=> a.studentName.localeCompare(b.studentName)));
        }else if(sortedSelector == 3){
            setStudentsData(studentsData.sort((b, a)=> a.studentName.localeCompare(b.studentName))); 
        }else if(sortedSelector == 4){
            
        }
    }
    
    useEffect(fetchStudentData, []); 
    useEffect(displayStudents, [studentsData, pageNumber, numberOfRows, sortedSelector]); 
    useEffect(sortFunction, [sortedSelector])
    // The following logic is for the row selection portion of the PageNavigator component. Placed here as PageNavigator is a presentational component. 
    const firstIndex = numberOfRows*pageNumber-numberOfRows;
    let secondIndex;
    pageData.length < numberOfRows ? secondIndex = pageData.length + firstIndex : secondIndex = numberOfRows*pageNumber;
    
    return (
        <div className="main col-10 m-0 d-flex justify-content-space-between">
            <div className="students__white-space"></div>
                <div className="students d-flex flex-column align-items-center p-0 ">
                    <StudentsTopNav className="students__topNav" 
                    filterDataByAll={filterDataByAll}
                    filterDataByFullTime={filterDataByFullTime}
                    filterDataBySelfPaced={filterDataBySelfPaced}
                    filterDataByCorporate={filterDataByCorporate}
                    enrolledFilter={enrolledFilter}/>
                    <StudentSearchBar 
                    generateSearchResults={generateSearchResults} 
                    sortNameAlphabetically = {sortNameAlphabetically}
                    changeToGridView={changeToGridView}
                    changeToBurgerView={changeToBurgerView}/>
                    <StudentTable className="students__list d-flex justify-content-start" 
                    studentsData={studentsData} 
                    pageData={pageData}
                    toggleView={toggleView} />
                    <footer className=" p-0 m-0">
                        <PageNavigator totalNumberStudents={totalNumberStudents} 
                        switchToPreviousPage={switchToPreviousPage} 
                        switchToNextPage={switchToNextPage} 
                        changeNumberOfRows={changeNumberOfRows} 
                        numberOfRows={numberOfRows} 
                        firstIndex={firstIndex} 
                        secondIndex={secondIndex}
                        toggleView={toggleView}/>
                    </footer>
                </div>
            <div className="students__white-space"></div>
        </div>
    )
}
export default Students