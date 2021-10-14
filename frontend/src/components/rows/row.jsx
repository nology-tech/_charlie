import React from 'react'
import "./row.scss"
import Right from "../../assets/images/right.png";
import { Link } from 'react-router-dom';

const row = (props) => {

    const {one, two, three, four, five, email, AdobeIcon, rightLink, resume} = props
    
    return (
            <>
                <p className="col container__property container__name">{one}</p>
                <p className="col container__property">{two}</p>
                <p className="col container__property">{three}</p>
                <p className="col container__property">{four}</p>
                {email && <p className="col container__property">{email}</p>}
                {AdobeIcon && <a className="col student__property" href ={resume} download> <img className="adobe" src={AdobeIcon} alt="AdobeIcon"/> </a>}
                {five && <p className="col container__property">{five}</p>}
                <div className="col-1 container__property container__right-arrow">
                <Link to={rightLink}>
                    <img className="container__right-arrow__icon" src={Right} alt={Right}/>
                </Link>    
                </div>
            </>
    )
}


export default row