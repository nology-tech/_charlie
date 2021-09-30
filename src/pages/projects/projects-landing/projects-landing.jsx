import React,{useEffect, useState }  from 'react'
import ProjectsTopNav from "./projects-top-nav/projects-top-nav"
import ProjectTable from "./project-table/project-table";
import "./projects-landing.scss"; 
import projectsDataFile from "../../../data/projectsData"; 

const ProjectsLanding = () => {
    const [projectsData, setProjectsData] = useState([]); 
    const [pageData, setPageData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);  
    const [numberOfRows, setNumberOfRows] = useState(8);  
    const [enrolledFilter, setEnrolledFilter] = useState("All");
    const [enrollmentData, setEnrollmentData] = useState(projectsDataFile); 

    const fetchProjectsData = () => {
        setProjectsData(projectsDataFile);
    }
    const displayProjects = () => {
        setPageData(projectsData);
    }

    const filterDataByAll = () => {

        setLanguageFilter("All");
        fetchProjectsData();
        }
    const filterDataByHTMLorCSS = () => {
        setLanguageFilter("Full-Time");
        setStudentsData(projectsData.filter(student => student.enrolledType.includes("Full-Time")));
    }
    const filterDataBySelfPaced = () => {
        setLanguageFilter("Self-Paced");
        setStudentsData(projectsData.filter(student => student.enrolledType.includes("Self-Paced")));
    }
    const filterDataByCorporate = () => {
        setLanguageFilter("Corporate");
        setStudentsData(projectsData.filter(student =>student.enrolledType.includes("Corporate")));
    }

// switch(enrolledFilter) {
//     case "All":
//         filterDataByAll();
//         break;
//     case "Self-Paced":
//         filterDataBySelfPaced();
//         break;
//     case "Full-Time":
//         filterDataByFullTime();
//         break;
//     case "Corporate":
//         filterDataByCorporate();
//         break;
//     default:
//         filterDataByAll(); 
// }

    
    // useEffect Calls

    useEffect(fetchProjectsData, []); 
    useEffect(displayProjects, [projectsData, pageNumber, numberOfRows]);
    
    return (
        <div className="main col-10 m-0 d-flex justify-content-between">
            <div className="students__white-space"></div>
                <div className="students d-flex flex-column align-items-center p-0 ">
                    <ProjectsTopNav className="students__topNav" 
                    // filterDataByAll={filterDataByAll}
                    // filterDataByFullTime={filterDataByFullTime}
                    // filterDataBySelfPaced={filterDataBySelfPaced}
                    // filterDataByCorporate={filterDataByCorporate}
                    // enrolledFilter={enrolledFilter }
                    />
                    <ProjectTable className="students__list d-flex justify-content-start" 
                    projectsData={projectsData} 
                    pageData={pageData}
                    />
                </div>
            <div className="students__white-space"></div>
        </div>
    )
}
export default ProjectsLanding;