import Cards from 'components/cards/cards';
import React, { useState, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa';

import thumbnail from "../../../assets/images/thumbnail-placeholder.png";

const StudentOverview = () => {
    const [studentsData, setStudentsData] = useState({});

    const fetchStudentData = () => {
        fetch("http://localhost:8080/students/2")
        .then(response => response.json())
        .then(jsonData => setStudentsData(jsonData))
        .catch(err => console.log(err));  
    }

    useEffect(fetchStudentData, {}); 

    return (
        <>
            <div className="topnav">
                <h1>Name: {studentsData.email}</h1>
                
            </div>
            <div className="overview row mt-4 mx-3">
                <h3 className="overview__title">Overview</h3>
                <div className="overview__card card d-flex flex-column col-3 ">
                    <img src={thumbnail} alt="Student Thumbnail" className="overiew__image" />
                    <h4>Name {studentsData.studentName}</h4>
                    <p>{studentsData.enrolloedOn} Student</p>                
                </div>
                <div className="overview__github card d-flex flex-column offset-1 col-8">
                    <h4>GitHub</h4>
                    GitHub: {studentsData.githubAccount}
                    <div className="overview__github-info">
                        
                    </div>
                    <button className="btn-dark btn-project">
                        <FaGithub />&nbsp;View Repo
                    </button>
                </div>                
            </div>
            <div className="other-projects row mt-4 mx-3">
                <h3 className="other-projects__title">Projects</h3>
                <Cards />
            </div>
        </>
    )
}

export default StudentOverview;
