import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from '../app/pages/Home/Home';
import EditResume from '../app/pages/EditResume/EditResume';
import ViewResume from '../app/pages/ViewResume/ViewResume';
import PageNotFound from '../app/pages/PageNotFound/PageNotFound';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/resume/content" component={EditResume} />
                <Route exact path="/resume/view" component={ViewResume} />
                <Route path="/page-not-found" component={PageNotFound} />
                <Redirect to="/page-not-found" />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;