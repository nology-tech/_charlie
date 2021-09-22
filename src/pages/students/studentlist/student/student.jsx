import React from 'react'
import "./student.scss";
import StudentRight from "../../../../assets/images/studentRight.png";
import Adobe from "../../../../assets/images/adobe.png"
const Student = (props) => {
  const { studentName, enrolledOn, githubAccount, portfolio, resume } = props.student; 
  return (
    <div className="student row d-flex align-items-center justify-content-start">
      <p className="col">{studentName}</p>
      <p className="col">{enrolledOn}</p>
      <p className="col">{githubAccount}</p>
      <p className="col">{portfolio}</p>
      <p className="col">{resume}</p>
      <div className="col" >
        <img className="adobe"  src={Adobe} alt={Adobe}/>
      </div>
      <div className="col" >
        <img className="student-right"  src={StudentRight} alt={StudentRight}/>
      </div>
    </div>
  )
}

export default Student
