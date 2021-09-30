import React from 'react';
import "./studentsprojectsindex.scss";
import projects from "../../../data/projects"


import Cards from "../../../components/cards/cards";
import Card from "../../../components/cards/card/card";

const StudentsProjectsIndex = () => {
    return (
        <div className="projects">
            <div className="projects__header">
            <div className="projects__header-title">
                <h3>Calculator</h3>
            </div>
            <div className="projects__header-button">
                <button className="btn btn-tertiary">Go Back</button>
                <button className="btn btn-primary">Initialize</button>
            </div>
            </div>
            <section className="projects__overview">
                <h6>Overview</h6>
                <div className="projects__overview-flex">
                <Card project={projects[0]} btnText="Intialize Project"/>
                <div className="getting-started">
                    <h6>Getting Started</h6>
                    <p>Please use the intialize button above to start a new project.</p>
                </div>
                <div className="additional-notes">
                    <h6>Additional Notes:</h6>
                    <input placeholder="lorem ipsum..." type="text" />
                </div>
                <div className="challenge-brief">
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

            </section>   
            <div>
                <Cards />
            </div>
        </div>
    )
}

export default StudentsProjectsIndex;