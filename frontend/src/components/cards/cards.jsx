import "./cards.scss";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import Card from "./card/card";
// import projects from "../../data/projects";

const Cards = () => {
    const { projectId} = useParams();

    const [projectArr, setProject] = useState([]);

    const getProjectDetails = () => {
        fetch("http://localhost:8080/projects/")
            .then(response => response.json())
            .then(jsonResponse => setProject(jsonResponse))
            .catch(error => console.log(error));
    }

    useEffect(() => {getProjectDetails()}, []);
    
    const filtered = projectArr.filter(({ id }) => id !== parseInt(projectId));

    const cards = filtered.map((elem, i) => {
        return <Card key={i} project={elem} />;
    });

    return <div className="cards">{cards}</div>;
}

export default Cards;