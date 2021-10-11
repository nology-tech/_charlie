import React from 'react'
import { Link } from "react-router-dom";
import "./student-table-row.scss";
import StudentRight from "../../../../../assets/images/studentRight.png";
import Adobe from "../../../../../assets/images/adobe.png";

const StudentTableRow = (props) => {
  const { studentName, enrolledOn, githubAccount, portfolio, pictureLink } = props.student; 
  const { toggleView, id } = props; 
  if (toggleView === false) {
  return (
    <div className="student row d-flex align-items-center text-center" data-testid="student">
      <p className="col student__property student__name">{studentName}</p>
      <p className="col student__property">{enrolledOn}</p>
      <p className="col student__property">{githubAccount}</p>
      <p className="col student__property">{portfolio}</p>
      <a className="col student__property" href ="sample.pdf" download> <img className="adobe" src={Adobe} alt="Adobe"/> </a>
      <div className="col-1 student__property student__right-arrow">
      <Link to={`/student/${id}/project/0`}>
        <img className="student__right-arrow__icon" src={StudentRight} alt={StudentRight}/>
      </Link>
      </div>
    </div>
  )
} else if (toggleView === true) {
  return (
    <div className="student-grid">
      <div className="student-grid__card d-flex justify-content-around align-items-center flex-column">
        <img className="student-grid__card__img" src={pictureLink} alt="student"/>
        <p className="student-grid__card__name">{studentName}</p>
        <p className="student-grid__card__email">{portfolio}</p>
      </div> 
    </div>  
  )
}
}


export default StudentTableRow
