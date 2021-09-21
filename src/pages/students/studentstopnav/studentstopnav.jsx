import React from 'react'
import "./studentstopnav.scss"

const studentlisttopnav = () => {
    return (
        <nav className="topNav">
            <div className="row topNav__pageNameAndCreate">
                <h1 className="col"> Students </h1>
                <button className="col">Create</button>
            </div>
            <div className="row topNav__studentTypes">
                <p className="col">All</p>
                <p className="col">Full-Time</p>
                <p className="col">Self-Paced</p>
                <p className="col">Corporate</p>
            </div> 
        </nav>
    )
}

export default studentlisttopnav; 
