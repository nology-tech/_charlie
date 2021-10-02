import React from 'react'
import "./students-top-nav.scss";


const StudentListTopNav = (props) => {
    const {filterDataByCorporate, filterDataByAll, filterDataByFullTime, filterDataBySelfPaced, enrolledFilter} = props;
    return (
        <nav className="top-nav d-flex flex-column justify-content-between">
            <div className="top-nav__header d-flex align-items-center justify-content-between">
                <h1 className="top-nav__header-title"> Students </h1>
                {/* <Link to="/studentcreate"> */}
                    <button className="btn-primary top-nav__header-button border-0 me-2">+ Create</button>
                {/* </Link> */}
            </div>
            <div className="top-nav__student-types d-flex justify-content-start align-items-center">
                <div className={enrolledFilter === "All" ? "top-nav__student-types__all selectedFilterClass" : "top-nav__student-types__all"} onClick={filterDataByAll}>All</div>
                <div className={enrolledFilter === "Full-Time" ? "top-nav__student-types__full-time selectedFilterClass" : "top-nav__student-types__full-time"}  onClick={filterDataByFullTime}>Full-Time</div>
                <div className={enrolledFilter === "Self-Paced" ? "top-nav__student-types__self-paced selectedFilterClass" : "top-nav__student-types__self-paced"}  onClick={filterDataBySelfPaced}>Self-Paced</div>
                <div className={enrolledFilter === "Corporate" ? "top-nav__student-types__corporate selectedFilterClass" : "top-nav__student-types__corporate"}  onClick={filterDataByCorporate}>Corporate</div>
            </div> 
        </nav>
    )
}

export default StudentListTopNav; 
