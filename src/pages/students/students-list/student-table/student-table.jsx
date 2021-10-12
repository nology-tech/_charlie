import React from 'react';
import "./student-table.scss";
import StudentTableRow from './student-table-row/student-table-row';
import PageNavigator from '../page-navigator/page-navigator';

const StudentTable = (props) => {

    const {pageData, toggleView, totalNumberStudents, switchToPreviousPage, switchToNextPage, changeNumberOfRows, numberOfRows, firstIndex, secondIndex} = props; 
    const students = pageData.map((student, i) => <React.Fragment key={student.studentName}><StudentTableRow student={student} id = {i} toggleView = {toggleView}/></React.Fragment>)
    return ( 
        <>
        <div className={toggleView === false ? "student-table d-flex align-items-center text-center": "hide-student-table-labels"}>
            <p className="col student-table__property-label">Student Name</p>
            <p className="col student-table__property-label">Enrolled On</p>
            <p className="col student-table__property-label">Github Account</p>
            <p className="col student-table__property-label">Portfolio</p>
            <p className="col student-table__property-label">Resume</p>
            <p className="col-1 student-table__property-label"></p>
        </div>
        <div className="w-100 d-flex flex-column justify-content-between m-0 p-0 h-100">
        <div className={toggleView === false ? "w-100" : "student-grid"} data-testid="student-grid">
            {students}
        </div>
        <PageNavigator totalNumberStudents={totalNumberStudents} 
                    switchToPreviousPage={switchToPreviousPage} 
                    switchToNextPage={switchToNextPage} 
                    changeNumberOfRows={changeNumberOfRows} 
                    numberOfRows={numberOfRows} 
                    firstIndex={firstIndex} 
                    secondIndex={secondIndex}
                    toggleView={toggleView}/>
        </div>
        </>
    )
}

export default StudentTable
