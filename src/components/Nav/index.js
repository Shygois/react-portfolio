import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <header>
            <h2>
                <Link to="react-portfolio/">
                    Shy's React Portfolio!
                </Link>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <Link to="react-portfolio/about">
                            About me
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to="react-portfolio/portfolio">
                            Portfolio
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to="react-portfolio/resume">
                            Resume
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to="react-portfolio/contact">
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </nav>
        </header >
    );
}

export default Nav;