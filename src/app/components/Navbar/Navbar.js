import React from 'react';
import { Link } from 'react-router-dom';

import { getAssetPath } from '../../../config/Utils';
import './Navbar.scss';

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link to="/" className="navbar-brand">
                    <img className="navbar-brand__logo" src={getAssetPath("logo.png", "img")} alt="Logo" />
                    <span className="navbar-brand__name">Resume Builder</span>
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/resume/content"
                            className="btn btn-outline-primary"
                        >
                            Try It
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;