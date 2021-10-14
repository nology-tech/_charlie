import "./card.scss";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Card = ({ project }) => {
  const { studentId } = useParams();
  const path = `/student/${studentId}/project/${project.id}`;
  
  const { reviewNeeded, reviewed, title } = project;
  
  //not started by default
  let btnText = "Not Started";
  let buttonClass = "status__not-started";
        
  if(reviewNeeded) {
    btnText = <>&#10060; {" Review Needed"}</>;
    buttonClass = "status__review-needed";
  }
  else if(reviewed) {
    btnText = <>&#10003; {" Reviewed"}</>;
    buttonClass = "status__reviewed";
  }
  
  return (
    <div data-testid={`project-${project.id}`} className="card d-flex flex-column justify-content-evenly h-200" key={title}>
      <Link to={path}>
        <img src={project.imgSrc} alt={project.title} />
      </Link>
      
      <Link to={path}>
        <h6 className="mt-3">{title}</h6>
      </Link>
      
      <p>{project.languagesUsed.join("/")}</p>
      
      <p className={`${buttonClass} mx-auto mt-2`}>{btnText}</p>
    </div>
  );
}

export default Card