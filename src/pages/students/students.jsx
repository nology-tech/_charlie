import React from 'react'
import StudentsTopNav from "./studentstopnav/studentstopnav"
import StudentsList from "./studentlist/studentlist";
import "./students.scss"; 

const students = (props) => {
    const {studentsData} = props; 
    return (
        <div className="students">
            <StudentsTopNav/>
            <StudentsList studentsData = {studentsData} />
        </div>
    )
}

export default students
