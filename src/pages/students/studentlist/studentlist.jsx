import React from 'react';
import Student from './student/student';
import "./studentlist.scss";



const StudentList = (props) => {
    const {pageData, toggleView} = props; 
    const students = pageData && pageData.map(student => (
            <Student student={student} toggleView = {toggleView}/>
        )
    )
    return (
        <>
        <div className = "studentList row d-flex align-items-center text-center">
            <p className="col studentList__property-label">Student Name</p>
            <p className="col studentList__property-label">Enrolled On</p>
            <p className="col studentList__property-label">Github Account</p>
            <p className="col studentList__property-label">Portfolio</p>
            <p className="col studentList__property-label">Resume</p>
            <p className="col-1 studentList__property-label m-0 p-0"></p>
        </div>
        {students}
        </>
    )
}

export default StudentList
