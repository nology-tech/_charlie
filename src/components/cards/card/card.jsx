import projects from "../../data/projects";

const Card = () => {
  const card = <img src={projects[0].imgSrc} alt="" />
  return (
    <div className="card">
        
        
        {card}

    </div>
  )
}

export default Card