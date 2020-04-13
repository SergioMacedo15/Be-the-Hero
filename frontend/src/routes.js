import {BrowserRouter,Route,Switch } from 'react-router-dom';
import React from 'react';

import Logon from './pages/logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path = '/' exact component={Logon}></Route>
            <Route path = '/Register' component={Register}></Route>
            <Route path = '/Profile' component={Profile}></Route>
            <Route path = '/incidents/new' component={NewIncident}></Route>
        </Switch>
        </BrowserRouter>


    )


}