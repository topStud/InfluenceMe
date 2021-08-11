import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateAccount from './newAccount'


ReactDOM.render(
    <Router>
        <React.StrictMode>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route exact path='/newAccount' component={CreateAccount}/>
            </Switch>
        </React.StrictMode>
    </Router>,
  document.getElementById('root')
);
