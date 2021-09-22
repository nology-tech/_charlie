import React from 'react'
import Down from "../../../assets/images/down.png";
import Left from "../../../assets/images/left.png";
import Right from "../../../assets/images/right.png";
import "./pagenavigator.scss"

const PageNavigator = () => {
    return (
        <div className="page-nav row">
            <div className="page-nav__rows-selector col offset-6">
                <p>Rows per page: </p>
                <div>
                    <p> 9</p>
                    <img src={Down} alt={Down} />
                </div>
            </div>
            <div className="page-nav__rows-of-total col">
                <p>1-9 of 420</p>
                <div className="page-nav__rows-of-total__arrow">
                    <img className="page-nav__rows-of-total__left-arrow" src={Left} alt={Left} />
                    <img className="page-nav__rows-of-total__right-arrow"  src={Right} alt={Right} />
                </div>
            </div>
        </div>
    )
}

export default PageNavigator
