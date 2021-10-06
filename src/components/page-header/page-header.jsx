import React from 'react'
import "./page-header.scss";


const PageHeader = (props) => {

    const { title, tabs, handleClick, createLink } = props;

    let selectedIndex = 0;

    return (
        <nav className="top-nav d-flex flex-column justify-content-between">
            <div className="top-nav__header d-flex align-items-center justify-content-between">
                <h1 className="top-nav__header-title">{title}</h1>
                <button className="btn-primary top-nav__header-button border-0 me-2">+ Create</button>
            </div>
            <div className="top-nav__student-types d-flex justify-content-start align-items-center">
                {
                    tabs && tabs.map((tab, i) => (
                        <div className={`top-nav__student-types__all ${selectedIndex == i}`} onClick={() => handleClick(i)}>All</div>
                    ))
                }
            </div> 
        </nav>
    )
}

export default PageHeader; 
