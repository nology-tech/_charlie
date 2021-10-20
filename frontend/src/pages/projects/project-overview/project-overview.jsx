import React, { useEffect, useState } from "react";
// import { useLocation, Switch } from 'react-router-dom'; 
// import { Link } from "react-router-dom";
import { useParams } from "react-router";
import placeHolderThumb from "../../../assets/images/project-thumbnail.png";
import ProjectTable from "../projects-list/project-table/project-table";
// import ProjectTableRow from "../projects-list/project-table/project-table-row/project-table-row";
import PageHeader from "../../../components/page-header/page-header"; 
import "./project-overview.scss";
import "../../../assets/styles/_variables.scss"

const ProjectOverview = () => {
  const [allProjectsData, setAllProjectsData] = useState([]); 
  const [projectData, setProjectData] = useState({});
  const { projectId } = useParams();
  
  const getProjectDetails = () => {
    fetch("http://localhost:8080/projects/" + projectId)
    .then((response) => response.json())
    .then((jsonResponse) => setProjectData(jsonResponse))
    .catch((error) => console.log(error));
  };
  
  const getAllProjectDetails = () => {
    fetch("http://localhost:8080/projects/")
        .then(response => response.json())
        .then(jsonResponse => setAllProjectsData(jsonResponse))
        .catch(error => console.log(error));
  }

  useEffect(getAllProjectDetails, []);
  useEffect(getProjectDetails, [projectId]);

  const {
    projectName, language, projectBrief, coachesTips, projectThumb,
    studentsEnrolled, numberReviewed, percentageReviewed
  } = projectData;

  return (
    <div className="main m-0 d-flex justify-content-between">
      <div className="projects__white-space"></div>
      <div className="main__content d-flex flex-column align-items-center p-0 w-100">
        <PageHeader
          title={projectName}
          buttonText="Go Back"
          buttonStyle={"btn-back top-nav__header-button me-2"}
          buttonPath={"/projects"}
          button2Text="Edit Project"
          button2Style={"btn-primary top-nav__header-button border-0"}
          button2Path={`/project/${projectId}/edit`}
        />
        <div className="row d-flex justify-content-center overview-section w-100">
          <div className="col-4 p-0">

            <div className="project-card d-flex flex-column justify-content-evenly me-3 align-items-center"
                key={projectName}>
                <img
                  className="img-fluid"
                  src={projectThumb ? projectThumb : placeHolderThumb}
                  alt={projectName}/>
                <h6 className="mt-3">{projectName}</h6>
                <p className = "pb-3">{language}</p>
            </div>
          </div>
          <div className="col-8 p-0">
            {/* TODO: insert challenge data (stats) here */}

              <div className="col-12 challenge-data bg-white p-4 m-0">
                <h6 className = "mb-3">Challenge Data</h6>
                <div className="row d-flex justify-content-between text-center align-items-center">
                  <div className="col p-0">
                    <h3 className="m-0">{studentsEnrolled}</h3>
                  </div>
                  <div className="col p-0 fw-bold">
                    <h3 className="m-0">{numberReviewed}</h3>
                  </div>
                  <div className="col p-0 fw-bold" style={{color: "green"}}>
                    <h3 className="m-0">{percentageReviewed}</h3>
                  </div>
                </div>
                <div className="row d-flex justify-content-between text-center" style ={{color: `#95ACCB`}}>
                  <div className="col p-0">Students Enrolled</div>
                  <div className="col p-0">Number Reviewed</div>
                  <div className="col p-0 text-success">Reviewed</div>
                </div>
              </div>

              <div className="col-12 challenge-brief mt-4 m-0 p-4">
                <h6 className="mt-1">Challenge Brief</h6>
                <p className="mt-4">{projectBrief}</p>

                <h6 className="mt-4">Tips from us</h6>
                <div className="mt-4">
                  <p>{coachesTips}</p>
                </div>
                <p className="mt-4">Good Luck from the coaches!</p>
              </div>
          </div>
        </div>
        <div className="row mt-5 mb-4 w-100">
          <h5 className="offset-1 ms-0 ps-0">Other Projects</h5>
        </div>
        <div className="main col-10 h-auto mb-5 m-0 d-flex justify-content-between">
          <div className="projects d-flex flex-column align-items-center p-0 w-100">
            <ProjectTable pageData={allProjectsData} />
          </div>
        </div>
      </div>
      <div className="projects__white-space"></div>
    </div>
  );
};

export default ProjectOverview;
