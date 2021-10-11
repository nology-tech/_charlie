import React from 'react'
import "./projects-top-nav.scss";
import {Link} from "react-router-dom";


const StudentListTopNav = (props) => {
    const { filterDataByAll, filterDataByLanguage, languageFilter} = props
    return (
        <nav className="top-nav d-flex flex-column justify-content-between">
            <div className="top-nav__header d-flex align-items-center justify-content-between">
                <h1 className="top-nav__header-title"> Projects </h1>
                <Link to="/project/create" className="btn-primary top-nav__header-button border-0 me-2">+ Create</Link>
            </div>
            <div className="top-nav__language-types d-flex justify-content-start align-items-center">
                <div className={languageFilter === "All" ? "top-nav__language-types__all selectedFilterClass" : "top-nav__language-types__all"} onClick={filterDataByAll}>All</div>
                <div className={languageFilter === "HTML/CSS" ? "top-nav__language-types__htmlcss selectedFilterClass" : "top-nav__language-types__htmlcss"}  onClick={()=>{filterDataByLanguage("HTML/CSS")}}>HTML/CSS</div>
                <div className={languageFilter === "Javascript" ? "top-nav__language-types__javascript selectedFilterClass" : "top-nav__language-types__javascript"}  onClick={()=>{filterDataByLanguage("Javascript")}}>Javascript</div>
                <div className={languageFilter === "React" ? "top-nav__language-types__react selectedFilterClass" : "top-nav__language-types__react"}  onClick={()=>{filterDataByLanguage("React")}}>React</div>
                <div className={languageFilter === "Java" ? "top-nav__language-types__java selectedFilterClass" : "top-nav__language-types__java"}  onClick={()=>{filterDataByLanguage("Java")}} data-testid="javaButton">Java</div>
            </div> 
        </nav>
    )
}

export default StudentListTopNav; 
