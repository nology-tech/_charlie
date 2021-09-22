import React from 'react'
import "./student.scss";

const Student = (props) => {
  const { studentName, enrolledOn, githubAccount, portfolio, resume } = props.student; 
  return (
    <div className="student row d-flex align-items-center justify-content-start">
      <p className="col">{studentName}</p>
      <p className="col">{enrolledOn}</p>
      <p className="col">{githubAccount}</p>
      <p className="col">{portfolio}</p>
      <p className="col">{resume}</p>
    </div>
  )
}

export default Student
