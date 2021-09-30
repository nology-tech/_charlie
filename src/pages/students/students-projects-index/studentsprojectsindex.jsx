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
            {/* <div className="projects__header row d-flex align-items-center">        
                <h1 className="project__header-title col-3 offset-1">Calculator</h1>                
                <div className="projects__header-button col-5 offset-3">
                    <button className="col-3 btn btn-tertiary projects__header-button mx-2">Go Back</button>
                    <button className="col-4 btn btn-primary projects__header-button">Leave Review</button>
                </div>
            </div> */}

            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12 projects__header">
                        <h2>[student name] - Calculator</h2>
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

                <div class="row">
                    <div class="col-md-4">
                        <div class="row">
                            <div class="col-md-12">
                                <Card project={projects[0]} btnText="Intialize Project" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 d-flex projects__overview-buttons">
                                <button className="btn btn-dark">
                                    <FaGithub />&nbsp;View Repo
                                </button>
                                <button className="btn btn-secondary">
                                    <FaEye />&nbsp;Live preview
                                </button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 projects__additional-notes">
                                <h6>Additional Notes:</h6>
                                <div className="projects__additional-notes-input">
                                    <input type="text" class="btn form-control" placeholder="lorem ipsum..." />
                                    <input type="button" className="btn form-control" value="+" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-12">
                                <h6>Getting Started</h6>
                                <p>Please use the intialize button above to start a new project.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <h6>Challenge Brief</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui convallis feugiat vel, sit malesuada commodo nullam. Urna, mattis parturient ullamcorper imperdiet platea iaculis. Malesuada nulla fermentum elit, ac diam at id. In aliquet vestibulum in lacus, id. Semper amet, vitae risus, hendrerit adipiscing consectetur. Elementum aliquam sit quis bibendum in eu auctor tristique.
                                    Ac id sit velit cras. Rhoncus nam aenean nisl commodo. Dictum dignissim sit adipiscing odio volutpat in. Tempus ultricies tristique cursus varius dui libero. Orci nisl neque, at sem nibh id sed augue odio. </p>
                                <h6>Tips from us</h6>
                                <ul>
                                    <li>Pseudo-code your thoughts</li>
                                    <li>Break it down</li>
                                    <li>Do what you can do first</li>
                                </ul>
                                <p>Good Luck from the coaches!</p>
                            </div>
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