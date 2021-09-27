import projects from "../../data/projects";

const Card = () => {
  const card = <img src={projects[0].imgSrc} alt="" />
  return (
    <>
    {card}
    </>
  )
}

export default Card