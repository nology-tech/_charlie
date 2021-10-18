import React from "react";
import "./projects-edit.scss";
import ProjectsEditForm from "./projects-edit-form/projects-edit-form";
import PageHeader from "../../../components/page-header/page-header";

const ProjectsEdit = () => {
  return (
    <div className="main col-10 m-0 d-flex justify-content-between">
      <div className="projects-edit__white-space"></div>
        <div className="projects-edit d-flex flex-column align-items-center p-0">
          <PageHeader title="Edit Project"
                      buttonPath={"/projects"}
                      buttonText = {"Go Back"}
                      buttonStyle = "btn-back top-nav__header-button"/>
          <ProjectsEditForm/>
        </div>
      <div className="projects-edit__white-space"></div>
    </div>
  )
}

export default ProjectsEdit;