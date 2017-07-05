// Module dependencies
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// components
import Layout from './components/Layout.jsx'
import SearchResultsContainer from './components/search/SearchResultsContainer.jsx'
import ItemDetailsContainer from './components/item-detail/ItemDetailsContainer.jsx'
import NotFound from './components/not-found/NotFound.jsx'

// history
import history from './history';

export default (
    <Router history={ history } >
        <Layout>
            <Switch>
                <Route path="/items/:id" component={ (props) => <ItemDetailsContainer /> } />
                <Route path="/" component={ (props) => <SearchResultsContainer /> } />
                <Route component= { NotFound } />
            </Switch>
        </Layout>
    </Router>
)
