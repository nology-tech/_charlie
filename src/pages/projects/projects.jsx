import React from 'react';
import "./projects.scss";
import Card from "../../components/card/card";
import Button from "../../components/button/button";

const Projects = () => {
    return (
        <div className="projects">
            <Button btnText="Go Back" btnType="tertiary" />
            <Button btnText="Initialize" btnType="primary" />
        </div>
    )
}

export default Projects;