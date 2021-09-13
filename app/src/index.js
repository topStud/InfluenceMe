import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './views/registration'
import CompanyPage from './views/companyPage'
import NotFound from './views/notFoundPage'
import InfluencerPage from './views/InfluencerPage'
import ViewProposals from "./views/ViewProposals";
import './styles/globals.css'

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/view' component={ViewProposals}/>
            <Route exact path='/register' component={Register}/>
            <Route path='/companies/:id' component={CompanyPage}/>
            <Route path='/influencers/:id' component={InfluencerPage}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>,
  document.getElementById('root')
);
