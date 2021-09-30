import React from 'react';
import "./project-table.scss";
import ProjectTableRow from './project-table-row/project-table-row';

const ProjectTable = (props) => {

    const {pageData} = props; 
    const projects = pageData && pageData.map(project => <ProjectTableRow project={project}/>)
    return ( 
        <>
        <div className="studentList d-flex align-items-center text-center">
            <p className="col studentList__property-label">Student Name</p>
            <p className="col studentList__property-label">Enrolled On</p>
            <p className="col studentList__property-label">Github Account</p>
            <p className="col studentList__property-label">Portfolio</p>
            <p className="col studentList__property-label">Resume</p>
            <p className="col-1 studentList__property-label"></p>
        </div>
        <div className="hamburger-styling">
            {projects}
        </div>
        </>
    )
}

export default ProjectTable
