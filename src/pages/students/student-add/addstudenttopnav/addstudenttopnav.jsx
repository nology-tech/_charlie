import React from 'react';
import "./addstudenttopnav.scss";
import { Link } from "react-router-dom";

const AddStudentTopNav = () => {
    return (
        <nav className="top-nav d-flex flex-column justify-content-between top-nav-padding">
        <div className="top-nav__header d-flex align-items-center justify-content-between">
            <h1 className="top-nav__header-title">Add Student</h1>
            <Link to="/students" ><button className="col-3 btn btn-secondary topnav__button mx-2">Go Back</button></Link>
        </div>
    </nav>
        // <div className="row topnav d-flex align-items-center">
        //     <h1 className="col-3 offset-1 topnav__title">Add Student</h1>
        //     <div className="top-nav__buttons col-5 offset-3">
        //     <Link to="/students" ><button className="col-3 btn btn-secondary topnav__button mx-2"> Go Back</button></Link>
        //         <button className="col-3 btn btn-primary topnav__button">Save</button>
        //     </div>
        // </div>
    )
}

export default AddStudentTopNav;
