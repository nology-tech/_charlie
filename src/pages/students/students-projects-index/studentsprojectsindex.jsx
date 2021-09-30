import React from 'react';
import "./studentsprojectsindex.scss";
import projects from "../../../data/projects";
import { FaGithub } from 'react-icons/fa';
import "../student-add/addstudenttopnav/addstudenttopnav.scss";


import Cards from "../../../components/cards/cards";
import Card from "../../../components/cards/card/card";

const SubmissionDetails = () => {
    return (
        <div className="projects">
            <div className="projects__header row d-flex align-items-center">        
                <h1 className="project__header-title col-3 offset-1">Calculator</h1>                
                <div className="projects__header-button col-5 offset-3">
                    <button className="col-3 btn btn-tertiary projects__header-button mx-2">Go Back</button>
                    <button className="col-4 btn btn-primary projects__header-button">Leave Review</button>
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

                    <div className="overview-btns">
                        <button className="btn btn-git"><FaGithub /><span>View Repo</span></button>
                        <button className="btn btn-secondary">Live preview</button>
                    </div>

                    <div className="description-box2">
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
                    <div className="additional-notes">
                        <h6>Additional Notes:</h6>
                        <input placeholder="lorem ipsum..." type="text" />
                    </div>
                </div>

            </div>
            <div className="row">
                <Cards />
            </div>
        </div>
    )
}

export default SubmissionDetails;