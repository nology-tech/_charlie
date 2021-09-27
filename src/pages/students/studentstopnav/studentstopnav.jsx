import React from 'react'
import "./studentstopnav.scss";
// import {Link} from "react-router-dom"

const StudentListTopNav = (props) => {
    const {allData, selfData, corpData, fullData} = props;
    return (
        <nav className="top-nav d-flex flex-column justify-content-between">
            <div className="top-nav__header d-flex align-items-center justify-content-between">
                <h1 className="top-nav__header-title"> Students </h1>
                {/* <Link to="/studentcreate"> */}
                    <button className="btn-primary top-nav__header-button border-0 me-2">+ Create</button>
                {/* </Link> */}
            </div>
            <div className="top-nav__student-types d-flex justify-content-start align-items-center">
                <div className="top-nav__student-types__all" setDefault={true} onClick={allData}>All</div>
                <div className="top-nav__student-types__full" onClick={fullData}>Full-Time</div>
                <div className="top-nav__student-types__self" onClick={selfData}>Self-Paced</div>
                <div className="top-nav__student-types__corp" onClick={corpData}>Corporate</div>
            </div> 
        </nav>
    )
}

export default StudentListTopNav; 
