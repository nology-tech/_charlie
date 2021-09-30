import "./card.scss"
import Button from "../../button/button"

const Card = ({project, btnText}) => {
  const card = (
    <div className="col-md-3" key={project.title}>
      <img src={project.imgSrc} alt={project.title} />
      <h5>{project.title}</h5>
      <h6>{project.languagesUsed.join("/")}</h6>
      
      <button className="btn btn-quaternary violet">{btnText}</button>
    </div>
    )
  
  return (<>
  {card}
  </>
    
  )
}

export default Card