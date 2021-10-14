import React,{useEffect, useState }  from 'react'
import ProjectTable from "./project-table/project-table";
import "./projects-list.scss"; 
// import projectsDataFile from "../../../data/projectsData"; 
import PageHeader from "../../../components/page-header/page-header"; 

const ProjectsList = () => {
    const [projectsData, setProjectsData] = useState([]); 
    const [pageData, setPageData] = useState([]);  
    const [languageFilter, setLanguageFilter] = useState("All");

    const getProjectDetails = () => {
        fetch("http://localhost:8080/projects/")
            .then(response => response.json())
            .then(jsonResponse => setProjectsData(jsonResponse))
            .catch(error => console.log(error));
    }

    useEffect(() => {getProjectDetails()}, []);

    // const fetchProjectsData = () => {
    //     setProjectsData(projectsDataFile);
    // }
    const displayProjects = () => {
        setPageData(projectsData);
    }

    const filterDataByLanguage = (languageChoice) => {
        if (languageChoice === "All") {
            setLanguageFilter("All");
            setPageData(projectsData);
        } else {
            setLanguageFilter(languageChoice);
            if(languageChoice === "Java"){
                setPageData(projectsData.filter(project => project.language.includes("Java") && !project.language.includes("script")));
            }else{
                setPageData(projectsData.filter(project => project.language.includes(languageChoice)));
            }
        }
        
        
    }

    // useEffect(fetchProjectsData, []); 
    useEffect(displayProjects, [projectsData]);

    return (
        <div className="main col-10 m-0 d-flex justify-content-between">
            <div className="projects__white-space"></div>
                <div className="projects d-flex flex-column align-items-center p-0 ">
                    <PageHeader title="Projects"
                    tabs={["All", "HTML/CSS", "Javascript", "React", "Java"]} 
                    handleClick={filterDataByLanguage} 
                    buttonPath={"/project/create"} 
                    filterState = {languageFilter} 
                    buttonText = {"Create +"}
                    buttonStyle="btn-primary top-nav__header-button border-0 me-2"/>
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