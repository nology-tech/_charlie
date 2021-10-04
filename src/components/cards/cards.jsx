import "./cards.scss";
import React from 'react';
import { useParams } from "react-router";
import Card from "./card/card";
import projects from "../../data/projects";

const Cards = () => {
    const { projectId} = useParams();
    
    const cards = projects.filter(({ id }) => id != projectId).map((elem, i) => {
        return <Card key={i} project={elem} btnText="Not Started" />;
    });

    return (
        <div className="cards">
            {cards}
        </div>
    )
}

export default Cards;