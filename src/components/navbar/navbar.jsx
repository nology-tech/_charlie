import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
    const navItems = [
        {link: "/", text: "Dashboard", icon: ""},
        {link: "/students", text: "Students", icon: ""},
        {link: "/projects", text: "Projects", icon: ""},
        {link: "/enrollment", text: "Enrollment", icon: ""},
        {link: "/settings", text: "Settings", icon: ""},
    ];
    
    const x = navItems.map(({ link, text, icon }) => {
        return (
            <>
                <Link to={link}>
                    {text}
                    <img src={icon} alt={text} />
                </Link>
            </>
        )
    });
    
    return (
        <div>
            {x}
        </div>
    )
}

export default Navbar;