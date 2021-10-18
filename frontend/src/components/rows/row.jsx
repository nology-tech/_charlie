import React from 'react'
import "./row.scss"
import Right from "../../assets/images/right.png";
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const row = (props) => {

    const {one, two, three, threeRating, four, fourRating, five, fiveRating, Adobe, rightLink, deleteLink} = props
    
    return (
            <>
                <p className="col container__property container__name">{one}</p>
                <p className="col container__property">{two}</p>

                <p className="col container__property">{three}</p>
                <p className="col container__property">{four}</p>
                {Adobe && <a className="col student__property" href ="sample.pdf" download> <img className="adobe" src={Adobe} alt="Adobe"/> </a>}
                {five && <p className="col container__property">{five}</p>}
                <div className="col-1 container__property container__right-arrow">
                    <Link to={rightLink}>
                        <img className="container__right-arrow__icon" src={Right} alt={Right}/>
                    </Link>
                    {
                        global.window.location.pathname == "/projects" ? <button onClick={() => {deleteLink()}} ><FaTimes /></button> : ""
                    }
                </div>
            </>
    )
}


export default row