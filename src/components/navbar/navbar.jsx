import "./navbar.scss";

import Logo from "../../assets/images/Navbar-Logo-Colour.svg";
import { Link } from "react-router-dom";
import { FaHome, FaFileAlt, FaUsers, FaIdBadge, FaCog } from 'react-icons/fa';

const Navbar = () => {
    const navItems = [
        {link: "/", text: "Dashboard", icon: <FaHome /> },
        {link: "/students", text: "Students", icon: <FaFileAlt />},
        {link: "/projects", text: "Projects", icon: <FaUsers />},
        {link: "/enrollment", text: "Enrollment", icon: <FaIdBadge />}
    ];
    
    const mappedNavItems = navItems.map(({ link, text, icon }) => (
            <Link to={link} className="navbar__link">
                <span className="navbar__link__icon">
                    {icon}
                </span>
                <span className="navbar__link__text">
                    {text}
                </span>
            </Link>
        ));
    
    return (
        <div className="navbar" >
            <img src={Logo} alt="logo" className="navbar__link" />
            <hr />
            {mappedNavItems} 
            <hr />
            <Link to="/settings"  className="navbar__settings navbar__link" >
                <span className="navbar__link__icon">
                    <FaCog />
                </span>
                <span className="navbar__link__text">
                    Settings
                </span>
            </Link>
        </div>  
        )
}

export default Navbar;