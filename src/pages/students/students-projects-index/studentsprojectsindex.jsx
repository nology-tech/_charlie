import React from 'react';
import "./studentsprojectsindex.scss";
import projects from "../../../data/projects";
import { FaGithub, FaEye } from 'react-icons/fa';
import "../student-add/addstudenttopnav/addstudenttopnav.scss";


import Cards from "../../../components/cards/cards";
import Card from "../../../components/cards/card/card";

const SubmissionDetails = () => {
    return (
        <div className="projects">
            <div className="row">
                    <div className="col-md-12 projects__header mx-auto d-flex">
                        <h2>[Student name] - Calculator</h2>
                        <p>
                            <button className="col-3 btn btn-tertiary mx-2">
                                Go Back
                            </button>
                            <button className="col-4 btn btn-primary mx-2 projects__header__review">
                                Leave Review
                            </button>
                        </p>
                    </div>
                </div>
            <div className="projects__overview row">
                <h6>Overview</h6>
                <div className="projects__overview-flex">
                    <Card project={projects[0]} btnText="Intialize Project" />
                    <div className="description-box1">
                        <h6>Getting Started</h6>
                        <p>Please use the intialize button above to start a new project.</p>
                    </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-12">
                                <Card project={projects[0]} btnText="Intialize Project" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 d-flex projects__overview-buttons mx-auto mt-4">
                                <button className="btn btn-dark mx-auto">
                                    <FaGithub />&nbsp;View Repo
                                </button>
                                <button className="btn btn-secondary mx-auto">
                                    <FaEye />&nbsp;Live preview
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 projects__additional-notes mt-4 mx-auto px-4">
                                <h6 className="mt-4">Additional Notes:</h6>
                                <div className="projects__additional-notes-input row d-flex mt-3">
                                    <div className="col-md-9 px-1">
                                        <input type="text" placeholder="lorem ipsum..." 
                                        className="form-control" />
                                    </div>
                                    <div className="col-md-3">
                                        <input type="button" className="btn-secondary" value="+" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12 projects__review px-4">
                                <h6 className="mt-4">Review</h6>
                                <p className="mt-3">No Review Submitted</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 projects__challenge-brief mt-4 px-4">
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
                                <p className="mt-4">Good Luck from the coaches!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-4 mb-4">
                        <Cards />
                    </div>
                </div>
            </div>
            <div className="row">
                <Cards />
            </div>

        </div>
        </div>
    )
}

export default SubmissionDetails;