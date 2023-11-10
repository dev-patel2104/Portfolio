import React from 'react';
import { NavLink } from 'react-router-dom';

function navbar() {
    return (
        <div className='flex-row bg-navbar items-center' style={{ height: '8vh' }}>
            <div className=' pl-16 flex justify-start items-center h-full gap-24'>
                <NavLink to="/" className="text-pampas text-lg font-bold" activeClassName="text-custombackground">
                    About
                </NavLink>
                <NavLink to="/education" className="text-pampas text-lg font-bold" activeClassName="text-custombackground">
                    Education and Certification
                </NavLink>
                <NavLink to="/work" className="text-pampas text-lg font-bold" activeClassName="text-custombackground">
                    Work
                </NavLink>
                <NavLink to="/projects" className="text-pampas text-lg font-bold" activeClassName="text-custombackground">
                    Projects
                </NavLink>
                <NavLink to="/contact" className="text-pampas text-lg font-bold" activeClassName="text-custombackground">
                    Get in touch
                </NavLink>
            </div>
        </div>
    );
}

export default navbar;