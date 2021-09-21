import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.scss";
import { FaHome, FaFileAlt, FaUsers, FaIdBadge, FaCog } from 'react-icons/fa';

const Navbar = () => {
    
    const navItems = [
        {link: "/", text: "Dashboard", icon: <FaHome /> },
        {link: "/students", text: "Students", icon: <FaFileAlt />},
        {link: "/projects", text: "Projects", icon: <FaUsers />},
        {link: "/enrollment", text: "Enrollment", icon: <FaIdBadge />},
        {link: "/settings", text: "Settings", icon: <FaCog />},
    ];
    
     const x = navItems.map(({ link, text, icon }) => {
    return (
           
               <Link to={link}>
                  {icon}
                 {text}
                    
                </Link>
           
        )
     });
    
    return (
        <div>
            {x}
        </div>
    )
}

export default Navbar;