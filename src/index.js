import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import PageNotFound from './components/PageNotFound/PageNotFound';


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App}/>
                <Route path="/conferences" component={App}/>
                <Route component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);