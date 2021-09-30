import React from 'react';
import "./student-table.scss";
import StudentTableRow from './project-table-row/student-table-row';

const ProjectTable = (props) => {

    const {pageData, toggleView} = props; 
    const students = pageData && pageData.map(student => <StudentTableRow student={student} toggleView = {toggleView}/>)
    return ( 
        <>
        <div className={toggleView === false ? "studentList d-flex align-items-center text-center": "hide-student-list-labels"}>
            <p className="col studentList__property-label">Student Name</p>
            <p className="col studentList__property-label">Enrolled On</p>
            <p className="col studentList__property-label">Github Account</p>
            <p className="col studentList__property-label">Portfolio</p>
            <p className="col studentList__property-label">Resume</p>
            <p className="col-1 studentList__property-label"></p>
        </div>
        <div className={toggleView === false ? "hamburger-styling" : "student-grid"}>
            {students}
        </div>
        </>
    )
}

export default ProjectTable
