import "./cards.scss"
import React from 'react'
import Card from "./card/card";
import projects from "../../data/projects"

const Cards = () => {
    const filteredProjects = projects.slice(1);
    const cards = filteredProjects.map((elem, i) => <Card key={i} project={elem} btnText="Not Started" />)
    return (
        <div className="cards">
            {cards}
        </div>
    )
}

export default Cards;