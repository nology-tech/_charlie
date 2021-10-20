import React from 'react'
import "./project-table-row.scss";
import Row from "../../../../../components/rows/row"

const ProjectTableRow = (props) => {
  const { projectName, language, studentsEnrolled, numberReviewed, percentageReviewed} = props.project; 
  return (
    <div className="student row d-flex align-items-center text-center" data-testid="project">
      <Row
      one = {projectName}
      two = {language}
      three = {studentsEnrolled}
      four = {numberReviewed}
      five ={percentageReviewed}
      />
    </div>
  )
}

export default ProjectTableRow
