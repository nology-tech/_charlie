import React from 'react'
import "./student.scss";
import StudentRight from "../../../../assets/images/studentRight.png";
import Adobe from "../../../../assets/images/adobe.png";

const Student = (props) => {
  const { studentName, enrolledOn, githubAccount, portfolio, resume } = props.student; 
  return (
    <div className="student row d-flex align-items-center">
      <p className="col student__property">{studentName}</p>
      <p className="col student__property">{enrolledOn}</p>
      <p className="col student__property">{githubAccount}</p>
      <p className="col student__property">{portfolio}</p>
      <a className="col student__property" href = {resume}> <img className="adobe" src={Adobe} alt="Adobe"/> </a>
      <div className="col-1 student__property student__right-arrow">
        <img className="student__right-arrow__icon" src={StudentRight} alt={StudentRight}/>
      </div>
    </div>
  )
}

export default Student
