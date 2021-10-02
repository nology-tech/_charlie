import React from 'react'
import { Link } from "react-router-dom";
import "./project-table-row.scss";
import StudentRight from "../../../../../assets/images/studentRight.png";

const ProjectTableRow = (props) => {
  const { projectName, language, studentsEnrolled, numberReviewed, percentageReviewed} = props.project; 
  return (
    <div className="student row d-flex align-items-center text-center">
      <p className="col student__property student__name">{projectName}</p>
      <p className="col student__property">{language}</p>
      <p className="col student__property">{studentsEnrolled}</p>
      <p className="col student__property">{numberReviewed}</p>
      <p className="col student__property"> {percentageReviewed}</p>
      <div className="col-1 student__property student__right-arrow">
      <Link to="/studentdetails:ID">
        <img className="student__right-arrow__icon" src={StudentRight} alt={StudentRight}/>
      </Link>
      </div>
    </div>
  )

}


export default ProjectTableRow
