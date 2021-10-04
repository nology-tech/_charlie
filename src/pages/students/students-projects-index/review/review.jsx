import ReviewTopNav from "./reviewtopnav/reviewtopnav";
import ReviewForm from "./reviewform/reviewform";

const Review = () => {
  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
};
  return (
    <div>
      <ReviewTopNav onSubmit={onSubmit} />
      <ReviewForm onSubmit={onSubmit} />
    </div>
  )
}

export default Review;