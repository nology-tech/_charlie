import "./card.scss";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Card = ({ project }) => {
  const { studentId } = useParams();
  const path = "/projects/"+studentId+"/"+project.id;

  const { reviewNeeded, reviewed } = project;
  
  //not started by default
  let btnText = "Not Started";
  let buttonClass = "btn-quaternary";
        
  if(reviewNeeded) {
    btnText = <>&#10060; {" Review Needed"}</>;
    buttonClass = "btn-danger";
  }
  else if(reviewed) {
    btnText = <>&#10003; {" Reviewed"}</>;
    buttonClass = "btn-success";
  }
  
  return (
    <div className="card h-200" key={project.title}>
      <img src={project.imgSrc} alt={project.title} />
      
      <Link to={path} >
        <h5 className="mt-3">{project.title}</h5>
      </Link>
      
      <p>{project.languagesUsed.join("/")}</p>
      
      <button className={`btn ${buttonClass} mx-auto mt-2`}>{btnText}</button>
    </div>
  );
}

export default Card