import ProjectReviewTopNav from "./projectreviewtopnav/projectreviewtopnav";
import ProjectReviewForm from "./projectreviewform/projectreviewform";

import './projectreview.scss';

const ProjectReview = () => {
  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
  };
  return (
    <div className="main">
      <div className="projects__white-space"></div>
      <div className="main__content d-flex flex-column p-0 ">
        <ProjectReviewTopNav onSubmit={onSubmit} />
        <ProjectReviewForm onSubmit={onSubmit} />
      </div>
      <div className="projects__white-space"></div>
    </div>
  );
};

export default ProjectReview;