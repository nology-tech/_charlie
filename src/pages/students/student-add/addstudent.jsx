import React from 'react';
import AddStudentTopNav from './addstudenttopnav/addstudenttopnav';
import StudentForm from './studentform/studentform';
import "./addstudent.scss";

const AddStudent = () => {
    return (
        <div className="add-student">
            <AddStudentTopNav />
            <StudentForm />
        </div>
    )
}

export default AddStudent;