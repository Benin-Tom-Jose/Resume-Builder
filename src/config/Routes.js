import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from '../app/pages/Home/Home';
import PageNotFound from '../app/pages/PageNotFound/PageNotFound';
import ResumeContent from '../app/pages/ResumeContent/ResumeContent';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/resume/content" component={ResumeContent} />
                <Route exact path="/page-not-found" component={PageNotFound} />
                <Redirect to="/page-not-found" />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;