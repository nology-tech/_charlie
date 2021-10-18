import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./project-table-row.scss";
import StudentRight from "../../../../../assets/images/studentRight.png";
import Row from "../../../../../components/rows/row"

const ProjectTableRow = (props) => {
  // const [projectDelete, setProjectDelete] = useState(false);

  const deleteProject = () => {
    fetch("http://localhost:8080/projects/"+props.project.id, {
        method: "DELETE"
    })
    .then((response) => global.window.location.reload())
    .catch(error => console.log(error));
};

  const { projectName, language, studentsEnrolled, numberReviewed, percentageReviewed} = props.project;
  return (
    <div className="student row d-flex align-items-center text-center" data-testid="project">
      <Row
        one = {projectName}
        two = {language}
        three = {studentsEnrolled}
        four = {numberReviewed}
        five ={percentageReviewed}
        rightLink={"javascript: alert('Project: ' + projectName)"}
        deleteLink={deleteProject}
      />
    </div>
  )
}

export default ProjectTableRow
