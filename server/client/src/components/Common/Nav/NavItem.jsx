import { Link, useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import React from 'react';

const NavItem = ({ NavIcon, NavText, NavRoute, setIsOpen }) => {
    const location = useLocation(); // Get current location (path)
    
    // Compare the current location's pathname with NavRoute
    const className = location.pathname === NavRoute
        ? "rounded-xl !text-DeepNightBlack bg-Green font-bold tracking-widest"
        : '';

    return (
        <Link
            to={NavRoute} // Use `to` prop for navigation
            onClick={() => setIsOpen(false)} // Close the navigation menu
            className={`${className} transition flex items-center px-2 hover:bg-EveningBlack text-SilverGray hover:text-SilverGray rounded-xl py-1.5 font-semibold space-x-4 text-base`}
        >
            {NavIcon}
            <span>{NavText}</span>
        </Link>
    );
};

export default NavItem;
