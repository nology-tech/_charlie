import React from 'react'
import "./student.scss";
import StudentRight from "../../../../assets/images/studentRight.png";
import Adobe from "../../../../assets/images/adobe.png";
import {Link} from "react-router-dom";

const Student = (props) => {
  const { studentName, enrolledOn, githubAccount, portfolio, resume, pictureLink } = props.student; 
  const { toggleView } = props; 
  if (toggleView === false) {
  return (
    <div className="student row d-flex align-items-center text-center">
      <p className="col student__property student__name">{studentName}</p>
      <p className="col student__property">{enrolledOn}</p>
      <p className="col student__property">{githubAccount}</p>
      <p className="col student__property">{portfolio}</p>
      <a className="col student__property" href = {resume}> <img className="adobe" src={Adobe} alt="Adobe"/> </a>
      <div className="col-1 student__property student__right-arrow">
      <Link to="/studentdetails:ID">
        <img className="student__right-arrow__icon" src={StudentRight} alt={StudentRight}/>
      </Link>
      </div>
    </div>
  )
} else if (toggleView === true) {
  return (
    <div className="student-grid">
      <div className="student-grid__card d-flex justify-content-center align-items-center flex-column">
        <img className="student-grid__card__img" src={pictureLink} alt="student"/>
        <p className="student-grid__card__name">{studentName}</p>
        <p className="student-grid__card__email">{portfolio}</p>
      </div> 
    </div>  
  )
}
}

export default Student
