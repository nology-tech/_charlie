import React from 'react'
import StudentsTopNav from "./studentstopnav/studentstopnav"
import StudentsList from "./studentlist/studentlist"

const students = () => {
    return (
        <div>
            <StudentsTopNav/>
            <StudentsList/>
        </div>
    )
}

export default students
