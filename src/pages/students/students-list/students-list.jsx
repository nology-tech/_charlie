import React,{useEffect, useState }  from 'react'
import StudentsTopNav from "./students-top-nav/students-top-nav"
import StudentTable from "./student-table/student-table";
import StudentSearchBar from './student-searchbar/student-searchbar';
import "./students-list.scss"; 
import Data from "../../../data/students.js"; 

const StudentsList = () => {
    const [studentsData, setStudentsData] = useState([]); 
    const [pageData, setPageData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);  
    const [numberOfRows, setNumberOfRows] = useState(8); 
    const [totalNumberStudents, setTotalNumberStudents] = useState(studentsData.length); 
    const [enrolledFilter, setEnrolledFilter] = useState("All");
    const [toggleView, setToggleView] = useState(false); 
    const [enrollmentData, setEnrollmentData] = useState(Data); 
    const [sortOption, setSortOption] = useState("1");
    const [filterOption, setFilterOption] = useState("1");

    const fetchStudentData = () => {
        setStudentsData(Data.sort((a,b) => a.studentName.localeCompare(b.studentName)));
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
        setSortOption("1");
        setFilterOption("1");
        setPageNumber(1);
        setEnrolledFilter("All");
        fetchStudentData();
        setEnrollmentData(Data);  
        }
    const filterDataByFullTime = () => {
        setSortOption("1");
        setFilterOption("1");
        setPageNumber(1);
        setEnrolledFilter("Full-Time");
        setStudentsData(Data.filter(student => student.enrolledType.includes("Full-Time")));
        setEnrollmentData(Data.filter(student => student.enrolledType.includes("Full-Time")));
    }
    const filterDataBySelfPaced = () => {
        setSortOption("1");
        setFilterOption("1");
        setPageNumber(1);
        setEnrolledFilter("Self-Paced");
        setStudentsData(Data.filter(student => student.enrolledType.includes("Self-Paced")));
        setEnrollmentData(Data.filter(student => student.enrolledType.includes("Self-Paced")));
    }
    const filterDataByCorporate = () => {
        setSortOption("1");
        setFilterOption("1");
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

// Sorting logic (A-Z, Z-A) - THIS NEEDS FIXING // needs fixing man-0--
    const sortStudents = (e) => {
        if(e.target.value === "1"){
            setSortOption("1");
            const studentCopy = [...studentsData];
            studentCopy.sort((a, b)=> a.studentName.localeCompare(b.studentName))
            setStudentsData(studentCopy);
        }else if (e.target.value === "2"){
            setSortOption("2");
            const studentCopy = [...studentsData];
            studentCopy.sort((a, b)=> a.studentName.localeCompare(b.studentName)).reverse()
            setStudentsData(studentCopy);
        }
    }

    const filterStudentsByCourse = (e) => {
        if (e.target.value === "1") {
            setFilterOption("1");
            setStudentsData(enrollmentData)
        }else if (e.target.value === "2") {
            setFilterOption("2");
            setStudentsData((enrollmentData.filter(student => student.enrolledOn.includes("Mariana"))));
        }else if (e.target.value === "3") {
            setFilterOption("3");
            setStudentsData((enrollmentData.filter(student => student.enrolledOn.includes("Ibiza"))));
        }else if (e.target.value === "4") {
            setFilterOption("4");
            setStudentsData((enrollmentData.filter(student => student.enrolledOn.includes("Jersey"))));
        } else {
            setFilterOption("5");
            setStudentsData((enrollmentData.filter(student => student.enrolledOn.includes("Hawaii"))));
        }
    }

    // useEffect Calls

    useEffect(fetchStudentData, []); 
    useEffect(displayStudents, [studentsData, pageNumber, numberOfRows]);
    
    // The following logic is for the row selection portion of the PageNavigator component. It is placed here as PageNavigator is a presentational component. 

    const firstIndex = numberOfRows*pageNumber-numberOfRows;
    let secondIndex;
    pageData.length < numberOfRows ? secondIndex = pageData.length + firstIndex : secondIndex = numberOfRows*pageNumber;
    
    return (
        <div className="main col-10 m-0 d-flex justify-content-between">
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
                    sortStudents={sortStudents}
                    changeToGridView={changeToGridView}
                    changeToBurgerView={changeToBurgerView}
                    sortOption={sortOption}
                    filterStudentsByCourse={filterStudentsByCourse}
                    filterOption={filterOption}/>
                    <StudentTable 
                    studentsData={studentsData} 
                    pageData={pageData}
                    toggleView={toggleView}
                    totalNumberStudents={totalNumberStudents}
                    switchToPreviousPage={switchToPreviousPage}
                    switchToNextPage={switchToNextPage}
                    changeNumberOfRows = {changeNumberOfRows}
                    numberOfRows={numberOfRows}
                    firstIndex={firstIndex}
                    secondIndex={secondIndex}/>
                </div>
            <div className="students__white-space"></div>
        </div>
    )
}
export default StudentsList; 
