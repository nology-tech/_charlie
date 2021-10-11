import "./navbar.scss";

import Logo from "../../assets/images/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaFileAlt, FaUsers, FaAward, FaCog } from 'react-icons/fa';

const Navbar = () => {
    const navItems = [
        {link: "/", text: "Students", icon: <FaFileAlt />},
        {link: "/projects", text: "Projects", icon: <FaUsers />},
        {link: "/enrollment", text: "Enrollment", icon: <FaAward/>}
    ];
    
    // using Navlink in order to add an active class for the current page
    const mappedNavItems = navItems.map(({ link, text, icon }, index) => {
        return (
            <NavLink exact to={link} activeClassName="active" className="navbar__link" key={index}>
                <span className="navbar__link-icon">
                    {icon}
                </span>
                <span className="navbar__link-text">
                    {text}
                </span>
            </NavLink>

        )
    });
    
    return (
        <div className="navbar" >
            <Link to="/" className="navbar__link-logo" >
                <img src={Logo} alt="logo"  />
            </Link>
            <hr />

            {mappedNavItems}

            <hr />
            <NavLink exact to="/settings" activeClassName="active" className="navbar__settings navbar__link">
                <span className="navbar__link-icon">
                    <FaCog />
                </span>
                <span className="navbar__link-text">
                    Settings
                </span>
            </NavLink>
        </div>  
    );
}

export default Navbar;