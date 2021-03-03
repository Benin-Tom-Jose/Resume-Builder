import React from 'react';
import { Link } from 'react-router-dom';

import PageContainer from '../../components/PageContainer/PageContainer';
import './Home.scss';

const Home = () => {
    return (
        <PageContainer className="home">
            <section className="row section-hero">
                <div className="col-lg-6 primary-content">
                    <h1 className="hero-title">Build a job-winning resume for free</h1>
                    <p className="hero-description">Set yourself apart with a modern resume. Expert tips, customizable templates & quick PDF download included.</p>
                    <Link to="/resume/content" className="btn btn-primary">Try It</Link>
                </div>
                <div className="col-lg-6 secondary-content">
                </div>
            </section>
        </PageContainer >
    );
};

export default Home;