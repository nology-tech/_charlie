import React from 'react'
import "./page-header.scss";


const PageHeader = (props) => {

    const { title, tabs, createLink } = props;

    let selectedIndex = 0;

    return (
        <nav className="top-nav d-flex flex-column justify-content-between">
            <div className="top-nav__header d-flex align-items-center justify-content-between">
                <h1 className="top-nav__header-title">{title}</h1>
                <button className="btn-primary top-nav__header-button border-0 me-2">+ Create</button>
            </div>
            <div className="top-nav__student-types d-flex justify-content-start align-items-center">
                {
                    tabs.map((tab, i) => (
                        // <div className={enrolledFilter === "All" ? "top-nav__student-types__all selectedFilterClass" : "top-nav__student-types__all"} onClick={filterDataByAll}>All</div>
                        <div className={`top-nav__student-types__all ${selectedIndex == i}`}>All</div>
                    ))
                }
            </div> 
        </nav>
    )
}

export default PageHeader; 