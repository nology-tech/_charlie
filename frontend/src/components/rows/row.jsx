import React from 'react'
import "./row.scss"
import Right from "../../assets/images/right.png";
import { Link } from 'react-router-dom';

const row = (props) => {

    const {one, two, three, threeRating, four, fourRating, five, fiveRating, Adobe, rightLink} = props
    
    return (
            <>
                <p className="col container__property container__name">
                    <Link className="default-link" to={rightLink}>
                        {one}
                    </Link>
                </p>
                <p className="col container__property">
                    <Link className="default-link" to={rightLink}>
                        {two}
                    </Link>
                </p>
                <p className="col container__property">
                    <Link className="default-link" to={rightLink}>
                        {three}
                    </Link>
                </p>
                <p className="col container__property">
                    <Link className="default-link" to={rightLink}>
                        {four}
                    </Link>
                </p>
                {Adobe && <a className="col student__property" href ="sample.pdf" download> <img className="adobe" src={Adobe} alt="Adobe"/> </a>}
                {five && <p className="col container__property">{five}</p>}
                <div className="col-1 container__property container__right-arrow d-flex">
                    <Link className="default-link" to={rightLink} onClick={() => global.window.location.href = rightLink}>
                        <img className="container__right-arrow__icon" src={Right} alt={Right}/>
                    </Link>
                </div>
            </>
    )
}

export default row;