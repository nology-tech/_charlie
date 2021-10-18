import React from 'react'
import "./project-table-row.scss";
import Row from "../../../../../components/rows/row"

const ProjectTableRow = (props) => {
  const { projectName, language, studentsEnrolled, numberReviewed, percentageReviewed} = props.project;

  let languageText = language;
  if(language === "htmlcss") languageText = "HTML/CSS";
  else if(language === "javascript") languageText = "Javascript";
  else if(language === "java") languageText = "Java";
  else if(language === "react") languageText = "React";
  
  return (
    <div className="student row d-flex align-items-center text-center" data-testid="project">
      <Row
        one = {projectName}
        two = {languageText}
        three = {studentsEnrolled}
        four = {numberReviewed}
        five ={percentageReviewed}
        rightLink={"/project/" + props.project.id}
      />
    </div>
  )
}

export default ProjectTableRow
