import ProjectReviewTopNav from "./projectreviewtopnav/projectreviewtopnav";
import ProjectReviewForm from "./projectreviewform/projectreviewform";

const ProjectReview = () => {
  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
};
  return (
    <div>
      <ProjectReviewTopNav onSubmit={onSubmit} />
      <ProjectReviewForm onSubmit={onSubmit} />
    </div>
  )
}

export default ProjectReview;