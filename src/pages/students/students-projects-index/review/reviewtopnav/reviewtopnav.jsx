import { useHistory } from "react-router";

const ReviewTopNav = () => {

  const history = useHistory();  

  return (
      <div className="row topnav d-flex align-items-center">
          <h1 className="col-3 offset-1 topnav__title">Leave a Review</h1>
          <div className="top-nav__buttons col-5 offset-3">
              <button className="col-3 btn btn-secondary topnav__button mx-2" onClick={() => history.goBack()}> Go Back</button>
              <button className="col-3 btn btn-primary topnav__button">Save</button>
          </div>
      </div>
  )
}

export default ReviewTopNav;