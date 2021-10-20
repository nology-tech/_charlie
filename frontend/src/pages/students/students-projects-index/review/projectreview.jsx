import "./projectreview.scss";
import ProjectReviewForm from "./projectreviewform/projectreviewform";
import PageHeader from "../../../../components/page-header/page-header";
import { useParams } from "react-router"; 

const ProjectReview = () => {
  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
  };
  const { studentId, projectId } = useParams();
  return (
    <div className="main m-0 d-flex justify-content-between">
      <div className="projects__white-space"></div>
      <div className="main__content d-flex flex-column align-items-center p-0">
        <PageHeader
          buttonText="Go Back"
          title="Leave a Review"
          buttonPath={`student/${studentId}/project/${projectId}/review`}
          buttonStyle="btn-back top-nav__header-button me-2"
        />
        <ProjectReviewForm onSubmit={onSubmit} />
      </div>
      <div className="projects__white-space"></div>
    </div>
  );
};

export default ProjectReview;