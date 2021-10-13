import React from "react";
import "./projects-create.scss";
import ProjectsForm from "./projects-form/projects-form";
import PageHeader from "../../../components/page-header/page-header";

const ProjectsCreate = () => {
  return (
    <div className="main col-10 m-0 d-flex justify-content-between">
      <div className="projects-create__white-space"></div>
        <div className="projects-create d-flex flex-column align-items-center p-0">
          <PageHeader title="Create Project"
                      buttonPath={"/projects"}
                      buttonText = {"Go Back"}
                      buttonStyle = "btn-back top-nav__header-button"/>
          <ProjectsForm/>
        </div>
      <div className="projects-create__white-space"></div>
    </div>
  )
}

export default ProjectsCreate;
