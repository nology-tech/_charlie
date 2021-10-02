import React,{useEffect, useState }  from 'react'
import ProjectsTopNav from "./projects-top-nav/projects-top-nav"
import ProjectTable from "./project-table/project-table";
import "./projects-list.scss"; 
import projectsDataFile from "../../../data/projectsData"; 
// import PageHeader from "../../../components/page-header/page-header"; 

const ProjectsList = () => {
    const [projectsData, setProjectsData] = useState([]); 
    const [pageData, setPageData] = useState([]);  
    const [languageFilter, setLanguageFilter] = useState("All");

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
    const filterDataByHTMLandCSS = () => {
        setLanguageFilter("HTML/CSS");
        setProjectsData(projectsDataFile.filter(project => project.language.includes("HTML/CSS")));
    }
    const filterDataByJavascript = () => {
        setLanguageFilter("Javascript");
        setProjectsData(projectsDataFile.filter(project => project.language.includes("Javascript")));
    }
    const filterDataByReact = () => {
        setLanguageFilter("React");
        setProjectsData(projectsDataFile.filter(project =>project.language.includes("React")));
    }

    const filterDataByLanguage = () => {
        
    }

    // useEffect Calls

    useEffect(fetchProjectsData, []); 
    useEffect(displayProjects, [projectsData]);

    // const tabs = ["All", "HTML/CSS", "Javascript", "React"];
    return (
        <div className="main col-10 m-0 d-flex justify-content-between">
            <div className="projects__white-space"></div>
                <div className="projects d-flex flex-column align-items-center p-0 ">
                    <ProjectsTopNav className="projects__topNav" 
                    filterDataByAll={filterDataByAll}
                    filterDataByHTMLandCSS={filterDataByHTMLandCSS}
                    filterDataByJavascript={filterDataByJavascript}
                    filterDataByReact={filterDataByReact}
                    languageFilter={languageFilter }
                    />
                    <ProjectTable className="projects__list d-flex justify-content-start" 
                    projectsData={projectsData} 
                    pageData={pageData}
                    />
                </div>
            <div className="projects__white-space"></div>
        </div>
    )
}
export default ProjectsList;