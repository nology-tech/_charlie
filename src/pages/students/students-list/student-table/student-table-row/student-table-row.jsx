import React from 'react'

import { Link } from "react-router-dom";

import "./student-table-row.scss";
import StudentRight from "../../../../../assets/images/studentRight.png";
import Adobe from "../../../../../assets/images/adobe.png";

const StudentTableRow = (props) => {

  const { studentName, enrolledOn, githubAccount, portfolio, resume } = props.student;

  return (
    <div className="student row d-flex align-items-center text-center">
      <p className="col student__property student__name">{studentName}</p>
      <p className="col student__property">{enrolledOn}</p>
      <p className="col student__property">{githubAccount}</p>
      <p className="col student__property">{portfolio}</p>
      <a className="col student__property" href={resume}> <img className="adobe" src={Adobe} alt="Adobe" /> </a>
      <div className="col-1 student__property student__right-arrow">
        <Link to="/studentdetails">
          <img className="student__right-arrow__icon" src={StudentRight} alt={StudentRight} />
        </Link>
      </div>
    </div>
  )
}

export default StudentTableRow
