import React from 'react';
import Drawer from '../Drawer/Drawer';

import './DrawerContainer.scss';

const DrawerContainer = (props) => {
    return (
        <div className="drawer-container">
            <Drawer />
            <main className="drawer-container__content">
                {props.children}
            </main>
        </div>
    )
};

export default DrawerContainer;