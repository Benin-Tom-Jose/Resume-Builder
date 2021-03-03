import React from 'react';
import { Link } from 'react-router-dom';

import { getAssetPath } from '../../../config/Utils';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row footer__container">
                <div className="col-md-auto footer__container__section">
                    <img className="section-logo" src={getAssetPath("logo.png", "img")} alt="Logo" />
                </div>
                <div className="col-md-3 footer__container__section">
                    <p className="section-header">Company</p>
                    <Link to="" className="section-link">About</Link>
                    <Link to="" className="section-link">Contact us</Link>
                    <Link to="" className="section-link">Press Kit</Link>
                </div>
                <div className="col-md-3 footer__container__section">
                    <p className="section-header">Legal</p>
                    <Link to="" className="section-link">Terms of Service</Link>
                    <Link to="" className="section-link">Data Privacy Policy</Link>
                </div>
                <div className="col-md-3 footer__container__section">
                    <p className="section-header">Spread the word</p>
                    <Link to="" className="section-link">Share on Twitter</Link>
                    <Link to="" className="section-link">Share on Facebook</Link>
                    <Link to="" className="section-link">Tell a friend via email</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;