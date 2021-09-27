import React from 'react';
import "./addstudenttopnav.scss";

const AddStudentTopNav = () => {
    return (
            <div className="row top-nav d-flex align-items-center">
                <h1 className="col-3 offset-1">Add Student</h1>
                <div className="top-nav__buttons col-5 offset-3">
                    <button className="col-3 btn btn-secondary"> Go Back</button>
                    <button className="col-3 btn btn-primary">Save</button>
                </div>
            </div>
    )
}

export default AddStudentTopNav;
