import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import "./studentsprojectsindex.scss";
import { FaGithub, FaEye } from "react-icons/fa";

import projects from "../../../data/projects";
import students from "../../../data/students";
import Cards from "../../../components/cards/cards";
import Card from "../../../components/cards/card/card";
import PageHeader from "../../../components/page-header/page-header";

const SubmissionDetails = () => {
  const { studentId, projectId } = useParams();
  const [commentArr, setCommentArr] = useState([]);
  const selectedStudent = students[studentId];
  const selectedProject = projects[projectId];
  const [studentsData, setStudentsData] = useState({});

  const fetchStudentData = () => {
    fetch(`http://localhost:8080/students/${studentId}`)
    .then(response => response.json())
    .then(jsonData => setStudentsData(jsonData))
    .catch(err => console.log(err));  
}

    useEffect(fetchStudentData, [studentId]); 

  //update array of notes in state when new one is submitted
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
  const studentListPath = "/students";

  return (
    <div className="main m-0 d-flex justify-content-between">
      <div className="projects__white-space"></div>
      <div className="main__content d-flex flex-column align-items-center p-0">
        <PageHeader
          title={selectedStudent.studentName + "'s " + selectedProject.title}
          buttonPath={studentListPath}
          buttonText="Go Back"
          buttonStyle="btn-back top-nav__header-button me-2"
          button2Path={reviewPagePath}
          button2Text="Review"
          button2Style="btn-primary top-nav__header-button border-0"
        />
        <div className="projects w-100">
          <div className="row">
            <h5 className=" mb-4">Overview</h5>
          </div>
          <div className="row d-flex justify-content-center overview-section">
            <div className="col-4">
              <div className="row">
                <Card project={projects[projectId]} />
              </div>
              <div className="row">
                <div className="d-flex align-items-center overview-buttons mt-4">
                  <button className="btn-dark btn-project">
                      <a href = {`https://github.com/${studentsData.githubAccount}?tab=repositories`} target = "_blank" rel="noreferrer">
                    <FaGithub />
                    &nbsp;View Repo
                    </a> 
                  </button>
                  &nbsp;
                  <button className="btn-secondary btn-project">
                    <FaEye />
                    &nbsp;Live preview
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-12 additional-notes mt-4 px-4">
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

          <div className="row">
            <h5 className="mx-4 mt-5">Other Projects</h5>
          </div>
          <div className="row ">
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
