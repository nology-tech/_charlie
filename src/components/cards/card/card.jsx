import "./card.scss";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Card = ({ project }) => {
  const { studentId } = useParams();
  const path = "/projects/"+studentId+"/"+project.id;

  const { reviewNeeded, reviewed } = project;
  let btnText;
        
  if(reviewNeeded) btnText = "Review Needed";
  else if(reviewed) btnText = "Reviewed";
  else btnText = "Not Started";
  
  return (
    <div className="card col-3" key={project.title}>
      <img src={project.imgSrc} alt={project.title} />
      
      <Link to={path} >
        <h5 className="mt-3">{project.title}</h5>
      </Link>
      
      <p>{project.languagesUsed.join("/")}</p>
      
      <button className="btn btn-quaternary mx-auto mt-2">{btnText}</button>
    </div>
  );
}

export default Card