import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {

    return (
        <header>
            <h2>
                <NavLink to="/">
                    Shy's React Portfolio!
                </NavLink>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <NavLink to="/about">
                            About me
                        </NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink to="/portfolio">
                            Portfolio
                        </NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink to="/resume">
                            Resume
                        </NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink to="/contact">
                            Contact Me
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header >
    );
}

export default Nav;