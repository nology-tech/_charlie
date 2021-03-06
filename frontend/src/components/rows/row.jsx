import React from 'react'
import "./row.scss"
import Right from "../../assets/images/right.png";
import { Link } from 'react-router-dom';

const row = (props) => {

    const {one, two, three, four, five, email, AdobeIcon, rightLink, resume} = props
    
    return (
            <>

                <p className="col container__property container__name">
                    <Link className="default-link" to={rightLink} onClick={() => global.window.location.href = rightLink}>
                        {one}
                    </Link>
                </p>
                <p className="col container__property">
                    <Link className="default-link" to={rightLink} onClick={() => global.window.location.href = rightLink}>
                        {two}
                    </Link>
                </p>
                <p className="col container__property">
                    <Link className="default-link" to={rightLink} onClick={() => global.window.location.href = rightLink}>
                        {three}
                    </Link>
                </p>
                <p className="col container__property">
                    <Link className="default-link" to={rightLink} onClick={() => global.window.location.href = rightLink}>
                        {four}
                    </Link>
                </p>
                {email && <p className="col container__property">{email}</p>}
                {AdobeIcon && <a className="col student__property" href ={resume} download> <img className="adobe" src={AdobeIcon} alt="Adobe"/> </a>}


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