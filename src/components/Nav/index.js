import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <header>
            <h2>
                <a href="/">
                    Shy's React Portfolio!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <Link to="/about">
                            About me
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/portfolio">
                            Portfolio
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/resume">
                            Resume
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/contact">
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </nav>
        </header >
    );
}

export default Nav;