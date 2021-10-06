import React from 'react'
import {  Link } from 'react-router-dom';
import "./studentstopnav.scss";


const StudentListTopNav = () => {
    return (
        <nav className="top-nav d-flex flex-column">
            <div className="top-nav__header d-flex align-items-center justify-content-between">
                <h1 className="top-nav__header-title"> Students </h1>
                <Link to="/student/create" className="btn-primary top-nav__header-button border-0 me-2">+ Create</Link>
            </div>
            <div className="row top-nav__student-types d-flex justify-content-start align-items-center">
                <p className="col top-nav__student-types__item">All</p>
                <p className="col top-nav__student-types__item">Full-Time</p>
                <p className="col top-nav__student-types__item">Self-Paced</p>
                <p className="col top-nav__student-types__item">Corporate</p>
            </div> 
            
        </nav>
    )
}

export default StudentListTopNav; 
