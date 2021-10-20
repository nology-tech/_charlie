import React, { useState, useEffect } from 'react';
import { useParams} from "react-router";


import "./studentsprojectsindex.scss";
import { FaGithub, FaEye } from "react-icons/fa";

import projects from "../../../data/projects";
import Cards from "../../../components/cards/cards";
import Card from "../../../components/cards/card/card";
import PageHeader from "../../../components/page-header/page-header";

const SubmissionDetails = () => {

  const { studentId, projectId } = useParams();
  const [commentArr, setCommentArr] = useState([]);
  const selectedProject = projects[projectId];
  const [studentsData, setStudentsData] = useState([]);
  const [githubRepoData, setGithubRepoData] = useState([]); 
  const [githubLinks, setGithubLinks] = useState([]); 
  
  const fetchStudentData = () => {
    fetch(`http://localhost:8080/students/${studentId}`)
    .then(response => response.json())
    .then(jsonData => setStudentsData(jsonData))
    .catch(err => console.log(err));  
}

const fetchGithubRepoData = () =>{
  if (studentsData.githubAccount) {
    fetch(`https://api.github.com/users/${studentsData.githubAccount}/repos`, {
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }})
    .then(response => response.json())
    .then(data => setGithubRepoData(data))
    .catch(error => console.log("Could not fetch github data for the student."));
  }
}

const grabGithubLinks = () => {
  let regexSearchTerm = selectedProject.title;
  switch(regexSearchTerm) {
    case "Morse Code Translator":
      regexSearchTerm = "Morse";
      break;
    case "Client Project":
      regexSearchTerm = "Client";
      break;
    case "Punk API":
      regexSearchTerm = "Punk";
      break;
    case "JavaScript Game":
      regexSearchTerm = "Game";
      break;
    case "Pre-coursework":
      regexSearchTerm = "Pre";   
      break;
    case "Ticket Tracker":
    regexSearchTerm = "Ticket";
    break;
    case "Pre-Coursework":
    regexSearchTerm = "coursework";
    break;
    default: 
      break; 
  }
  let projectTitleRegex = new RegExp(regexSearchTerm, 'i'); 
  try {
    let repositoryData = []; 
    if (selectedProject.title === "OOP Text Game") {
      repositoryData = githubRepoData.filter(repo => {return repo.language.match("Java")}); 
    } else {
      repositoryData = githubRepoData.filter(repo => {return repo.name.match(projectTitleRegex)}); 
    }
    const livePageLink = repositoryData[0].homepage;
    const repoPageLink = repositoryData[0].html_url;
    setGithubLinks([repoPageLink, livePageLink]);
  } catch {
      window.alert("This project doesn't seem to exist yet. Please try searching for it manually, on the student's Github page.");
  }
}
    useEffect(fetchStudentData, [studentId]); 
    useEffect(fetchGithubRepoData, [studentsData.githubAccount]);  

  // update array of notes in state when new one is submitted
  const submitAdditionalNotes = (e) => {
    e.preventDefault();

    const txtNote = e.target[0].value;

    if (txtNote) {
      setCommentArr([...commentArr, txtNote]);
      e.target[0].value = "";
    }
  };

  const reviews = selectedProject.reviews;
  let reviewJSX;
  if (reviews.length === 0) {
    reviewJSX = "No Review Submitted";
  } else {
    selectedProject.reviewNeeded = false;
    selectedProject.reviewed = true;
    reviewJSX = reviews.map((review) => (
      <p className="review__comment mb-3">{review}</p>
    ));
  }

  //const reviewPagePath = `/projects/${studentId}/${projectId}/review`;
  const reviewPagePath = `/student/${studentId}/project/${projectId}/review`;

  return (
    <div className="main m-0 d-flex justify-content-between gx-0">
      <div className="projects__white-space"></div>
      <div className="main__content d-flex flex-column align-items-center p-0">
        <PageHeader
          title={studentsData.studentName + "'s " + selectedProject.title}
          buttonPath={`/student/${studentId}/overview`}
          buttonText="Go Back"
          buttonStyle="btn-back top-nav__header-button me-2"
          button2Path={reviewPagePath}
          button2Text="Review"
          button2Style="btn-primary top-nav__header-button border-0"
        />
        <div className="projects w-100">
          <div className="row">
            <h4 className="mb-4 p-0 heading-label">Overview</h4>
          </div>
          <div className="row d-flex justify-content-center overview-section">
            <div className="col-4">
              <div className="row">
                <Card project={projects[projectId]} />
              </div>
              <div className="row">
                <div className="d-flex align-items-center overview-buttons mt-4">
                  <button className="btn-dark btn-project" onClick = {grabGithubLinks}>
                      <a href = {githubLinks[0]} target = "_blank" rel="noreferrer">
                    <FaGithub />
                    &nbsp;View Repo
                    </a> 
                  </button>
                  &nbsp;
                  <button className="btn-secondary btn-project">
                  <a href = {githubLinks[1]} target = "_blank" rel="noreferrer">
                    <FaEye />
                    &nbsp;Live preview
                  </a> 
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-12 additional-notes mt-4 px-4 pb-2">
                  <h6 className="mt-4">Additional Notes:</h6>
                  <div className="additional-notes-input row mt-3">
                    <form action="" onSubmit={submitAdditionalNotes}>
                      <div className="col-9 px-1 d-flex justify-content-between align-items-center input-group">
                        <input
                          type="text"
                          className="form-control p-10"
                          name="add-comment"
                        />
                        <input
                          type="submit"
                          className="col-3 btn-plus p-10"
                          value="+"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="row mt-4 additional-notes__output">
                    <p>
                      {commentArr.length === 0 ? (
                        <>{"No notes given..."}</>
                      ) : (
                        <ul>
                          {commentArr.map((note) => (
                            <li>{note}</li>
                          ))}
                        </ul>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-7 offset-1">
              <div className="row">
                <div className="col-12 review px-4">
                  <h6 className="mt-4">Review</h6>
                  <p className="mt-3">{reviewJSX}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 challenge-brief mt-4 px-4">
                  <h6 className="mt-4">Challenge Brief</h6>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
                    convallis feugiat vel, sit malesuada commodo nullam. Urna,
                    mattis parturient ullamcorper imperdiet platea iaculis.
                    Malesuada nulla fermentum elit, ac diam at id. In aliquet
                    vestibulum in lacus, id. Semper amet, vitae risus, hendrerit
                    adipiscing consectetur. Elementum aliquam sit quis bibendum
                    in eu auctor tristique. Ac id sit velit cras. Rhoncus nam
                    aenean nisl commodo. Dictum dignissim sit adipiscing odio
                    volutpat in. Tempus ultricies tristique cursus varius dui
                    libero. Orci nisl neque, at sem nibh id sed augue odio.{" "}
                  </p>

                  <h6 className="mt-4">Tips from us</h6>
                  <ul className="mt-4">
                    <li>Pseudo-code your thoughts</li>
                    <li>Break it down</li>
                    <li>Do what you can do first</li>
                  </ul>
                  <p className="mt-4">Good Luck from the coaches!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row ms-0">
            <h4 className="mt-5 p-0 heading-label">Other Projects</h4>
          </div>
          <div className="row">
            <div className="mt-2 mb-4 p-0 ">
              <Cards />
            </div>
          </div>
        </div>
        {/* page content */}
      </div>
      <div className="projects__white-space"></div>
    </div>
  );
};

export default SubmissionDetails;
