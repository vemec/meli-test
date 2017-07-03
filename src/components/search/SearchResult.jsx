// Module dependencies
import React from 'react'
import { withRouter } from 'react-router-dom'

// components
import Breadcrumb from '../categories/Breadcrumb.jsx'
import SearchResultItem from './SearchResultItem.jsx'

// get messages
var msg_obj = require('../../messages')

/**
 * SearchResult
 */
class SearchResult extends React.Component {
    render() {

        // search result
        let search_result;
        let searchResultItems = this.props.products.map(product => <SearchResultItem key={ product.id } product={ product } />)
        search_result =
            <div>
                <Breadcrumb categories={ this.props.categories } />
                <div className="search-result-container base-container">
                    <ol>{ searchResultItems }</ol>
                </div>
            </div>

        return (
            <div>
                { search_result }
            </div>
        )
    }
}

export default withRouter(SearchResult)
