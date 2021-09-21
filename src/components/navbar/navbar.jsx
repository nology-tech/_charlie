// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
            <>

                <Link to={link}>
                    {icon}
                    {text}

                </Link>
            </> 
        )
    });
    
    return (
        <div>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <Link to="/">Logo</Link>
                    </div>
                    <ul class="nav navbar-nav">
                        {/* <li class="active"><a href="#">Home</a></li>
                        <li><a href="#">Page 1</a></li>
                        <li><a href="#">Page 2</a></li>
                        <li><a href="#">Page 3</a></li> */}
                        {x}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;