import React from 'react'
import StudentForm from './studentform/studentform';
import "./addstudent.scss";
import PageHeader from 'components/page-header/page-header';

const AddStudent = () => {
    return (
        <div className ="main m-0 d-flex justify-content-between">
            <div className="main__white-space"></div>
                <div className="main__content d-flex flex-column align-items-centerp-0">
                    <PageHeader
                    title = {"Add Student"}
                    buttonPath={"/students"}
                    buttonText={"Go Back"}
                    buttonStyle={"btn-back top-nav__header-button me-2"}/>
                    <StudentForm />
                </div>
            <div className="projects__white-space"></div>
        </div>
    )
}

export default AddStudent;
