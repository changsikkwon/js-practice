import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './Pages/Login/login';
import Main from './Pages/Main/main';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/Signin" component={SignIn} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
