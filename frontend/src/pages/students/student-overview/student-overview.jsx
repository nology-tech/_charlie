import Cards from 'components/cards/cards';
import React, { useState, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa';
import { useParams} from 'react-router-dom';
import PageHeader from "../../../components/page-header/page-header"
import "./student-overview.scss";
import gitHubIcon from "../../../assets/images/githubicon.png";
import mapPin from "assets/images/map-pin.png";

const StudentOverview = () => {
    const { studentId } = useParams();
    const [studentsData, setStudentsData] = useState({});
    const [githubData, setGithubData] = useState({});

    const fetchStudentData = () => {
        fetch(`http://localhost:8080/students/${studentId}`)
        .then(response => response.json())
        .then(jsonData => setStudentsData(jsonData))
        .catch(err => console.log(err));  
    }

    const getGithubData = async () =>{
        await fetch(`https://api.github.com/users/${studentsData.githubAccount}`, {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }})
        .then(response => response.json())
        .then(data => setGithubData(data))
		.catch(error => console.log(error));
    } 

    useEffect(fetchStudentData, [studentId]); 
    useEffect(getGithubData, [studentsData.githubAccount]);

    return (
        <div className ="main m-0 d-flex justify-content-between">
            <div className="main__white-space"></div>
            <div className="main__content d-flex flex-column align-items-centerp-0">
                <PageHeader title = {studentsData.studentName} 
                buttonText = "Go Back" 
                buttonStyle = {"btn-back top-nav__header-button me-2"} 
                buttonPath={"/students"}
                button2Text = "Edit" 
                button2Style = {"btn-primary top-nav__header-button border-0"}
                button2Path = {"/student/create"}
                />
                <div className="overview row mt-4 p-0 justify-content-between gx-0 d-flex">
                    <h3 className="overview__title">Overview</h3>
                    <div className="overview__card card d-flex flex-column col-3 ">
                        <img src={studentsData.pictureLink} alt="Student Thumbnail" className="overview__card-image" />
                        <h1 className="overview__card-name">{studentsData.studentName}</h1>
                        <p className="overview__card-course">{studentsData.enrolledOn} Student</p>                
                    </div>
                    <div className="overview__github card d-flex flex-column m-0 col-8 justify-content-between">
                        <div className="overview__github-head d-flex justify-content-between">
                            <div className="overview__github-head-text text-start">
                                <h4>GitHub Account</h4>
                                <h5>Bio:</h5>
                                <p>{githubData.bio}</p>
                            </div>
                            <img className="overview__github-head-icon m-0" src={gitHubIcon} alt="github icon" />
                        </div>
                        <div className="overview__github-info d-flex flex-column justify-content-center">
                            <div className = "row text-center mb-1">
                                <p className = "col overview__github-info-labels">Repos</p> 
                                <p className = "col overview__github-info-labels"><img className="mappin" src={mapPin} alt="" />Location</p> 
                                <p className = "col overview__github-info-labels">Followers</p> 
                                <p className = "col overview__github-info-labels">Following</p> 
                            </div> 
                            <div className = "row text-center mt-1">
                                <p className = "col">{githubData.public_repos}</p> 
                                <p className = "col">{githubData.location}</p> 
                                <p className = "col">{githubData.followers} </p> 
                                <p className = "col">{githubData.following}</p> 
                            </div> 
                        </div>
                        <button className="btn-dark btn-project overview__github-btn">
                            <a href = {`https://www.github.com/${studentsData.githubAccount}`} target="_blank" rel="noreferrer">
                                <FaGithub/>&nbsp;View Github
                            </a> 
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
