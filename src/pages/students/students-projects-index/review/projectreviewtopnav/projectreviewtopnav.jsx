import { useHistory } from "react-router";
// import { useForm } from "react-hook-form";

const ProjectReviewTopNav = ( {onSubmit} ) => {
//  const { handleSubmit } = useForm();

  const history = useHistory();  

  return (
    <nav className="top-nav d-flex flex-column justify-content-between">
        <div className="top-nav__header d-flex align-items-center justify-content-around">
            <h1 className="top-nav__header-title">Leave a Review</h1>
            <button className="btn-back top-nav__header-button" onClick={() => history.goBack()}>Go Back</button>
        </div>
    </nav>


    //   <div className="row topnav d-flex align-items-center">
    //       <h1 className="col-3 offset-1 topnav__title">Leave a Review</h1>
    //       <div className="top-nav__buttons col-5 offset-3">
    //           <button className="col-3 btn btn-secondary topnav__button mx-2" onClick={() => history.goBack()}> Go Back</button>
    //           <button className="col-3 btn btn-primary topnav__button" >Save</button>
    //       </div>
    //   </div>
  )
}

export default ProjectReviewTopNav;