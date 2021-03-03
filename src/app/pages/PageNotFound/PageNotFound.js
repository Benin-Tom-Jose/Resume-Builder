import React from 'react';
import { Link } from 'react-router-dom';

import './PageNotFound.scss';

const PageNotFound = () => {
    return (
        <section className="page_404">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-12 text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">404</h1>
                            </div>
                            <div className="content_box_404">
                                <h3 className="h2">Looks like you're lost</h3>
                                <p>the page you are looking for is not avaible!</p>
                                <Link to="/" className="btn btn-lg btn-outline-primary">Go to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageNotFound;