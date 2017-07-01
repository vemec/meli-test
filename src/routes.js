// Module dependencies
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

// components
import Layout from './components/Layout.jsx'
import EmptyState from './components/EmptyState.jsx'
import SearchResult from './components/search/SearchResult.jsx'
import ItemDetails from './components/item-detail/ItemDetails.jsx'
import NotFound from './components/not-found/NotFound.jsx'

// history
const history = createBrowserHistory();

// get messages
var msg_obj = require('./messages')

export default (
    <Router history={ history }>
        <Layout>
            <Switch>
                <Route exact path="/" component={ (props) => <EmptyState message={ msg_obj('home') } /> } />
                <Route path="/items/:id" component={ ItemDetails } />
                <Route path="/items" component={ (props) => <SearchResult query={ props.location.query } /> } />
                <Route component= { NotFound } />
            </Switch>
        </Layout>
    </Router>
)
