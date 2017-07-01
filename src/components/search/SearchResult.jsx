// Module dependencies
import React from 'react'
import { withRouter } from 'react-router-dom'
import { parse } from 'qs'

// components
import Breadcrumb from '../categories/Breadcrumb.jsx'
import SearchResultItem from './SearchResultItem.jsx'
import EmptyState from '../empty-state/EmptyState.jsx'
import EmptyStateItem from '../empty-state/EmptyStateItem.jsx'

// get messages
var msg_obj = require('../../messages')

/**
 * SearchResult
 */
class SearchResult extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            products: 0
        }

        this.query = parse(this.props.location.search.substr(1))
    }

    componentWillMount() {
        // return fetch
        fetch(`/api/items?q=${this.query.search}`)
        .then((response) => {
            return response.json()
        })
        .then((products) => {
            this.setState({
              products: products.items,
              categories: products.categories
            })
        })
    }

    render() {

        // search result
        let search_result;
        if (this.state.products.length > 0) {
            let searchResultItems = this.state.products.map(p => <SearchResultItem key={p.id} product={p} />)
            search_result =
            <div>
                <Breadcrumb categories={ this.state.categories } />
                <div className="search-result-container base-container">
                    <ol> { searchResultItems } </ol>
                </div>
            </div>
        }
        else if (this.state.products === 0) {
            search_result = <EmptyStateItem />
        }
        else {
            search_result = <EmptyState message={ msg_obj('product_not_found') } />;
        }

        return (
            <div>
                { search_result }
            </div>
        );
    }
}

export default withRouter(SearchResult)
