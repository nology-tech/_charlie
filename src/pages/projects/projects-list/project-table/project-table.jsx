import React from 'react';
import "./project-table.scss";
import ProjectTableRow from './project-table-row/project-table-row';

const ProjectTable = (props) => {
    const {pageData} = props; 
    const projects = pageData.map(project => <ProjectTableRow project={project}/>)
    return ( 
        <>
        <div className="project-list d-flex align-items-center text-center">
            <p className="col project-list__property-label">Project Name</p>
            <p className="col project-list__property-label">Language</p>
            <p className="col project-list__property-label">Students Enrolled</p>
            <p className="col project-list__property-label">Number Reviewed</p>
            <p className="col project-list__property-label">% Reviewed</p>
            <p className="col-1 project-list__property-label"></p>
        </div>
        <div className="w-100">
            {projects}
        </div>
        </>
    )
}

export default ProjectTable
