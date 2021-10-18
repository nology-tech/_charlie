import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "../../students/student-add/addstudenttopnav/addstudenttopnav.scss";
import placeHolderThumb from "../../../assets/images/project-thumbnail.png";

import "./project-overview.scss";

const ProjectOverview = () => {
  const [projectData, setProjectData] = useState({});
  const { projectId } = useParams();
  
  const getProjectDetails = () => {
    fetch("http://localhost:8080/projects/" + projectId)
    .then((response) => response.json())
    .then((jsonResponse) => setProjectData(jsonResponse))
    .catch((error) => console.log(error));
  };
  useEffect(() => {getProjectDetails();}, []);
  
  const {
    projectName, language, projectBrief, coachesTips, projectThumb,
    studentsEnrolled, numberReviewed, percentageReviewed
  } = projectData;

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

      <div className="row mx-5 d-flex justify-content-center overview-section">
        <div className="col-4 ml-2">
          <div className="row mx-4">
            <div className="card d-flex flex-column justify-content-evenly h-200" key={projectName}>
              <img className="img-fluid" src={projectThumb ? projectThumb : placeHolderThumb} alt={projectName} />

              <h6 className="mt-3">{projectName}</h6>

              <p>{language}</p>
            </div>
          </div>
        </div>
        <div className="col-8">
          {/* TODO: insert challenge data (stats) here */}

          <div className="row mx-4">
            <div className="col-12 challenge-brief mt-4 px-4">
              <h6 className="mt-4">Challenge Brief</h6>
              <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit. Dui convallis feugiat vel, sit malesuada commodo nullam. Urna, 
              mattis parturient ullamcorper imperdiet platea iaculis. Malesuada 
              nulla fermentum elit, ac diam at id. In aliquet vestibulum in lacus, 
              id. Semper amet, vitae risus, hendrerit adipiscing consectetur. 
              Elementum aliquam sit quis bibendum in eu auctor tristique.
              Ac id sit velit cras. Rhoncus nam aenean nisl commodo. Dictum 
              dignissim sit adipiscing odio volutpat in. Tempus ultricies 
              tristique cursus varius dui libero. Orci nisl neque, at sem nibh 
              id sed augue odio. </p>

              <h6 className="mt-4">Tips from us</h6>
              <ul className="mt-4">
                <li>Pseudo-code your thoughts</li>
                <li>Break it down</li>
                <li>Do what you can do first</li>
              </ul>                                
              <p className="mt-4">Good Luck from the coaches!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectOverview;
