import './projectreview.scss';
import ProjectReviewTopNav from "./projectreviewtopnav/projectreviewtopnav";
import ProjectReviewForm from "./projectreviewform/projectreviewform";

const ProjectReview = () => {
  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
};
  return (
    // <div className ="main d-flex m-0 justify-content-between">
    //         <div className="main__white-space "></div>
    //             <div className="main__content d-flex flex-column align-items-center p-0 ">
    //             <ProjectReviewTopNav />
    //             <ProjectReviewForm onSubmit={onSubmit} />
    //             </div>
    //         <div className="main__white-space"></div>
    //     </div>
    <div>
      <ProjectReviewTopNav />
      <ProjectReviewForm onSubmit={onSubmit} />
    </div>
  )
}

export default ProjectReview;