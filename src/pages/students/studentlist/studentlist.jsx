import React from 'react';
import Student from './student/student';
import "./studentlist.scss";


const StudentList = (props) => {
    const { studentsData } = props; 
    const students = studentsData && studentsData.map(student => (
        <Student student={student}/>)
    )
    return (
        <>
        <div className = "studentList row">
            <p className="col">Student Name</p>
            <p className="col">Enrolled On</p>
            <p className="col">Github Account</p>
            <p className="col">Portfolio</p>
            <p className="col">Resume</p>
        </div>
        {students}
        </>
    )
}

export default StudentList
