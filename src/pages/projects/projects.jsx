import React from 'react';
import "./projects.scss";
import Cards from "../../components/cards/cards";

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
            <div>
            <Cards />
            </div>
        </div>
    )
}

export default Projects;