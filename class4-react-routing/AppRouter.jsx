import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import Home from './Home.jsx';
import About from './About.jsx';
import Repos from './Repos.jsx';

class AppRouter extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Home}>
                    <Route path="about" component={About} />
                    <Route path="repos" component={Repos} />
                </Route>
            </Router>
        );
    }
}

export default AppRouter;