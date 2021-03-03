import React from 'react';
import Proptypes from 'prop-types';

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './PageContainer.scss';

const PageContainer = (props) => {
    return (
        <>
            <Navbar />
            <main className="content">
                <div className={`content__container ${props.className}`}>
                    {props.children}
                </div>
            </main>
            <Footer />
        </>
    );
};

PageContainer.defaultProps = {
    className: '',
};

PageContainer.propTypes = {
    className: Proptypes.string,
};

export default PageContainer;