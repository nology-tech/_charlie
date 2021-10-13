import React from 'react'
import "./page-header.scss";
import {Link} from "react-router-dom"; 
const PageHeader = (props) => {



    const { title, tabs, handleClick, buttonText, buttonPath, filterState, buttonStyle } = props;
    return (
        <nav className="top-nav d-flex flex-column justify-content-between">
            <div className="top-nav__header d-flex align-items-center justify-content-between">
                <h1 className="top-nav__header-title">{title}</h1>
                <Link to={buttonPath} className={buttonStyle}>{buttonText}</Link>
            </div>

            <div className="top-nav__tabs d-flex justify-content-start align-items-center">
                { tabs && 
                    tabs.map((tab, i) => (
                        <div className=
                        {filterState && filterState === tab ? `top-nav__tabs-${i} selectedFilterClass` : `top-nav__tabs-${i}`} onClick={() => handleClick(tab)}>
                            {tab}
                        </div>
                    ))
                }   
            </div> 
        </nav>
    )
}

export default PageHeader; 
