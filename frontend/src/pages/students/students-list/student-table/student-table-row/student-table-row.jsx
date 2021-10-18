import React from 'react'
import "./student-table-row.scss";
import AdobeIcon from "../../../../../assets/images/adobe.png";
import Row from "../../../../../components/rows/row"

const StudentTableRow = (props) => {
  
  const { studentName, enrolledOn, githubAccount, portfolio, pictureLink, resume, email } = props.student; 

  const { toggleView, id } = props; 

  if (toggleView === false) {
  return (
    <div className="student row d-flex align-items-center text-center" data-testid="student">
      <Row
      one = {studentName}
      two = {enrolledOn}
      three={githubAccount}
      four= {portfolio}
      email={email}
      resume={resume}
      AdobeIcon = {AdobeIcon}
      rightLink = {`/student/${id}/overview`}
      testid={"student"}
      />
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