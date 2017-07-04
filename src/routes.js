// Module dependencies
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// components
import Layout from './components/Layout.jsx'
import ResultsContainer from './components/ResultsContainer.jsx'
import SearchResult from './components/search/SearchResult.jsx'
import ItemDetails from './components/item-detail/ItemDetails.jsx'
import NotFound from './components/not-found/NotFound.jsx'

// history
import history from './history';

export default (
    <Router history={ history } >
        <Layout>
            <Switch>
                <Route path="/items/:id" component={ (props) => <ItemDetails id={ props.match.params.id } /> } />
                <Route path="/" component={ (props) => <ResultsContainer /> } />
                <Route component= { NotFound } />
            </Switch>
        </Layout>
    </Router>
)
