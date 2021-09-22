import React from 'react'
import DownArrow from "../../../assets/images/down.png";
import LeftArrow from "../../../assets/images/left.png";
import RightArrow from "../../../assets/images/right.png";
import "./pagenavigator.scss"

const PageNavigator = () => {
    return (
        <div className="page-nav row d-flex align-items-center">
            <div className="page-nav__rows-selector col-3 offset-6 row d-flex align-items-center">
                <p className="col page-nav__rows-selector__label">Rows per page: </p>
                <div className="page-nav__rows-selector__button col d-flex align-items-center">
                    <p className="page-nav__rows-selector__button-value">9</p>
                    <img className="page-nav__rows-selector__button-icon" src={DownArrow} alt="down"/>
                </div>
            </div>
            <div className="page-nav__rows-of-total col-2">
                <p className="page-nav__rows-of-total__text">1-9 of 420</p>
            </div>
            <div className="page-nav__arrows col-1">
                <img className="page-nav__arrows__left" src={LeftArrow} alt="left arrow" />
                <img className="page-nav__arrows__right" src={RightArrow} alt="right arrow" />
            </div>
        </div>
    )
}

export default PageNavigator
