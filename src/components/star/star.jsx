import './star.scss';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

const Star = () => {
  // const [currentValue, setCurrentValue] = useState(0);
  // const [hoverValue, setHoverValue] = useState(undefined);

  // const handleClick = value => {
  //   setCurrentValue(value);
  // }

  // const handleMouseOver = value => {
  //   setHoverValue(value);
  // }

  // const handleMouseLeave = () => {
  //   setHoverValue(undefined);
  // }

  const stars = [ <FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />];
  // const mappedStars = stars.map((elem , index) => (
  //   <FaStar key={index} onClick={handleClick(index + 1)} onMouseOver={handleMouseOver(index+1)} onMouseLeave={handleMouseLeave}
  //   color={(hoverValue || currentValue) > index ? "violet" : "white"} />
  // ))              
  
  return (
    <>
    {stars}
    </>
  )
}

export default Star;