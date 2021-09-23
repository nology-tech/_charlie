import React from 'react'
import "./studentstopnav.scss"

const StudentListTopNav = () => {
    return (
        <nav className="top-nav">
            <div className="top-nav__header d-flex align-items-center justify-content-between">
                <h1> Students </h1>
                <button className="btn-primary">+ Create</button>
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
