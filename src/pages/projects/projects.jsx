import React from 'react';
import "./projects.scss";
import Cards from "../../c";

import Button from "../../components/button/button";

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects__title">
                <h3>Calculator</h3>
            </div>
            <div className="projects__button">
                <Button btnText="Go Back" btnType="tertiary" />
                <Button btnText="Initialize" btnType="primary" />
            </div>
        </div>
    )
}

export default Projects;