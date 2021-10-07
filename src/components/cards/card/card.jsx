import "./card.scss";
import Button from "components/button/button";

const Card = ({ project, btnText }) => {
  const card = (
    <div className="card" key={project.title}>
      <img src={project.imgSrc} alt={project.title} />
      <h5>{project.title}</h5>
      <h6>{project.languagesUsed.join("/")}</h6>
      <Button btnText={btnText} btnType={`btn btn-quaternary violet`} />
    </div>
  );

  return <>{card}</>;
};

export default Card;
