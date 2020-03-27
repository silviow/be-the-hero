import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ProfileIncidents from './pages/ProfileIncidents';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/profile/incidents" component={ProfileIncidents} />
                <Route exact path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}
