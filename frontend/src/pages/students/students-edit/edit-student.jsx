import React from 'react'
import EditStudentForm from "./student-edit-form/student-edit-form"
import "./edit-student.scss";
import PageHeader from 'components/page-header/page-header';


const EditStudent = () => {
    return (
        <div className = "main m-0 d-flex justify-content-between">
            <div className="main__white-space"></div>
                <div className="main__content d-flex flex-column align-items-centerp-0">
                    <PageHeader
                    title = {"Edit Student"}
                    buttonPath={"javascript:history.back()"}
                    buttonText={"Go Back"}
                    buttonStyle={"btn-back top-nav__header-button me-2"}/>
                    <EditStudentForm/>
                </div>
            <div className="projects__white-space"></div>
        </div>
    )
}

export default EditStudent;
