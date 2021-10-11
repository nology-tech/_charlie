import "./card.scss";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Card = ({ project }) => {
  const { studentId, projectId } = useParams();
  //const path = "/projects/"+studentId+"/"+project.id;
  const path = `/student/${studentId}/project/${projectId}`;

  const { reviewNeeded, reviewed } = project;
  
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
    <div className="card d-flex flex-column justify-content-evenly h-200" key={project.title}>
      <Link to={path}>
        <img src={project.imgSrc} alt={project.title} />
      </Link>
      
      <Link to={path}>
        <h5 className="mt-3">{project.title}</h5>
      </Link>
      
      <p>{project.languagesUsed.join("/")}</p>
      
      <div className={`${buttonClass} mx-auto mt-2`}>{btnText}</div>
    </div>
  );
}

export default Card