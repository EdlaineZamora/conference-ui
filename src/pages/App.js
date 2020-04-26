import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import NotFound from '../pages/NotFound/NotFound';
import Conferences from '../pages/Conferences/Conferences';

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={Conferences} />
                <Route path="/conferences" component={Conferences} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;