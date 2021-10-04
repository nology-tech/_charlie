import React from 'react'
import "./projects-create-top-nav.scss";

const ProjectCreateTopNav = () => {
    
    return (
        <nav className="top-nav d-flex flex-column justify-content-between">
            <div className="top-nav__header d-flex align-items-center justify-content-between">
                <h1 className="top-nav__header-title">Create Project</h1>
                <button className="btn-primary top-nav__header-button border-0 me-2">Go Back</button>
                <button className="btn-primary top-nav__header-button border-0 me-2">Save</button>
            </div>
        </nav>
    )
}

export default ProjectCreateTopNav; 
