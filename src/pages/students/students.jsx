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
    const [enrolledFilter, setEnrolledFilter] = useState("");
    const [underLineAll, setUnderLineAll] = useState(true);
    const [underLineFull, setUnderLineFull] = useState(false)
    const [underLineSelf, setUnderLineSelf] = useState(false)
    const [underLineCorp, setUnderLineCorp] = useState(false)

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

    const allData = (e) => {
        if(underLineAll == true){
            e.target.style.fontWeight="500";
            e.target.style.color="black";
            e.target.style.borderBottom="#724BCB 2px solid"
            setUnderLineFull(false)
            setUnderLineSelf(false)
            setUnderLineCorp(false)
        }
        setEnrolledFilter("All")
        setStudentsData(Data)
        }

    const fullData = (e) => {
        setUnderLineFull(true)
        if(underLineFull == true){
            e.target.style.fontWeight="500";
            e.target.style.color="black";
            e.target.style.borderBottom="#724BCB 2px solid"
            setUnderLineAll(false)
            setUnderLineSelf(false)
            setUnderLineCorp(false)
        }
        setEnrolledFilter("Full-Time")
        setStudentsData(Data.filter(student => {
            return student.enrolledType.includes("Full-Time")
        }))
    }

    const selfData = (e) => {
        e.target.style.fontWeight="500";
        e.target.style.color="black";
        e.target.style.borderBottom="#724BCB 2px solid"
        setEnrolledFilter("Self-Paced")
        setStudentsData(Data.filter(student => {
            return student.enrolledType.includes("Self-Paced")
        }))
    }
    const corpData = (e) => {
        e.target.style.fontWeight="500";
        e.target.style.color="black";
        e.target.style.borderBottom="#724BCB 2px solid"
        setEnrolledFilter("Corporate")
        setStudentsData(Data.filter(student => {
            return student.enrolledType.includes("Corporate")
        }))
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
    } else  {
        if(enrolledFilter === "All"){
            fetchStudentData();  
        }else if(enrolledFilter === "Self-Paced"){
            selfData();
        }else if(enrolledFilter === "Full-Time"){
            fullData();
        }else{
            corpData();
        }
    };
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
            allData={allData}
            fullData={fullData}
            selfData={selfData}
            corpData={corpData}/>
            <StudentSearchBar generateSearchResults={generateSearchResults}/>
            <StudentList className="students__list d-flex justify-content-start" studentsData={studentsData} pageData={pageData} />
            <PageNavigator totalNumberStudents={totalNumberStudents} 
            switchToPreviousPage={switchToPreviousPage} 
            switchToNextPage={switchToNextPage} changeNumberOfRows={changeNumberOfRows} numberOfRows={numberOfRows} firstIndex={firstIndex} secondIndex={secondIndex}/>
        </div>
    )
}

export default Students
