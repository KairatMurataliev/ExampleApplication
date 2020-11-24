import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import Statistics from './containers/Statistics/Statistics';
import StatisticsBootstrap from "./containers/StatisticsBootstrap/StatisticsBootstrap";

const Routes = props => {
    return (
        <Switch>
            <Route path='/' exact component={Statistics}/>
            <Route path='/bootstrap-example' exact component={StatisticsBootstrap}/>
        </Switch>
    )
};

export default withRouter(Routes);
