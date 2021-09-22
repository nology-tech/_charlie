import React from 'react'
import "./studentstopnav.scss"

const StudentListTopNav = () => {
    return (
        <nav className="top-nav">
            <div className="row top-nav__header">
                <h1 className="col-2"> Students </h1>
                <button className="col-2 offset-8 btn-primary">+ Create</button>
            </div>
            <div className="row top-nav__student-types">
                <p className="col">All</p>
                <p className="col">Full-Time</p>
                <p className="col">Self-Paced</p>
                <p className="col">Corporate</p>
            </div> 
        </nav>
    )
}

export default StudentListTopNav; 
