import React from 'react';
import LeftArrow from "../../../../assets/images/left.png";
import RightArrow from "../../../../assets/images/right.png";
import "./page-navigator.scss";

const PageNavigator = (props) => {
    const {totalNumberStudents, switchToPreviousPage, switchToNextPage, changeNumberOfRows, firstIndex, secondIndex} = props; 
    
    return (
        <div className="page-nav row d-flex align-items-center p-0 w-100 ms-0">
            <div className="page-nav__rows-selector col-2 offset-8 d-flex align-items-center text-center p-0">
                <p className="page-nav__rows-selector__label me-1">Students per page: </p>
                {/* figure out how to update the option value to 8 on grid click */}
                <select name="rows" defaultValue="8" className="page-nav__rows-selector__button" onChange= {changeNumberOfRows}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
            </div>
            <div className="page-nav__rows-of-total col-1 p-0 text-end">
                <p className="page-nav__rows-of-total__text m-0 p-0">{`${firstIndex+1}-${secondIndex} of ${totalNumberStudents}`}</p>
            </div>
            <div className="page-nav__arrows col-1 text-end p-0">
                <img className="page-nav__arrows__left" src={LeftArrow} alt="left arrow" onClick={switchToPreviousPage}/>
                <img className="page-nav__arrows__right" src={RightArrow} alt="right arrow" onClick={switchToNextPage}/>
            </div>
            
        </div>
    )
}

export default PageNavigator
