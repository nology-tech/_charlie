import "./card.scss";

const Card = ({project, btnText}) => {
  const card = (
    <div className="card col-md-3" key={project.title}>
      <img src={project.imgSrc} alt={project.title} />
      <h5 className="mt-3">{project.title}</h5>
      <p>{project.languagesUsed.join("/")}</p>
      
      <button className="btn btn-quaternary mx-auto mt-2">{btnText}</button>
    </div>
    )
  
  return (<>
  {card}
  </>
    
  )
}

export default Card