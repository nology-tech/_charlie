import React from 'react';
import "./projects.scss";
import projects from "../../data/projects"


import Cards from "../../components/cards/cards";
import Card from "../../components/cards/card/card";
import Button from "../../components/button/button";

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects__header">
            <div className="projects__header-title">
                <h3>Calculator</h3>
            </div>
            <div className="projects__header-button">
                <Button btnText="Go Back" btnType="tertiary" />
                <Button btnText="Initialize" btnType="primary" />
            </div>
            </div>
            <section className="projects__overview">
                <h6>Overview</h6>
                <Card project={projects[0]} btnText="Intialize Project"/>
                <div>
                    <h6></h6>
                </div>

             </section>   
            <div>
            <Cards />
            </div>
        </div>
    )
}

export default Projects;