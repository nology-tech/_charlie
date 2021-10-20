import React, { useEffect, useState } from "react";
import { useLocation, Switch } from 'react-router-dom'; 
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import placeHolderThumb from "../../../assets/images/project-thumbnail.png";
import ProjectTable from "../projects-list/project-table/project-table";
import ProjectTableRow from "../projects-list/project-table/project-table-row/project-table-row";

import "./project-overview.scss";

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
  useEffect(() => {getProjectDetails();}, []);

  const getAllProjectDetails = () => {
    fetch("http://localhost:8080/projects/")
        .then(response => response.json())
        .then(jsonResponse => setAllProjectsData(jsonResponse))
        .catch(error => console.log(error));
  }

  useEffect(() => {getAllProjectDetails()}, []);

  const {
    projectName, language, projectBrief, coachesTips, projectThumb,
    studentsEnrolled, numberReviewed, percentageReviewed
  } = projectData;

  let languageText = language;
  if(language === "htmlcss") languageText = "HTML/CSS";
  else if(language === "javascript") languageText = "Javascript";
  else if(language === "java") languageText = "Java";
  else if(language === "react") languageText = "React";

  return (
    <>
      <div className="row topnav mb-4 header d-flex align-items-center justify-content-between">
        <h1 className="col-6 display-6 offset-1 topnav__title">{projectName}</h1>
        <div className="top-nav__buttons d-flex col-4 mx-auto">
          <Link className="col-3 btn btn-secondary topnav__button mx-2" to={"/projects"}>
            Go Back 
          </Link>
          <Link className="col-4 btn btn-primary topnav__button mx-2 mr-5" to={`/project/${projectId}/edit`} >
            Edit Project
          </Link>
        </div>
      </div>

      {/* project card */}
      <div className="row mx-5 d-flex justify-content-center overview-section">
        <div className="col-4 ml-2">
          <div className="row mx-4">
            <div className="card d-flex flex-column justify-content-evenly h-200" key={projectName}>
              <img className="img-fluid" src={projectThumb ? projectThumb : placeHolderThumb} alt={projectName} />

              <h6 className="mt-3">{projectName}</h6>

              <p>{languageText}</p>
            </div>
          </div>
        </div>
        <div className="col-8">
          {/* TODO: insert challenge data (stats) here */}
          <div className="row mx-4 ">
              <div className="col-12 challenge-data bg-white px-5">
                  <h6 className="mt-4">Challenge Data</h6>
                  <div className="row d-flex justify-content-between text-center align-items-center">
                    <div className="col "><h6>{studentsEnrolled}</h6></div>
                    <div className="col"><h6>{numberReviewed}</h6></div>
                    <div className="col"><h6>{percentageReviewed}</h6></div>
                  </div>
                  <div className="row d-flex justify-content-between text-center">
                    <div className="col">Students Enrolled</div>
                    <div className="col">Number Reviewed</div>
                    <div className="col text-success">Reviewed</div>
                  </div>
              </div>
          </div>

          <div className="row mx-4">
            <div className="col-12 challenge-brief mt-4 px-4">
              <h6 className="mt-4">Challenge Brief</h6>
              {/* <p className="mt-4">{projectBrief}Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit. Dui convallis feugiat vel, sit malesuada commodo nullam. Urna, 
              mattis parturient ullamcorper imperdiet platea iaculis. Malesuada 
              nulla fermentum elit, ac diam at id. In aliquet vestibulum in lacus, 
              id. Semper amet, vitae risus, hendrerit adipiscing consectetur. 
              Elementum aliquam sit quis bibendum in eu auctor tristique.
              Ac id sit velit cras. Rhoncus nam aenean nisl commodo. Dictum 
              dignissim sit adipiscing odio volutpat in. Tempus ultricies 
              tristique cursus varius dui libero. Orci nisl neque, at sem nibh 
              id sed augue odio. </p> */}
               <p className="mt-4">{projectBrief}</p>

              <h6 className="mt-4">Tips from us</h6>
              <div className="mt-4">
                <p>{coachesTips}</p>
                {/* <li>Break it down</li>
                <li>Do what you can do first</li> */}
              </div>                                
              <p className="mt-4">Good Luck from the coaches!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-4">
        <h5 className="offset-1">Other Projects</h5>
      </div>
      <div className="main col-10 h-auto mb-5 m-0 d-flex justify-content-between">
        <div className="projects d-flex flex-column align-items-center p-0 mx-auto ">
          <ProjectTable pageData={allProjectsData} />
        </div>
      </div>
    </>
  );
};

export default ProjectOverview;
