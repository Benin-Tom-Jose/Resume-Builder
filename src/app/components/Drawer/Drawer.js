import React from 'react';
import { Link } from 'react-router-dom';

import { getAssetPath } from '../../../config/Utils';
import './Drawer.scss';

const Drawer = () => {
    return (
        <nav className="drawer">
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        <img className="brand-logo" src={getAssetPath("logo.png", "img")} alt="Logo" />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/resume/content" className="nav-link">
                        <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fillRule="evenodd" d="M17.263 2.177a1.75 1.75 0 012.474 0l2.586 2.586a1.75 1.75 0 010 2.474L19.53 10.03l-.012.013L8.69 20.378a1.75 1.75 0 01-.699.409l-5.523 1.68a.75.75 0 01-.935-.935l1.673-5.5a1.75 1.75 0 01.466-.756L14.476 4.963l2.787-2.786zm-2.275 4.371l-10.28 9.813a.25.25 0 00-.067.108l-1.264 4.154 4.177-1.271a.25.25 0 00.1-.059l10.273-9.806-2.94-2.939zM19 8.44l2.263-2.262a.25.25 0 000-.354l-2.586-2.586a.25.25 0 00-.354 0L16.061 5.5 19 8.44z"></path></svg>
                        <span className="link-text">Edit</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/resume/view" className="nav-link">
                        <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15.5 12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"></path><path fillRule="evenodd" d="M12 3.5c-3.432 0-6.125 1.534-8.054 3.24C2.02 8.445.814 10.352.33 11.202a1.6 1.6 0 000 1.598c.484.85 1.69 2.758 3.616 4.46C5.876 18.966 8.568 20.5 12 20.5c3.432 0 6.125-1.534 8.054-3.24 1.926-1.704 3.132-3.611 3.616-4.461a1.6 1.6 0 000-1.598c-.484-.85-1.69-2.757-3.616-4.46C18.124 5.034 15.432 3.5 12 3.5zM1.633 11.945c.441-.774 1.551-2.528 3.307-4.08C6.69 6.314 9.045 5 12 5c2.955 0 5.309 1.315 7.06 2.864 1.756 1.553 2.866 3.307 3.307 4.08a.111.111 0 01.017.056.111.111 0 01-.017.056c-.441.774-1.551 2.527-3.307 4.08C17.31 17.685 14.955 19 12 19c-2.955 0-5.309-1.315-7.06-2.864-1.756-1.553-2.866-3.306-3.307-4.08A.11.11 0 011.616 12a.11.11 0 01.017-.055z"></path></svg>
                        <span className="link-text">View</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Drawer;