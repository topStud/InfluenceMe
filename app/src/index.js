import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './views/registration'
import CompanyPage from './views/companyPage'
import NotFound from './views/notFoundPage'

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/register' component={Register}/>
            <Route path='/companies/:id' component={CompanyPage}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>,
  document.getElementById('root')
);
