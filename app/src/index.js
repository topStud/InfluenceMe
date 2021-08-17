import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './registration'


ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/register' component={Register}/>
        </Switch>
    </Router>,
  document.getElementById('root')
);
