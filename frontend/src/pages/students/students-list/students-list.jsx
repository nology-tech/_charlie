import React,{useEffect, useState }  from 'react'
import StudentTable from "./student-table/student-table";
import StudentSearchBar from './student-searchbar/student-searchbar';
import "./students-list.scss"; 
import PageHeader from "../../../components/page-header/page-header";

const StudentsList = () => {
    const [rawData, setRawData] = useState([]); 
    const [studentsData, setStudentsData] = useState([]); 
    const [pageData, setPageData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);  
    const [numberOfRows, setNumberOfRows] = useState(8); 
    const [totalNumberStudents, setTotalNumberStudents] = useState(studentsData.length); 
    const [enrolledFilter, setEnrolledFilter] = useState("All");
    const [toggleView, setToggleView] = useState(false); 
    const [enrollmentData, setEnrollmentData] = useState([]); 
    const [sortOption, setSortOption] = useState("1");
    const [filterOption, setFilterOption] = useState("All");  

    // This function is used in conjunction with fetchStudentData to set multiple states at once in the same .then() call. 
    const setStartingStates = (jsonData) => {
        setStudentsData(jsonData.sort((a,b) => a.studentName.localeCompare(b.studentName)));
        setRawData(jsonData.sort((a,b) => a.studentName.localeCompare(b.studentName)));
        setEnrollmentData(jsonData.sort((a,b) => a.studentName.localeCompare(b.studentName)));
    }

    const fetchStudentData = () => {
        fetch("http://localhost:8080/students/")
        .then(response => response.json())
        .then(jsonData => setStartingStates(jsonData))
        .catch(err=> console.log("Failed to fetch students data."));
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

    const filterDataByTabs = (enrolledType) => {
        if (enrolledType === "All") {
            setSortOption("1");
            setFilterOption("All");
            setPageNumber(1);
            setEnrolledFilter("All");
            fetchStudentData();
            setEnrollmentData(rawData);
        } else {
            setSortOption("1");
            setFilterOption("All");
            setPageNumber(1);
            setEnrolledFilter(enrolledType);
            setStudentsData(rawData.filter(student => student.enrolledType.includes(enrolledType)));
            setEnrollmentData(rawData.filter(student => student.enrolledType.includes(enrolledType)));
        }  
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
                filterDataByTabs("All")
                break;
            case "Self-Paced":
                filterDataByTabs("Self-Paced")
                break;
            case "Full-Time":
                filterDataByTabs("Full-Time")
                break;
            case "Corporate":
                filterDataByTabs("Corporate")
                break;
            default:
                filterDataByTabs("All") 
        }
    }
};

    const sortStudents = (e) => {
        const studentCopy = [...studentsData];
        switch (e.target.value) {
            case "1":
                setSortOption("1");
                studentCopy.sort((a, b)=> a.studentName.localeCompare(b.studentName));
                setStudentsData(studentCopy); 
                break;
            case "2":
                setSortOption("2");
                studentCopy.sort((a, b)=> a.studentName.localeCompare(b.studentName)).reverse();
                setStudentsData(studentCopy);
                break; 
            default: 
                break; 
        }
    }

    const filterStudentsByCourse = (e) => {
        switch (e.target.value) {
            case "All":
                setFilterOption("All");
                setSortOption("1");
                setStudentsData(enrollmentData);
                break;
            case "Mariana":
                setFilterOption("Mariana");
                setSortOption("1");
                setStudentsData((enrollmentData.filter(student => student.enrolledOn.match(/Mariana/i)))); 
                break;
            case "Ibiza":
                setFilterOption("Ibiza");
                setSortOption("1");
                setStudentsData((enrollmentData.filter(student => student.enrolledOn.match(/Ibiza/i)))); 
                break;
            case "Jersey":
                setFilterOption("Jersey");
                setSortOption("1");
                setStudentsData((enrollmentData.filter(student => student.enrolledOn.match(/Jersey/i))));
                break;
            case "Hawaii":
                setFilterOption("Hawaii");
                setSortOption("1");
                setStudentsData((enrollmentData.filter(student => student.enrolledOn.match(/Hawaii/i))));
                break;
            default: 
                break;  
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
        <div className="main m-0 d-flex justify-content-between">
            <div className="students__white-space"></div>
                <div className="students d-flex flex-column align-items-center p-0 ">
                    <PageHeader title="Students"
                    tabs={['All', 'Full-Time', 'Self-Paced', 'Corporate']} handleClick={filterDataByTabs} 
                    buttonPath={"/student/create"} 
                    filterState = {enrolledFilter} 
                    buttonText = {"+ Create"} 
                    buttonStyle = "btn-primary top-nav__header-button border-0 me-2"/>
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
