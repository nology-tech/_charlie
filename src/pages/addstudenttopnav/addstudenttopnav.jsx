import React from 'react';
import "./addstudenttopnav.scss";

const AddStudentTopNav = () => {
    return (
        <nav>
            <div className="row">
                <h1 className="col-3">Add Student</h1>
                <div className="top-nav__buttons col-5 offset-4">
                    <button className="col-3 btn btn-secondary"> Go Back</button>
                    <button className="col-3 btn btn-primary">Save</button>
                </div>
            </div>
        </nav>
    )
}

export default AddStudentTopNav;
