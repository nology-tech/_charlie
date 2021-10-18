import Cards from 'components/cards/cards';
import React, { useState, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa';
import { useParams} from 'react-router-dom';
import PageHeader from "../../../components/page-header/page-header"
import thumbnail from "../../../assets/images/thumbnail-placeholder.png";
import "./student-overview.scss";
import gitHubIcon from "../../../assets/images/githubicon.png";

const StudentOverview = () => {
    const { studentId } = useParams();
    const [studentsData, setStudentsData] = useState({});
    const [githubData, setGithubData] = useState([]);

    const fetchStudentData = () => {
        fetch(`http://localhost:8080/students/${studentId}`)
        .then(response => response.json())
        .then(jsonData => setStudentsData(jsonData))
        .catch(err => console.log(err));  
    }

    const getGithubData = () =>{
        fetch('https://api.github.com/users/{angaar96}', {
            headers:{
                'Content-Type': 'application/vnd/github.v3+json',
                'Accept': 'application/vnd/github.v3+json'
            }})
        .then(response => response.json())
        .then(data => setGithubData(data))
		.catch(error => console.log(error));
    } 

    useEffect(fetchStudentData, []); 
    useEffect(getGithubData, []);

    return (
        <div className ="main m-0 d-flex justify-content-between">
            <div className="main__white-space"></div>
            <div className="main__content d-flex flex-column align-items-centerp-0">
                <PageHeader title = {studentsData.studentName} 
                buttonText = "Go Back" 
                buttonStyle = {"btn-back top-nav__header-button me-2"} 
                button2Text = "Edit" 
                button2Style = {"btn-primary top-nav__header-button border-0"}
                />
                <div className="overview row mt-4 p-0 justify-content-between gx-0 d-flex">
                    <h3 className="overview__title">Overview</h3>
                    <div className="overview__card card d-flex flex-column col-3 ">
                        <img src={studentsData.pictureLink} alt="Student Thumbnail" className="overview__card-image" />
                        <h1 className="overview__card-name">{studentsData.studentName}</h1>
                        <p className="overview__card-course">{studentsData.enrolledOn}</p>                
                    </div>
                    <div className="overview__github card d-flex flex-column m-0 col-8 justify-content-between">
                        <div className="overview__github-head d-flex justify-content-between">
                            <div className="overview__github-head-text ">
                                <h4>GitHub Account</h4>
                                <h5>Bio:</h5>
                                <p>place text</p>
                            </div>
                            <img className="overview__github-head-icon m-0" src={gitHubIcon} alt={gitHubIcon} />
                        </div>
                        {/* GitHub: {studentsData.githubAccount} */}
                        <div className="overview__github-info" id="root">
                            {githubData.id} {githubData.location} {githubData.followers} {githubData.following}
                        </div>
                        <button className="btn-dark btn-project overview__github-btn">
                            <FaGithub/>&nbsp;View Repo
                        </button>
                    </div>                
                </div>
                <div className="other-projects row p-0 w-100 gx-0">
                    <h3 className="other-projects__title p-0">Projects</h3>
                    <Cards />
                </div>
            </div>
            <div className="projects__white-space"></div>
        </div>
            
    )
}

export default StudentOverview;
