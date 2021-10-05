import React, { useState } from 'react';
import { useParams } from "react-router";

import "./studentsprojectsindex.scss";
import projects from "../../../data/projects";
import students from "../../../data/students";
import { FaGithub, FaEye } from 'react-icons/fa';
import "../student-add/addstudenttopnav/addstudenttopnav.scss";

import Cards from "../../../components/cards/cards";
import Card from "../../../components/cards/card/card";

const SubmissionDetails = () => {
    const { studentId, projectId} = useParams();
    const [ commentArr, setCommentArr ] = useState([]);

    const selectedStudent = students[studentId];
    
    const selectedProject = projects[projectId]; 

    const readText = (e) =>{
        e.preventDefault();
        setCommentArr([...commentArr, e.target[0].value]);
    }

    return (
        <div className="projects mx-auto">
            <div className="row projects__header d-flex mb-4 p-5 align-items-center justify-content-between">
                <h2 className="col-7">
                    <div className="row">
                        {selectedStudent.studentName}
                    </div>
                    <div className="row">
                        {selectedProject.title}
                    </div>
                </h2>
                <p className="col-5">
                    <button className="col-3 btn btn-tertiary mx-2">
                        Go Back
                    </button>
                    <button className="col-4 btn btn-primary mx-2 projects__header__review">
                        Leave Review
                    </button>
                </p>
            </div>

            <div className="row mx-5">
                <div className="row">
                    <h6 className="mb-4">Overview</h6>
                </div>
                <div className="col-4">
                        <div className="col-12 mx-auto">
                            <Card project={projects[projectId]} />
                        </div>
                    <div className="row">
                        <div className="col-12 d-flex align-items-center projects__overview-buttons mx-auto mt-4">
                            <button className="btn btn-dark mx-auto">
                                <FaGithub />&nbsp;View Repo
                            </button>
                            <button className="btn btn-secondary mx-auto">
                                <FaEye />&nbsp;Live preview
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 projects__additional-notes mt-4 mx-auto px-4">
                            <h6 className="mt-4">Additional Notes:</h6>
                            <div className="projects__additional-notes-input row mt-3">
                                    <form action="" onSubmit={readText}>
                                        <div className="col-9 px-1 d-flex justify-content-between align-items-center input-group">
                                            <input type="text" placeholder="Write a note..." className="form-control p-10" name="add-comment"/>
                                            <input type="submit" className="col-3 btn-secondary btn-plus p-10" value="+" />
                                        </div>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-12 projects__review px-4">
                            <h6 className="mt-4">Review</h6>
                            <p className="mt-3">No Review Submitted</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 projects__challenge-brief mt-4 px-4">
                            <h6 className="mt-4">Challenge Brief</h6>
                            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Dui convallis feugiat vel, sit malesuada commodo nullam. Urna, 
                            mattis parturient ullamcorper imperdiet platea iaculis. Malesuada 
                            nulla fermentum elit, ac diam at id. In aliquet vestibulum in lacus, 
                            id. Semper amet, vitae risus, hendrerit adipiscing consectetur. 
                            Elementum aliquam sit quis bibendum in eu auctor tristique.
                            Ac id sit velit cras. Rhoncus nam aenean nisl commodo. Dictum 
                            dignissim sit adipiscing odio volutpat in. Tempus ultricies 
                            tristique cursus varius dui libero. Orci nisl neque, at sem nibh 
                            id sed augue odio. </p>
                            
                            <h6 className="mt-4">Tips from us</h6>
                            <ul className="mt-4">
                                <li>Pseudo-code your thoughts</li>
                                <li>Break it down</li>
                                <li>Do what you can do first</li>
                            </ul>
                            <h6 className="mt-4">Additional Notes</h6>
                            <ul className="mt-4">
                                {commentArr.map(note => <li>{note}</li>)}
                            </ul>
                            
                            <p className="mt-4">Good Luck from the coaches!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mx-5">
                <div className="col-12 mt-4 mb-4">
                    <Cards />
                </div>
            </div>
        </div>
    )
}

export default SubmissionDetails;