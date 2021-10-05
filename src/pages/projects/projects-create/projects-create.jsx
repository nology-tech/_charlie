import React from "react";
import ProjectCreateTopNav from "./projects-create-top-nav/projects-create-top-nav";
import "./projects-create.scss";
import ProjectsForm from "./projects-form/projects-form";

const ProjectsCreate = () => {
  return (
    <div className="main col-10 m-0 d-flex justify-content-between">
      <div className="projects-create__white-space"></div>
        <div className="projects-create d-flex flex-column align-items-center p-0">
          <ProjectCreateTopNav/>
          <ProjectsForm/>
        </div>
      <div className="projects-create__white-space"></div>
    </div>
  )
}

export default ProjectsCreate;